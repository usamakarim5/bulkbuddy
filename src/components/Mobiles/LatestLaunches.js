import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Launches = ({ titleImage, FirstLargeImage, card1, card2, launchedImages, launchedImages1, largeImageHeight, largeImageExtra1, largeImageExtra2 }) => {

  const data = [
    {
      imgPath: require('../../../assets/images/Mobiles/MobileImages_2/IMG_1694.png')
    },
    {
      imgPath: require('../../../assets/images/Mobiles/MobileImages_2/IMG_1695.png')
    },
    {
      imgPath: require('../../../assets/images/Mobiles/MobileImages_2/IMG_1696.png')
    },
    {
      imgPath: require('../../../assets/images/Mobiles/MobileImages_2/IMG_1697.png')
    },
    {
      imgPath: require('../../../assets/images/Mobiles/MobileImages_2/IMG_1698.png')
    },
    {
      imgPath: require('../../../assets/images/Mobiles/MobileImages_2/IMG_1699.png')
    },
    {
      imgPath: require('../../../assets/images/Mobiles/MobileImages_2/IMG_1700.png')
    },

  ]


  const upComming = [
    {
      imgPath: require('../../../assets/images/Mobiles/MobileImages_2/IMG_1694.png')
    },
    {
      imgPath: require('../../../assets/images/Mobiles/MobileImages_2/IMG_1695.png')
    },
    {
      imgPath: require('../../../assets/images/Mobiles/MobileImages_2/IMG_1696.png')
    },
    {
      imgPath: require('../../../assets/images/Mobiles/MobileImages_2/IMG_1697.png')
    },
    {
      imgPath: require('../../../assets/images/Mobiles/MobileImages_2/IMG_1698.png')
    },
    {
      imgPath: require('../../../assets/images/Mobiles/MobileImages_2/IMG_1699.png')
    },
    {
      imgPath: require('../../../assets/images/Mobiles/MobileImages_2/IMG_1700.png')
    },

  ]

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={{}}>
        <Image style={{ width: 150, height: 150 }} resizeMode={'contain'} source={item.imgPath} />
      </TouchableOpacity>
    )
  }
  return (
    <View style={{ flex: 1 }}>
      <Image style={{ width: '100%', height: 80 }} resizeMode={'contain'} source={titleImage} />
      <Image style={{ width: '100%', height: largeImageHeight }} resizeMode={'contain'} source={FirstLargeImage} />
      <View style={{ flexDirection: "row", width: "100%" }}>
        <Image style={{ width: '50%', height: 240 }} resizeMode={'contain'} source={card1} />
        <Image style={{ width: '50%', height: 240 }} resizeMode={'contain'} source={card2} />
      </View>

      {
        launchedImages &&
        <FlatList
          horizontal
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
        />
      }

      {
        launchedImages1 &&
        <View>
          <Image style={{ width: '100%', height: 180 }} resizeMode={'contain'} source={largeImageExtra1} />
          <Image style={{ width: '100%', height: 180 }} resizeMode={'contain'} source={largeImageExtra2} />

          <View style={{ flexDirection: "row", width: "100%" }}>
            <Image style={{ width: '50%', height: 240 }} resizeMode={'contain'} source={card1} />
            <Image style={{ width: '50%', height: 240 }} resizeMode={'contain'} source={card2} />
          </View>
        </View>

      }


    </View>
  )
}

export default Launches

const styles = StyleSheet.create({})