import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import ProductsScreen from "../screens/ProductsScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import { Platform, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

const Stack = createNativeStackNavigator()

function ShopNavigator() {
    return (
        <Stack.Navigator 
            initialRouteName="Categories"
            screenOptions={{
                headerStyle: styles.header,
                headerTitleStyle: styles.headerTitle
            }}
        >
            <Stack.Screen 
                name="Categories" 
                component={CategoriesScreen} 
                options={{
                    title: 'Tienda B',
                }}
            />
            <Stack.Screen 
                name="Products" 
                component={ProductsScreen} 
                options={({ route }) => ({
                    title: route.params.name,
                })}    
            />
            <Stack.Screen 
                name="ProductDetail" 
                component={ProductDetailScreen} 
                options={({ route }) => ({
                    title: route.params.name,
                })}     
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: Platform.OS === 'ios' ? '' : Colors.accent,
    },
    headerTitle: {
        fontFamily: "SourceSerifBold",
        fontSize: 20,
        color: Colors.textColor
    }
})

export default ShopNavigator