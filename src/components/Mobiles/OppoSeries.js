import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SmallSlider from './Component/SmallSlider'

const OppoSeries = ({ oppoDesign ,titleImg}) => {

    const oppoSeries = [
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_6/IMG_1813.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_6/IMG_1814.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_6/IMG_1815.png')
        },
       
    ]   
    
    const oppoSeries1 = [
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_6/IMG_1818.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_7/IMG_1820.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_6/IMG_1818.png')
        },
       
    ]  
    
    const oppoSeries2 = [
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_7/IMG_1822.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_7/IMG_1823.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_7/IMG_1824.png')
        },
       
    ]
    return (
        <View>
            <Image style={{ width: '100%', height: 80 }} resizeMode={'contain'} source={oppoDesign} />
            <Image style={{ width: '100%', height: 80 }} resizeMode={'contain'} source={titleImg} />
            
            <View style={{ flexDirection: "row", width: "100%" }}>
                <Image style={{ width: '50%', height: 240 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_6/IMG_1811.png')} />
                <Image style={{ width: '50%', height: 240 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_6/IMG_1812.png')} />
            </View>

            <SmallSlider
                data={oppoSeries}
            />

       <Image style={{ width: '100%', height: 80 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_6/IMG_1817.png')} />
         <SmallSlider
                data={oppoSeries1}
            />


<Image style={{ width: '100%', height: 80 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_7/IMG_1821.png')} />
         <SmallSlider
                data={oppoSeries2}
            />
        </View>
    )
}

export default OppoSeries

const styles = StyleSheet.create({})