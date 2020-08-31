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
import IconAnt2 from "react-native-vector-icons/MaterialIcons";
import IconAnt from "react-native-vector-icons/AntDesign";
import IconAnt3 from "react-native-vector-icons/Feather";
import { Input, Item, Card } from "native-base";
import { Button } from "react-native-paper";
import * as Font from "expo-font";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";
import Moment from "moment";

YellowBox.ignoreWarnings(["Remote debugger"]);

export default class SchDetComp extends React.Component {
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    headerShown: false,
  };
  state = {
    assetsLoaded: false,
    sch: this.props.navigation.state.params.schedule,
    checked: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      proximanova: require("../assets/fonts/proximanova.otf"),
    });

    this.setState({ assetsLoaded: true });
  }

  render() {
    // console.log("SCHDDULE:", this.state.sch);
    const { sch } = this.state;

    const { assetsLoaded } = this.state;
    if (assetsLoaded) {
      return (
        <View style={styles.container}>
          <ScrollView>
            <View
              style={{ marginTop: 13, marginLeft: 20, flexDirection: "row" }}
            >
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <IconAnt
                  name="left"
                  size={20}
                  color="#A4A4A4"
                  style={{ marginRight: 5 }}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                width: 334,
                height: 720,
                backgroundColor: "#FFFFFF",
                borderRadius: 7,
                alignSelf: "center",
                marginTop: 17,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  marginLeft: 17,
                  marginTop: 19,
                  fontWeight: "700",
                  color: "#434343",
                }}
              >
                {Moment(sch.date).format("dddd DD MMMM YYYY")}
                {/* Friday, March 28, 2020 */}
              </Text>

              <View style={{ marginLeft: 17, marginTop: 10 }}>
                <Text
                  style={{
                    fontSize: 12,
                    marginLeft: 0,
                    fontWeight: "600",
                    color: "#7D7D7D",
                  }}
                >
                  Schedule status:{" "}
                  <Text
                    style={{
                      fontSize: 12,
                      marginLeft: 0,
                      fontWeight: "700",
                      color: "#7D7D7D",
                    }}
                  >
                    {sch.status === 1 ? "Complete" : "Working"}
                  </Text>
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    marginLeft: 0,
                    fontWeight: "600",
                    color: "#7D7D7D",
                  }}
                >
                  Start time:{" "}
                  <Text
                    style={{
                      fontSize: 12,
                      marginLeft: 0,
                      fontWeight: "700",
                      color: "#7D7D7D",
                    }}
                  >
                    {sch.timeStart.substring(0, 5)}
                    {sch.timeStart.substring(0, 2) >= 12 ? " PM" : " AM"}
                    {"-"}
                    {sch.timeEnd.substring(0, 5)}
                    {sch.timeEnd.substring(0, 2) >= 12 ? " PM" : " AM"}
                  </Text>
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    marginLeft: 0,
                    fontWeight: "600",
                    color: "#7D7D7D",
                  }}
                >
                  Check-in time:{" "}
                  <Text
                    style={{
                      fontSize: 12,
                      marginLeft: 0,
                      fontWeight: "700",
                      color: "#7D7D7D",
                    }}
                  >
                    {sch.timeStart.substring(0, 5)}
                    {sch.timeStart.substring(0, 2) >= 12 ? " PM" : " AM"}{" "}
                  </Text>
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    marginLeft: 0,
                    fontWeight: "600",
                    color: "#7D7D7D",
                  }}
                >
                  Check-out time:{" "}
                  <Text
                    style={{
                      fontSize: 12,
                      marginLeft: 0,
                      fontWeight: "700",
                      color: "#7D7D7D",
                    }}
                  >
                    {sch.timeEnd.substring(0, 5)}
                    {sch.timeEnd.substring(0, 2) >= 12 ? " PM" : " AM"}{" "}
                  </Text>
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    marginLeft: 0,
                    fontWeight: "600",
                    color: "#7D7D7D",
                  }}
                >
                  Worked time:{" "}
                  <Text
                    style={{
                      fontSize: 12,
                      marginLeft: 0,
                      fontWeight: "700",
                      color: "#7D7D7D",
                    }}
                  >
                    {Number(sch.timeEnd.substring(0, 2)) -
                      Number(sch.timeStart.substring(0, 2))}{" "}
                    hours
                  </Text>
                </Text>
              </View>

              <View style={{ marginLeft: 17, marginTop: 30 }}>
                <View
                  style={{
                    backgroundColor: "#7D7D7D",
                    borderWidth: 0.5,
                    marginTop: 12,
                  }}
                ></View>

                <Text
                  style={{
                    fontSize: 16,
                    marginLeft: 0,
                    fontWeight: "600",
                    color: "#434343",
                    marginTop: 25,
                  }}
                >
                  Task List
                </Text>

                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Text
                      style={{
                        fontSize: 14,
                        marginLeft: 0,
                        fontWeight: "600",
                        color: "#7D7D7D",
                        marginTop: 10,
                      }}
                    >
                      {sch.client_task ? sch.client_task : "Task 1"}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        marginLeft: 0,
                        fontWeight: "600",
                        color: "#7D7D7D",
                        marginTop: 10,
                      }}
                    >
                      {sch.client_task2 ? sch.client_task : "Task 1"}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        marginLeft: 0,
                        fontWeight: "600",
                        color: "#7D7D7D",
                        marginTop: 10,
                      }}
                    >
                      {sch.client_task3 ? sch.client_task : "Task Add Check"}
                    </Text>
                  </View>
                  <View style={{ marginLeft: 120 }}>
                    <View style={{ flexDirection: "row" }}>
                      <IconAnt
                        name="checkcircle"
                        size={20}
                        color="#FF4B7D"
                        style={{ marginTop: 5 }}
                      />
                      <IconAnt2
                        name="not-interested"
                        size={25}
                        color="#FFC8D7"
                        style={{ marginTop: 2, marginLeft: 4 }}
                      />
                    </View>

                    <View style={{ flexDirection: "row" }}>
                      <IconAnt
                        name="checkcircle"
                        size={20}
                        color="#FF4B7D"
                        style={{ marginTop: 5 }}
                      />
                      <IconAnt2
                        name="not-interested"
                        size={25}
                        color="#FFC8D7"
                        style={{ marginTop: 2, marginLeft: 4 }}
                      />
                    </View>

                    <View style={{ flexDirection: "row" }}>
                      <IconAnt
                        name="checkcircle"
                        size={20}
                        color="#FF4B7D"
                        style={{ marginTop: 5 }}
                      />
                      <IconAnt2
                        name="not-interested"
                        size={25}
                        color="#FFC8D7"
                        style={{ marginTop: 2, marginLeft: 4 }}
                      />
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    backgroundColor: "#7D7D7D",
                    borderWidth: 0.5,
                    marginTop: 30,
                  }}
                ></View>

                <Text
                  style={{
                    fontSize: 18,
                    marginLeft: 0,
                    marginTop: 19,
                    fontWeight: "600",
                    color: "#434343",
                  }}
                >
                  Notes
                </Text>
                <IconAnt2
                  name="description"
                  size={50}
                  color="#FF4B7D"
                  style={{ marginTop: 2, marginLeft: 4 }}
                />
              </View>
            </View>
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
