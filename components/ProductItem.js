import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { Colors } from "../constants/Colors"

const ProductItem = ({ item, onSelected }) => {
    return (
        <TouchableOpacity onPress={() => onSelected(item)}>
            <View style={styles.productItem}>
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                </View>
                <View>
                    <Text style={{ ...styles.details, fontWeight: "bold"}}>{item.price}</Text>
                    <Text style={styles.details}>{item.description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    productItem: {
        padding: 20,
        margin: 10,
        borderRadius: 5,
        backgroundColor: Colors.textColor
    },
    title: {
        fontSize: 22,
        fontFamily: "SourceSerifBold",
        color: Colors.accent
    },
    details: {
        fontSize: 18,
    }
})

export default ProductItem