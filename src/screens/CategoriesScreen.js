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
      <View style={styles.containerHeader}>
        <Text style={styles.headerTitle} >
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

      <View style={[styles.row, { justifyContent: "space-between" }]}>
        <TouchableOpacity style={styles.rounded}
          onPress={() => navigation.navigate("Mobiles")}
        >
          <Image
            style={styles.image}
            source={require("../../assets/Category/IMG_2055.jpg")}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.rounded}
          onPress={() => navigation.navigate("LaptopDesktop")}
        >
          <Image
            style={styles.image}
            source={require("../../assets/Category/Category_1/IMG_2472.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.rounded}
          onPress={() => navigation.navigate("TabletsScreen")}
        >
          <Image
            style={styles.image}
            source={require("../../assets/Category/Category_1/IMG_2474.png")}

          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.rounded}
          onPress={() => navigation.navigate("SmartWearables")}
        >
          <Image
            style={styles.image}
            source={require("../../assets/Category/Category_1/IMG_2471.png")}
          />
        </TouchableOpacity>
      </View>

      <View style={[styles.row, { justifyContent: "space-between" }]}>
        <TouchableOpacity style={styles.rounded}
          onPress={() => navigation.navigate("HeadPhones")}
        >
          <Image
            style={styles.image}
            source={require("../../assets/Category/Category_1/IMG_2473.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.rounded}
          onPress={() => navigation.navigate("CompPheripherals")}
        >
          <Image
            style={styles.image}
            source={require("../../assets/Category/Category_1/IMG_2475.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.rounded}
          onPress={() => navigation.navigate("MobProtection")}
        >
          <Image
            style={styles.image}
            source={require("../../assets/Category/Category_1/IMG_2476.png")}

          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.rounded}
          onPress={() => navigation.navigate("PowerBanks")}
        >
          <Image
            style={styles.image}
            source={require("../../assets/Category/Category_1/IMG_2477.png")}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.rounded}
          onPress={() => navigation.navigate("DataStorage")}
        >
          <Image
            style={styles.image}
            source={require("../../assets/Category/Category_1/IMG_2478.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.rounded}
          onPress={() => navigation.navigate("HomeAudio")}
        >
          <Image
            style={styles.image}
            source={require("../../assets/Category/Category_1/IMG_2479.png")}
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
  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: wp("5"),
  },
  headerTitle: {
    color: Colors.black,
    fontWeight: "500",
    fontSize: hp("2.2"),
  },
  headerRightIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: hp("11"),
    width: wp("22"),
    borderColor: Colors.fadedgray,
  },
  rounded: {
    // marginLeft:6,
  },
  row: {
    flexDirection: "row",
    paddingTop: hp("1"),
  },
});

export default CategoryScreen;
