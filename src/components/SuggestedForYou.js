import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AntDesign from "react-native-vector-icons/AntDesign";

const { width, height } = Dimensions.get('screen')

const SuggestedForYou = ({title}) => {

    const Cards = ({firstImg,secondImg,thirdImg}) => {
        return (
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
                <View style={{ borderWidth: 1, borderColor: '#cecece', borderRadius: 5 }}>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Image resizeMode='contain' style={{ height: height / 7, width: width / 5 }} source={firstImg} />
                    </View>
                    <View style={{ paddingHorizontal: 5, }}>
                        <Text style={{ fontSize: 13 }}>REDMI 10(Cari...)</Text>
                        <Text style={{ fontSize: 12, lineHeight: 17 }}>$9,939</Text>
                        <Text style={{ fontSize: 12, fontWeight: "bold", paddingBottom: 5 }}>Free Delievery</Text>
                    </View>
                </View>

                <View style={{ borderWidth: 1, borderColor: '#cecece', borderRadius: 5 }}>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Image resizeMode='contain' style={{ height: height / 7, width: width / 5 }} source={secondImg} />
                    </View>
                    <View style={{ paddingHorizontal: 5, }}>
                        <Text style={{ fontSize: 13 }}>REDMI 10(Cari...)</Text>
                        <Text style={{ fontSize: 12, lineHeight: 17 }}>$9,939</Text>
                        <Text style={{ fontSize: 12, fontWeight: "bold" }}>Free Delievery</Text>
                    </View>
                </View>


                <View style={{ borderWidth: 1, borderColor: '#cecece', borderRadius: 5 }}>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Image resizeMode='contain' style={{ height: height / 7, width: width / 5 }} source={thirdImg} />
                    </View>
                    <View style={{ paddingHorizontal: 5, }}>
                        <Text style={{ fontSize: 13 }}>REDMI 10(Cari...)</Text>
                        <Text style={{ fontSize: 12, lineHeight: 17 }}>$9,939</Text>
                        <Text style={{ fontSize: 12, fontWeight: "bold" }}>Free Delievery</Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}  >
                <View>
                    <Text style={styles.heading}>{title}</Text>
                    <Text style={styles.subHeading}>Based on your intrest</Text>
                </View>
                <View style={{ backgroundColor: "blue", borderRadius: 20, alignItems: "center", justifyContent: "center", height: 25, width: 25 }}>
                    <AntDesign
                        name="right"
                        size={13}
                        color={'#fff'}
                        style={{
                            marginLeft: 1
                        }}
                    />
                </View>
            </View>
            <Cards
                firstImg={require('../../assets/SponosorProduct/sponsorSmall1.png')}
                secondImg={require('../../assets/SponosorProduct/sponsorS1.png')}
                thirdImg={require('../../assets/SponosorProduct/sponsorSmall2.png')}
            />  
            <Cards
                firstImg={require('../../assets/SponosorProduct/sponsorSmall1.png')}
                secondImg={require('../../assets/SponosorProduct/sponsorSmall2.png')}
                thirdImg={require('../../assets/SponosorProduct/sponsorS1.png')}
            />
       
        </View>
    )
}

export default SuggestedForYou

const styles = StyleSheet.create({
    container: {
        marginHorizontal: wp("3%"),
        paddingTop: 30,
   
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10

    },
    heading: {
        fontWeight: "700",
        fontSize: 15,
        paddingBottom: 5
    },
    subHeading: {
        fontSize: 13,
        color: "#00000080"
    }
})