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
  Alert,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/Feather";
import IconAnt2 from "react-native-vector-icons/Fontisto";
import IconAnt from "react-native-vector-icons/AntDesign";
import IconAnt3 from "react-native-vector-icons/Feather";
import { Input, Item, Card } from "native-base";
import { Button } from "react-native-paper";
import axios from "axios";
import Moment from "moment";
import TimePicker from "react-native-24h-timepicker";
import TimePicker2 from "react-native-24h-timepicker";
import qs from "qs";

import DateTimePicker from "react-native-modal-datetime-picker";
import {
  Container,
  Header,
  Content,
  Picker,
  Form,
  CheckBox,
  ListItem,
  Body,
  Radio,
} from "native-base";

import * as Font from "expo-font";
import AsyncStorage from "@react-native-community/async-storage";
import AppIntroSlider from "react-native-app-intro-slider";
import Login from "./LoginScreen";
YellowBox.ignoreWarnings(["Remote debugger"]);

export default class AskLogin extends React.Component {
  static navigationOptions = {
    header: {
      visible: false,
    },
  };
  constructor(props) {
    super(props);
    this.state = {
      caregiver: false,
      intake: false,
    };
  }
  handleCaregiver = () => {
    this.setState({
      caregiver: true,
      intake: false,
    });
    this.props.navigation.navigate("LoginCare");
  };
  handleIntake = () => {
    this.setState({
      intake: true,
      caregiver: false,
    });
    this.props.navigation.navigate("Login");
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/logo2.png")}
          style={{
            height: 280,
            width: 280,
            resizeMode: "contain",
            alignSelf: "center",
            marginTop: "25%",
          }}
        />
        <Text
          style={{
            marginHorizontal: "5%",
            textAlign: "center",
            fontSize: 20,
            color: "#a4a4a4",
          }}
        >
          Welcome to the A+ Home Care
        </Text>
        <Text
          style={{
            color: "#B20838",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "10%",
          }}
        >
          Login as
        </Text>
        <View style={{ marginTop: "5%" }}>
          <View
            style={{
              flexDirection: "row",
              marginRight: 15,
              alignSelf: "center",
            }}
          >
            <Radio
              onPress={() => this.handleIntake()}
              selected={this.state.intake}
              style={{ marginLeft: 5, width: "10%", alignSelf: "center" }}
              color="#B20838"
              selectedColor="#B20838"
            />
            <Text
              style={{
                color: "#151545",
                fontSize: 16,
                width: "40%",
              }}
            >
              Intake-Coordinator
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              marginRight: 15,
            }}
          >
            <Radio
              onPress={() => this.handleCaregiver()}
              selected={this.state.caregiver}
              style={{ marginLeft: 5, width: "10%", alignSelf: "center" }}
              color="#B20838"
              selectedColor="#B20838"
            />
            <Text
              style={{
                color: "#151545",
                fontSize: 16,
                width: "40%",
              }}
            >
              Caregiver
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
  },
  slide: {
    width: "100%",
    height: "120%",
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: "120%",
  },
  text: {
    fontSize: 17,
    color: "white",
    textAlign: "center",
    paddingBottom: 250,
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 25,
    color: "white",
    textAlign: "center",
    marginTop: 200,
  },
});
