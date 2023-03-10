import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";
import Colors from "../../assets/Colors";

const Header = ({ headerTitle }) => {
  const size = 20;
  const color = Colors.black;
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons
          name="arrow-back"
          size={size}
          color={color}
          style={styles.icon}
        />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{headerTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: Colors.white,
  },
  headerTitle: {
    color: Colors.black,
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 21,
  },
  icon: {
    marginLeft: 5,
    marginRight: "3%",
    fontSize: hp("2"),
  },
});

export default Header;
