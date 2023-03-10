import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../assets/Colors";

const NotificationScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>
        Notifications
      </Text>
      <View style={styles.contentSection}>
        <Text style={styles.contentTile}>You're missing out.</Text>
        <Text style={styles.contentSubText} >
          Sign in to view personalised notification and offers
        </Text>
        <TouchableOpacity style={styles.signInBtn}>
          <Text style={{ color: "white" }}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  headerTitle: {
    marginHorizontal: wp("5"),
    fontSize: hp("2.2")
  },
  contentSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  contentTile:{
    marginVertical: wp("1"),
    width: wp("50"),
    textAlign: "center",
    color: "grey",
  },
  contentSubText:{
    marginVertical: wp("1"),
    width: wp("50"),
    textAlign: "center",
    color: "grey",
  },
  signInBtn:{
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    padding: wp("2"),
    width: wp("25%"),
    borderRadius: 5,
    marginTop: wp("2"),
  }
});

export default NotificationScreen;
