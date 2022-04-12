import React, { useReducer, useEffect } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native"
import { Colors } from "../constants/Colors";

const INPUT_CHANGE = 'INPUT_CHANGE'
const INPUT_BLUR = 'INPUT_BLUR'

const inputReducer = (state, action) => {
    switch (action.type) {
        case INPUT_CHANGE:
            return {
                ...state,
                value: action.value,
                isValid: action.isValid
            }
        case INPUT_BLUR:
            return{
                ...state,
                touched: true
            }
        default:
            return state
    }
}


function Input({ label, required, onInputChange, id, ...props}) {
    const [inputState, inputDispatch] = useReducer(inputReducer, {
        value: '',
        isValid: false,
        touched: false
    })

    useEffect(() => {
        let id = label.toLowerCase()
        onInputChange(id, inputState.value, inputState.isValid)
    }, [inputState])
    
    const handleChangeText = (text) => {
        let isValid = true

        if (required && text.trim().length === 0) isValid = false

        inputDispatch({
            type: INPUT_CHANGE,
            value: text,
            isValid: isValid
        })
    }

    const handleBlur = () => inputDispatch({ type: INPUT_BLUR })

    return (
        <View style={styles.formControl}>
            <Text style={styles.label}>{label}</Text>
            <TextInput 
                {...props}
                style={styles.input}
                value={inputState.value}
                onChangeText={handleChangeText}
                onBlur={handleBlur}
            />
            {inputState.touched && !inputState.isValid && (
                <View>
                    <Text style={styles.errorText}>Error</Text>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    formControl: {
        width: '100%',
        alignItems: 'center'
    },
    label: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 7,
        color: Colors.primary
    },
    input: {
        height: 28,
        width: 215,
        borderColor: Colors.accent,
        borderWidth: 1,
        borderRadius: 5,
        padding: 3
    },
    errorText: {
        marginVertical: 5,
        color: Colors.accent
    }
})

export default Input