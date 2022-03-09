import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import ProductsScreen from "../screens/ProductsScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import { Platform, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

const Stack = createNativeStackNavigator()

function ShopNavigator() {
    return (
        <NavigationContainer>
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
                    headerTitleStyle: {
                        color: '#fffbdb',
                    },
                    title: 'Tienda B',
                }}
                />
                <Stack.Screen name="Products" component={ProductsScreen} />
                <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: Platform.OS === 'ios' ? '' : Colors.accent,
    },
    headerTitle: {
        fontWeight: 'bold',
        fontSize: 28,
        color: Colors.primary
    }
})

export default ShopNavigator