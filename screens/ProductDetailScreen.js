import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../store/actions/items.action"

import { Colors } from "../constants/Colors"

function ProductDetailScreen({ navigation }) {
    const product = useSelector(state => state.products.selected)
    const dispatch = useDispatch()

    const [selectedProduct, setSelectedProduct] = useState([])
    
    useEffect(() => {
        setSelectedProduct(product)
    }, [product])

    const handleAddItem = () => {
        dispatch(addItem(product))
        navigation.navigate('Categories')
    }

    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <Text style={styles.title}>{selectedProduct.name}</Text>
                <Text>{selectedProduct.description}</Text>
                <Text>$ {selectedProduct.price}</Text>
                <Text>{selectedProduct.weight}</Text>
            </View>
            <Button 
                onPress={handleAddItem}
                title="Agregar producto"
                color={Colors.accent}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
    },
    info: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        color: Colors.accent,
        marginBottom: 10,
    }
})

export default ProductDetailScreen