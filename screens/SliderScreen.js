import React, { useState } from "react";
import {
  StyleSheet,
  YellowBox,
  Text,
  View,
  ScrollView,
  Image,
  Alert,
  ActivityIndicator,
  StatusBar,
  TouchableOpacity,
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
} from "native-base";

import * as Font from "expo-font";
import AsyncStorage from "@react-native-community/async-storage";
import AppIntroSlider from "react-native-app-intro-slider";
import Login from "./LoginScreen";
YellowBox.ignoreWarnings(["Remote debugger"]);

const slides = [
  {
    key: 1,
    title: "",
    text:
      "No Paper TimeSheet \n Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in web designs",
    image: require("../assets/Image.png"),
    backgroundColor: "#59b2ab",
  },
  {
    key: 2,
    title: "",
    text:
      "Set Your Schedule \n Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying",
    image: require("../assets/image2.png"),
    backgroundColor: "#febe29",
  },
  {
    key: 3,
    title: "",
    text:
      "Automatic \n Check-in & Check-out \n Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying",
    image: require("../assets/Image3.png"),
    backgroundColor: "#22bcb5",
  },
];
export default class SliderScreen extends React.Component {
  static navigationOptions = {
    header: {
      visible: false,
    },
  };
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
      load: false,
    };
  }

  // componentDidMount = () => {
  //   this.getData();
  // };

  UNSAFE_componentWillMount = () => {
    // this.getData();
  };

  getData = async () => {
    console.log("getData");

    const email = await AsyncStorage.getItem("email");
    const password = await AsyncStorage.getItem("password");
    // const email = 'abc';

    if (email !== null && password !== null) {
      // value previously stored
      console.log("Token", email, password);
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      await axios
        .post(
          `https://project11.erstechno.online/index.php/api/login`,
          formData
        ) // axios
        .then((res) => {
          this.setState({
            load: false,
          });
          this.props.navigation.navigate("First");
        })
        .catch((error) => {
          console.log("err", error);
          // alert('Error in SignUp!');
        });
    } else {
      console.log("Else False");
      this.setState({
        load: false,
      });
    }
  };

  _renderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  };

  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
            textDecorationLine: "underline",
          }}
        >
          Skip
        </Text>
      </View>
    );
  };

  render() {
    if (this.state.load) {
      return (
        <View style={styles.activity}>
          <ActivityIndicator color="#42f5b6" size="large" />
        </View>
      );
    } else {
      if (this.state.showRealApp) {
        return this.props.navigation.navigate("AskLogin");
      } else {
        return (
          <AppIntroSlider
            showSkipButton={this._onDone}
            renderItem={this._renderItem}
            data={slides}
            onDone={this._onDone}
            renderDoneButton={this._renderDoneButton}
          />
        );
      }
    }
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
  activity: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
