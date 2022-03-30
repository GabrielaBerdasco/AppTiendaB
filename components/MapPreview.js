import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { API_KEY } from "@env";

function MapPreview({ location, style, children }) {
    const mapPreviewUrl = location
    ? `https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.lng}&zoom=14&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C${location.lat},${location.lng}&key=${API_KEY}`
    : '';
    
    return (
        <View style={[styles.mapPreview, style]}>
            {location
                ? <Image style={styles.mapImage} source={{ uri: mapPreviewUrl }} />
                : children
            } 
        </View>
    )
}

const styles = StyleSheet.create({
    mapPreview: {
        justifyContent: "center",
        alignItems: "center",
    },
    mapImage: {
        width: "100%",
        height: "100%",
    },
});

export default MapPreview;