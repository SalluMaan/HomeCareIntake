import React, { useState } from "react";
import {
  StyleSheet,
  YellowBox,
  Text,
  View,
  ScrollView,
  Image,
  ActivityIndicator,
  StatusBar,
  Platform,
  Alert,
  TouchableOpacity,
} from "react-native";
import IconAnt from "react-native-vector-icons/AntDesign";
import IconAnt2 from "react-native-vector-icons/Fontisto";
import IconAnt3 from "react-native-vector-icons/Entypo";
import IconAnt4 from "react-native-vector-icons/MaterialCommunityIcons";
import { Input, Item, Card } from "native-base";
import { Button, RadioButton } from "react-native-paper";
import * as Font from "expo-font";
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
YellowBox.ignoreWarnings(["Remote debugger"]);

export default class Caregiverdetails extends React.Component {
  constructor(props) {
    super(props);
    YellowBox.ignoreWarnings([
      "Warning: isMounted(...) is deprecated",
      "Module RCTImageLoader",
    ]);
  }

  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    headerShown: false,
  };
  state = {
    assetsLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      proximanova: require("../assets/fonts/proximanova.otf"),
    });

    this.setState({ assetsLoaded: true });
  }

  render() {
    const { user } = this.props.navigation.state.params;
    console.log("Caregiver Props User", user);

    const { assetsLoaded } = this.state;
    if (assetsLoaded) {
      return (
        <View style={styles.container}>
          <ScrollView>
            <View
              style={{ marginTop: 0, height: 197, backgroundColor: "#FF4B7D" }}
            >
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.goBack()}
                >
                  <IconAnt
                    name="left"
                    size={20}
                    color="#A4A4A4"
                    style={{ marginLeft: 15, marginTop: 15 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                // onPress={() =>
                //   this.props.navigation.navigate("ViewClientSch")
                // }
                >
                  <IconAnt4
                    name="send-circle"
                    size={40}
                    color="#FFAFC5"
                    style={{ marginTop: 15, marginLeft: 270 }}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Image
                  // source={require("../assets/img2.png")}
                  source={
                    user.image
                      ? {
                          uri:
                            "https://aplushome.facebhoook.com/public/clients/" +
                            user.image,
                        }
                      : require("../assets/img2.png")
                  }
                  style={{
                    width: 79,
                    height: 79,
                    marginTop: 10,
                    marginBottom: 69,
                    marginLeft: 21,
                    borderRadius: 150 / 2,
                    overflow: "hidden",
                  }}
                ></Image>
                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      marginLeft: 19,
                      marginTop: 23,
                      fontWeight: "600",
                      color: "#FFFFFF",
                    }}
                  >
                    {user.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      marginLeft: 19,
                      marginTop: 13,
                      fontWeight: "600",
                      color: "#FFFFFF",
                    }}
                  >
                    {user.address}
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                marginTop: -40,
                width: 340,
                height: 160,
                backgroundColor: "white",
                alignSelf: "center",
                borderColor: "#BEBEBEBA",
                borderRadius: 10,
                borderWidth: 1,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  marginLeft: 10,
                  marginTop: 24,
                  fontWeight: "600",
                  color: "#A4A4A4",
                }}
              >
                {user.name}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  marginLeft: 10,
                  marginTop: 24,
                  fontWeight: "600",
                  color: "#A4A4A4",
                }}
              >
                {user.address} {" | "} {"+"}
                {user.phone}
              </Text>

              <View style={{ flexDirection: "row" }}>
                <Button
                  onPress={() =>
                    this.props.navigation.navigate("ViewCaregiverSch", {
                      user: user,
                    })
                  }
                  style={{
                    marginTop: 15,
                    width: 150,
                    height: 34,
                    marginLeft: 10,
                    backgroundColor: "#FEF2F5",
                    borderRadius: 4,
                    borderWidth: 1,
                    textAlign: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 11,
                      alignSelf: "center",
                      fontWeight: "600",
                      color: "#FF4B7D",
                    }}
                  >
                    View Schedule
                  </Text>
                </Button>
              </View>
            </View>

            <View
              style={{
                backgroundColor: "#F3F3F3",
                width: 334,
                height: 50,
                flexDirection: "row",
                marginTop: 18,
                alignSelf: "center",
              }}
            >
              <View style={{ alignSelf: "center" }}>
                <Text
                  style={{
                    fontSize: 14,
                    marginLeft: 15,
                    alignSelf: "center",
                    fontWeight: "700",
                    color: "#434343",
                  }}
                >
                  Skills and Certifications
                </Text>
              </View>

              <View style={{ marginLeft: 108, alignSelf: "center" }}>
                <IconAnt3
                  name="chevron-small-right"
                  size={30}
                  color="#A4A4A4"
                  style={{ alignSelf: "center" }}
                />
              </View>
            </View>

            <View
              style={{
                backgroundColor: "#F3F3F3",
                width: 334,
                height: 50,
                flexDirection: "row",
                marginTop: 18,
                alignSelf: "center",
              }}
            >
              <Text
                // onPress={() =>
                //   this.props.navigation.navigate("PayrollRate", {
                //     caregiverId: user.id,
                //   })
                // }
                style={{
                  fontSize: 14,
                  marginLeft: 15,
                  alignSelf: "center",
                  fontWeight: "700",
                  color: "#434343",
                }}
              >
                Payroll Rates
              </Text>
              <IconAnt3
                name="chevron-small-right"
                size={30}
                color="#A4A4A4"
                style={{ alignSelf: "center", marginLeft: 176 }}
              />
            </View>
          </ScrollView>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
          <StatusBar barStyle="default" />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 10,
    fontWeight: "bold",
  },
  menuContent: {
    color: "#000",
    fontWeight: "bold",
    padding: 2,
    fontSize: 20,
  },
});
