import React from "react";
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
  RefreshControl,
} from "react-native";
import IconAnt from "react-native-vector-icons/FontAwesome5";
import IconAnt1 from "react-native-vector-icons/AntDesign";
import IconAnt2 from "react-native-vector-icons/AntDesign";
import IconAnt3 from "react-native-vector-icons/AntDesign";

import { Input, Item, Card } from "native-base";
import { Button } from "react-native-paper";
import * as Font from "expo-font";
import CustomHeader from "../MyHeader";
import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
YellowBox.ignoreWarnings(["Remote debugger"]);

export default class HomePage extends React.Component {
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    headerShown: false,
  };
  state = {
    assetsLoaded: false,
    name: "",
    image: "",
    intakeID: "",
    Stats: "",
    ref: "",
    refreshing: false,
  };

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem("name");
      const image = await AsyncStorage.getItem("image");
      const intakeID = await AsyncStorage.getItem("token");

      if (value !== null && image !== null) {
        // value previously stored
        // console.log("Name", value, intakeID);
        this.setState({
          name: value,
          image: image,
          intakeID: intakeID,
        });
        this.getTodayStat();
      }
    } catch (e) {
      // error reading value
      console.log("Reading Value Error", e);
    }
  };

  onRefresh = () => {
    //Clear old data of the list
    this.setState({ Stats: "", refreshing: true });
    //Call the Service to get the latest data
    this.getTodayStat();
  };

  getTodayStat = () => {
    axios
      .get(
        `https://aplushome.facebhoook.com/api/homescreen/` + this.state.intakeID
      )
      .then((res) => {
        const data = res.data;
        // console.log("Response HomePage", data);

        this.setState({ Stats: data, refreshing: false });
      });
  };

  componentDidMount() {
    Font.loadAsync({
      proximanova: require("../assets/fonts/proximanova.otf"),
    });
    this.getData();
    // https://aplushome.facebhoook.com/api/homescreen/1

    this.setState({ assetsLoaded: true });
  }

  render() {
    // this.componentDidMount();
    // console.log("Stats:", this.state.Stats.referralsData);
    const { Stats } = this.state;
    // console.log("REFFF:", Stats.referralsData);
    const { assetsLoaded } = this.state;
    if (assetsLoaded) {
      return (
        <View style={styles.container}>
          <CustomHeader
            name={this.state.name}
            navigation={this.props.navigation}
            image={this.state.image}
          />
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={() => this.onRefresh()}
              />
            }
          >
            <View
              style={{
                width: 334,
                height: 110,
                backgroundColor: "#FF88AF",
                borderRadius: 7,
                alignSelf: "center",
                marginTop: 22,
                flexDirection: "row",
              }}
            >
              <View>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("TotalClients", {
                      Clients: [Stats.clientsData],
                    })
                  }
                >
                  <View style={{ flexDirection: "row" }}>
                    <IconAnt
                      name="user-friends"
                      size={40}
                      color="white"
                      style={{ marginLeft: 18, marginTop: 15 }}
                    />
                    <Text
                      style={{
                        fontSize: 30,
                        marginLeft: 13,
                        marginTop: 15,
                        fontWeight: "700",
                        color: "white",
                      }}
                    >
                      {Stats.clients ? Stats.clients : "Zero"}
                    </Text>

                    <IconAnt2
                      name="arrowright"
                      size={30}
                      color="white"
                      style={{ marginLeft: 150, marginTop: 40 }}
                    />
                  </View>
                </TouchableOpacity>

                <Text
                  style={{
                    fontSize: 16,
                    marginLeft: 18,
                    fontWeight: "400",
                    color: "white",
                  }}
                >
                  Clients scheduled today
                </Text>
              </View>
            </View>
            <View
              style={{
                width: 334,
                height: 110,
                backgroundColor: "#FFB492",
                borderRadius: 7,
                alignSelf: "center",
                marginTop: 22,
                flexDirection: "row",
              }}
            >
              <View>
                <TouchableOpacity
                  onPress={() => console.log("ReferralsScreen")}
                >
                  <View style={{ flexDirection: "row" }}>
                    <IconAnt
                      name="user-nurse"
                      size={40}
                      color="white"
                      style={{ marginLeft: 18, marginTop: 15 }}
                    />
                    <Text
                      style={{
                        fontSize: 30,
                        marginLeft: 13,
                        marginTop: 15,
                        fontWeight: "700",
                        color: "white",
                      }}
                    >
                      243
                    </Text>

                    <IconAnt2
                      name="arrowright"
                      size={30}
                      color="white"
                      style={{ marginLeft: 150, marginTop: 40 }}
                    />
                  </View>
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 16,
                    marginLeft: 18,
                    fontWeight: "400",
                    color: "white",
                  }}
                >
                  Caregivers assigned to work today
                </Text>
              </View>
            </View>
            <View
              style={{
                width: 334,
                height: 110,
                backgroundColor: "#74D0FF",
                borderRadius: 7,
                alignSelf: "center",
                marginTop: 22,
                flexDirection: "row",
              }}
            >
              <View>
                {/* <TouchableOpacity onPress={() => console.log("CLICKED")}> */}
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("ReferralsScreen", {
                      referral: [this.state.Stats.referralsData],
                    })
                  }
                >
                  <View style={{ flexDirection: "row" }}>
                    <IconAnt
                      name="handshake"
                      size={40}
                      color="white"
                      style={{ marginLeft: 18, marginTop: 15 }}
                    />
                    <Text
                      style={{
                        fontSize: 30,
                        marginLeft: 13,
                        marginTop: 15,
                        fontWeight: "700",
                        color: "white",
                      }}
                    >
                      {Stats.referrals ? Stats.referrals : "Zero"}
                    </Text>

                    <IconAnt2
                      name="arrowright"
                      size={30}
                      color="white"
                      style={{ marginLeft: 150, marginTop: 40 }}
                    />
                  </View>
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 16,
                    marginLeft: 18,
                    fontWeight: "400",
                    color: "white",
                  }}
                >
                  New referrals this week
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("AddSchdeule2")}
            >
              <Button
                style={{
                  marginTop: 39,
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
                  Make New Schedule
                </Text>
              </Button>
            </TouchableOpacity>
            {/* 
            <View
              style={{
                justifyContent: "center",
                marginTop: 10,
                alignItems: "center",
              }}
            >
              <Text>Dummy Navigation</Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("TotalClients")}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    borderBottomWidth: 1,
                  }}
                >
                  View Clients
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("TotalCaregiver")}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    borderBottomWidth: 1,
                    marginTop: 10,
                  }}
                >
                  View Caregivers
                </Text>
              </TouchableOpacity>
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
    backgroundColor: "#fff",
  },
});
