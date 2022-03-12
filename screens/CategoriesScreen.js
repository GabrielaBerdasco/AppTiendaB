import React from "react";
import { FlatList } from "react-native";
import GridItems from "../components/GridItems";
import { CATEGORIES } from "../data/categories"

function CategoriesScreen({ navigation }) {
    const handlePress = (item) => {
        navigation.navigate('Products', {
            name: item.title,
            categoryId: item.id,
            color: item.color
        })
    }

    const renderItem = ({ item }) => (
        <GridItems 
            item={item}
            onSelected={handlePress}
        />
    )

    return (
        <FlatList 
            data={CATEGORIES} 
            keyExtractor={item => item.id}
            renderItem={renderItem}    
        />
    )
}


export default CategoriesScreen