import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
import Spacer from "./Spacer";
const { height: screenHeight } = Dimensions.get("window");
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const imageList = [
  {
    srcc: require("../../assets/image/IMG_1629.jpg"),
  },
  {
    srcc: require("../../assets/image/IMG_1631.jpg"),
  },
  {
    srcc: require("../../assets/image/IMG_1651.jpg"),
  },
  {
    srcc: require("../../assets/image/IMG_1659.jpg"),
  },
  {
    srcc: require("../../assets/image/IMG_1667.jpg"),
  },
  // add more images as needed
];


const MySwiper = () => {

 
  return (
    <View style={styles.container}>
      <Swiper
        loop
        autoplay
        activeDotColor={"white"}
        activeDotStyle={{ marginBottom: -wp("2%") }}
        dotStyle={{ backgroundColor: "grey", marginBottom: -wp("2%") }}
        style={styles.swiper}
        dot={<View style={{backgroundColor:'rgba(0,0,0,.2)', width: 15, height: 5,borderRadius: 4, marginLeft: 10, marginBottom: -13}} />}
        activeDot={<View style={{backgroundColor: '#fff', width: 15, height: 5, borderRadius: 4, marginLeft: 10, marginRight: 3, marginBottom: -13,}} />}
      >
        {imageList.map((item, index) => (
          <View key={index}>
            <Image
              source={item.srcc}
              style={{ width: "100%", height: "100%", resizeMode: "cover" }}
            />
          </View>
        ))}
      </Swiper>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // height:'40%'
    // paddingBottom: "5%",
    // marginBottom: "20%",
    // width: wp("100%"),
    height: screenHeight * 0.2, // set the height of the container to 30% of the screen height
  },
  swiper: {
    height: "100%",
  },
  slide: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
export default MySwiper;
