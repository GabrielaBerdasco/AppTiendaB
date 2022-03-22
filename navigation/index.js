import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { useSelector } from "react-redux"
import TabNavigator from "./TabNavigator"
import AuthNavigator from "./AuthNavigator"


function MainNavigator() {
    const isAuthenticated = useSelector(state => state.auth.token)

    return (
        <NavigationContainer>
            {isAuthenticated
                ? <TabNavigator />
                : <AuthNavigator />
            }
        </NavigationContainer>
    )
}

export default MainNavigator