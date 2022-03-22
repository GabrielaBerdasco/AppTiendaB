import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import Input from "../components/Input";
import { Colors } from "../constants/Colors";
import { signUp } from "../store/actions/auth.action"

function AuthScreen() {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp =() => {
        dispatch(signUp(email, password))
    }

    const title = 'REGISTRO',
    message = '¿Ya tienes cuenta?'
    messageAction = 'Ingresar',
    messageTarget = 'Login'

    const handleInputChange = (id, value, isValid) => {
        if(id === 'email') setEmail(value)
        if (id === 'password') setPassword(isValid)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Input 
                label='Email'
                style={styles.input}
                onInputChange={handleInputChange}
                keyboardType= 'email-address'
                autoCapitalize= 'none'
                required
            />
            <Input
                label='Contraseña'
                style={styles.input}
                onInputChange={handleInputChange}
                secureTextEntry
                required 
            />
            <View style={styles.prompt}>
                <TouchableOpacity onPress={handleSignUp} >
                <Text style={styles.promptButton}>REGISTRARSE</Text>
                </TouchableOpacity>
                <Text style={styles.promptMessage}>{message}</Text>
                <TouchableOpacity>
                    <Text style={styles.promptButton}>{messageAction}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        margin: 25,
        borderColor: Colors.accent,
        borderWidth: 1,
        borderRadius: 5
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: Colors.accent
    },
    prompt: {
        alignItems: 'center'
    },
    promptMessage: {
        fontSize: 16,
        color: Colors.primary
    },
    promptButton: {
        margin: 10,
        fontSize: 16,
        color: Colors.accent
    }
})

export default AuthScreen