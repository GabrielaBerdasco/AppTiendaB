import React from "react";
import { View, Text, StyleSheet } from "react-native";

function ProductDetailScreen({ }) {
    return (
        <View style={styles.screen}>
            <Text>
                Product Detail Screen
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

export default ProductDetailScreen