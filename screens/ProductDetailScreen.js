import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useRoute } from "@react-navigation/native"
import { PRODUCTS } from "../data/products"
import { Colors } from "../constants/Colors"

function ProductDetailScreen({ navigation }) {
    const route = useRoute()
    const product = PRODUCTS.find(item => item.id === route.params.productId)

    const handlePress = () => {
        navigation.navigate('Categories')
    }

    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <Text style={styles.title}>{product.name}</Text>
                <Text>{product.description}</Text>
                <Text>$ {product.price}</Text>
                <Text>{product.weight}</Text>
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