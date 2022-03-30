import React, { useState } from "react"
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native"
import { useDispatch } from "react-redux"
import CartItem from "../components/CartItem"
import { CART } from "../data/cart"
import { confirmCart } from "../store/actions/cart.action"
import { Colors } from "../constants/Colors"
import LocationSelector from "../components/LocationSelector"

function CartScreen({ navigation }) {
    const [location, setLocation] = useState()
    const dispatch = useDispatch()

    const handlerDeleteItem = (id) => {}
    const handlerConfirmCart = () => {
        dispatch(confirmCart(CART, 2300, location))
        navigation.navigate('ConfirmationScreen')
    }

    const renderItem = (data) => (
        <CartItem item={data.item} onDelete={handlerDeleteItem} />
    )

    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList
                    data={CART}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                />
            </View>
            <LocationSelector onLocationSelected={setLocation}/>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.confirm} onPress={handlerConfirmCart}>
                    <Text style={styles.text}>Confirmar</Text>
                    <View style={styles.total}>
                        <Text style={styles.text}>Total</Text>
                        <Text style={styles.text}>$552</Text>
                    </View>
                </TouchableOpacity>
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