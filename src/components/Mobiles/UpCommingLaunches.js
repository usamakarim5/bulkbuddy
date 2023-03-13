import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UpCommingLaunches = () => {
    return (
        <View style={{ flex: 1 }}>
            <Image style={{ width: '100%', height: 80 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_2/IMG_1701.png')} />
            <Image style={{ width: '100%', height: 180 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_2/IMG_1702.png')} />
        </View>
    )
}

export default UpCommingLaunches

const styles = StyleSheet.create({})