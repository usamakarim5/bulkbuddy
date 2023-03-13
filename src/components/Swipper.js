import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
const { height: screenHeight } = Dimensions.get("window");
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";


const MySwiper = ({showSlider}) => {
  
  const imageList = [
    {
      srcc: require("../../assets/images/Mobiles/MobileImages_1/IMG_1682.png"),
    }, 
     {
      srcc: require("../../assets/images/Mobiles/MobileImages_1/IMG_1683.png"),
    }, 
     {
      srcc: require("../../assets/images/Mobiles/MobileImages_1/IMG_1684.png"),
    },
   
    // add more images as needed
  ];
  
  
  const justLaunchedImagesList = [
    {
      srcc: require("../../assets/images/Mobiles/MobileImages_3/IMG_1723.png"),
    }, 
     {
      srcc: require("../../assets/images/Mobiles/MobileImages_3/IMG_1724.png"),
    }, 
     {
      srcc: require("../../assets/images/Mobiles/MobileImages_3/IMG_1725.png"),
    }, 
     {
      srcc: require("../../assets/images/Mobiles/MobileImages_3/IMG_1726.png"),
    },
  ];
  
  // Here we used this for justLaunched section as well as header swiper
  const data = showSlider ? justLaunchedImagesList : imageList
 
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
        {data.map((item, index) => (
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
