import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StyleSheet } from "react-native"
import CartScreen from "../screens/CartScreen"
import ConfirmationScreen from "../screens/ConfirmationScreen"

import { Colors } from "../constants/Colors"

const Stack = createNativeStackNavigator()

function CartNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: styles.header,
                headerTitleStyle: styles.headerTitle
            }}
        >
            <Stack.Screen 
                name="Cart" 
                component={CartScreen} 
                options={{
                    headerTitleStyle: {
                        color: '#fffbdb',
                    },
                    title: 'Carro de compras',
                }}
            />
            <Stack.Screen 
                name="ConfirmationScreen" 
                component={ConfirmationScreen} 
                options={{
                    headerTitleStyle: {
                        color: '#fffbdb',
                    },
                    title: 'Compra exitosa',
                }}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: Platform.OS === 'ios' ? '' : Colors.accent,
    },
    headerTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: Colors.textColor
    }
})

export default CartNavigator