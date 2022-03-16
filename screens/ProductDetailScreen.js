import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useSelector } from "react-redux";
/* import { useRoute } from "@react-navigation/native"
import { PRODUCTS } from "../data/products" */
import { Colors } from "../constants/Colors"

function ProductDetailScreen({ navigation }) {
    /* const route = useRoute() */
    /* const products = useSelector(state => state.products.list) */
    const product = useSelector(state => state.products.selected)

    const [selectedProduct, setSelectedProduct] = useState([])
    
    useEffect(() => {
        setSelectedProduct(product)
    }, [product])
    const handlePress = () => {
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
                onPress={handlePress}
                title="Ir a categorias"
                color={Colors.primary}
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