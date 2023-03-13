import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, Image, StyleSheet } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import AntDesign from "react-native-vector-icons/AntDesign";
import Colors from "../../assets/Colors";
import Feather from "react-native-vector-icons/Feather";

const CategoryScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View  style={styles.containerHeader}>
        <Text  style={styles.headerTitle} >
          All Categories
        </Text>
        <View style={styles.headerRightIcons}  >
          <AntDesign
            name="search1"
            style={{ marginRight: wp("6") }}
            size={20}
            color={"grey"}
          />
          <Feather name="mic" size={20} color={"grey"} />
        </View>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.rounded}
          onPress={() => navigation.navigate("Mobiles")}
        >
          <Image
            style={styles.image}
            source={require("../../assets/Category/IMG_2055.jpg")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.rounded}>
          <Image
            style={styles.image}
            source={require("../../assets/Category/IMG_2057.jpg")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.rounded}
          onPress={() =>{}}
        >
          <Image
            style={styles.image}
            source={require("../../assets/Category/IMG_2057.jpg")}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  containerHeader:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: wp("5"),
  },
  headerTitle:{
    color: Colors.black,
    fontWeight: "500",
    fontSize: hp("2.2"),
  },
  headerRightIcons:{
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: hp("11"),
    width: wp("22"),
    borderColor: Colors.fadedgray,
  },
  rounded: {
    margin: hp("1"),
  },
  row: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    flex: 1,
    paddingTop: hp("1"),
  },
});

export default CategoryScreen;
