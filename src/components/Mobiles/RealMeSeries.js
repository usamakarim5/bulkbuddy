import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SmallSlider from './Component/SmallSlider'

const RealMeSeries = ({ realMeDesign, titleImg }) => {

  const GtSeries = [
    {
      imgPath: require('../../../assets/images/Mobiles/MobileImages_3/IMG_1733.png')
    },
    {
      imgPath: require('../../../assets/images/Mobiles/MobileImages_3/IMG_1734.png')
    },
    {
      imgPath: require('../../../assets/images/Mobiles/MobileImages_3/IMG_1735.png')
    },
    {
      imgPath: require('../../../assets/images/Mobiles/MobileImages_3/IMG_1736.png')
    },
    {
      imgPath: require('../../../assets/images/Mobiles/MobileImages_3/IMG_1737.png')
    },
 

  ] 
  
const Cseries = [
    {
      imgPath: require('../../../assets/images/Mobiles/MobileImages_3/IMG_1739.png')
    },
    {
      imgPath: require('../../../assets/images/Mobiles/MobileImages_3/IMG_1740.png')
    },
    {
      imgPath: require('../../../assets/images/Mobiles/MobileImages_3/IMG_1741.png')
    },
    {
      imgPath: require('../../../assets/images/Mobiles/MobileImages_3/IMG_1742.png')
    },
    {
      imgPath: require('../../../assets/images/Mobiles/MobileImages_3/IMG_1743.png')
    },
 

  ]


  return (
    <View>
      <Image style={{ width: '100%', height: 80 }} resizeMode={'contain'} source={realMeDesign} />
      <Image style={{ width: '100%', height: 80 }} resizeMode={'contain'} source={titleImg} />


      <View style={{ flexDirection: "row", width: "100%" }}>
        <Image style={{ width: '50%', height: 205 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_3/IMG_1730.png')} />
        <Image style={{ width: '50%', height: 205 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_3/IMG_1731.png')} />
      </View>


{/* This Section is For GtSeries */}
      <Image style={{ width: '100%', height: 80 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_3/IMG_1732.png')} />
      <SmallSlider
        data={GtSeries}
      />

{/* This Section is For CSeries */}
      <Image style={{ width: '100%', height: 80 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_3/IMG_1738.png')} />
      <SmallSlider
       data={Cseries}
      />
    </View>
  )
}

export default RealMeSeries

const styles = StyleSheet.create({})