import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import Colors from "../../assets/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Spacer from "./Spacer";
import Divider from "./Divider";
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
    price: "$100",
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
    price: "$100",
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
    price: "$100",
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
    price: "$100",
  },
];

const Sponsored = () => {
  return (
    <View style={styles.container}>
      <Spacer />
      <Text style={styles.heading}>Sponsored</Text>
      <Spacer />

      <View style={styles.border}>
        <View style={styles.card}>
          <Image
            source={require("../../assets/sponsor/IMG_1635.jpg")}
            style={{
              height: hp("16"),
              width: wp("32"),
            }}
          />
          <Image
            source={require("../../assets/sponsor/IMG_1636.jpg")}
            style={{
              height: hp("16"),
              width: wp("32"),
            }}
          />
          <Image
            source={require("../../assets/sponsor/IMG_1637.jpg")}
            style={{
              height: hp("16"),
              width: wp("32"),
            }}
          />
        </View>

        <View style={styles.card}>
          <Image
            source={require("../../assets/sponsor/IMG_1638.jpg")}
            style={{
              height: hp("16"),
              width: wp("32"),
            }}
          />
          <Image
            source={require("../../assets/sponsor/IMG_1639.jpg")}
            style={{
              height: hp("16"),
              width: wp("32"),
            }}
          />
          <Image
            source={require("../../assets/sponsor/IMG_1640.jpg")}
            style={{
              height: hp("16"),
              width: wp("32"),
            }}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  heading: {
    fontSize: hp("2.2"),
    fontWeight: "500",
    marginLeft: wp("4%"),
  },

  image: {
    height: hp("10%"),
    width: wp("50"),
    resizeMode: "contain",
  },
  item: {
    fontSize: hp("1.5"),
    fontWeight: "400",
  },
  imageCard: {
    height: hp("15"),
    width: wp("30"),
    resizeMode: "cover",
    borderRadius: 10,
  },
  card: {
    flexDirection: "row",
    height: hp("17"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: wp("5%"),
    paddingBottom: wp("2%"),
    borderBottomColor: "rgba(0,0,0,0.1)",
    borderBottomWidth: 4,
  },
  border: {},
});

export default Sponsored;
