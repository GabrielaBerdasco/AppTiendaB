import React from "react";
import { FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux"
import GridItems from "../components/GridItems";

import { selectCategory } from "../store/actions/category.action"

function CategoriesScreen({ navigation }) {
    const categories = useSelector( state => state.categories.list)
    const dispatch = useDispatch()

    const handlePress = (item) => {
        dispatch(selectCategory(item.id))
        navigation.navigate('Products', {
            name: item.title
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
            data={categories} 
            keyExtractor={item => item.id}
            renderItem={renderItem}    
        />
    )
}


export default CategoriesScreen