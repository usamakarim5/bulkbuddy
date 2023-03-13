import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BestSelling = ({ showBestSelling, showGrabData, titleImg }) => {

    const sellingData = [
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_2/IMG_1712.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_2/IMG_1713.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_2/IMG_1714.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_2/IMG_1715.png')
        },

    ]


    const GrabData = [
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_2/IMG_1717.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_2/IMG_1718.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_3/IMG_1719.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_3/IMG_1720.png')
        },
        {
            imgPath: require('../../../assets/images/Mobiles/MobileImages_3/IMG_1721.png')
        },

    ]
    const renderItem = ({ item, index }) => {
        return (
            <View style={{marginRight:10}}>
                <Image style={{ width: 380, height: 420 }} resizeMode={'contain'} source={item.imgPath} />
            </View>
        )
    }
    return (
        <View>
            <Image style={{ width: '100%', height: 80 }} resizeMode={'contain'} source={titleImg} />
            {
                showBestSelling &&
                <FlatList
                    data={sellingData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                    horizontal
                    pagingEnabled
                />}

{showGrabData &&
            <View>
                <View style={{ flexDirection: "row", width: "100%" }}>
                    <Image style={{ width: '50%', height: 200 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_2/IMG_1717.png')} />
                    <Image style={{ width: '50%', height: 200 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_2/IMG_1718.png')} />
                </View>
                <View style={{ flexDirection: "row", width: "100%" }}>
                    <Image style={{ width: '50%', height: 200 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_3/IMG_1719.png')} />
                    <Image style={{ width: '50%', height: 200 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_3/IMG_1720.png')} />
                </View>
            </View>}

        </View>
    )
}

export default BestSelling

const styles = StyleSheet.create({})