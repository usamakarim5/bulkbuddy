import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Colors from "../../assets/Colors";

// const size = "150%";
// const color = Colors.fadedgray;

const optionSize = 20;
const optionColor = Colors.black;

const EmptyCart = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <MaterialCommunityIcons
          name="cart-variant"
          size={30}
          color={'#000'}
          style={styles.icon}
        />
        <Text style={styles.empty}>Missing Cart items?</Text>
        <Text style={styles.loginText}>
          Login to see the items you added previously
        </Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.continueText}>
          Continue Shopping
        </Text>
      </View>
      {/* <View style={styles.row}>
        <TouchableOpacity style={styles.option}>
          <MaterialCommunityIcons
            name="security"
            size={optionSize}
            color={optionColor}
            style={styles.optionIcon}
          />
          <Text> Authentic Products</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <MaterialCommunityIcons
            name="security"
            size={optionSize}
            color={optionColor}
            style={styles.optionIcon}
          />
          <Text> Easy Returns</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <MaterialCommunityIcons
            name="security"
            size={optionSize}
            color={optionColor}
            style={styles.optionIcon}
          />
          <Text> Secure Payments</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  box: {
    // backgroundColor: Colors.lightgray,
    alignItems: "center",
    justifyContent: "center",
    height: "75%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  loginText: {
    color: "grey",
    marginVertical: widthPercentageToDP("3")
  },
  btn: {
    backgroundColor: "blue",
    borderRadius: 5,
    padding: 10,
    marginVertical: "5%",
    width: "50%",
    alignItems: "center",
  },
  btnText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "500",
  },
  empty: {
    fontSize: 24,
    fontWeight: "700",
  },
  icon: {
    marginVertical: "5%",
  },
  option: {
    padding: 10,
    alignItems: "center",
  },
  optionIcon: {
    margin: 10,
  },
  continueText: {
    color: "blue",
    fontSize: heightPercentageToDP("2")
  }
});

export default EmptyCart;
