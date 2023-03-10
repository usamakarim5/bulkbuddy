import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({ title, imgPath,style,textStyle ,onPress}) => {
    return (
        <TouchableOpacity style={[styles.btnContainer,style]} onPress={onPress}>
            <Image source={imgPath} style={{ width: 25, height: 25, marginRight: 10,borderRadius:50 }} />
            <Text style={[styles.text,textStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    btnContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderRadius: 10,
        height:40
    },
    text:{
        fontWeight:'900',
    }
})