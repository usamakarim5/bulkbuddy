import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SmallSlider from './Component/SmallSlider'

const RemiSeries = ({redmiDesign}) => {
    const redmiSeries = [
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_5/IMG_1779.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_5/IMG_1781.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_5/IMG_1782.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_5/IMG_1783.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_5/IMG_1784.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_5/IMG_1785.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_5/IMG_1786.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_5/IMG_1787.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_5/IMG_1788.png')
        },

    ]
    return (
        <View>
            <Image style={{ width: '100%', height: 80 }} resizeMode={'contain'} source={redmiDesign} />
            <View style={{ flexDirection: "row", width: "100%" }}>
                <Image style={{ width: '50%', height: 230 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_5/IMG_1776.png')} />
                <Image style={{ width: '50%', height: 230 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_5/IMG_1777.png')} />
            </View>
            
          <Image style={{ width: '100%', height: 200 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_5/IMG_1778.png')} />
            <SmallSlider
                data={redmiSeries}
            />
        </View>
    )
}

export default RemiSeries

const styles = StyleSheet.create({})