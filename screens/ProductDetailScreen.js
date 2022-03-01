import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

function ProductDetailScreen({ navigation }) {
    const handlePress = () => {
        navigation.navigate('Categories')
    }

    return (
        <View style={styles.screen}>
            <Text>
                Product Detail Screen
            </Text>
            <Button 
                onPress={handlePress}
                title="Ir a categorias"
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

export default ProductDetailScreen