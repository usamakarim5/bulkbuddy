import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SmallSlider from './Component/SmallSlider'

const VivoSeries = ({vivoDesign}) => {
    const redmiSeries = [
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_5/IMG_1793.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_6/IMG_1794.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_6/IMG_1795.png')
        },

    ]
    return (
        <View>
            <Image style={{ width: '100%', height: 80 }} resizeMode={'contain'} source={vivoDesign} />
            <View style={{ flexDirection: "row", width: "100%" }}>
                <Image style={{ width: '50%', height: 230 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_5/IMG_1790.png')} />
                <Image style={{ width: '50%', height: 230 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_5/IMG_1791.png')} />
            </View>
            
          <Image style={{ width: '100%', height: 200 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_5/IMG_1792.png')} />
            <SmallSlider
                data={redmiSeries}
            />
        </View>
    )
}

export default VivoSeries

const styles = StyleSheet.create({})