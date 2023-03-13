import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SmallSlider = ({data}) => {
      const renderItem = ({ item, index }) => {
        return (
          <TouchableOpacity style={{marginLeft:5}}>
            <Image style={{ width: 170, height: 190 }} resizeMode={'contain'} source={item.imgPath} />
          </TouchableOpacity>
        )
      }
  return (
    <View>
      <FlatList
          horizontal
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
        />
    </View>
  )
}

export default SmallSlider

const styles = StyleSheet.create({})