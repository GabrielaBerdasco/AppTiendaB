import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";

function ProductsScreen({ navigation }) {
    const products = useSelector(state => state.products.list)
    const selectedCategory = useSelector(state => state.categories.selected)
    
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        setFilteredProducts(products.filter(item => item.category === selectedCategory.id))
    }, [selectedCategory])

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