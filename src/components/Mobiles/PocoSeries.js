import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SmallSlider from './Component/SmallSlider'

const PocoSeries = ({pocoDesign}) => {
    const GtSeries = [
        {
          imgPath: require('../../../assets/images/Mobiles/MobileImages_4/IMG_1745.png')
        },
        {
          imgPath: require('../../../assets/images/Mobiles/MobileImages_4/IMG_1746.png')
        },
        {
          imgPath: require('../../../assets/images/Mobiles/MobileImages_4/IMG_1747.png')
        },
        {
          imgPath: require('../../../assets/images/Mobiles/MobileImages_4/IMG_1748.png')
        },
       
    
      ] 
      return (
        <View>
              <Image style={{ width: '100%', height: 80 }} resizeMode={'contain'} source={pocoDesign} />
              {/* <SmallSlider 
              data={GtSeries}
              /> */}
                <View style={{ flexDirection: "row", width: "100%" }}>
                    <Image style={{ width: '50%', height: 200 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_4/IMG_1745.png')} />
                    <Image style={{ width: '50%', height: 200 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_4/IMG_1746.png')} />
                </View>
                <View style={{ flexDirection: "row", width: "100%" }}>
                    <Image style={{ width: '50%', height: 200 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_4/IMG_1747.png')} />
                    <Image style={{ width: '50%', height: 200 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_4/IMG_1748.png')} />
                </View>
        </View>
      )
}

export default PocoSeries

const styles = StyleSheet.create({})