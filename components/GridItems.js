import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { Colors } from "../constants/Colors"

const GridItems = ({ item, onSelected }) => {
    return (
        <View style={styles.gridItem}>
            <TouchableOpacity
            style={ { ...styles.container, backgroundColor: item.color }}
            onPress={ () => onSelected(item) }
            >
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem:{
        flex: 1,
        margin: 15,
        height: 150,
    },
    container:{
        flex: 1,
        borderRadius: 5,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 3,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 8,
    },
    title:{
        fontSize: 25,
        fontFamily: "SourceSerifRegular",
        color: Colors.textColor,
        textAlign: 'justify'
    }
})

export default GridItems