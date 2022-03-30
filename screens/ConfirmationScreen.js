import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

function ConfirmationScreen({ navigation }) {

    const handlePress = () => {
        navigation.navigate('Categories')
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Pedido realizado correctamente</Text>
            <Text style={styles.text}>Gracias por su compra</Text>
            <Button title="Volver a la tienda" onPress={handlePress} color={Colors.accent} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 22,
        paddingBottom: 16,
        color: Colors.primary,
    },
});

export default ConfirmationScreen;