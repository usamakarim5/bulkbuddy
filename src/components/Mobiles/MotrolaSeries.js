import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SmallSlider from './Component/SmallSlider'

const MotrolaSeries = ({ motrolaDesign }) => {
    const GtSeries = [
     
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_4/IMG_1765.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_4/IMG_1766.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_4/IMG_1767.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_4/IMG_1768.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_5/IMG_1769.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_5/IMG_1770.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_5/IMG_1771.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_5/IMG_1772.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_5/IMG_1773.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_5/IMG_1774.png')
        },
    


    ]
    return (
        <View>
            <Image style={{ width: '100%', height: 80 }} resizeMode={'contain'} source={motrolaDesign} />
            <View style={{ flexDirection: "row", width: "100%" }}>
                <Image style={{ width: '50%', height: 230 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_4/IMG_1760.png')} />
                <Image style={{ width: '50%', height: 230 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_4/IMG_1761.png')} />
            </View>
            
          <Image style={{ width: '100%', height: 160 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_4/IMG_1762.png')} />
          <View style={{ flexDirection: "row", width: "100%" }}>
                <Image style={{ width: '50%', height: 230 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_4/IMG_1763.png')} />
                <Image style={{ width: '50%', height: 230 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_4/IMG_1764.png')} />
            </View>
          
            <SmallSlider
                data={GtSeries}
            />
        </View>
    )
}

export default MotrolaSeries

const styles = StyleSheet.create({})