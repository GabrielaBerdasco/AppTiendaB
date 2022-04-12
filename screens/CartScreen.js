import React, { useEffect, useState } from "react"
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, StyleSheet } from "react-native"
import { useSelector, useDispatch } from "react-redux"

import CartItem from "../components/CartItem"
import LocationSelector from "../components/LocationSelector"

import { confirmCart } from "../store/actions/cart.action"
import { removeItem } from "../store/actions/items.action"

import { Colors } from "../constants/Colors"

function CartScreen({ navigation }) {
    const [location, setLocation] = useState()
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()
    const products = useSelector(state => state.items)
    const status = useSelector(state => state.cart.status)
    
    useEffect(() => {
        setCart(products.items)
        setTotal(cart.reduce((acc, item) => acc + item.price, 0))
        
        if(status === 'loading') {
            setLoading(true)
        } else {
            setLoading(false)
        }

    }, [products, cart, status])
    
    const handlerDeleteItem = (id) => {
        dispatch(removeItem(id))
        navigation.navigate('ConfirmationScreen')
    }
    
    const handlerConfirmCart = () => {
        dispatch(confirmCart(cart, total, location))
    }

    const renderItem = ({ item }) => (
        <CartItem item={item} onDelete={handlerDeleteItem} />
    )

    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList
                    data={cart}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                />
            </View>
            <LocationSelector onLocationSelected={setLocation}/>
            <View style={styles.footer}>
                {loading 
                    ? <ActivityIndicator size="large" color={Colors.primary} /> 
                    : (
                        cart.length > 0 && location && (
                            <TouchableOpacity style={styles.confirm} onPress={handlerConfirmCart}>
                                <Text style={styles.text}>Confirmar</Text>
                                <View style={styles.total}>
                                    <Text style={styles.text}>Total</Text>
                                    <Text style={styles.text}>$ {total}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    )
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor:"#fff",
        paddingBottom: 120,
    },
    list: {
        flex:1
    },
    footer: {
        padding: 12,
        borderTopColor: Colors.primary,
        borderTopWidth: 1,
    },
    confirm: {
        backgroundColor: Colors.primary,
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    total: {
        flexDirection: 'row',
    },
    text: {
        fontSize: 18,
        padding: 8,
        color: Colors.textColor
    },
})

export default CartScreen