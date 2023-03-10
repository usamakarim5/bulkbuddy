import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { SafeAreaView } from "react-native-safe-area-context";

import AsyncStorage from "@react-native-async-storage/async-storage";
import AntDesign from "react-native-vector-icons/AntDesign";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";

import Sponsored from "../components/Sponsored";
import Colors from "../../assets/Colors";
import MySwiper from "../components/Swipper";
import Spacer from "../components/Spacer";
import Best from "../components/BestQuality";
import Top from "../components/TopProducts";
import TravelEssential from "../components/TravelEssentails";
import CustomButton from "../components/CustomButton";
import SponsoredProduct from "../components/SponsoredProduct";
import SuggestedForYou from "../components/SuggestedForYou";

const HomeScreen = ({ navigation }) => {

  const [status, setStatus] = useState('Bulk Buddy');

  const data = [
    { type: "Swiper" },
    { type: "HorizontalCard" },
    { type: "TravelEssential" },
    { type: "Sponsored" },
    { type: "BestQuality" },
    { type: "RecentStores" },
    { type: "SponsoredProduct" },
    { type: "TopProduct" },
    { type: "SuggestedForYou" },
    { type: "SponsoredProduct1" },
    { type: "TopProduct1" },
    { type: "PeopleAlsoViewed" },
    { type: "RecentStores" },
    { type: "SuggestedForYou1" },
  ];

  const renderMainItem = ({ item, index }) => {
    if (item.type === "Swiper") {
      return (
        <View key={index} style={styles.swiper}>
          <MySwiper />
        </View>
      );
    }

    if (item.type === "Sponsored") {
      return (
        <View key={index}>
          <Sponsored />
        </View>
      );
    }
    if (item.type === "BestQuality") {
      return (
        <View key={index}>
          <Best />
        </View>
      );
    }
    if (item.type === "SponsoredProduct"){
      return(
        <View style={{width:"100%"}}>
           <View style={{paddingVertical:15,paddingLeft:10}}>
             <Text style={{fontWeight:"bold",fontSize:15}}>Sponosored Product</Text>
           </View>
           <SponsoredProduct
            largeImage = {require('../../assets/SponosorProduct/sponsorLarge.png')}
            smallImage1 = {require('../../assets/SponosorProduct/sponsorSmall1.png')}
            smallImage2 ={require('../../assets/SponosorProduct/sponsorSmall1.png')}
           />
        </View>
      )
    }
    if (item.type === "TopProduct") {
      return (
        <View key={index}>
          <Top 
           title={'Top product'}
          />
        </View>
      );
    }

    if(item.type == 'SuggestedForYou'){
      return(
        <View>
          <SuggestedForYou
          title={'Suggested For You'}
          />
        </View>
      )
    }

    if (item.type === "SponsoredProduct1"){
      return(
        <View style={{width:"100%"}}>
           <View style={{paddingVertical:15,paddingLeft:10}}>
             <Text style={{fontWeight:"bold",fontSize:15}}>Sponosored Product</Text>
           </View>
           <SponsoredProduct
            largeImage = {require('../../assets/SponosorProduct/sponsorLarge.png')}
            smallImage1 = {require('../../assets/SponosorProduct/sponsorS1.png')}
            smallImage2 ={require('../../assets/SponosorProduct/sponsorS2.png')}
           />
        </View>
      )
    }


    if (item.type === "TopProduct1") {
      return (
        <View key={index}>
          <Top 
          title={'Shop for a cool summer'}
          style={{backgroundColor:'#FFD580'}}

          />
        </View>
      );
    }



    if (item.type === "TravelEssential") {
      return (
        <View key={index} style={styles.list}>
          <TravelEssential />
        </View>
      );
    }
    if (item.type === "HorizontalCard") {
      return (
        <View key={index} style={styles.horizontalCard}>
          <View
            style={{ borderRadius: 3, borderColor: 0.5, borderColor: "#000" }}
          >
            <Image
              source={require("../../assets/imageee/IMG_1632.jpg")}
              style={styles.horizontalCardImage}
            />
          </View>
          <View
            style={{ borderRadius: 3, borderColor: 0.5, borderColor: "#000" }}
          >
            <Image
              source={require("../../assets/imageee/IMG_1633.jpg")}
              style={styles.horizontalCardImage}
            />
          </View>
          <View
            style={{ borderRadius: 3, borderColor: 0.5, borderColor: "#000" }}
          >
            <Image
              source={require("../../assets/imageee/IMG_1634.jpg")}
              style={styles.horizontalCardImage}
            />
          </View>
        </View>
      );
    }
    if(item.type == 'SuggestedForYou1'){
      return(
        <View>
          <SuggestedForYou
          title={"On Everybody's list "}
          />
        </View>
      )
    }
  };

  const keyExtractor = (item, index) => index.toString();

  const renderHorizontalItem = ({ item }) => {
    return (
      <View style={styles.horizontalItem}>
        <Text>{item}</Text>
      </View>
    );
  };

  // render() {
  const clearOnboarding = async () => {
    try {
      await AsyncStorage.removeItem("@viewedOnboarding");
    } catch (error) {
      console.log("Error @clearOnboarding: ", error);
    }
  };



  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={[styles.row]}>
        <Image source={require("../../assets/logo.jpg")} style={styles.image} />
        <Text style={styles.logo}>Bulkbuddy</Text>
      </View> */}

      <View style={styles.headerBtn}>
        <CustomButton
          title={'Bulk Buddy'}
          imgPath={require('../../assets/logo.jpg')}
          style={{ backgroundColor: status == 'Bulk Buddy' ? '#2874F0' : '#F6F6F6', paddingHorizontal: 36 }}
          textStyle={{ color: status == 'Bulk Buddy' ? '#fff' : '#000' }}
          onPress={() => setStatus('Bulk Buddy')}
        />
        <CustomButton
          title={'Prime Partner'}
          imgPath={require('../../assets/logo.jpg')}
          style={{ backgroundColor: status == 'Prime Partner' ? '#2874F0' : '#F6F6F6', paddingHorizontal: 26 }}
          onPress={() => setStatus('Prime Partner')}
          textStyle={{ color: status == 'Prime Partner' ? '#fff' : '#000' }}

        />
      </View>

      <Spacer />
      <View style={styles.row} >
        <TouchableOpacity
          style={styles.bar}
          onPress={() => navigation.navigate("Search")}
        >
          <View style={styles.icon}>
            <AntDesign name="search1" size={18} color={"grey"} />
          </View>
          <Text style={styles.placeholder}>Search for products</Text>

          <View style={styles.inputRightIcons}>
            <Feather
              name="mic"
              size={18}
              style={{ marginRight: 8 }}
              color={"grey"}
            />
            <EvilIcons name="camera" size={30} color={"grey"} />
          </View>
        </TouchableOpacity>
      </View>
      <Spacer />

      {
        status == 'Bulk Buddy' ?
          <FlatList
            data={data}
            keyExtractor={keyExtractor}
            renderItem={renderMainItem}
            nestedScrollEnabled={true}
          />
          :
          <View style={{ height: '100%', alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 24 }}>This is Prime Partner Page</Text>
          </View>
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: wp("15%"),
    backgroundColor: "white",
  },
  mainItem: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
  headerBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 14
  },
  horizontalItem: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    backgroundColor: "blue",
  },
  list: {},
  swiper: {
    height: 150,
    marginBottom: hp("4%"),
  },
  icon: {
    fontSize: hp("5%"),
    alignSelf: "center",
    marginHorizontal: 10,
  },
  image: {
    height: 40,
    width: 40,
  },
  row: {
    flexDirection: "row",
    paddingVertical: wp("1%"),
    alignItems: "center",
     justifyContent: "center" 
  },
  logo: {
    color: Colors.black,
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 26,
    marginTop: 10,
  },
  bar: {
    backgroundColor: "#F6F6F6",
    height: 40,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    width: "92%",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 0.3,
  },
  text: {
    fontSize: 11,
    fontWeight: "500",
    color: "rgba(0,0,0,0.7)",
  },
  placeholder: {
    color: "grey",
  },
  inputRightIcons:{
    flexDirection: "row",
    position: "absolute",
    right: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  horizontalCard: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  horizontalCardImage: {
    height: hp("17"),
    width: wp("29"),
    margin: hp("1"),
  },
});

export default HomeScreen;
