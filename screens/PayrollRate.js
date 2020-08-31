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
  TouchableOpacity,
} from "react-native";
import IconAnt from "react-native-vector-icons/AntDesign";
import IconAnt2 from "react-native-vector-icons/Fontisto";
import { Input, Item, Card } from "native-base";
import { Button, RadioButton } from "react-native-paper";
import * as Font from "expo-font";
import NumericInput from "react-native-numeric-input";
import axios from "axios";

import AsyncStorage from "@react-native-community/async-storage";

YellowBox.ignoreWarnings(["Remote debugger"]);

export default class PayrollRate extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    headerShown: false,
  };
  state = {
    assetsLoaded: false,
    rate: 0,
    token: "token",
    intake: undefined,
  };

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      const user = await AsyncStorage.getItem("intake");
      // user = JSON.parse(user);
      if (value !== null && user !== null) {
        // value previously stored
        console.log("Token", value, user);
        this.setState({
          token: value,
          intake: user,
        });
        console.log("intake State:", this.state.intake);
      }
    } catch (e) {
      // error reading value
      console.log("Reading Value Error", e);
    }
  };

  async componentDidMount() {
    await Font.loadAsync({
      proximanova: require("../assets/fonts/proximanova.otf"),
    });
    this.getData();
    this.setState({ assetsLoaded: true });
  }
  onClickListener = () => {
    const Rate = this.state.rate;
    const Id = this.state.token;
    console.log("Payroll :", Id, Rate);
    axios
      .post(`https://aplushome.facebhoook.com/api/payrollrequest`, {
        payroll: Rate,
        intakeco_id: Id,
      })
      .then((res) => {
        console.log("Payroll", res.data);
        this.setState({
          rate: 0,
        });
        console.log("Rate:", this.state.rate);
        alert("Your Request for PayRoll has been sent to Admin!");
      })
      .catch((err) => {
        console.log(err.data);
        alert("Error While Sending a PayRoll Request!");
      });
  };

  render() {
    // const { caregiverId } = this.props.navigation.state.params;
    // console.log("Caregiver Props ID:", caregiverId);
    console.log("intake", this.state.intake);
    const { intake } = this.state;

    const { assetsLoaded } = this.state;
    if (assetsLoaded) {
      return (
        <View style={styles.container}>
          <ScrollView>
            <View
              style={{ marginTop: 13, marginLeft: 20, flexDirection: "row" }}
            >
              <View>
                <TouchableOpacity
                  onPress={() => this.props.navigation.goBack()}
                >
                  <IconAnt
                    name="left"
                    size={20}
                    color="#A4A4A4"
                    style={{ marginRight: 5 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
            // onPress={() => this.props.navigation.navigate("CrmScreen")}
            >
              <Text
                style={{
                  fontSize: 18,
                  marginLeft: 20,
                  marginTop: 23,
                  fontWeight: "700",
                  color: "#434343",
                }}
              >
                Payroll Rate
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 18,
                marginLeft: 20,
                marginTop: 62,
                fontWeight: "700",
                color: "#434343",
              }}
            >
              DEFAULT RATE
            </Text>

            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 50,
                  marginLeft: 20,
                  marginTop: 30,
                  fontWeight: "700",
                  color: "#434343",
                }}
              >
                ${intake ? parseInt(intake).toFixed(2) : "11"}/Hr.
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <NumericInput
                type="up-down"
                onChange={(rate) => this.setState({ rate })}
                value={this.state.rate}
                initValue={parseInt(this.state.intake)}
                totalWidth={200}
                totalHeight={50}
                editable={false}
                containerStyle={{
                  marginLeft: 20,
                  marginTop: 30,
                  backgroundColor: "white",
                  borderRadius: 4,
                }}
              />
              <Button
                onPress={() => this.onClickListener()}
                style={{
                  marginTop: 30,
                  width: 132,
                  height: 50,
                  alignSelf: "center",
                  backgroundColor: "#FF4B7D",
                  borderRadius: 4,
                  borderWidth: 1,
                  textAlign: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    alignSelf: "center",
                    fontWeight: "600",
                    color: "white",
                  }}
                >
                  SAVE
                </Text>
              </Button>
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
    backgroundColor: "#F3F3F3",
  },
});
