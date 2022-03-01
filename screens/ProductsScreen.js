import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

function ProductsScreen({ navigation }) {
    const handlePress = () => {
        navigation.navigate('ProductDetail')
    }

    return (
        <View style={styles.screen} >
            <Text>
                Products Screen
            </Text>
            <Button 
                onPress={handlePress}
                title="Ir a detalle de producto"
            />
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