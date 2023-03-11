import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../assets/Colors";

const NotificationScreen = () => {
  const [isLogIn, setIsLogIn] = useState(true)
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: '#2874F0', paddingTop: Platform.OS === 'ios' ? 50 : 40 }}>
        <Text style={styles.headerTitle}>
          Notifications(2)
        </Text>
      </View>
      {
        isLogIn ?
          <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10, paddingHorizontal: 10, borderBottomWidth: 1, borderBottomColor: '#00000020' }}>
            <View style={{ flexDirection: "row" }} >
              <View style={{ height: 15, width: 15, backgroundColor: "blue", borderRadius: 50 }} />
              <View style={{ width: "80%", marginLeft: 10 }}>
                <Text style={{ fontWeight: "bold" }}>
                  Atta. Rice ,Oil..Upto 50% off!
                </Text>
                <Text style={{ fontSize: 12, color: "#00000090" }}>
                  No min.order value! Avail Free Shipping on {'\n'}
                  order Value of min.$600! Shop Now
                </Text>
                <Text
                  style={{ fontSize: 10, color: "#00000060", marginVertical: 10 ,}}
                >2 days ago</Text>
              </View>
            </View>

            <Image style={{ height: 45, width: 45 }} source={require('../../assets/logo1.png')} />
          </TouchableOpacity>
          
          :
          <View style={styles.contentSection}>
            <Text style={styles.contentTile}>You're missing out.</Text>
            <Text style={styles.contentSubText} >
              Sign in to view personalised notification and offers
            </Text>
            <TouchableOpacity style={styles.signInBtn} onPress={() => setIsLogIn(true)}>
              <Text style={{ color: "white" }}>Sign In</Text>
            </TouchableOpacity>
          </View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  headerTitle: {
    fontSize: hp("2.2"),
    paddingHorizontal: wp("3"),
    color: "#fff",
    fontWeight: '600',
    paddingBottom: 10
  },
  contentSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  contentTile: {
    marginVertical: wp("1"),
    width: wp("50"),
    textAlign: "center",
    color: "grey",
  },
  contentSubText: {
    marginVertical: wp("1"),
    width: wp("50"),
    textAlign: "center",
    color: "grey",
  },
  signInBtn: {
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
