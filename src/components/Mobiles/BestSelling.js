import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BestSelling = () => {

    const data =[
        {
            imgPath:require('../../../assets/images/Mobiles/MobileImages_2/IMG_1712.png')
        },
        {
            imgPath:require('../../../assets/images/Mobiles/MobileImages_2/IMG_1713.png')
        },
        {
            imgPath:require('../../../assets/images/Mobiles/MobileImages_2/IMG_1714.png')
        }
    ]
    const renderItem = ({item,index}) => {
        return (
            <View style={{}}>
                 <Image style={{width:350,height:400}} resizeMode={'contain'} source={item.imgPath} />
            </View>
        )
    }
    return (
        <View>
            <Image style={{ width: '100%', height: 80 }} resizeMode={'contain'} source={require('../../../assets/images/Mobiles/MobileImages_2/IMG_1711.png')} />
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                horizontal
                pagingEnabled
            />

        </View>
    )
}

export default BestSelling

const styles = StyleSheet.create({})