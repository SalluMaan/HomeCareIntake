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
  Label,
} from "native-base";

import * as Font from "expo-font";
import axios from "axios";

YellowBox.ignoreWarnings(["Remote debugger"]);

export default class HomeSAst extends React.Component {
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
      homeAssData: "",
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
      .get(
        `https://aplushome.facebhoook.com/api/gethomeassessment/` +
          this.state.clientId
      )
      .then((res) => {
        const data = res.data["success"];
        console.log("Home Ass Response", data);

        this.setState({ homeAssData: data });
      });

    this.setState({ assetsLoaded: true });
  }

  render() {
    console.log("ID:", this.state.clientId);
    const assessment = this.state.homeAssData[0];
    console.log("data;", assessment, this.state.homeAssData);
    const { assetsLoaded } = this.state;
    if (assetsLoaded) {
      return (
        <View style={styles.container}>
          <ScrollView>
            <View
              style={{ marginTop: 13, marginLeft: 20, flexDirection: "row" }}
            >
              <View>
                <IconAnt
                  name="left"
                  size={20}
                  color="#A4A4A4"
                  style={{ marginRight: 5 }}
                />
              </View>
              <View></View>
            </View>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("MCO")}
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
                Home Safety Assessment
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 14,
                marginLeft: 20,
                marginTop: 40,
                fontWeight: "400",
                color: "#A4A4A4",
              }}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor.
            </Text>

            <Text
              style={{
                fontSize: 16,
                marginLeft: 20,
                marginTop: 23,
                fontWeight: "600",
                color: "#141414",
              }}
            >
              General
            </Text>

            {/* -----------------------OBJ------------------ */}
            {this.state.homeAssData
              ? this.state.homeAssData.map((data, id) => {
                  return (
                    <View
                      key={id}
                      style={{
                        flexDirection: "row",
                        backgroundColor: "white",
                        marginTop: 30,
                        marginLeft: 12,
                        marginRight: 10,
                      }}
                    >
                      <CheckBox checked={false} color="#FCC9D7" />
                      <Text
                        style={{
                          marginLeft: 30,
                          fontSize: 14,
                          color: "#7D7D7D",
                          marginTop: -3,
                        }}
                      >
                        {data.description}
                      </Text>
                    </View>
                  );
                })
              : null}
            {/* <View
              style={{
                flexDirection: "row",
                backgroundColor: "white",
                marginTop: 30,
                marginLeft: 12,
                marginRight: 10,
              }}
            >
              <CheckBox checked={false} color="#FCC9D7" />
              <Text
                style={{
                  marginLeft: 30,
                  fontSize: 14,
                  color: "#7D7D7D",
                  marginTop: -3,
                }}
              >
                Install smoke and carbon monoxide alarms throughout your home
              </Text>
            </View> */}

            {/* -----------------------OBJ------------------ */}

            {/* <View
              style={{
                flexDirection: "row",
                backgroundColor: "white",
                marginTop: 30,
                marginLeft: 12,
                width: 300,
              }}
            >
              <CheckBox checked={false} color="#FCC9D7" />
              <Text
                style={{
                  marginLeft: 30,
                  fontSize: 14,
                  color: "#7D7D7D",
                  marginTop: -3,
                }}
              >
                Have an emergency escape plan and pre arrange for a family
                member or caregiver to help you escape if needed.
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                backgroundColor: "white",
                marginTop: 45,
                marginLeft: 12,
                marginRight: 10,
              }}
            >
              <CheckBox checked={false} color="#FCC9D7" />
              <Text
                style={{
                  marginLeft: 30,
                  fontSize: 14,
                  color: "#7D7D7D",
                  marginTop: -3,
                }}
              >
                Keep a fire extinguisher handy in the kitchen in case of fire.
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                backgroundColor: "white",
                marginTop: 40,
                marginLeft: 12,
                marginRight: 10,
              }}
            >
              <CheckBox checked={false} color="#FCC9D7" />
              <Text
                style={{
                  marginLeft: 30,
                  fontSize: 14,
                  color: "#7D7D7D",
                  marginTop: -3,
                }}
              >
                Make sure there is good lighting inside and outside your home to
                help prevent falls.
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                backgroundColor: "white",
                marginTop: 30,
                marginLeft: 12,
                marginRight: 10,
              }}
            >
              <CheckBox checked={false} color="#FCC9D7" />
              <Text
                style={{
                  marginLeft: 30,
                  fontSize: 14,
                  color: "#7D7D7D",
                  marginTop: -3,
                }}
              >
                Make sure there is good lighting inside and outside your home to
                help prevent falls.
              </Text>
            </View> */}
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
    backgroundColor: "white",
  },
});
