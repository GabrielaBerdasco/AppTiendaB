import React from "react";
import ProductItem from "../components/ProductItem";
import { View, FlatList, StyleSheet } from "react-native";
import { PRODUCTS } from "../data/products";

function ProductsScreen({ navigation, route }) {
    
    const filteredProducts = PRODUCTS.filter(item => item.category === route.params.categoryId)

    const handlePress = (item) => {
        navigation.navigate('ProductDetail', {
            name: item.name,
            productId: item.id
        })
    }

    const renderItem = ({ item }) => (
        <ProductItem
            item={item}
            onSelected={handlePress}
            colors={route.params.color}
        />
    )

    return (
        <View style={styles.screen} >
            <FlatList 
                data={filteredProducts}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default ProductsScreen