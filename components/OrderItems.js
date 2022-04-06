import React from "react";
import { View, Text, StyleSheet } from "react-native"
import { Colors } from "../constants/Colors";


const OrderItems = ({ item }) => {
    
    return (
        <View style={styles.orderItem}>
            <Text style={styles.title}>Orden n° {item.id}</Text>
            <Text style={styles.content}>Fecha: {item.date}</Text>
            <Text style={styles.content}>Entrega: {item.lat} {item.lng}</Text>
            <Text style={styles.content}>Total: {item.total}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    orderItem:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
        padding: 8,
        borderRadius: 5,
        backgroundColor: Colors.primary
    },
    title:{
        margin: 5,
        fontSize: 20,
        color: Colors.accent,
    },
    content: {
        color: Colors.textColor
    }
})

export default OrderItems