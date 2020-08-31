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
} from "react-native";
import IconAnt from "react-native-vector-icons/AntDesign";
import { Input, Item, Card } from "native-base";
import { Button } from "react-native-paper";
import * as Font from "expo-font";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

YellowBox.ignoreWarnings(["Remote debugger"]);

export default class Notification01 extends React.Component {
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    headerShown: false,
  };
  state = {
    assetsLoaded: false,
    token: "",
    notifications: "",
  };

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        // value previously stored
        console.log("Token", value);
        this.setState({
          token: value,
        });
        this.getNotification();
      }
    } catch (e) {
      // error reading value
      console.log("Reading Value Error", e);
    }
  };

  getNotification = () => {
    console.log("getNotification");
    const url =
      "https://aplushome.facebhoook.com/api/getnotification/" +
      this.state.token;
    axios.get(url).then((res) => {
      const data = res.data["success"];
      console.log("Response", data);
      this.setState({ notifications: data });
    });
  };
  async componentDidMount() {
    await Font.loadAsync({
      proximanova: require("../assets/fonts/proximanova.otf"),
    });
    this.getData();

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
              {/* <View>
                <Text
                  style={{
                    fontSize: 8,
                    marginLeft: 230,
                    alignSelf: "center",
                    fontWeight: "600",
                    color: "#A4A4A4",
                  }}
                >
                  CLOSE X
                </Text>
              </View> */}
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("First")}
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
                Notifications
              </Text>
            </TouchableOpacity>

            {/* Notification */}

            {this.state.notifications
              ? this.state.notifications.map((notification, id) => {
                  return (
                    <View
                      key={id}
                      style={{
                        width: 334,
                        backgroundColor: "#E4F6FF",
                        borderRadius: 7,
                        alignSelf: "center",
                        marginTop: 10,
                        flexDirection: "row",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          marginLeft: 18,
                          marginVertical: 23,
                          marginRight: 28,
                          fontWeight: "600",
                          color: "#A4A4A4",
                        }}
                      >
                        {notification.description}
                      </Text>
                    </View>
                  );
                })
              : null}

            {/* Notification */}

            {/* <View
              style={{
                width: 334,
                height: 152,
                backgroundColor: "#FFF3F7",
                borderRadius: 7,
                alignSelf: "center",
                marginTop: 14,
                flexDirection: "row",
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vel metus ornare urna gravida pellentesque quis eget urna. Sed
                tortor orci, aliquam nec sapien non, tempor tristique libero.
              </Text>
            </View>

            <View
              style={{
                width: 334,
                height: 152,
                backgroundColor: "#FFF3F7",
                borderRadius: 7,
                alignSelf: "center",
                marginTop: 14,
                flexDirection: "row",
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vel metus ornare urna gravida pellentesque quis eget urna. Sed
                tortor orci, aliquam nec sapien non, tempor tristique libero.
              </Text>
            </View>

            <View
              style={{
                width: 334,
                height: 152,
                backgroundColor: "#E4F6FF",
                borderRadius: 7,
                alignSelf: "center",
                marginTop: 17,
                flexDirection: "row",
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vel metus ornare urna gravida pellentesque quis eget urna. Sed
                tortor orci, aliquam nec sapien non, tempor tristique libero.
              </Text>
            </View>

            <View
              style={{
                width: 334,
                height: 152,
                backgroundColor: "#D7F8F2",
                borderRadius: 7,
                alignSelf: "center",
                marginTop: 17,
                flexDirection: "row",
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vel metus ornare urna gravida pellentesque quis eget urna. Sed
                tortor orci, aliquam nec sapien non, tempor tristique libero.
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
    backgroundColor: "#fff",
  },
});
