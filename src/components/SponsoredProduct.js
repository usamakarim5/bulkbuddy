import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const { width, height } = Dimensions.get('screen')

const SponsoredProduct = ({largeImage,smallImage1,smallImage2}) => {
    return (
        <View style={styles.ImageContainer}>
            <View style={styles.largeImage}>
                <Image style={styles.largeImgPoduct} resizeMode={'contain'} source={largeImage} />
                <View style={styles.largeImgText}>
                    <Text style={{ fontSize: 13 }}>Boult Audio AirBass GearPods with...</Text>
                    <Text>$900 </Text>
                </View>
            </View>
            <View style={{ width: width / 2.9 }}>
                <View style={{ alignItems: "center", borderBottomWidth: 1, borderBottomColor: '#F6F6F6', paddingBottom: 10 }}>
                    <Image style={{ height: 81, width: 100 }} resizeMode={'contain'} source={smallImage1} />
                    <View style={{ alignItems: "center" }}>
                        <Text style={{ fontSize: 10 }}>Boult Audio AirBass...</Text>
                        <Text>$900 </Text>
                    </View>
                </View>

                <View style={{ alignItems: "center", paddingVertical: 11 }}>
                    <Image style={{ height: 81, width: 100 }} resizeMode={'contain'} source={smallImage2} />
                    <View style={{ alignItems: "center" }}>
                        <Text style={{ fontSize: 10 }}>Boult Audio AirBass...</Text>
                        <Text>$900 </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default SponsoredProduct

const styles = StyleSheet.create({
    ImageContainer: {
        flexDirection: "row",
        width: '100%',
        borderTopWidth: 1,
        borderTopColor: '#F6F6F6',
        paddingTop: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#F6F6F6'
    },
    largeImage: {
        borderRightWidth: 1,
        borderRightColor: '#F6F6F6'
    },
    largeImgPoduct: {
        height: 210,
        width: 250,
        marginHorizontal: 5
    },
    largeImgText: {
        alignItems: "center",
        paddingTop: 5
    }
})