import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SmallSlider from './Component/SmallSlider'

const SamsungList = ({samsungDesign}) => {
  const GtSeries = [
    {
      imgPath: require('../../../assets/images/Mobiles/MobileImages_4/IMG_1752.png')
    },
    {
      imgPath: require('../../../assets/images/Mobiles/MobileImages_4/IMG_1753.png')
    },
    {
      imgPath: require('../../../assets/images/Mobiles/MobileImages_4/IMG_1754.png')
    },
    {
      imgPath: require('../../../assets/images/Mobiles/MobileImages_4/IMG_1755.png')
    },
    {
      imgPath: require('../../../assets/images/Mobiles/MobileImages_4/IMG_1756.png')
    },
    {
      imgPath: require('../../../assets/images/Mobiles/MobileImages_4/IMG_1757.png')
    },
    {
      imgPath: require('../../../assets/images/Mobiles/MobileImages_4/IMG_1758.png')
    },
 

  ] 
  return (
    <View>
          <Image style={{ width: '100%', height: 80 }} resizeMode={'contain'} source={samsungDesign} />
          <View style={{ flexDirection: "row", width: "100%" }}>
                    <Image style={{ width: '50%', height: 200 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_4/IMG_1750.png')} />
                    <Image style={{ width: '50%', height: 200 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_4/IMG_1751.png')} />
                </View>
          <SmallSlider 
          data={GtSeries}
          />
    </View>
  )
}

export default SamsungList

const styles = StyleSheet.create({})