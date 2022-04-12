import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Platform, StyleSheet } from "react-native"
import OrdersScreen from "../screens/OrdersScreen"
import { Colors } from "../constants/Colors"

const Stack = createNativeStackNavigator()

function OrderNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: styles.header,
                headerTitleStyle: styles.headerTitle
            }}
        >
            <Stack.Screen 
                name="Orders" 
                component={OrdersScreen} 
                options={{
                    headerTitleStyle: {
                        color: '#fffbdb',
                        fontFamily: "SourceSerifBold",
                    },
                    title: 'Órdenes de compra',
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
        fontSize: 20,
        color: Colors.textColor
    }
})

export default OrderNavigator