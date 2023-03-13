import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Colors from "../../../assets/Colors";

const data = [
  {
    id: 0,
    sender: "Victoria Hanson",
    email: "@vicky23hanson",
    text: "realme",
    senderType: "user",
    imgPath:require('../../../assets/images/Mobiles/MobileImages_1/IMG_1670.png'),
    price: "$100",
  },
  {
    id: 1,
    sender: "Victoria Hanson",
    email: "@vicky23hanson",
    text: "Samsung",
    senderType: "user",
    imgPath:require('../../../assets/images/Mobiles/MobileImages_1/IMG_1679.png'),
    price: "$100",
  },
  {
    id: 2,
    sender: "Victoria Hanson",
    email: "@vicky23hanson",
    text: "vivo",
    senderType: "other",
    imgPath:require('../../../assets/images/Mobiles/MobileImages_1/IMG_1672.png'),
    price: "$100",
  },
  {
    id: 3,
    sender: "Victoria Hanson",
    email: "@vicky23hanson",
    text: "Apple",
    senderType: "user",
    imgPath:require('../../../assets/images/Mobiles/MobileImages_1/IMG_1673.png'),
    price: "$100",
  },
  {
    id: 4,
    sender: "Victoria Hanson",
    email: "@vicky23hanson",
    text: "OPPO",
    senderType: "user",
    imgPath:require('../../../assets/images/Mobiles/MobileImages_1/IMG_1674.png'),
    price: "$100",
  },
  {
    id: 5,
    sender: "Victoria Hanson",
    email: "@vicky23hanson",
    text: "POCO",
    senderType: "user",
    imgPath:require('../../../assets/images/Mobiles/MobileImages_1/IMG_1675.png'),
    price: "$100",
  },
  {
    id: 6,
    sender: "Victoria Hanson",
    email: "@vicky23hanson",
    text: "Xiaomi",
    senderType: "user",
    imgPath:require('../../../assets/images/Mobiles/MobileImages_1/IMG_1676.png'),
    price: "$100",
  },
  {
    id: 7,
    sender: "Victoria Hanson",
    email: "@vicky23hanson",
    text: "Nothing",
    senderType: "user",
    imgPath:require('../../../assets/images/Mobiles/MobileImages_1/IMG_1677.png'),
    price: "$100",
  },
  {
    id: 8,
    sender: "Victoria Hanson",
    email: "@vicky23hanson",
    text: "motorola",
    senderType: "user",
    imgPath:require('../../../assets/images/Mobiles/MobileImages_1/IMG_1678.png'),
    price: "$100",
  },
  {
    id: 9,
    sender: "Victoria Hanson",
    email: "@vicky23hanson",
    text: "Pixel",
    senderType: "user",
    imgPath:require('../../../assets/images/Mobiles/MobileImages_1/IMG_1679.png'),
    price: "$100",
  },
  {
    id: 10,
    sender: "Victoria Hanson",
    email: "@vicky23hanson",
    text: "Pixel",
    senderType: "user",
    imgPath:require('../../../assets/images/Mobiles/MobileImages_1/IMG_1680.png'),
    price: "$100",
  },
  {
    id: 11,
    sender: "Victoria Hanson",
    email: "@vicky23hanson",
    text: "Pixel",
    senderType: "user",
    imgPath:require('../../../assets/images/Mobiles/MobileImages_1/IMG_1681.png'),
    price: "$100",
  },
];

const MobileList = () => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View style={{  }}>
              <View style={styles.card}>
                <TouchableOpacity style={{}}>
                  <Image
                    source={item.imgPath }
                    style={{
                      height: 100,
                      width: 70,
                      borderRadius: 50,
                      resizeMode: "center",
                    }}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    // alignItems: "center",
                    // margin: hp("1"),
                    // backgroundColor: "red",
                    // width: wp("20"),
                    // alignSelf: "center",
                  }}
                >
                  {/* <Text>{item.text}</Text> */}
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 50,
    // margin: wp("1"),
    // marginRight:20,
    // backgroundColor: 'black',
    // width: wp("15"),
    // height: hp("7"),
    // borderColor: Colors.white,
    // borderWidth: 1,
    // alignItems:'center'
  },
  imageContainer: {
    // backgroundColor: "pink",
    // height: "60%",
    width: "100%",
  },
  listContainer: {
    // backgroundColor: "pink",
    height: hp("12"),
  },
});

export default MobileList;
