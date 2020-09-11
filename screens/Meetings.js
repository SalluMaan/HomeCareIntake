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
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import IconAnt from "react-native-vector-icons/AntDesign";
import IconAnt2 from "react-native-vector-icons/Fontisto";
import IconAnt3 from "react-native-vector-icons/Entypo";
import IconAnt4 from "react-native-vector-icons/Feather";
import { Input, Item, Card } from "native-base";
import { Button, RadioButton } from "react-native-paper";
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
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";
import Moment from "moment";

YellowBox.ignoreWarnings(["Remote debugger"]);

export default class Meetings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined,
      intakeId: 0,
      total: "",
      bgMeeting: "#FEF2F5",
      bgSchedule: "#fff",
      clrMeeting: "#FF4B7D",
      clrSchedule: "#a4a4a4",
      clicked: false,
      totalSch: "",
      refreshing: false,
    };

    YellowBox.ignoreWarnings([
      "Warning: isMounted(...) is deprecated",
      "Module RCTImageLoader",
    ]);
  }

  handleMap = (a, b) => {
    console.log("LANGLAT:", a, b);
    const lang = Number(a);
    const lat = Number(b);

    if (a !== null && a !== "" && b !== null && b !== "") {
      this.props.navigation.navigate("Map", {
        lang: parseFloat(a),
        lat: parseFloat(b),
        id: 111,
      });
    } else {
      alert(
        "There was error with longitude latitude its containing null value "
      );
    }
  };

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
    this.getData();

    this.setState({ assetsLoaded: true });
  }

  onRefresh = () => {
    //Clear old data of the list
    this.setState({ total: "", totalSch: "", refreshing: true });
    //Call the Service to get the latest data and in this function set refreshing to false
    // this.getMeetings();
    // this.getSchedule();
    this.getMeetSchData();
  };

  getMeetSchData = () => {
    axios
      .get(
        "https://aplushome.facebhoook.com/api/getmeetings/" +
          this.state.intakeId
      )
      .then((res) => {
        const data = res.data["meetings"];
        console.log("Response", data);
        // console.log("Response", res.data["error"]);

        this.setState({ total: data });
      })
      .catch((err) => {
        console.log("Error", err);
      });

    axios
      .get(
        "https://aplushome.facebhoook.com/api/getschedules/" +
          this.state.intakeId
      )
      .then((res) => {
        const data = res.data["success"];
        console.log("Response", data);

        this.setState({ totalSch: data });
      });
    this.setState({
      refreshing: false,
    });
  };

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        // value previously stored
        console.log("Token", value);
        this.setState({
          intakeId: value,
        });
        this.getMeetings();
      }
    } catch (e) {
      // error reading value
      console.log("Reading Value Error", e);
    }
  };

  getMeetings = () => {
    console.log("Token:", this.state.intakeId);
    axios
      .get(
        "https://aplushome.facebhoook.com/api/getmeetings/" +
          this.state.intakeId
      )
      .then((res) => {
        const data = res.data["meetings"];
        console.log("Response", data);
        // console.log("Response", res.data["error"]);

        this.setState({ total: data });
      })
      .catch((err) => {
        console.log("Error", err);
      });

    this.setState({
      clicked: false,
      bgSchedule: "#fff",
      bgMeeting: "#FEF2F5",
      clrMeeting: "#FF4B7D",
      clrSchedule: "#a4a4a4",
      refreshing: false,
    });
  };

  getSchedule = () => {
    axios
      .get(
        "https://aplushome.facebhoook.com/api/getschedules/" +
          this.state.intakeId
      )
      .then((res) => {
        const data = res.data["success"];
        console.log("Response", data);

        this.setState({ totalSch: data });
      });
    this.setState({
      clicked: true,
      bgMeeting: "#fff",
      bgSchedule: "#FEF2F5",
      clrMeeting: "#a4a4a4",
      clrSchedule: "#FF4B7D",
      refreshing: false,
    });
  };

  render() {
    const { assetsLoaded } = this.state;
    if (assetsLoaded) {
      return (
        <View style={styles.container}>
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={() => this.onRefresh()}
              />
            }
          >
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
                marginLeft: 17,
                height: 50,
                backgroundColor: "#fff",
                borderRadius: 4,
                marginTop: 30,
                justifyContent: "space-around",
              }}
            >
              {/* <TouchableOpacity
                onPress={() => this.props.navigation.navigate("ViewSchedule")}
              > */}
              <Button
                onPress={() => this.getSchedule()}
                style={{
                  alignSelf: "center",
                  width: 123,
                  height: 38,
                  marginLeft: 25,
                  backgroundColor: this.state.bgSchedule,
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
                    color: this.state.clrSchedule,
                  }}
                >
                  My Schedule
                </Text>
              </Button>
              {/* </TouchableOpacity> */}

              <Button
                onPress={() => this.getMeetings()}
                style={{
                  alignSelf: "center",
                  width: 123,
                  height: 38,
                  marginLeft: 25,
                  backgroundColor: this.state.bgMeeting,
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
                    color: this.state.clrMeeting,
                  }}
                >
                  My Meetings
                </Text>
              </Button>
            </View>

            {this.state.clicked ? (
              Array.isArray(this.state.totalSch) &&
              this.state.totalSch.length > 0 &&
              this.state.totalSch ? (
                this.state.totalSch.map((sch, id) => {
                  return (
                    <View key={id}>
                      <TouchableOpacity
                        onPress={() =>
                          this.props.navigation.navigate("SchDetComp", {
                            schedule: sch,
                          })
                        }
                      >
                        <View
                          style={{
                            width: 334,
                            height: 60,
                            backgroundColor: "#FF4B7D",
                            borderRadius: 10,
                            alignSelf: "center",
                            flexDirection: "row",
                            marginTop: 17,
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 16,
                              marginLeft: 17,
                              marginTop: 18,
                              fontWeight: "600",
                              color: "white",
                            }}
                          >
                            {Moment(sch.date).format("D MMM YYYY")}
                          </Text>
                          <View
                            style={{
                              height: 40,
                              alignSelf: "center",
                              marginLeft: 24,
                              borderLeftWidth: 2,
                              borderLeftColor: "white",
                            }}
                          />
                          <Text
                            style={{
                              fontSize: 16,
                              marginLeft: 19,
                              marginTop: 18,
                              fontWeight: "600",
                              color: "white",
                            }}
                          >
                            {sch.timeStart.substring(0, 5)}
                            {sch.timeStart.substring(0, 2) >= 12
                              ? " PM"
                              : " AM"}
                            {"-"}
                            {sch.timeEnd.substring(0, 5)}
                            {sch.timeEnd.substring(0, 2) >= 12 ? " PM" : " AM"}
                          </Text>
                        </View>
                        <View
                          style={{
                            width: 334,
                            height: 253,
                            backgroundColor: "#FFFFFF",
                            borderBottomRightRadius: 10,
                            borderBottomLeftRadius: 10,
                            alignSelf: "center",
                            marginTop: -10,
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 12,
                              marginLeft: 17,
                              marginTop: 25,
                              fontWeight: "600",
                              color: "#7D7D7D",
                            }}
                          >
                            {"Caregiver ID -"} {sch.name}
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
                            {sch.client_name
                              ? sch.client_name
                              : "Name not taken"}
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
                              {sch.address_line2
                                ? sch.address_line2 + sch.location
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
                              {sch.phone
                                ? sch.phone
                                : "Phone Numer is not Found"}
                            </Text>
                          </View>
                          <Button
                            onPress={() =>
                              this.handleMap(sch.longitude, sch.latitude)
                            }
                            style={{
                              marginTop: 23,
                              width: 138,
                              height: 50,
                              marginLeft: 20,
                              backgroundColor: "#B20838",
                              borderRadius: 4,
                              borderWidth: 1,
                              textAlign: "center",
                            }}
                          >
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
                                marginTop: 5,
                                fontWeight: "600",
                                color: "white",
                              }}
                            >
                              MAP
                            </Text>
                          </Button>
                        </View>
                      </TouchableOpacity>
                    </View>
                  );
                })
              ) : (
                <Text style={{ margin: "10%", color: "#a4a4a4" }}>
                  No Schedule Found ......
                </Text>
              )
            ) : this.state.total ? (
              this.state.total.map((meet, id) => {
                return (
                  <View
                    key={id}
                    style={{
                      width: 334,
                      height: 293,
                      backgroundColor: "white",
                      borderRadius: 10,
                      alignSelf: "center",
                      marginTop: 30,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate("LeadStatus", {
                          meeting: meet,
                        })
                      }
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
                        {meet.date
                          ? Moment(meet.date).format("D MMM YYYY")
                          : "26 Aug 2098"}
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
                        {meet.client_name
                          ? meet.client_name
                          : "Name is not Found"}
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
                          {meet.location ? meet.location : "Address Not Found"}
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
                          {meet.phone ? meet.phone : "Phone Numer is not Found"}
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
                        {"Meeting Time: "}
                        {meet.date
                          ? Moment(meet.date).format("D MMM YYYY")
                          : "14 August 19998"}{" "}
                        {" | "}
                        {meet.time ? meet.time.substring(0, 5) : "11:00"}
                        {meet.time
                          ? meet.time.substring(0, 2) >= 12
                            ? " PM"
                            : " AM"
                          : ""}
                      </Text>
                    </TouchableOpacity>

                    <Button
                      onPress={() =>
                        this.handleMap(meet.longitude, meet.latitude)
                      }
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
            ) : (
              // <ActivityIndicator />
              <Text
                style={{
                  marginHorizontal: "6%",
                  marginTop: "3%",
                  color: "gray",
                }}
              >
                No Meeting Scheduled Today
              </Text>
            )}
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
