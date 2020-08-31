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
import * as Font from "expo-font";
import axios from "axios";
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
  Label,
  Radio,
} from "native-base";
YellowBox.ignoreWarnings(["Remote debugger"]);
import AsyncStorage from "@react-native-community/async-storage";

export default class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined,
      intakeId: 0,
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
    message: "",
    intakeId: 0,
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
    this.getData();

    this.setState({ assetsLoaded: true });
  }

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        // value previously stored
        console.log("Token", value);
        this.setState({
          intakeId: value,
        });
      }
    } catch (e) {
      // error reading value
      console.log("Reading Value Error", e);
    }
  };

  checkEmptyInput() {
    if (this.state.message === "") {
      alert("Error!Dont Leave Blank Fields!");
      return false;
    }
    return true;
  }

  onClickListener = () => {
    if (this.state.message != "" && this.state.message != undefined) {
      const Intake_Id = this.state.intakeId;
      const Message = this.state.message;
      console.log("Send :", Intake_Id, Message);
      axios
        .post(`https://aplushome.facebhoook.com/api/sendmessage`, {
          intakeco_id: Intake_Id,
          message: Message,
        })
        .then((res) => {
          console.log("Name", res.data);
          alert("Message has been Sent!");
          this.setState({
            message: "",
          });
        })
        .catch((err) => {
          console.log(err.data);
          alert("Error While Sending a Message!");
        });
    } else {
      alert("Error!Dont Leave Blank Fields!");
    }
  };

  render() {
    const { assetsLoaded } = this.state;
    if (assetsLoaded) {
      return (
        <View style={styles.container}>
          <ScrollView>
            <View
              style={{ marginTop: 15, height: 50, backgroundColor: "#fff" }}
            >
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("First")}
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

            <Text
              style={{
                fontSize: 18,
                marginTop: 140,
                marginLeft: 21,
                fontWeight: "700",
                color: "#141414",
                textAlign: "center",
              }}
            >
              Send Message to Admin
            </Text>

            <View
              style={{
                width: 334,
                height: 50,
                backgroundColor: "white",
                borderWidth: 2,
                borderRadius: 10,
                borderColor: "#E2E2E2",
                alignSelf: "center",
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 22,
                  marginTop: 5,
                }}
              >
                Admin
              </Text>
            </View>

            <Item
              style={{
                marginTop: 5,
                width: 334,
                height: 136,
                alignSelf: "center",
                borderColor: "#E2E2E2",
                borderRadius: 4,
                borderWidth: 1,
                textAlign: "left",
                flexWrap: "wrap",
                flexDirection: "row",
              }}
              regular
            >
              <Input
                placeholder="Your Message here...."
                onChangeText={(message) => this.setState({ message })}
                placeholderTextColor={"#A4A4A4"}
                style={{ flexWrap: "wrap" }}
                value={this.state.message}
              />
            </Item>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Feedback")}
            >
              <Button
                onPress={() => this.onClickListener()}
                style={{
                  marginTop: 23,
                  marginBottom: 50,
                  width: 334,
                  height: 50,
                  alignSelf: "center",
                  backgroundColor: "#B20838",
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
                  SEND
                </Text>
              </Button>
            </TouchableOpacity>
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
