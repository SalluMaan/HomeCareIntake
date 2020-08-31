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
import IconAnt4 from "react-native-vector-icons/Feather";
import { Input, Item, Card } from "native-base";
import { Button, RadioButton } from "react-native-paper";
import Moment from "moment";

import * as Font from "expo-font";
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import {
  Container,
  Header,
  Content,
  Picker,
  Form,
  CheckBox,
  ListItem,
  Body,
} from "native-base";
YellowBox.ignoreWarnings(["Remote debugger"]);

export default class ReferralsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined,
      referral: this.props.navigation.state.params.referral[0],
    };
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
  onValueChange(value) {
    this.setState({
      selected: value,
    });
  }
  async componentDidMount() {
    await Font.loadAsync({
      proximanova: require("../assets/fonts/proximanova.otf"),
    });

    this.setState({ assetsLoaded: true });
  }

  render() {
    // console.log("PROPS CL:", this.state.referral);

    const { assetsLoaded } = this.state;
    if (assetsLoaded) {
      return (
        <View style={styles.container}>
          <ScrollView>
            <View
              style={{ marginTop: 0, height: 20, backgroundColor: "#F3F3F3" }}
            >
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.goBack()}
                >
                  <IconAnt
                    name="left"
                    size={20}
                    color="#A4A4A4"
                    style={{ marginTop: 15, marginLeft: 21 }}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                width: 314,
                height: 50,
                backgroundColor: "white",
                borderRadius: 4,
                alignSelf: "center",

                marginTop: 30,
                justifyContent: "center",
              }}
            >
              <Button
                style={{
                  alignSelf: "center",
                  height: 38,
                  width: 140,
                  marginLeft: 25,
                  backgroundColor: "#FEF2F5",
                  borderRadius: 4,
                  borderWidth: 1,
                  textAlign: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 10,
                    marginLeft: 5,
                    fontWeight: "600",
                    color: "#FF4B7D",
                  }}
                >
                  Referrals
                </Text>
              </Button>
            </View>

            <Text
              style={{
                marginTop: 25,
                fontSize: 18,
                marginLeft: 21,
                fontWeight: "600",
                color: "#434343",
              }}
            >
              {this.state.referral ? this.state.referral.length : " Zero "} New
              Referrals this week
            </Text>

            {/* ////Card---------------------------------------------- */}

            {this.state.referral
              ? this.state.referral.map((ref, id) => {
                  return (
                    <View
                      style={{
                        width: 334,
                        height: 293,
                        backgroundColor: "white",
                        borderRadius: 10,
                        alignSelf: "center",
                        marginTop: 5,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          marginLeft: 17,
                          marginTop: 5,
                          fontWeight: "600",
                          color: "#7D7D7D",
                        }}
                      >
                        {Moment(ref.created_at).format("D MMM YYYY h:hh")}
                      </Text>
                      <Text
                        style={{
                          fontSize: 18,
                          marginLeft: 17,
                          marginTop: 19,
                          fontWeight: "600",
                          color: "#434343",
                        }}
                      >
                        {ref.client_name ? ref.client_name : "Name not taken"}{" "}
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          marginLeft: 17,
                          marginTop: 30,
                        }}
                      >
                        <IconAnt name="home" size={15} color="#FF4B7D" />
                        <Text
                          style={{
                            fontSize: 12,
                            marginLeft: 10,
                            fontWeight: "600",
                            color: "#7D7D7D",
                          }}
                        >
                          {ref.address_line2
                            ? ref.address_line2 + ref.location
                            : "Address Not Found"}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          marginLeft: 17,
                          marginTop: 10,
                        }}
                      >
                        <IconAnt name="phone" size={15} color="#FF4B7D" />
                        <Text
                          style={{
                            fontSize: 12,
                            marginLeft: 10,
                            fontWeight: "600",
                            color: "#7D7D7D",
                          }}
                        >
                          {ref.phone ? ref.phone : "Phone Numer is not Found"}{" "}
                        </Text>
                      </View>
                      <Text
                        style={{
                          fontSize: 13,
                          marginLeft: 17,
                          marginTop: 25,
                          fontWeight: "600",
                          color: "#7D7D7D",
                        }}
                      >
                        Meeting Time: Mar 24, 2020 | 01:30 PM
                      </Text>
                      <Button
                        style={{
                          marginTop: 23,
                          width: 138,
                          height: 40,
                          marginLeft: 20,
                          backgroundColor: "#B20838",
                          borderRadius: 4,
                          borderWidth: 1,
                          textAlign: "center",
                        }}
                      >
                        {" "}
                        <IconAnt4
                          name="map-pin"
                          size={15}
                          color="white"
                          style={{ marginLeft: 5 }}
                        />
                        <Text> </Text>
                        <Text
                          style={{
                            fontSize: 16,
                            marginLeft: 5,
                            fontWeight: "600",
                            color: "white",
                          }}
                        >
                          MAP
                        </Text>
                      </Button>
                    </View>
                  );
                })
              : null}

            {/* ////Card---------------------------------------------- */}
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
    backgroundColor: "#F3F3F3",
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
