import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SmallSlider from './Component/SmallSlider'

const InfinixSeries = ({infinixDesign }) => {
    const infinixSeries = [
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_7/IMG_1831.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_7/IMG_1832.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_7/IMG_1833.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_7/IMG_1834.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_7/IMG_1835.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_7/IMG_1836.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_7/IMG_1837.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_7/IMG_1838.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_7/IMG_1839.png')
        },
       
    ]  
    return (
        <View>
            <Image style={{ width: '100%', height: 80 }} resizeMode={'contain'} source={infinixDesign} />

            <View style={{ flexDirection: "row", width: "100%" }}>
                <Image style={{ width: '50%', height: 240 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_7/IMG_1826.png')} />
                <Image style={{ width: '50%', height: 240 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_7/IMG_1827.png')} />
            </View>

            <Image style={{ width: '100%', height: 180 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_7/IMG_1828.png')} />
            <View style={{ flexDirection: "row", width: "100%" }}>
                <Image style={{ width: '50%', height: 240 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_7/IMG_1829.png')} />
                <Image style={{ width: '50%', height: 240 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_7/IMG_1830.png')} />
            </View>

            <SmallSlider
                data={infinixSeries}
            />
        </View>
    )
}

export default InfinixSeries

const styles = StyleSheet.create({})