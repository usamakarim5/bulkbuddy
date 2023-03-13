import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SmallSlider from './Component/SmallSlider'

const LavaSeries = ({lavaDesign}) => {
    const lavaSeries = [
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_8/IMG_1846.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_8/IMG_1847.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_8/IMG_1848.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_7/IMG_1842.png')
        },
      
       
    ]  
  return (
    <View>
    <Image style={{ width: '100%', height: 80 }} resizeMode={'contain'} source={lavaDesign} />

    <View style={{ flexDirection: "row", width: "100%",marginLeft:4 }}>
                <Image style={{ width: '48%', height: 240 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_8/IMG_1844.png')} />
                <Image style={{ width: '48%', height: 240 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_8/IMG_1845.png')} />
            </View>
    <SmallSlider
        data={lavaSeries}
    />

<Image style={{ width: '100%', height: 173 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_8/IMG_1849.png')} />
<Image style={{ width: '100%', height: 173 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_8/IMG_1850.png')} />
<Image style={{ width: '100%', height: 174 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_8/IMG_1851.png')} />
<Image style={{ width: '100%', height: 174 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_8/IMG_1852.png')} />


</View>
  )
}

export default LavaSeries

const styles = StyleSheet.create({})