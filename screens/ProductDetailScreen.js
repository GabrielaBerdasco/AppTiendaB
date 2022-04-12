import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../store/actions/items.action"

import { Colors } from "../constants/Colors"

function ProductDetailScreen({ navigation }) {
    const dispatch = useDispatch()
    const product = useSelector(state => state.products.selected)
    const cartStatus = useSelector(state => state.cart.status);

    const [selectedProduct, setSelectedProduct] = useState([])
    
    useEffect(() => {
        setSelectedProduct(product)
    }, [product])

    const handleAddItem = () => {
        if(cartStatus !== 'loading') {
            dispatch(addItem(product))
            navigation.navigate('Categories')
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: selectedProduct.image }}
                    style={styles.image}
                />
            </View>
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
        justifyContent: 'flex-start'
    },
    imageContainer: {
        width: '90%',
        height: 300,
        marginVertical: 40,
        borderRadius: 10,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    info: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        fontFamily: "SourceSerifRegular",
        color: Colors.accent,
        marginBottom: 10,
    }
})

export default ProductDetailScreen