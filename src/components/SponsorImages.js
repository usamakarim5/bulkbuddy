import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
const SponsorImages = ({imgPath}) => {
    return (
        <View>
            <Image
                source={imgPath}
                style={{
                    height: hp("19"),
                    width: wp("32"),
                  }}
            />
        </View>
    )
}

export default SponsorImages

const styles = StyleSheet.create({})