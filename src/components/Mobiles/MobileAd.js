import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Colors from "../../../assets/Colors";
import Spacer from "../Spacer";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";

const ImageContainer = () => {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical:wp('2'),
          marginHorizontal:wp('5')
        }}
      >
        <Text
          style={{
            color: Colors.black,
            fontWeight: "500",
            fontSize: hp("2.2"),
          }}
        >
          Mobile Phones
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AntDesign
            name="search1"
            style={{ marginRight: wp("6") }}
            size={20}
            color={"grey"}
          />
          <Feather name="mic" size={20} color={"grey"} />
        </View>
      </View>
      <View style={styles.container}>
        <Image
          style={{ width: "100%", height: "95%", resizeMode: "cover" }}
          source={{
            uri: "https://img.freepik.com/free-photo/blue-sport-sedan-parked-yard_114579-5078.jpg?size=626&ext=jpg&uid=R94214209&ga=GA1.2.1081558094.1677063520&semt=sph",
          }}
        />
        <Spacer />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp("100%"),
    height: hp("25"),
    // backgroundColor: "pink",
    // margin:hp('3'),
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ImageContainer;
