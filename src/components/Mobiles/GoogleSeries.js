import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SmallSlider from './Component/SmallSlider'

const GoogleSeries = ({googleDesign}) => {
    const googleSeries = [
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_6/IMG_1807.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_6/IMG_1808.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_6/IMG_1807.png')
        },
       
    ]
    return (
        <View>
            <Image style={{ width: '100%', height: 80 }} resizeMode={'contain'} source={googleDesign} />
            {/* <View style={{ flexDirection: "row", width: "100%" }}>
                <Image style={{ width: '50%', height: 230 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_6/IMG_1797.png')} />
                <Image style={{ width: '50%', height: 230 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_6/IMG_1798.png')} />
            </View> */}
            <SmallSlider
                data={googleSeries}
            />
        </View>
    )
}

export default GoogleSeries

const styles = StyleSheet.create({})