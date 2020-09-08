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
  Alert,
} from "react-native";
import IconAnt from "react-native-vector-icons/AntDesign";
import IconAnt1 from "react-native-vector-icons/Entypo";
import IconAnt2 from "react-native-vector-icons/MaterialIcons";

import { Input, Item, Card } from "native-base";
import { Button } from "react-native-paper";
import * as Font from "expo-font";
YellowBox.ignoreWarnings(["Remote debugger"]);
import AsyncStorage from "@react-native-community/async-storage";
import { CareAllReminderPath, DeleteReminderPath } from "./constantCaregiver";
import axios from "axios";
import Moment from "moment";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

export default class HomePage3 extends React.Component {
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    headerShown: false,
  };
  state = {
    assetsLoaded: false,
    careID: 0,
    reminders: "",
    refreshing: false,
  };

  getNotification = () => {
    console.log("GETNOTIFICATIONS");
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Time's up!",
        body: "Change sides!",
      },
      trigger: {
        seconds: 2,
      },
    });
  };

  async registerForPushNotifications() {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    });
    const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);

    if (status !== "granted") {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (status !== "granted") {
        return;
      }
    }

    const token = await Notifications.getExpoPushTokenAsync();

    // this.subscription = Notifications.addListener(this.handleNotification);
    console.log("token:", token);
    this.setState({
      token,
    });
    this.getNotification();
    // this.localNotifications();
  }
  localNotifications = () => {
    console.log("LOCAL NOTOFICATIONS");
    const localNotification = {
      title: "",
      body: "", // (string) — body text of the notification.
      ios: {
        // (optional) (object) — notification configuration specific to iOS.
        sound: true, // (optional) (boolean) — if true, play a sound. Default: false.
      },
      // (optional) (object) — notification configuration specific to Android.
      android: {
        sound: true, // (optional) (boolean) — if true, play a sound. Default: false.
        //icon (optional) (string) — URL of icon to display in notification drawer.
        //color (optional) (string) — color of the notification icon in notification drawer.
        priority: "high", // (optional) (min | low | high | max) — android may present notifications according to the priority, for example a high priority notification will likely to be shown as a heads-up notification.
        sticky: false, // (optional) (boolean) — if true, the notification will be sticky and not dismissable by user. The notification must be programmatically dismissed. Default: false.
        vibrate: true, // (optional) (boolean or array) — if true, vibrate the device. An array can be supplied to specify the vibration pattern, e.g. - [ 0, 500 ].
        // link (optional) (string) — external link to open when notification is selected.
      },
    };
    let t = new Date();
    t.setSeconds(t.getSeconds() + 10000);
    const schedulingOptions = {
      time: t, // (date or number) — A Date object representing when to fire the notification or a number in Unix epoch time. Example: (new Date()).getTime() + 1000 is one second from now.
      repeat: repeat,
    };

    Notifications.scheduleLocalNotificationAsync(
      localNotification,
      schedulingOptions
    );
  };

  handleNotification = ({ origin, data }) => {
    console.log(
      `Push notification ${origin} with data: ${JSON.stringify(data)}`
    );
  };

  getRunTimeData = () => {
    this.getData();
  };
  componentDidMount = async () => {
    this.getRunTimeData();
    await Font.loadAsync({
      proximanova: require("../assets/fonts/proximanova.otf"),
    });
    // this.getData();
    this.registerForPushNotifications();

    this.setState({ assetsLoaded: true });
  };

  UNSAFE_componentWillMount() {
    // this.onRefresh();
    this.getRunTimeData();
    Notifications.addNotificationReceivedListener((notification) => {
      console.log("Notifications MSg", notification);
      // Alert.alert(
      //   notification.request.content.title,
      //   notification.request.content.body
      // );
    });
  }

  onRefresh = () => {
    //Clear old data of the list
    this.setState({ reminders: "", refreshing: true });
    //Call the Service to get the latest data and in this function set refreshing to false
    this.getReminder();
  };

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        // value previously stored
        console.log("token", value);
        this.setState({
          careID: value,
        });
        this.getReminder();
      }
    } catch (e) {
      // error reading value
      console.log("Reading Value Error", e);
    }
  };

  getReminder = () => {
    console.log("ID", this.state.careID);
    axios
      .get(CareAllReminderPath + this.state.careID)
      .then((res) => {
        console.log("RSp:", res.data);
        const data = res.data["success"];
        console.log("Response", data);

        this.setState({ reminders: data, refreshing: false });
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  handleDelete = (id) => {
    console.log("ID to be Delted:", id);
    axios
      .get(DeleteReminderPath + id)
      .then((res) => {
        console.log("RSp:", res.data);
        // const data = res.data["success"];
        // console.log("Response", data);

        // this.setState({ reminders: data, refreshing: false });
        Alert.alert("Response", "Reminder Deleted Successfully!");
      })
      .catch((error) => {
        console.log("Error", error);
        Alert.alert("Response", "Error while deleting reminder");
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
            </View>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("SetRemainder")}
            >
              <Button
                style={{
                  marginTop: 40,
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
                  Create a new reminder
                </Text>
              </Button>
            </TouchableOpacity>

            {this.state.reminders ? (
              this.state.reminders.map((sch, id) => {
                return (
                  <View
                    key={id}
                    style={{
                      width: 334,
                      backgroundColor: "#FFFFFF",
                      borderRadius: 7,
                      alignSelf: "center",
                      marginTop: 25,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 12,
                        marginLeft: 17,
                        marginTop: 25,
                        fontWeight: "600",
                        color: "#A4A4A4",
                      }}
                    >
                      {Moment(sch.date).format("DD MMM YYYY")}
                    </Text>
                    <Text
                      style={{
                        fontSize: 20,
                        marginLeft: 17,
                        marginTop: 25,
                        fontWeight: "600",
                        color: "#434343",
                      }}
                    >
                      {sch.title ? sch.title : "Title"}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        marginLeft: 17,
                        marginTop: 10,
                        fontWeight: "600",
                        color: "#7D7D7D",
                      }}
                    >
                      {sch.details ? sch.details : "Details"}
                    </Text>
                    <View
                      style={{
                        borderBottomWidth: 1,
                        borderBottomColor: "#7D7D7D",
                        width: 270,
                        marginTop: 50,
                        marginLeft: 30,
                        marginRight: 30,
                      }}
                    />
                    <View
                      style={{
                        flexDirection: "row",
                        marginLeft: 190,
                        marginTop: 10,
                      }}
                    >
                      <TouchableOpacity>
                        <IconAnt1
                          name="eye"
                          size={25}
                          color="#A4A4A4"
                          style={{ marginLeft: 0 }}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() =>
                          this.props.navigation.navigate("EditReminder", {
                            obj: sch,
                          })
                        }
                      >
                        <IconAnt2
                          name="edit"
                          size={25}
                          color="#A4A4A4"
                          style={{ marginLeft: 15 }}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => this.handleDelete(sch.id)}
                      >
                        <IconAnt2
                          name="delete"
                          size={25}
                          color="#A4A4A4"
                          style={{ marginLeft: 15 }}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })
            ) : (
              <Text style={{ margin: "5%" }}>No Reminders Found</Text>
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
});
