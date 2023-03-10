import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../assets/Colors";
import EmptyCart from "./EmptyCartScreen";
import Header from "../components/Header";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function CartScreen(props) {

  const [data, setData] = useState([
    { type: "empty" },
    { type: "Divider" },
    { type: "Sponsored" },
  ]);

  const renderMainItem = ({ item }) => {
    if (item.type === "empty") {
      return (
        <View>
          <EmptyCart />
        </View>
      );
    }
    // if (item.type === "Divider") {
    //   return (
    //     <View style={styles.list}>
    //       <Divider />
    //     </View>
    //   );
    // }
    // if (item.type === "Sponsored") {
    //   return (
    //     <View >
    //       <Text>Sponsored</Text>
    //       <Sponsored />
    //     </View>
    //   );
    // }
  };

  const keyExtractor = (item, index) => {
    return index.toString();
  };

  const renderHorizontalItem = ({ item }) => {
    return (
      <View style={styles.horizontalItem}>
        <Text>{item}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header headerTitle="My Cart" />
      {/* <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: wp("5"),
        }}
      >
        <TouchableOpacity onPress={() => setBottomCOlorSTate("left")}>
          <Text
            style={{
              color: Colors.black,
              fontSize: hp("2"),
              fontWeight: "500",
            }}
          >
            Flipkart
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setBottomCOlorSTate("right")}>
          <Text
            style={{
              color: Colors.black,
              fontSize: hp("2"),
              fontWeight: "500",
            }}
          >
            Grocery
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: wp("2"),
          justifyContent: "space-evenly",
        }}
      >
        <View
          style={{
            borderBottomColor: "blue",
            borderBottomWidth: bottomColorState == "left" ? 2 : 0,
            height: wp("5"),
            width: wp("50"),
          }}
        />

        <View
          style={{
            borderBottomColor: "blue",
            borderBottomWidth: bottomColorState == "right" ? 2 : 0,
            height: wp("5"),
            width: wp("50"),
          }}
        />
      </View> */}
      {/* <FlatList
        extraData={data}
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderMainItem}
      /> */}
      <EmptyCart/>
      {/* <Cart/> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "white",
  },
  mainItem: {
    // height: 80,
    justifyContent: "center",
    alignItems: "center",
    // margin: 10,
    backgroundColor: "yellow",
  },
  horizontalItem: {
    width: "100%",
    // height:'50%',
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    backgroundColor: "blue",
  },
  list: {
    // height: 150,
    // margin: 5,
    // backgroundColor: "red",
    // marginBottom: "20%",
  },
  swiper: {
    height: 150,
    // margin: 5,
    // backgroundColor: "red",
    marginBottom: "20%",
  },

  icon: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 10,
  },
  mall: {
    fontWeight: "400",
    // backgroundColor: "red",
    // marginTop: 10,
  },

  image: {
    height: 40,
    width: 40,
  },
  row: {
    flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "center",
    alignItems: "flex-start",
    // paddingVertical: 15,
  },
  logo: {
    color: Colors.black,
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 26,
    marginTop: 10,
  },
});
