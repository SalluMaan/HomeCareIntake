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
  CheckBox,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/Feather";
import IconAnt2 from "react-native-vector-icons/Fontisto";
import IconAnt from "react-native-vector-icons/AntDesign";
import IconAnt3 from "react-native-vector-icons/Feather";
import { Input, Item, Card } from "native-base";
import { Button } from "react-native-paper";
import axios from "axios";
import Moment from "moment";
import TimePicker from "react-native-24h-timepicker";
import TimePicker2 from "react-native-24h-timepicker";
import qs from "qs";

import DateTimePicker from "react-native-modal-datetime-picker";
import {
  Container,
  Header,
  Content,
  Picker,
  Form,
  ListItem,
  Body,
} from "native-base";

import * as Font from "expo-font";
import AsyncStorage from "@react-native-community/async-storage";

YellowBox.ignoreWarnings(["Remote debugger"]);

export default class AddSchdeule extends React.Component {
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    headerShown: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
      selected: "",
      selected2: "",
      date: "",
      caregivers: [],
      client: [],
      timeStart: "1:30",
      time: "2020-06-13",
      timeEnd: "2:30",
      response: ".",
      intakeId: 0,
      hourStart: 1,
      hourEnd: 2,
      recurringButton: false,
      assetsLoaded: false,
    };
  }

  onValueChange(value) {
    this.setState({
      selected: value,
    });
  }

  onCancel() {
    this.TimePicker.close();
  }

  onCancel() {
    this.TimePicker2.close();
  }

  onConfirmStart(hour, minute) {
    this.setState({ timeStart: `${hour}:${minute}`, hourStart: hour });
    this.TimePicker.close();
  }

  onConfirmEnd(hour, minute) {
    this.setState({ timeEnd: `${hour}:${minute}`, hourEnd: hour });
    this.TimePicker2.close();
  }

  onValueChange2(value) {
    this.setState({
      selected2: value,
    });
  }
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
  };

  onChangeText = this.onChangeText.bind(this);

  onChangeText(text) {
    this.setState({
      selected: text,
    });
  }

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        // value previously stored
        console.log("Token", value);
        this.setState({
          intakeId: value,
        });
        this.getCaregivers();
        this.getClient();
      }
    } catch (e) {
      // error reading value
      console.log("Reading Value Error", e);
    }
  };
  getCaregivers = () => {
    console.log("CAR_Intake ID:", this.state.intakeId);
    axios
      .get(
        `https://aplushome.facebhoook.com/api/getcaregivers/` +
          this.state.intakeId
      )
      .then((res) => {
        const data = res.data["success"];
        console.log("Response Xaregiver", data);

        this.setState({ caregivers: data });
      });
  };

  getClient = () => {
    console.log("CL_Intake ID:", this.state.intakeId);

    axios
      .get(
        `https://aplushome.facebhoook.com/api/getclients/` + this.state.intakeId
      )
      .then((res) => {
        const data = res.data["success"];
        console.log("Response Clinets", data);

        this.setState({ client: data });
      });
  };

  async componentDidMount() {
    this.getData();

    await Font.loadAsync({
      proximanova: require("../assets/fonts/proximanova.otf"),
    });

    this.setState({ assetsLoaded: true });
  }
  timeOut = () => {
    setTimeout(() => {
      this.setState({
        response: "",
      });
    }, 8000);
    console.log("TIMEOUT:", this.state.firstName);
  };
  //   date: "Select Date",
  //   caregivers: "",
  //   client: "",
  //   timeStart: "1:30",
  //   timeEnd: "2:30",
  validateDate() {
    console.log(
      "Valid:",
      this.getCurrentDate().toString() > this.state.time.toString(),
      this.getCurrentDate(),
      this.state.time
    );
    if (this.getCurrentDate() >= this.state.time) {
      alert("Date must be greater.You are scheduling it for future");
      return false;
    }
    return true;
  }
  validateTime() {
    console.log("Hour", this.state.hourEnd, this.state.hourStart);
    const x = this.state.hourEnd;
    const y = this.state.hourStart;
    if (x > y) {
      alert(
        "Time End of the Service must be greater than the Time Start Service.Kindly Select Both time corectly Again"
      );
      return false;
    }
    return true;
  }

  getCurrentDate(separator = "-") {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    if (date > 0 && date < 10) {
      date = "0" + date;
    }
    // if (data > 0 && date < 10) {
    //   date = "0" + date;
    // }

    return `${year}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${date}`;
  }

  checkEmptyInput() {
    if (
      this.state.selected === "" ||
      this.state.selected2 === "" ||
      this.state.time === "" ||
      this.state.timeStart === "" ||
      this.state.timeEnd === ""
    ) {
      alert("Error!Dont Leave Blank Fields!");
      return false;
    }
    return true;
  }
  onClickListener = () => {
    // const intakeCo_ = this.state.intakeId;
    // console.log("ID:", intakeCo_);

    if (this.checkEmptyInput() && this.validateDate()) {
      // if (this.validateDate()) {
      //   if (this.validateTime()) {
      const caregiverId = this.state.selected;
      const clientId = this.state.selected2;
      const Time = this.state.time;
      const TimeStart = this.state.timeStart;
      const TimeEnd = this.state.timeEnd;
      const intakeCo_ID = this.state.intakeId;
      console.log(
        "Save",
        caregiverId,
        clientId,
        Time,
        TimeStart,
        TimeEnd,
        intakeCo_ID
      );
      // https://aplushome.facebhoook.com/api/addschedule

      const formData = new FormData();
      formData.append("client_id", clientId);
      formData.append("caregiver_id", caregiverId);
      formData.append("intakeco_id", intakeCo_ID);
      formData.append("timeStart", TimeStart);
      formData.append("timeEnd", TimeEnd);
      formData.append("date", Time);

      axios
        .post(`https://aplushome.facebhoook.com/api/addschedule`, formData) // axios
        //   .post(url, { data })
        .then((res) => {
          console.log("res", res.data);
          const response = "Successfully Added";
          this.setState({
            response: response,
            selected: "",
            selected2: "",
            date: undefined,
            caregivers: "",
            client: "",
            timeStart: "1:30",
            timeEnd: "2:30",
          });
          this.timeOut();
          alert("Schedule Successfully Added!");
        })
        .catch((error) => {
          console.log("err", error);
          const err = "Error!Can't Proceed Your Request";
          alert("Error", error);
          this.setState({
            response: err,
            selected: "",
            selected2: "",
            date: undefined,
            caregivers: "",
            client: "",
            timeStart: "1:30",
            timeEnd: "2:30",
          });
          this.timeOut();
        });
      // }
      //   }
    }
  };
  checkBoxButton = () => {
    console.log("BTNBTN");
    this.setState({
      recurringButton: !this.state.recurringButton,
    });
  };

  render() {
    const { assetsLoaded } = this.state;
    console.log(this.getCurrentDate());
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
            // onPress={() =>
            // this.props.navigation.navigate("RecurringSchedule")
            // }
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
                Add Schedule
              </Text>
            </TouchableOpacity>

            <View
              style={{
                width: 334,
                height: 160,
                backgroundColor: "#00000029",
                borderRadius: 7,
                alignSelf: "center",
                marginTop: 17,
              }}
            >
              <View
                style={{
                  width: 300,
                  height: 70,
                  borderRadius: 7,
                  alignSelf: "center",
                  flexDirection: "row",
                }}
              >
                <Form>
                  <Picker
                    mode="dropdown"
                    placeholder="Select your SIM"
                    iosIcon={
                      <IconAnt
                        name="left"
                        size={20}
                        color="#A4A4A4"
                        style={{ marginRight: 5 }}
                      />
                    }
                    placeholder="Select your SIM"
                    textStyle={{ color: "#5cb85c" }}
                    itemStyle={{
                      backgroundColor: "#d3d3d3",
                      marginLeft: 0,
                      paddingLeft: 10,
                    }}
                    itemTextStyle={{ color: "#788ad2" }}
                    style={{
                      width: 310,
                      alignSelf: "center",
                      backgroundColor: "white",
                      marginTop: 26,
                      borderWidth: 1,
                      borderRadius: 10,
                      borderColor: "#E2E2E2",
                    }}
                    selectedValue={this.state.selected}
                    onValueChange={this.onValueChange.bind(this)}
                  >
                    <Picker.Item
                      label="Select caregiver profile"
                      value="key0"
                    />

                    {this.state.caregivers ? (
                      this.state.caregivers.map((caregiver, id) => (
                        <Picker.Item
                          key={id}
                          label={caregiver.name}
                          value={caregiver.id}
                        />
                      ))
                    ) : (
                      <Text>Loading</Text>
                    )}
                  </Picker>
                </Form>
                <IconAnt
                  name="down"
                  size={20}
                  color="#A4A4A4"
                  style={{ marginLeft: -40, marginTop: 40 }}
                />
              </View>
              <View
                style={{
                  width: 300,
                  height: 70,
                  borderRadius: 7,
                  alignSelf: "center",
                  flexDirection: "row",
                }}
              >
                <Form>
                  <Picker
                    mode="dropdown"
                    placeholder="Select your SIM"
                    iosIcon={
                      <IconAnt
                        name="left"
                        size={20}
                        color="#A4A4A4"
                        style={{ marginRight: 5 }}
                      />
                    }
                    placeholder="Select your SIM"
                    textStyle={{ color: "#5cb85c" }}
                    itemStyle={{
                      backgroundColor: "#d3d3d3",
                      marginLeft: 0,
                      paddingLeft: 10,
                    }}
                    itemTextStyle={{ color: "#788ad2" }}
                    style={{
                      width: 310,
                      alignSelf: "center",
                      backgroundColor: "white",
                      marginTop: 26,
                      borderWidth: 1,
                      borderRadius: 10,
                      borderColor: "#E2E2E2",
                    }}
                    selectedValue={this.state.selected2}
                    onValueChange={this.onValueChange2.bind(this)}
                  >
                    <Picker.Item label="Select Client profile" value="key0" />
                    {this.state.client ? (
                      this.state.client.map((client_, id) => (
                        <Picker.Item
                          key={id}
                          label={client_.client_name}
                          value={client_.id}
                        />
                      ))
                    ) : (
                      <Text>Loading</Text>
                    )}
                  </Picker>
                </Form>
                <IconAnt
                  name="down"
                  size={20}
                  color="#A4A4A4"
                  style={{ marginLeft: -40, marginTop: 40 }}
                />
              </View>
            </View>
            <View
              style={{
                width: 334,
                height: 150,
                backgroundColor: "#00000029",
                borderRadius: 7,
                alignSelf: "center",
                marginTop: 17,
              }}
            >
              <Item
                onPress={this.showDateTimePicker}
                style={{
                  backgroundColor: "white",
                  marginLeft: 15,
                  marginRight: 15,
                  marginTop: 15,
                  width: 320,
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
                  {this.state.time}
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
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    backgroundColor: "white",
                    marginLeft: 9,
                    marginRight: 15,
                    marginTop: 23,
                    width: 130,
                    height: 50,
                    borderColor: "#E2E2E2",
                    borderRadius: 4,
                    borderWidth: 1,
                    textAlign: "left",
                    flexDirection: "row",
                    marginTop: 25,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => this.TimePicker.open()}
                    style={{ marginTop: 15, marginLeft: 20 }}
                  >
                    <Text style={{ fontSize: 16, color: "gray" }}>
                      {this.state.timeStart}
                      {this.state.hourStart >= 12 ? " PM" : " AM"}
                    </Text>
                  </TouchableOpacity>
                  <TimePicker
                    ref={(ref) => {
                      this.TimePicker = ref;
                    }}
                    onCancel={() => this.onCancel()}
                    onConfirm={(hour, minute) =>
                      this.onConfirmStart(hour, minute)
                    }
                  />
                  <IconAnt
                    name="down"
                    size={20}
                    color="#A4A4A4"
                    style={{ marginLeft: 15, marginTop: 15 }}
                  />
                </View>
                <Text style={{ marginTop: 40 }}> TO </Text>
                <View
                  style={{
                    backgroundColor: "white",
                    marginLeft: 9,
                    marginRight: 15,
                    marginTop: 23,
                    width: 130,
                    height: 50,
                    borderColor: "#E2E2E2",
                    borderRadius: 4,
                    borderWidth: 1,
                    textAlign: "left",
                    flexDirection: "row",
                    marginTop: 25,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => this.TimePicker2.open()}
                    style={{ marginTop: 15, marginLeft: 20 }}
                  >
                    <Text style={{ fontSize: 16, color: "gray" }}>
                      {this.state.timeEnd}
                      {this.state.hourEnd >= 12 ? " PM" : " AM"}
                    </Text>
                  </TouchableOpacity>
                  <TimePicker
                    ref={(ref) => {
                      this.TimePicker2 = ref;
                    }}
                    onCancel={() => this.onCancel()}
                    onConfirm={(hour, minute) =>
                      this.onConfirmEnd(hour, minute)
                    }
                  />
                  <IconAnt
                    name="down"
                    size={20}
                    color="#A4A4A4"
                    style={{ marginLeft: 15, marginTop: 15 }}
                  />
                </View>
              </View>
            </View>

            <ListItem>
              <CheckBox
                value={this.state.recurringButton}
                onValueChange={() => this.checkBoxButton()}
                color="#FCC9D7"
              />
              <Body style={{ marginLeft: 10 }}>
                <Text>Recurring Schedule</Text>
              </Body>
            </ListItem>

            <Button
              onPress={() => this.onClickListener()}
              style={{
                marginTop: 23,
                width: 334,
                height: 50,
                marginBottom: 50,
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
                SAVE
              </Text>
            </Button>
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
