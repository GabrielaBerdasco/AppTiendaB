import React, { useState } from "react"
import { View, Text, Button, StyleSheet, Alert } from "react-native"
import * as Location from "expo-location"

import { Colors } from "../constants/Colors"

function LocationSelector() {
    const [pickedLocation, setPickedLocation] = useState()
    
    const handleGetLocation = async () => {
        const isLocationOk = await verifyPermissions()
        if(!isLocationOk) return
        
        const location = await Location.getCurrentPositionAsync({
            timeout: 5000
        })

        setPickedLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude
        })

        props.onLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude
        })
    }
    
    const verifyPermissions = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync()

        if (status !== 'granted') {
            Alert.alert(
                'Permisos denegados',
                'No se puede acceder a la ubicación',
                [{ text: 'OK' }]
            )
            return false
        }
        return true
    }

    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                {pickedLocation
                    ? <Text>{pickedLocation.lat}, {pickedLocation.lng}</Text>
                    : <Text>Esperando ubicación...</Text>
                }
            </View>
            <Button 
                title="Obtener ubicación"
                color={Colors.accent}
                onPress={handleGetLocation}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    preview: {
        width: "100%",
        height: 200,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        borderColor: Colors.accent,
        borderWidth: 1,
    },
})

export default LocationSelector