import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SmallSlider from './Component/SmallSlider'

const MicromaxSeries = ({micromaxDesign}) => {
    const micromaxSeries = [
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_7/IMG_1841.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_7/IMG_1842.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_7/IMG_1841.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_7/IMG_1842.png')
        },
      
       
    ]  
  return (
    <View>
    <Image style={{ width: '100%', height: 80 }} resizeMode={'contain'} source={micromaxDesign} />
    <SmallSlider
        data={micromaxSeries}
    />
</View>
  )
}

export default MicromaxSeries

const styles = StyleSheet.create({})