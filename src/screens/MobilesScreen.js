import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  //   SafeAreaView,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import RecentStores from "../components/RecentStores";
import Sponsored from "../components/Sponsored";
import Colors from "../../assets/Colors";
import MySwiper from "../components/Swipper";
import Spacer from "../components/Spacer";
import Best from "../components/BestQuality";
import Top from "../components/TopProducts";
import ImageContainer from "../components/Mobiles/MobileAd";
import MobileList from "../components/Mobiles/MobilesList";
import HorizontalMobile from "../components/Mobiles/HorizontalMobileList";
import TopPicks from "../components/Mobiles/TopPicks";
import Launches from "../components/Mobiles/LatestLaunches";
import SamsungList from "../components/Mobiles/SamsungList";
import Grab from "../components/Mobiles/GrabList";
import UpCommingLaunches from "../components/Mobiles/UpCommingLaunches";
import BestSelling from "../components/Mobiles/BestSelling";
import RealMeSeries from "../components/Mobiles/RealMeSeries";
import PocoSeries from "../components/Mobiles/PocoSeries";
import MotrolaSeries from "../components/Mobiles/MotrolaSeries";
import RemiSeries from "../components/Mobiles/RemiSeries";
import VivoSeries from "../components/Mobiles/VivoSeries";
import IphoneSeries from "../components/Mobiles/IphoneSeries";
import GoogleSeries from "../components/Mobiles/GoogleSeries";
import OppoSeries from "../components/Mobiles/OppoSeries";
import InfinixSeries from "../components/Mobiles/InfinixSeries";
import MicromaxSeries from "../components/Mobiles/MicromaxSeries";
import LavaSeries from "../components/Mobiles/LavaSeries";
const Mobiles = ({ navigation }) => {
  const [isOn, setIsOn] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  const data = [
    { type: "image" },
    { type: "MobileList" },
    { type: "swiper" },
    { type: "HorizontalList" },
    { type: "LatestLaunches" },
    { type: "UpCommingLaunches" },
    { type: "LatestLaunches1" },
    { type: "BestSelling" },
    { type: "image" },
    { type: "Grab" },
    { type: "justLaunched" },
    { type: "RealMeSeries" },
    { type: "PocoSeries" },
    { type: "SamsungSeries" },
    { type: "MotrolaSeries" },
    { type: "RedmiSeries" },
    { type: "VivoSeries" },
    { type: "Iphone" },
    { type: "GoogleSeries" },
    { type: "OppoSeries" },
    { type: "InfinixSeries" },
    { type: "MicromaxSeries" },
    { type: "LavaSeries" },
  ];

  const renderMainItem = ({ item }) => {
    if (item.type === "MobileList") {
      return (
        <View style={[styles.list]}>
          <MobileList />
        </View>
      );
    }
    if (item.type === "swiper") {
      return (
        <View style={[styles.swiper]}>
          <MySwiper />
        </View>
      );
    }
    if (item.type === "HorizontalList") {
      return (
        <View style={{}}>
          <HorizontalMobile />
        </View>
      );
    }
    if (item.type === "LatestLaunches") {
      return (
        <View style={styles.list}>
          <Launches
            titleImage={require('../../assets/images/Mobiles/MobileImages_1/IMG_1688.png')}
            FirstLargeImage={require('../../assets/images/Mobiles/MobileImages_1/IMG_1689.png')}
            largeImageHeight={180}
            card1={require('../../assets/images/Mobiles/MobileImages_1/IMG_1690.png')}
            card2={require('../../assets/images/Mobiles/MobileImages_1/IMG_1691.png')}
            launchedImages={true}
          />
        </View>
      );
    }
    if (item.type === "UpCommingLaunches") {
      return (
        <View style={styles.list}>
          <UpCommingLaunches 
            titleImg={require('../../assets/images/Mobiles/MobileImages_2/IMG_1701.png')}
          />
        </View>
      );
    }

    if (item.type === "LatestLaunches1") {
      return (
        <View style={styles.list}>
          <Launches
            titleImage={require('../../assets/images/Mobiles/MobileImages_2/IMG_1703.png')}
            FirstLargeImage={require('../../assets/images/Mobiles/MobileImages_2/IMG_1704.png')}
            largeImageHeight={280}
            card1={require('../../assets/images/Mobiles/MobileImages_2/IMG_1705.png')}
            card2={require('../../assets/images/Mobiles/MobileImages_2/IMG_1706.png')}
            largeImageExtra1={require('../../assets/images/Mobiles/MobileImages_2/IMG_1707.png')}
            largeImageExtra2={require('../../assets/images/Mobiles/MobileImages_2/IMG_1708.png')}
            cardExtra1={require('../../assets/images/Mobiles/MobileImages_2/IMG_1709.png')}
            cardExtra2={require('../../assets/images/Mobiles/MobileImages_2/IMG_1710.png')}
            launchedImages1={true}
          />
        </View>
      );
    }


    if (item.type === "BestSelling") {
      return (
        <View style={styles.list}>
          <BestSelling
            titleImg={require('../../assets/images/Mobiles/MobileImages_2/IMG_1711.png')}
            showBestSelling={true}

          />
        </View>
      );
    }
    if (item.type === "Grab") {
      return (
        <View style={styles.list}>
          {/* For Grab data we used BestSelling comp bcoz LookWise both are same */}
          <BestSelling
            titleImg={require('../../assets/images/Mobiles/MobileImages_2/IMG_1716.png')}
            showGrabData={true}
          />
        </View>
      );
    }


    if (item.type === "justLaunched") {
      return (
        <View style={styles.list}>
          {/* For Grab data we used UpCommingLaunches comp bcoz LookWise both are same */}
          {/* we used swiperComp here with boolean*/}
          <UpCommingLaunches
            titleImg={require('../../assets/images/Mobiles/MobileImages_3/IMG_1722.png')}
            showSlider={true}
          />
        </View>
      );
    }

    if (item.type === "RealMeSeries") {
      return (
        <View style={styles.list}>
         <RealMeSeries
            realMeDesign={require('../../assets/images/Mobiles/MobileImages_3/IMG_1728.png')}
            titleImg={require('../../assets/images/Mobiles/MobileImages_3/IMG_1729.png')}
         
         />
        </View>
      );
    }

    if (item.type === "PocoSeries") {
      return (
        <View style={styles.list}>
         <PocoSeries
            pocoDesign={require('../../assets/images/Mobiles/MobileImages_4/IMG_1744.png')}
            // titleImg={require('../../assets/images/Mobiles/MobileImages_3/IMG_1729.png')}
         
         />
        </View>
      );
    }


    if (item.type === "SamsungSeries") {
      return (
        <View style={styles.list}>
         <SamsungList
            samsungDesign={require('../../assets/images/Mobiles/MobileImages_4/IMG_1749.png')}
            // titleImg={require('../../assets/images/Mobiles/MobileImages_3/IMG_1729.png')}
         
         />
        </View>
      );
    }  
    
    if (item.type === "MotrolaSeries") {
      return (
        <View style={styles.list}>
         <MotrolaSeries
            motrolaDesign={require('../../assets/images/Mobiles/MobileImages_4/IMG_1759.png')}
            // titleImg={require('../../assets/images/Mobiles/MobileImages_3/IMG_1729.png')}
         
         />
        </View>
      );
    }   
    
    if (item.type === "RedmiSeries") {
      return (
        <View style={styles.list}>
         <RemiSeries
            redmiDesign={require('../../assets/images/Mobiles/MobileImages_5/IMG_1775.png')}
         
         />
        </View>
      );
    }


    if (item.type === "VivoSeries") {
      return (
        <View style={styles.list}>
         <VivoSeries
            vivoDesign={require('../../assets/images/Mobiles/MobileImages_5/IMG_1789.png')}
         
         />
        </View>
      );
    }   
    
    if (item.type === "Iphone") {
      return (
        <View style={styles.list}>
         <IphoneSeries
            iphoneDesign={require('../../assets/images/Mobiles/MobileImages_6/IMG_1796.png')}
         />
        </View>
      );
    }  
    
    if (item.type === "GoogleSeries") {
      return (
        <View style={styles.list}>
         <GoogleSeries
            googleDesign={require('../../assets/images/Mobiles/MobileImages_6/IMG_1805.png')}
         />
        </View>
      );
    }
    
    if (item.type === "OppoSeries") {
      return (
        <View style={styles.list}>
         <OppoSeries
           oppoDesign={require('../../assets/images/Mobiles/MobileImages_6/IMG_1809.png')}
           titleImg={require('../../assets/images/Mobiles/MobileImages_6/IMG_1810.png')}
         />
        </View>
      );
    }


    if (item.type === "InfinixSeries") {
      return (
        <View style={styles.list}>
         <InfinixSeries
           infinixDesign={require('../../assets/images/Mobiles/MobileImages_7/IMG_1825.png')}
         />
        </View>
      );
    }  
    
    if (item.type === "MicromaxSeries") {
      return (
        <View style={styles.list}>
         <MicromaxSeries
           micromaxDesign={require('../../assets/images/Mobiles/MobileImages_7/IMG_1840.png')}
         />
        </View>
      );
    } 
    
    if (item.type === "LavaSeries") {
      return (
        <View style={styles.list}>
         <LavaSeries
           lavaDesign={require('../../assets/images/Mobiles/MobileImages_8/IMG_1843.png')}
         />
        </View>
      );
    }







    if (item.type === "TopPicks") {
      return (
        <View style={styles.list}>
          <TopPicks />
        </View>
      );
    }
    if (item.type === "TopProduct") {
      return (
        <View style={styles.list}>
          <Top />
        </View>
      );
    }
  };

  const keyExtractor = (item, index) => index.toString();



  const clearOnboarding = async () => {
    try {
      await AsyncStorage.removeItem("@viewedOnboarding");
    } catch (error) {
      console.log("Error @clearOnboarding: ", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <AntDesign name="arrowleft" size={20}  />
        </TouchableOpacity>
        <Text style={{fontSize:18}}>Mobile</Text>
      </View>
      <Spacer />
   <View style={{backgroundColor:"#fff"}}>
   <FlatList
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderMainItem}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
      />
   </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.white,
  },
  header:{
    flexDirection:"row",
    justifyContent:"space-between",
    width:"60%",
    paddingHorizontal:10,
    paddingTop:40
  
  },
  mainItem: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
  horizontalItem: {
    width: wp("100%"),
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: hp('2'),
    backgroundColor: "blue",
  },
  list: {
 
  },
  swiper: {
    height: hp("20"),
   
    marginBottom: hp("1%"),
    alignSelf: "flex-start",
  },

  icon: {
    fontSize: hp("5%"),
    alignSelf: "center",
    marginHorizontal: 10,
  },
  mall: {
    fontWeight: "400",
  
  },

  image: {
    height: 40,
    width: 40,
  },
  row: {
    flexDirection: "row",
  },
  logo: {
    color: Colors.black,
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 26,
    marginTop: 10,
  },
  bar: {
    backgroundColor: "#F0EEEE",
    backgroundColor: "red",
    height: 40,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    width: "75%",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 0.3,
  },
  input: {
    flex: 1,
    fontSize: 18,
    padding: 10,
  },
  bar: {
    backgroundColor: "#F0EEEE",
    height: 40,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    width: "75%",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 0.3,
  },
  input: {
    flex: 1,
    fontSize: 18,
    padding: 10,
  },
  recentSearchesContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 50,
  },
  recentSearchesTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  searchbg: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
  text: {
    fontSize: 12,
    fontWeight: "500",
  },
  label: {
    fontSize: 18,
    fontWeight: "500",
    margin: wp("2%"),
    // backgroundColor:'pink',
    alignItems: "center",
    justifyContent: "center",
    // marginTop:hp('5')
  },
  verticalList: {
    height: "40%",
  },
  placeholder: {
    color: Colors.fadedgray,
    fontSize: 18,
    fontWeight: "500",
  },
});

export default Mobiles;
