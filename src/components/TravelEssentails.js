import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import Colors from "../../assets/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Spacer from "./Spacer";
import AntDesign from "react-native-vector-icons/AntDesign";

const data = [
  {
    id: 1,
    sender: "Victoria Hanson",
    email: "@vicky23hanson",
    text: "Lorem ipsum dolor sit amit dolor connectsur?",
    senderType: "user",
    avatar:
      "https://img.freepik.com/free-photo/headlights-new-red-car-car-dealership_146671-14964.jpg?size=626&ext=jpg&uid=R94214209&ga=GA1.1.1081558094.1677063520&semt=sph",
    image: "https://www.bootdey.com/image/580x580/00BFFF/000000",
    price: "Min. 70% Off",
  },
  {
    id: 3,
    sender: "Victoria Hanson",
    email: "@vicky23hanson",
    text: "Lorem ipsum dolor sit amit dolor connectsur",
    senderType: "user",
    avatar:
      "https://img.freepik.com/free-photo/white-offroader-jeep-parking_114579-4007.jpg?size=626&ext=jpg&uid=R94214209&ga=GA1.1.1081558094.1677063520&semt=sph",
    image: "https://www.bootdey.com/image/580x580/008000/000000",
    price: "Min. 70% Off",
  },
  {
    id: 2,
    sender: "Victoria Hanson",
    email: "@vicky23hanson",
    text: "Lorem ipsum dolor sit amit dolor connectsur",
    senderType: "other",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUw1NPtqr3urF9LZaIn-Hf8XtPMP796ZMUUA&usqp=CAU",
    image: "https://www.bootdey.com/image/580x580/FF00FF/000000",
    price: "Min. 70% Off",
  },
  {
    id: 4,
    sender: "Victoria Hanson",
    email: "@vicky23hanson",
    text: "Lorem ipsum dolor sit amit dolor connectsur",
    senderType: "user",
    avatar:
      "https://img.freepik.com/free-photo/yellow-sport-car-with-black-autotuning-road_114579-5051.jpg?size=626&ext=jpg&uid=R94214209&ga=GA1.1.1081558094.1677063520&semt=sph",
    image: "https://www.bootdey.com/image/580x580/008000/000000",
    price: "Min. 70% Off",
  },
];

const TravelEssential = () => {
  return (
    <View style={styles.container}>
      <Spacer />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: wp("4%"),
        }}
      >
        <Text style={styles.heading}>Travel Essential</Text>
        <View style={{ backgroundColor: "blue", borderRadius: 20,alignItems:"center",justifyContent:"center",height:25,width:25}}>
          <AntDesign
            name="right"
            size={13}
            color={'#fff'}
            style={{
              marginLeft:1
            }}
          />
        </View>
      </View>
      <Spacer />
      <FlatList
        showsHorizontalScrollIndicator={false}
        numColumns={2}
        data={data}
        keyExtractor={(item, index) => index}
        renderItem={({ item, index }) => {
          return (
            <View key={index}>
              <View style={styles.card}>
                <Image source={{ uri: item.avatar }} style={styles.image} />
                <Spacer />
                <Text style={styles.item}>{item.sender}</Text>
                <Text
                  style={{
                    fontSize: hp("2"),
                    fontWeight: "400",
                    color: "green",
                  }}
                >
                  {item.price}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
  },
  heading: {
    fontWeight: "700",
    fontSize:15
  },
  card: {
    borderRadius: hp("1"),
    borderColor: Colors.black,
    backgroundColor: Colors.white,
    margin: hp("1"),
    padding: hp("1"),
  },
  image: {
    alignSelf: "center",
    height: hp("20"),
    width: wp("41"),
  },
  item: {
    fontSize: hp("1.5"),
    fontWeight: "400",
  },
});

export default TravelEssential;
