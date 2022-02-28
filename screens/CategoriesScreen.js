import React from "react";
import { View, Text, StyleSheet } from "react-native";

function CategoriesScreen({ }) {
    return (
        <View style={styles.screen} >
            <Text>
                Categories Screen
            </Text>
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

export default CategoriesScreen