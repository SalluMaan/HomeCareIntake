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
import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/Feather";
import IconAnt2 from "react-native-vector-icons/Fontisto";
import IconAnt from "react-native-vector-icons/AntDesign";
import IconAnt3 from "react-native-vector-icons/Entypo";
import { Input, Item, Card } from "native-base";
import { Button } from "react-native-paper";
import DateTimePicker from "react-native-modal-datetime-picker";
import axios from "axios";
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

import * as Font from "expo-font";

YellowBox.ignoreWarnings(["Remote debugger"]);

export default class MCO extends React.Component {
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    headerShown: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
      selected: undefined,
      clientId: this.props.navigation.state.params.client_id,
      mcoData: "",
    };
  }
  onValueChange(value) {
    this.setState({
      selected: value,
    });
  }
  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = (date) => {
    console.log("A date has been picked: ", date);
    this.hideDateTimePicker();
  };

  state = {
    assetsLoaded: false,
  };

  onChangeText = this.onChangeText.bind(this);

  onChangeText(text) {
    this.setState({
      selected: text,
    });
  }

  async componentDidMount() {
    await Font.loadAsync({
      proximanova: require("../assets/fonts/proximanova.otf"),
    });
    axios
      .get(`https://aplushome.facebhoook.com/api/getmco/` + this.state.clientId)
      .then((res) => {
        const data = res.data["success"];
        console.log("Response", data);

        this.setState({ mcoData: data });
      });

    this.setState({ assetsLoaded: true });
  }

  render() {
    const { assetsLoaded } = this.state;
    console.log("ID:", this.state.clientId);
    const mco = this.state.mcoData[0];
    console.log("data;", mco, this.state.mcoData);
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

              <View></View>
            </View>

            <TouchableOpacity
            // onPress={() => this.props.navigation.navigate("WorkHistory")}
            >
              <Text
                style={{
                  fontSize: 18,
                  marginLeft: 20,
                  marginTop: 23,
                  fontWeight: "600",
                  color: "#141414",
                }}
              >
                MCO
              </Text>
            </TouchableOpacity>

            <View
              style={{
                width: 334,
                height: 59,
                backgroundColor: "#F3F3F3",
                borderRadius: 7,
                alignSelf: "center",
                marginTop: 17,
              }}
            >
              <Text style={{ color: "#7D7D7D", marginLeft: 6, marginTop: 10 }}>
                Renewal Date
              </Text>

              <Item
                onPress={this.showDateTimePicker}
                style={{
                  backgroundColor: "white",
                  marginLeft: 15,
                  marginRight: 15,
                  marginTop: 0,
                  width: 334,
                  height: 50,
                  alignSelf: "center",
                  borderColor: "#E2E2E2",
                  borderRadius: 4,
                  borderWidth: 1,
                  textAlign: "left",
                }}
                regular
              >
                <Text style={{ color: "#A4A4A4", marginLeft: 20 }}>
                  {/* {mco.date} */}
                  {mco ? mco.date : "Select Date"}
                </Text>
                <IconAnt
                  name="calendar"
                  size={20}
                  color="#A4A4A4"
                  style={{ marginLeft: 180 }}
                />
              </Item>
              <DateTimePicker
                isVisible={this.state.isDateTimePickerVisible}
                onConfirm={this.handleDatePicked}
                onCancel={this.hideDateTimePicker}
              />
            </View>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 20,
                marginTop: 43,
                fontWeight: "600",
                color: "#141414",
              }}
            >
              Intake Coordinator Information
            </Text>

            <Text style={{ color: "#A4A4A4", marginLeft: 20, marginTop: 50 }}>
              Intake CO. Name
            </Text>

            <Item
              style={{
                marginLeft: 15,
                marginRight: 15,
                backgroundColor: "white",
                marginTop: 0,
                width: 334,
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
                placeholder={mco ? mco.intakeco_name : "ABC NAME"}
                placeholderTextColor={"#A4A4A4"}
              />
            </Item>

            <Text style={{ color: "#A4A4A4", marginLeft: 20, marginTop: 50 }}>
              Phone Number
            </Text>

            <Item
              style={{
                marginLeft: 15,
                marginRight: 15,
                backgroundColor: "white",
                marginTop: 0,
                width: 334,
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
                placeholder={mco ? mco.phone : "0999"}
                placeholderTextColor={"#A4A4A4"}
                value={mco ? mco.phone : "0999"}
              />
            </Item>
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
