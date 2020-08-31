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

export default class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined,
      satisfy: 0,
      normal: 0,
      poor: 0,
      notSatisfy: 0,
      status: 1,
      message: "",
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
    sch: this.props.navigation.state.params.sch,
    satisfy: false,
    normal: false,
    poor: false,
    notSatisfy: false,
    status: 1,
    message: "",
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

  onClickListener = (ID) => {
    if (this.state.message != "" && this.state.message != undefined) {
      if (
        this.state.satisfy !== 0 ||
        this.state.normal !== 0 ||
        this.state.poor !== 0 ||
        this.state.notSatisfy !== 0
      ) {
        const Message = this.state.message;
        const Satisfy = this.state.satisfy;
        const Normal = this.state.normal;
        const Poor = this.state.poor;
        const NotSatisfy = this.state.notSatisfy;
        const scheduleID = ID;

        console.log(
          "Send :",
          Satisfy,
          Message,
          Normal,
          Poor,
          NotSatisfy,
          scheduleID
        );
        const formData = new FormData();
        formData.append("status", "1");
        formData.append("client_feedback_desc", Message);
        formData.append("very_satisfied", Satisfy);
        formData.append("neither_satisfied_orDissatisfied", Normal);
        formData.append("dissatisfied", Poor);
        formData.append("very_dissatisfied", NotSatisfy);

        console.log("FormData:", formData);

        axios
          .post(
            `https://aplushome.facebhoook.com/api/feedback/` + scheduleID,
            formData
          )
          .then((res) => {
            console.log("Name", res.data);
            alert("Your Response has been Submitted!");
            this.setState({
              satisfy: 0,
              normal: 0,
              poor: 0,
              notSatisfy: 0,
              status: 1,
              message: "",
            });
          })
          .catch((err) => {
            console.log(err);
            alert("Error While Sending Feedback Message!");
          });
      } else {
        alert("Error!Dont Leave Blank Fields!");
      }
    } else {
      alert("Error!Dont Leave Blank Fields!");
    }
  };

  render() {
    console.log(
      "OBJECT_FEEDBACK:",
      this.props.navigation.state.params.sch,
      this.props.navigation.state.params.sch.id
    );
    const id = this.props.navigation.state.params.sch.id;
    const { assetsLoaded } = this.state;
    if (assetsLoaded) {
      return (
        <View style={styles.container}>
          <ScrollView>
            <View
              style={{ marginTop: 0, height: 20, backgroundColor: "white" }}
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

            <Text
              style={{
                fontSize: 18,
                marginTop: 50,
                marginLeft: 21,
                fontWeight: "700",
                color: "#141414",
              }}
            >
              Give us feedback
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginTop: 50,
                marginLeft: 21,
                fontWeight: "600",
                color: "#434343",
              }}
            >
              Overall, how did you feel about the service?
            </Text>

            <View style={{ marginTop: 15, marginLeft: 21 }}>
              <View style={{ marginLeft: 0, flexDirection: "row" }}>
                <Radio
                  onPress={() =>
                    this.setState({
                      satisfy: 1,
                      normal: 0,
                      poor: 0,
                      notSatisfy: 0,
                    })
                  }
                  selected={this.state.satisfy}
                  style={{}}
                />
                <Text
                  style={{
                    marginLeft: 15,
                    color: this.state.satisfy ? "blue" : "#a4a4a4",
                    fontSize: 14,
                  }}
                >
                  Very Satisfied
                </Text>
              </View>

              <View
                style={{ marginLeft: 0, marginTop: 10, flexDirection: "row" }}
              >
                <Radio
                  onPress={() =>
                    this.setState({
                      satisfy: 0,
                      normal: 1,
                      poor: 0,
                      notSatisfy: 0,
                    })
                  }
                  selected={this.state.normal}
                  style={{}}
                />
                <Text
                  style={{
                    marginLeft: 15,

                    color: this.state.normal ? "blue" : "#a4a4a4",

                    fontSize: 14,
                  }}
                >
                  Neither Satisfied or Dissatisfied
                </Text>
              </View>

              <View
                style={{ marginLeft: 0, marginTop: 10, flexDirection: "row" }}
              >
                <Radio
                  onPress={() =>
                    this.setState({
                      satisfy: 0,
                      normal: 0,
                      poor: 1,
                      notSatisfy: 0,
                    })
                  }
                  selected={this.state.poor}
                  style={{}}
                />
                <Text
                  style={{
                    marginLeft: 15,
                    color: this.state.poor ? "blue" : "#a4a4a4",
                    fontSize: 14,
                  }}
                >
                  Dissatisfied
                </Text>
              </View>

              <View
                style={{ marginLeft: 0, marginTop: 10, flexDirection: "row" }}
              >
                <Radio
                  onPress={() =>
                    this.setState({
                      satisfy: 0,
                      normal: 0,
                      poor: 0,
                      notSatisfy: 1,
                    })
                  }
                  selected={this.state.notSatisfy}
                  style={{}}
                />
                <Text
                  style={{
                    marginLeft: 15,
                    color: this.state.notSatisfy ? "blue" : "#a4a4a4",
                    fontSize: 14,
                  }}
                >
                  Very Dissatisfied
                </Text>
              </View>
            </View>

            <Text
              style={{
                fontSize: 16,
                marginTop: 50,
                marginLeft: 21,
                fontWeight: "600",
                color: "#434343",
              }}
            >
              How could we improve our service?
            </Text>
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
                placeholder="Your Message"
                placeholderTextColor={"#A4A4A4"}
                onChangeText={(message) => this.setState({ message })}
                style={{ flexWrap: "wrap" }}
                value={this.state.message}
              />
            </Item>

            <Text
              style={{
                marginLeft: 21,
                marginTop: 15,
                color: "#A4A4A4",
                fontSize: 14,
              }}
            >
              Please don't include any financial information, for example, your
              credit card number
            </Text>

            <TouchableOpacity onPress={() => this.onClickListener(id)}>
              <Button
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
                  Give Feedback
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
