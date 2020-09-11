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
import IconAnt2 from "react-native-vector-icons/Fontisto";
import IconAnt from "react-native-vector-icons/AntDesign";
import IconAnt3 from "react-native-vector-icons/Feather";
import { Button } from "react-native-paper";
import * as Font from "expo-font";
import CustomHeader from "../MyHeader";
YellowBox.ignoreWarnings(["Remote debugger"]);
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";
import Moment from "moment";
import CustomHeader2 from "../MyHeader2";
import openMap from "react-native-open-maps";

import * as CareGiverServices from "../src/services/CareGiver";

export default class HomePage2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      careID: 0,
      totalSch: "",
      caregiverName: "",
      image: "",
    };
  }

  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    headerShown: false,
  };
  state = {
    assetsLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      proximanova: require("../assets/fonts/proximanova.otf"),
    });

    this.getData();

    this.setState({ assetsLoaded: true });
  }

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      const name = await AsyncStorage.getItem("Carename");
      // Careimage
      const image = await AsyncStorage.getItem("Careimage");

      if (value !== null && name !== null && image !== null) {
        // value previously stored
        console.log("token", value);
        this.setState({
          careID: value,
          caregiverName: name,
          image,
        });
        this.getSchedule();
      }
    } catch (e) {
      // error reading value
      console.log("Reading Value Error", e);
    }
  };

  handleMap = (a, b) => {
    console.log("LANGLAT:", a, b);
    const lang = Number(a);
    const lat = Number(b);

    if (a !== null && a !== "" && b !== null && b !== "") {
      this.props.navigation.navigate("MapCare", {
        lang: parseFloat(a),
        lat: parseFloat(b),
      });
    } else {
      alert(
        "There was error with longitude latitude its containing null value "
      );
    }
  };

  getSchedule = () => {
    // console.log("Token:", this.state.intakeId);
    // axios
    //   .get(
    //     "https://aplushome.facebhoook.com/api/getcaregiverschedules/" +
    //       this.state.careID
    //   )
    //   .then((res) => {
    //     const data = res.data["success"];
    //     console.log("Response", data);

    //     this.setState({ totalSch: data });
    //   }).catch(error => {

    //   })

    CareGiverServices.getSchedules()
      .then((response) => {
        console.log("CareGiverServices.getSchedules-resopnse", response);
        const schedules = response.success;
        if (Array.isArray(schedules) && schedules.length > 0) {
          this.setState({ totalSch: schedules });
        }
      })
      .catch((error) => {
        console.log("CareGiverServices.getSchedules-error", error);
      });
  };

  render() {
    const { assetsLoaded } = this.state;
    if (assetsLoaded) {
      return (
        <View style={styles.container}>
          <CustomHeader2
            name={this.state.caregiverName}
            navigation={this.props.navigation}
            image={this.state.image}
          />
          <ScrollView>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 18,
                  marginTop: 21,
                  textAlign: "center",
                  fontWeight: "600",
                  color: "#83878A",
                  textTransform: "uppercase",
                }}
              >
                My Schedule
              </Text>
            </TouchableOpacity>

            {this.state.totalSch ? (
              this.state.totalSch.map((sch, id) => {
                return (
                  <TouchableOpacity
                    key={id}
                    onPress={() => {
                      this.props.navigation.navigate("ScheduleDet", {
                        schedule: sch,
                      });
                    }}
                  >
                    <View
                      style={{
                        width: 334,
                        height: 60,
                        backgroundColor: "#BCF9DA",
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
                          fontWeight: "800",
                          color: "#7D7D7D",
                        }}
                      >
                        {Moment(sch.date, "YYYY-MM-DD").format("DD MMM YYYY")}
                      </Text>
                      <View
                        style={{
                          height: "100%",
                          alignSelf: "center",
                          marginLeft: 24,
                          borderLeftWidth: 2,
                          borderLeftColor: "#A4A4A4",
                        }}
                      />
                      <Text
                        style={{
                          fontSize: 16,
                          marginLeft: 19,
                          marginTop: 18,
                          fontWeight: "600",
                          color: "#A4A4A4",
                        }}
                      >
                        {sch.timeStart.substring(0, 5)}
                        {sch.timeStart.substring(0, 2) >= 12 ? " PM" : " AM"}
                        {" - "}
                        {sch.timeEnd.substring(0, 5)}
                        {sch.timeEnd.substring(0, 2) >= 12 ? " PM" : " AM"}
                      </Text>
                    </View>
                    <View
                      style={{
                        width: 334,
                        height: 253,
                        backgroundColor: "#F6F6F6",
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
                          textTransform: "uppercase",
                        }}
                      >
                        CLient Information
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
                        {sch.client_name}
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
                          {sch.address ? sch.address : ""}
                          {sch.address_line2 ? ", " + sch.address_line2 : ""}
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
                          {sch.phone}
                        </Text>
                      </View>
                      <Button
                        onPress={() =>
                          this.handleMap(sch.longitude, sch.latitude)
                        }
                        // 31.483832, 74.319117

                        style={{
                          marginTop: 23,
                          width: 138,
                          height: 50,
                          marginLeft: 20,
                          backgroundColor: "#B20838",
                          borderRadius: 5,
                          borderWidth: 1,
                          textAlign: "center",
                        }}
                      >
                        <IconAnt3
                          name="map-pin"
                          size={15}
                          color="white"
                          style={{ marginLeft: 5 }}
                        />

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
                );
              })
            ) : (
              <Text style={{ marginHorizontal: "10%", color: "#a4a4a4" }}>
                No schedule Found
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
    backgroundColor: "#fff",
  },
});
