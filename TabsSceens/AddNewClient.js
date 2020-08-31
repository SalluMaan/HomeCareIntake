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
  _View,
  TouchableOpacity,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/Feather";

import IconAnt from "react-native-vector-icons/Fontisto";
import IconAnt2 from "react-native-vector-icons/AntDesign";
import IconAnt3 from "react-native-vector-icons/Entypo";
import { Input, Item, Card } from "native-base";
import { Button } from "react-native-paper";
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
  Left,
  Right,
  Radio,
} from "native-base";
import axios from "axios";

import * as Font from "expo-font";
import { Value } from "react-native-reanimated";

YellowBox.ignoreWarnings(["Remote debugger"]);

export default class AddNewClient extends React.Component {
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    headerShown: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      assetsLoaded: false,
      name: "abc",
      email: "test@gmail.com",
      gender: "male",
      phone: 123455,
      rate: 23,
      tasks: "ABC",
      classification: "10",
      address: "Lahr",
      intakeId: 1,
      response: "",
    };
  }

  onClickListener = () => {
    const Email = this.state.email;
    const Gender = this.state.gender;
    const Name = this.state.name;
    const Address = this.state.address;
    const Phone = this.state.phone;
    const Rate = this.state.rate;
    const Tasks = this.state.tasks;
    const Classification = this.state.classification;
    console.log("AddClient:", FirstName, LastName, MidName, Address, Address2);
    axios
      .post(`https://aplushome.facebhoook.com/api/addclient`, {
        FirstName,
        LastName,
        MidName,
        Address,
        Address2,
      })
      .then((res) => {
        const data = res.data["success"];
        alert("Client Successfully Added!");
        console.log("Response", data);
        this.setState({
          response: data,
          firstName: "",
          lastName: "",
          midName: "",
          address1: "",
          address2: "",
        });

        this.timeOut();
        console.log("Name:", this.state.firstName);
      })
      .catch((err) => {
        console.log(err.data);
        const error = "Error!Dont Leave Blank Fields";
        this.setState({ response: error });
      });
    console.log("Error:", this.state.response);
  };

  timeOut = () => {
    setTimeout(() => {
      this.setState({
        response: "",
      });
    }, 8000);
    console.log("TIMEOUT:", this.state.firstName);
  };

  async componentDidMount() {
    await Font.loadAsync({
      proximanova: require("../assets/fonts/proximanova.otf"),
    });

    this.setState({ assetsLoaded: true });
  }

  render() {
    const { assetsLoaded } = this.state;
    if (assetsLoaded) {
      return (
        <View style={styles.container}>
          <ScrollView>
            <View
              style={{ marginTop: 13, marginLeft: 20, flexDirection: "row" }}
            >
              <IconAnt2
                name="left"
                size={20}
                color="#A4A4A4"
                style={{ marginRight: 5 }}
              />
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("AddNewCareg")}
              >
                <Text
                  style={{
                    fontSize: 16,
                    marginLeft: 20,
                    marginTop: 0,
                    fontWeight: "600",
                    color: "#141414",
                  }}
                >
                  Add New Client
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  width: "50%",
                  height: 7,
                  marginTop: 50,
                  backgroundColor: "#FF4B7D",
                }}
              ></View>
              <View
                style={{
                  width: "50%",
                  height: 7,
                  marginTop: 50,
                  backgroundColor: "#FCC9D7",
                }}
              ></View>
            </View>
            {this.state.response ? (
              <Text
                style={{
                  color: "red",
                  fontSize: 18,
                  fontWeight: "bold",
                  marginHorizontal: "5%",
                  marginTop: "5%",
                }}
              >
                {"Status:"}
                {this.state.response}
              </Text>
            ) : (
              <Text></Text>
            )}
            <Text style={{ color: "#7D7D7D", marginLeft: 20, marginTop: 30 }}>
              First Name
            </Text>
            <Item
              style={{
                backgroundColor: "white",
                marginLeft: 15,
                marginRight: 15,
                marginTop: 0,
                width: 328,
                height: 50,
                alignSelf: "center",
                borderColor: "#E2E2E2",
                borderRadius: 4,
                borderWidth: 1,
                textAlign: "left",
              }}
              regular
            >
              <Input
                onChangeText={(text) => this.setState({ firstName: text })}
                value={this.state.firstName}
              />
            </Item>

            <Text style={{ color: "#7D7D7D", marginLeft: 20, marginTop: 30 }}>
              Middle Name
            </Text>
            <Item
              style={{
                backgroundColor: "white",
                marginLeft: 15,
                marginRight: 15,
                marginTop: 0,
                width: 328,
                height: 50,
                alignSelf: "center",
                borderColor: "#E2E2E2",
                borderRadius: 4,
                borderWidth: 1,
                textAlign: "left",
              }}
              regular
            >
              <Input
                onChangeText={(text) => this.setState({ midName: text })}
                value={this.state.midName}
              />
            </Item>

            <View
              style={{ flexDirection: "row", marginLeft: 8, marginTop: 15 }}
            >
              <CheckBox checked={false} color="#FCC9D7" />
              <Text style={{ marginLeft: 20 }}>No Middle Name</Text>
            </View>

            <Text style={{ color: "#7D7D7D", marginLeft: 20, marginTop: 30 }}>
              Last Name
            </Text>
            <Item
              style={{
                backgroundColor: "white",
                marginLeft: 15,
                marginRight: 15,
                marginTop: 0,
                width: 328,
                height: 50,
                alignSelf: "center",
                borderColor: "#E2E2E2",
                borderRadius: 4,
                borderWidth: 1,
                textAlign: "left",
              }}
              regular
            >
              <Input
                onChangeText={(text) => this.setState({ lastName: text })}
                value={this.state.lastName}
              />
            </Item>

            <Text style={{ color: "#7D7D7D", marginLeft: 20, marginTop: 30 }}>
              Address
            </Text>
            <Item
              style={{
                backgroundColor: "white",
                marginLeft: 15,
                marginRight: 15,
                marginTop: 0,
                width: 328,
                height: 50,
                alignSelf: "center",
                borderColor: "#E2E2E2",
                borderRadius: 4,
                borderWidth: 1,
                textAlign: "left",
              }}
              regular
            >
              <Input
                onChangeText={(text) => this.setState({ address1: text })}
                value={this.state.address1}
              />
            </Item>

            <Text style={{ color: "#7D7D7D", marginLeft: 20, marginTop: 30 }}>
              Address Line 2
            </Text>
            <Item
              style={{
                backgroundColor: "white",
                marginLeft: 15,
                marginRight: 15,
                marginTop: 0,
                width: 328,
                height: 50,
                alignSelf: "center",
                borderColor: "#E2E2E2",
                borderRadius: 4,
                borderWidth: 1,
                textAlign: "left",
              }}
              regular
            >
              <Input
                onChangeText={(text) => this.setState({ address2: text })}
                value={this.state.address2}
              />
            </Item>

            <Button
              style={{
                marginTop: 89,
                marginBottom: 50,
                width: 334,
                height: 50,
                alignSelf: "center",
                backgroundColor: "#B20838",
                borderRadius: 4,
                borderWidth: 1,
                textAlign: "center",
              }}
              onPress={() => this.onClickListener()}
            >
              <Text
                style={{
                  fontSize: 16,
                  alignSelf: "center",
                  fontWeight: "600",
                  color: "white",
                }}
              >
                Next
              </Text>
            </Button>
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
