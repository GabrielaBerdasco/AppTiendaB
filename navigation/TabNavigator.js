import React from "react"
import { View, StyleSheet } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons"
import ShopNavigator from "./ShopNavigator"
import CartNavigator from "./CartNavigator"
import OrderNavigator from "./OrderNavigator"
import { Colors } from "../constants/Colors"

const Tab = createBottomTabNavigator()

function TabNavigator() {
    return (
        <Tab.Navigator 
            initialRouteName="Shop"
            screenOptions={{
                headerShown: false,
                tabBarStyle: styles.tabBar,
                tabBarShowLabel: false
            }}    
        >
            <Tab.Screen 
                name="Tienda B Shop" 
                component={ShopNavigator} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <FontAwesome 
                                name="home" 
                                size={focused ? 34 : 24} 
                                color={focused ? Colors.accent : Colors.primary} 
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen 
                name="Tienda B Cart" 
                component={CartNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <FontAwesome 
                                name="shopping-cart" 
                                size={focused ? 34 : 24} 
                                color={focused ? Colors.accent : Colors.primary} 
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen 
                name="Tienda B Orders" 
                component={OrderNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <MaterialCommunityIcons 
                                name="playlist-star" 
                                size={focused ? 34 : 24} 
                                color={focused ? Colors.accent : Colors.primary} 
                            />
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 9,
        height: 90,
        backgroundColor: Colors.textColor
    },
})

export default TabNavigator