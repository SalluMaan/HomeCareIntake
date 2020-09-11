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
import DateTimePicker from "react-native-modal-datetime-picker";
import Moment from "moment";
import axios from "axios";

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

export default class LeadStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined,
      meeting: this.props.navigation.state.params.meeting,
      status: null,
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
    isDateTimePickerVisible: false,
    time: "2020-11-18",
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

  // DATEPICKER

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = (date) => {
    const newdate = Moment(date).format("YYYY-MM-DD");
    console.log("A date has been picked: ", newdate);

    this.setState({ time: newdate });
    this.hideDateTimePicker();
    this.leadUpdate(newdate);
  };

  // DATEPICKER

  leadUpdate = (date) => {
    console.log("Meeting ID:", this.state.meeting.id);
    const status = "3";
    const formData = new FormData();
    formData.append("date", date);
    formData.append("status", status);

    axios
      .post(
        `https://aplushome.facebhoook.com/api/editmeeting/` +
          this.state.meeting.id,
        formData
      )
      .then((res) => {
        console.log("Response", res);
        Alert.alert("Server Response", "Meeting Status Has been Changed");
        // this.props.navigation.goBack();
      })
      .catch((err) => {
        console.log("Error", err);
        Alert.alert(
          "Server Response",
          "Error while sending status to Admin for Meeting."
        );

        // Alert.alert("Server Response", err);
        // this.props.navigation.navigate("Login");
      });
  };

  render() {
    const { meeting } = this.state;
    // console.log("Meet:", meeting);
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
                marginLeft: 21,
                marginTop: 25,
                fontWeight: "600",
                color: "#434343",
              }}
            >
              Lead Funnel Status
            </Text>

            <View
              style={{
                width: 334,
                height: 500,
                backgroundColor: "white",
                borderRadius: 10,
                alignSelf: "center",
                marginTop: 30,
              }}
            >
              <View
                style={{
                  width: 296,
                  height: 120,
                  flexDirection: "row",
                  marginTop: 10,
                }}
              >
                {/* #FF4B7D #FEF2F5 */}
                <View>
                  <IconAnt
                    name="checkcircle"
                    size={33}
                    color={meeting.status >= 1 ? "#FF4B7D" : "#FEF2F5"}
                    style={{ marginTop: 3, marginLeft: 21 }}
                  />
                  {/* {meeting.status >= 1 ? "#FF4B7D" : "#FEF2F5"} */}
                  {meeting.status > 1 ? (
                    <View
                      style={{
                        borderLeftWidth: 6,
                        borderLeftColor: "#FF4B7D",
                        height: 100,
                        marginLeft: 35,
                      }}
                    />
                  ) : (
                    <View
                      style={{
                        borderLeftWidth: 6,
                        borderLeftColor: "#FCC9D7",
                        height: 100,
                        marginLeft: 35,
                      }}
                    />
                  )}
                  {/* <View
                    style={{
                      borderLeftWidth: 6,
                      borderLeftColor: "#FCC9D7",
                      height: 100,
                      marginLeft: 35,
                    }}
                  /> */}
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 12,
                      marginLeft: 21,
                      marginTop: 0,
                      fontWeight: "600",
                      color: "#434343",
                    }}
                  >
                    SETP 01
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      marginLeft: 22,
                      marginTop: 8,
                      color: "#434343",
                    }}
                  >
                    {meeting.client_name ? meeting.client_name : "Name"}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      marginLeft: 21,
                      marginTop: 8,
                      fontWeight: "400",
                      color: "#A4A4A4",
                    }}
                  >
                    {meeting.phone ? meeting.phone : "+9100000"}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      marginLeft: 21,
                      marginTop: 8,
                      fontWeight: "400",
                      color: "#A4A4A4",
                    }}
                  >
                    {meeting.email ? meeting.email : "benjamin.evans@mail.com"}
                  </Text>
                </View>
              </View>

              <View
                style={{
                  width: 296,
                  height: 120,
                  flexDirection: "row",
                  marginTop: 10,
                }}
              >
                <View>
                  <IconAnt
                    name="checkcircle"
                    size={33}
                    color={meeting.status >= 2 ? "#FF4B7D" : "#FEF2F5"}
                    style={{ marginTop: 3, marginLeft: 21 }}
                  />
                  {meeting.status > 2 ? (
                    <View
                      style={{
                        borderLeftWidth: 6,
                        borderLeftColor: "#FF4B7D",
                        height: 100,
                        marginLeft: 35,
                      }}
                    />
                  ) : (
                    <View
                      style={{
                        borderLeftWidth: 6,
                        borderLeftColor: "#FCC9D7",
                        height: 100,
                        marginLeft: 35,
                      }}
                    />
                  )}
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 12,
                      marginLeft: 21,
                      marginTop: 0,
                      fontWeight: "600",
                      color: "#434343",
                    }}
                  >
                    SETP 02
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      marginLeft: 21,
                      marginTop: 8,
                      fontWeight: "600",
                      color: "#434343",
                    }}
                  >
                    An Apointment has been scheduled
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      marginLeft: 21,
                      marginTop: 8,
                      fontWeight: "400",
                      color: "#A4A4A4",
                    }}
                  >
                    {meeting.date ? meeting.date : "05/20/2020"}
                  </Text>
                </View>
              </View>

              <View
                style={{
                  width: 296,
                  height: 120,
                  flexDirection: "row",
                  marginTop: 10,
                }}
              >
                <View>
                  <IconAnt
                    name="checkcircle"
                    size={33}
                    color={meeting.status >= 3 ? "#FF4B7D" : "#FEF2F5"}
                    style={{ marginTop: 3, marginLeft: 21 }}
                  />
                  {meeting.status > 3 || this.state.status > 3 ? (
                    <View
                      style={{
                        borderLeftWidth: 6,
                        borderLeftColor: "#FF4B7D",
                        height: 100,
                        marginLeft: 35,
                      }}
                    />
                  ) : (
                    <View
                      style={{
                        borderLeftWidth: 6,
                        borderLeftColor: "#FCC9D7",
                        height: 100,
                        marginLeft: 35,
                      }}
                    />
                  )}
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 12,
                      marginLeft: 21,
                      marginTop: 0,
                      fontWeight: "600",
                      color: "#434343",
                    }}
                  >
                    SETP 03
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      marginLeft: 21,
                      marginTop: 8,
                      fontWeight: "600",
                      color: "#434343",
                    }}
                  >
                    A wavier validation date
                  </Text>

                  <Text
                    onPress={this.showDateTimePicker}
                    style={{
                      fontSize: 12,
                      marginLeft: 21,
                      marginTop: 8,
                      fontWeight: "400",
                      color: "#FF4B7D",
                      textDecorationLine: "underline",
                    }}
                  >
                    {this.state.time
                      ? this.state.time
                      : "Click Here to Pick the Date"}
                  </Text>
                </View>
                <DateTimePicker
                  isVisible={this.state.isDateTimePickerVisible}
                  onConfirm={this.handleDatePicked}
                  onCancel={this.hideDateTimePicker}
                />
              </View>

              <View
                style={{
                  width: 296,
                  height: 120,
                  flexDirection: "row",
                  marginTop: 10,
                }}
              >
                <View>
                  <IconAnt
                    name="checkcircle"
                    size={33}
                    color={meeting.status >= 4 ? "#FF4B7D" : "#FEF2F5"}
                    style={{ marginTop: 3, marginLeft: 21 }}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      marginLeft: 21,
                      marginTop: 8,
                      fontWeight: "600",
                      color: "#FF4B7D",
                    }}
                  >
                    Successful!
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      marginLeft: 21,
                      marginTop: 8,
                      fontWeight: "600",
                      color: "#434343",
                    }}
                  >
                    Consumer is fully approved
                  </Text>
                </View>
              </View>
            </View>

            {meeting.status >= 4 ? (
              <View
                style={{
                  width: 334,
                  height: 152,
                  marginBottom: 50,
                  backgroundColor: "#FBEBEF",
                  borderRadius: 7,
                  alignSelf: "center",
                  marginTop: 17,
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    marginLeft: 18,
                    marginTop: 23,
                    marginRight: 28,
                    fontWeight: "600",
                    color: "#A4A4A4",
                  }}
                >
                  Welcome!
                </Text>

                <Text
                  style={{
                    fontSize: 12,
                    marginLeft: 18,
                    marginTop: 23,
                    marginRight: 28,
                    fontWeight: "600",
                    color: "#A4A4A4",
                  }}
                >
                  {meeting.client_name} account is fully approved and the
                  scheduled start date will be 10/05/2020. Your referral $50 to
                  be paid on 10/23/2020.
                </Text>
              </View>
            ) : null}
            {/* <Text
                style={{
                  fontSize: 12,
                  marginLeft: 18,
                  marginTop: 23,
                  marginRight: 28,
                  fontWeight: "600",
                  color: "#A4A4A4",
                }}
              >
                Kevin Cunningham account is fully approved and the scheduled
                start date will be 10/05/2020. Your referral $50 to be paid on
                10/23/2020.
              </Text> */}
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
