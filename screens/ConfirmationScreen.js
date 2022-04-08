import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { confirmRemove } from "../store/actions/items.action";
import { Colors } from "../constants/Colors";

function ConfirmationScreen({ navigation }) {
    const dispatch = useDispatch();

    const handlePress = () => {
        dispatch(confirmRemove())
        navigation.navigate('Cart')
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>¿Desea eliminar el producto seleccionado?</Text>
            <Button 
                title="Eliminar" 
                onPress={handlePress} 
                color={Colors.accent} 
            />
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