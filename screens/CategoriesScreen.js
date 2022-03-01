import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

function CategoriesScreen({ navigation }) {
    const handlePress = () => {
        navigation.navigate('Products')
    }

    return (
        <View style={styles.screen} >
            <Text>
                Categories Screen
            </Text>
            <Button 
                onPress={handlePress}
                title="Ir a productos"
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

export default CategoriesScreen