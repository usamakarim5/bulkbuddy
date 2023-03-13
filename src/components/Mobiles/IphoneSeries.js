import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SmallSlider from './Component/SmallSlider'

const IphoneSeries = ({ iphoneDesign, showLargeImage }) => {
    const iphoneSeries = [
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_6/IMG_1799.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_6/IMG_1800.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_6/IMG_1801.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_6/IMG_1802.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_6/IMG_1803.png')
        },
    ]
    return (
        <View>
            <Image style={{ width: '100%', height: 80 }} resizeMode={'contain'} source={iphoneDesign} />
            <View style={{ flexDirection: "row", width: "100%" }}>
                <Image style={{ width: '50%', height: 230 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_6/IMG_1797.png')} />
                <Image style={{ width: '50%', height: 230 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_6/IMG_1798.png')} />
            </View>
            <SmallSlider
                data={iphoneSeries}
            />
        </View>
    )
}

export default IphoneSeries

const styles = StyleSheet.create({})