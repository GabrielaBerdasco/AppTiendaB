import React from "react";
import { View, Text, StyleSheet } from "react-native";

function ProductsScreen({ }) {
    return (
        <View style={styles.screen} >
            <Text>
                Products Screen
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

export default ProductsScreen