import React, { useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import OrderItems from "../components/OrderItems"
import { Colors } from "../constants/Colors";

import { getOrders } from "../store/actions/order.action";

const OrdersScreen = () => {
    const orders = useSelector(state => state.orders.list)
    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(getOrders())
    }, [])

    const renderItem =({ item }) => (
        <OrderItems item={item} />
    )
        console.log(orders);
    return (
        <View style={styles.container}>
            {orders ? (
            <FlatList 
                data={orders} 
                keyExtractor={item => item.id}
                renderItem={renderItem}    
            />
            ) : (
                <Text>Cargando...</Text>
            )
        }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 40,
        borderRadius: 5,
        borderBottomColor: Colors.primary
    }
})

export default OrdersScreen