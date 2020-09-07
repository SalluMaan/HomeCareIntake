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
import DateTimePicker2 from "react-native-modal-datetime-picker";
import TimePicker from "react-native-24h-timepicker";
import TimePicker2 from "react-native-24h-timepicker";

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
} from "native-base";
import axios from "axios";
import Moment from "moment";
import AsyncStorage from "@react-native-community/async-storage";

import * as Font from "expo-font";
import MultipleDatePicker from "react-multiple-datepicker";
import { TextInputMask } from "react-native-masked-text";

YellowBox.ignoreWarnings(["Remote debugger"]);

export default class RecurringSchedule extends React.Component {
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    headerShown: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
      isDateTimePickerVisible2: false,
      selected: "",
      caregivers: "",
      timeStart: "1:30",
      date: "2020-06-13",
      date2: "2020-06-13",
      timeEnd: "2:30",
      response: ".",
      intakeId: 0,
      daily: 0,
      weekly: 0,
      monthly: 0,
      custom: 0,
      task: "",
      tasks: [],
      clicked: false,
      hourStart: 0,
      hourEnd: 0,
      multidate: "",
    };
  }

  // ADD-REMOVE___Task
  addTasks = () => {
    const newtask = this.state.task;
    var phoneno = /^\d{10}$/;
    // if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    var dateValid = /^\(?([0-2]{4})\)?[-]?([0-9]{2})[-]?([0-9]{2})$/;

    if (dateValid.test(newtask)) {
      if (newtask) {
        console.log("New Task", newtask);
        const taskList = this.state.tasks;
        taskList.push(newtask);
        taskList.map((item) => {
          console.log("item", item);
        });
        console.log("List", taskList);
        this.setState({
          tasks: taskList,
          task: null,
        });
      } else {
        console.log("Task Field isn't Empty");
      }
    } else {
      alert("Kindly Type Correct Date \n i.e 1998-12-22");
    }
  };
  removeTask = (id) => {
    console.log("task Id", id);
    const list = this.state.tasks;
    const newList = list.filter((item) => item !== id);
    console.log("List", newList);
    this.setState({ tasks: newList });
  };
  // ADD TASk

  // Custom Dates
  handleCustom = () => {
    this.setState({
      clicked: !this.state.clicked,
      daily: 0,
      weekly: 0,
      monthly: 0,
      custom: 1,
      hourStart: 1,
      hourEnd: 2,
    });
  };

  // Custom Dates

  onValueChange(value) {
    this.setState({
      selected: value,
    });
  }

  // Time PIKCER
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
  // Time Picker

  // Date PICKER
  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = (date) => {
    const newdate = Moment(date).format("YYYY-MM-DD");
    console.log("A date has been picked: ", newdate);
    this.setState({ date: newdate });
    this.hideDateTimePicker();
  };

  showDateTimePicker2 = () => {
    this.setState({ isDateTimePickerVisible2: true });
  };

  hideDateTimePicker2 = () => {
    this.setState({ isDateTimePickerVisible2: false });
  };

  handleDatePicked2 = (date) => {
    const newdate = Moment(date).format("YYYY-MM-DD");
    console.log("A date has been picked: ", newdate);
    this.setState({ date2: newdate });
    this.hideDateTimePicker2();
  };
  // Date Picker

  state = {
    assetsLoaded: false,
  };

  onChangeText = this.onChangeText.bind(this);

  onChangeText(text) {
    this.setState({
      selected: text,
    });
  }
  // selected: "",
  //     caregivers: "",
  //     timeStart: "1:30",
  //     date: "2020-06-13",
  //     date2: "2020-06-13",
  //     timeEnd: "2:30",
  //     response: ".",
  //     intakeId: 0,
  //     daily: 0,
  //     weekly: 0,
  //     monthly: 0,
  //     custom: 0,
  //     task: "",
  //     tasks: [],
  //     clicked: false,
  checkEmptyInput() {
    if (
      this.state.selected === "" ||
      this.state.date === "" ||
      this.state.date2 === "" ||
      this.state.timeStart === "" ||
      this.state.timeEnd === ""
    ) {
      alert("Error!Dont Leave Blank Fields!");
      return false;
    }
    return true;
  }

  validateDate() {
    if (
      this.state.date < this.getCurrentDate() ||
      this.state.date2 < this.getCurrentDate()
    ) {
      alert("Date must be greater.You are scheduling it for future");
      return false;
    } else {
      if (this.state.date2 > this.state.date) {
        return true;
      } else {
        alert("Date End must be greater than Start Date");
      }
    }
  }
  validateTime() {
    console.log("Hour", this.state.hourEnd, this.state.hourStart);
    // const x = this.state.hourEnd;
    // const y = this.state.hourStart;
    if (this.state.hourStart > this.state.hourEnd) {
      alert(
        "Time End of the Service must be greater than the Time Start Service.Kindly Select Both time corectly Again"
      );
      return false;
    } else {
    }
    alert("Good");
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
    return `${year}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${date}`;
  }

  onClickListener = () => {
    if (this.checkEmptyInput() && this.validateDate()) {
      const caregiverId = this.state.selected;
      const date = this.state.date;
      const date2 = this.state.date2;
      const custDate = this.state.tasks[0];
      const Tasks = this.state.tasks;
      const TimeStart = this.state.timeStart;
      const TimeEnd = this.state.timeEnd;
      const intakeCo_ID = this.state.intakeId;
      const Weekly = this.state.weekly;
      const Daily = this.state.daily;
      const Monthly = this.state.monthly;
      const Custom = this.state.custom;
      console.log(
        "Save",
        caregiverId,
        date,
        date2,
        TimeStart,
        TimeEnd,
        intakeCo_ID,
        Weekly,
        Daily,
        Monthly,
        Custom,
        Tasks,
        custDate,
        this.state.tasks
      );
      const formData = new FormData();
      formData.append("caregiver_id", caregiverId);
      formData.append("intakeco_id", intakeCo_ID);
      formData.append("timeStart", TimeStart);
      formData.append("timeEnd", TimeEnd);
      formData.append("dateStart", date);
      formData.append("dateEnd", date2);
      formData.append("custom", custDate);
      formData.append("weekly", Weekly);
      formData.append("daily", Daily);
      formData.append("monthly", Monthly);
      // formData.append("dateArray", date2);

      axios
        .post(
          "https://aplushome.facebhoook.com/api/addrecurringschedule/" +
            intakeCo_ID,
          formData
        ) // axios
        .then((res) => {
          console.log("res", res.data);
          this.setState({
            selected: "",
            date: "",
            date2: "",
            custom: 0,
            Daily: 0,
            Weekly: 0,
            Monthly: 0,
            timeStart: "1:30",
            timeEnd: "2:30",
            tasks: [],
          });
          alert("Recurring Schedule Successfully Added!");
        })
        .catch((error) => {
          console.log("err", error);

          alert("Error While Adding Recurring Schedule!");
        });
    }
  };

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        // value previously stored
        console.log("Token ID", value);
        this.setState({
          intakeId: value,
        });
        this.getCaregivers();
      }
    } catch (e) {
      // error reading value
      console.log("Reading Value Error", e);
    }
  };

  getCaregivers = () => {
    console.log("GETCARGIVER INtake ID", this.state.intakeId);

    axios
      .get(
        `https://aplushome.facebhoook.com/api/getcaregivers/` +
          this.state.intakeId
      )
      .then((res) => {
        console.log("CAREGIVERS:", res.data);
        const data = res.data["success"];
        console.log("Response Xaregiver", data);

        this.setState({ caregivers: data });
      });
  };

  async componentDidMount() {
    this.getData();

    await Font.loadAsync({
      proximanova: require("../assets/fonts/proximanova.otf"),
    });

    // await axios
    //   .get(
    //     `https://aplushome.facebhoook.com/api/getcaregivers` +
    //       this.state.intakeId
    //   )
    //   .then((res) => {
    //     const data = res.data["success"];
    //     console.log("Response", data);

    //     this.setState({ caregivers: data });
    //   });

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

              <View></View>
            </View>

            <TouchableOpacity
            // onPress={() => this.props.navigation.navigate("EditProfile2")}
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
                Recurring Schedule
              </Text>
            </TouchableOpacity>

            <View
              style={{
                width: 334,
                height: 70,
                backgroundColor: "#F3F3F3",
                borderRadius: 7,
                alignSelf: "center",
                flexDirection: "row",
                marginRight: -20,
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
                  <Picker.Item label="Select caregiver profile" value="key0" />
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
                width: 334,
                height: 331,
                backgroundColor: "#00000029",
                borderRadius: 7,
                alignSelf: "center",
                marginTop: 17,
              }}
            >
              <Text style={{ color: "#7D7D7D", marginLeft: 8, marginTop: 10 }}>
                Start Date
              </Text>

              <Item
                onPress={this.showDateTimePicker}
                style={{
                  backgroundColor: "white",
                  marginLeft: 15,
                  marginRight: 15,
                  marginTop: 5,
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
                  {this.state.date ? this.state.date : "Select Date"}
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

              <Text style={{ color: "#7D7D7D", marginLeft: 8, marginTop: 15 }}>
                End Date
              </Text>
              <Item
                onPress={this.showDateTimePicker2}
                style={{
                  backgroundColor: "white",
                  marginLeft: 15,
                  marginRight: 15,
                  marginTop: 5,
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
                  {this.state.date2 ? this.state.date2 : "Select Date"}
                </Text>
                <IconAnt
                  name="calendar"
                  size={20}
                  color="#A4A4A4"
                  style={{ marginLeft: 180 }}
                />
              </Item>
              <DateTimePicker
                isVisible={this.state.isDateTimePickerVisible2}
                onConfirm={this.handleDatePicked2}
                onCancel={this.hideDateTimePicker2}
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
            <Text
              style={{
                fontSize: 16,
                marginLeft: 20,
                marginTop: 43,
                fontWeight: "600",
                color: "#141414",
              }}
            >
              Recurring Pattern
            </Text>

            <View
              style={{ flexDirection: "row", marginTop: 10, marginLeft: 21 }}
            >
              <View style={{ marginLeft: 0 }}>
                <Radio
                  onPress={() =>
                    this.setState({
                      daily: 1,
                      weekly: 0,
                      monthly: 0,
                      custom: 0,
                    })
                  }
                  selected={this.state.daily}
                />
              </View>
              <View style={{ marginLeft: 5, marginTop: 3 }}>
                <Text>Daily</Text>
              </View>
              <View style={{ marginLeft: 25 }}>
                <Radio
                  onPress={() =>
                    this.setState({
                      daily: 0,
                      weekly: 1,
                      monthly: 0,
                      custom: 0,
                    })
                  }
                  selected={this.state.weekly}
                />
              </View>
              <View style={{ marginLeft: 5, marginTop: 3 }}>
                <Text>Weekly</Text>
              </View>

              <View style={{ marginLeft: 25 }}>
                <Radio
                  onPress={() =>
                    this.setState({
                      daily: 0,
                      weekly: 0,
                      monthly: 1,
                      custom: 0,
                    })
                  }
                  selected={this.state.monthly}
                />
              </View>

              <View style={{ marginLeft: 5, marginTop: 3 }}>
                <Text>Monthly</Text>
              </View>
            </View>

            <View
              style={{ flexDirection: "row", marginTop: 10, marginLeft: 21 }}
            >
              <TouchableOpacity onPress={() => this.handleCustom()}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ marginTop: 10 }}>
                    Add Custom Recurring Schedule
                  </Text>
                  <IconAnt3
                    name="plus"
                    size={30}
                    color="#FF4B7D"
                    style={{ marginLeft: 70, marginTop: 7 }}
                  />
                </View>
              </TouchableOpacity>
            </View>

            {this.state.custom ? (
              <View>
                <Text
                  style={{ color: "#7D7D7D", marginLeft: 20, marginTop: 30 }}
                >
                  Custom Dates
                </Text>
                <View
                  style={{
                    backgroundColor: "white",
                    marginLeft: 15,
                    width: 328,
                    height: 150,
                    borderColor: "#E2E2E2",
                    borderRadius: 4,
                    borderWidth: 1,
                    padding: 5,
                    paddingHorizontal: 10,
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    {/* <Input
                      placeholder="Date must be 2020-12-28...."
                      style={{
                        height: 30,
                        fontSize: 15,
                      }}
                      onChangeText={(task) => this.setState({ task })}
                      value={this.state.task}
                      placeholderTextColor={"#A4A4A4"}
                    /> */}
                    <TextInputMask
                      style={{
                        height: 30,
                        width: 200,
                        fontSize: 15,
                        borderBottomWidth: 0.3,
                        borderColor: "#a4a4a4",
                      }}
                      placeholder="YYYY-MM-DD"
                      placeholderTextColor={"#A4A4A4"}
                      type={"datetime"}
                      options={{
                        format: "YYYY-MM-DD",
                      }}
                      value={this.state.task}
                      onChangeText={(task) => this.setState({ task })}
                    />

                    <TouchableOpacity
                      onPress={() => this.addTasks()}
                      style={{ margin: 3 }}
                    >
                      <Text
                        style={{
                          width: 100,
                          height: 30,
                          backgroundColor: "#fff",
                          borderWidth: 0.3,
                          borderRadius: 10,
                          borderColor: "#a4a4a4",
                          textAlign: "center",
                          paddingTop: 5,
                          color: "#a4a4a4",
                        }}
                      >
                        Add-Dates
                        <Icon
                          name="x"
                          size={15}
                          color="#A4A4A4"
                          style={{ marginRight: 5 }}
                        />
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      width: 300,
                      height: 190,
                      marginTop: 10,
                      flexDirection: "row",
                      flexWrap: "wrap",
                    }}
                  >
                    {this.state.tasks
                      ? this.state.tasks.map((item, _id) => {
                          return (
                            <TouchableOpacity
                              key={_id}
                              style={{ margin: 3 }}
                              onPress={() => this.removeTask(item)}
                            >
                              <Text
                                style={{
                                  height: 30,
                                  backgroundColor: "#fff",
                                  borderRadius: 10,
                                  borderWidth: 0.3,
                                  borderColor: "#a4a4a4",
                                  textAlign: "center",
                                  paddingTop: 5,
                                  color: "#a4a4a4",
                                  paddingHorizontal: 10,
                                }}
                              >
                                {item}
                                <Icon
                                  name="x"
                                  size={15}
                                  color="#A4A4A4"
                                  style={{ marginRight: 5 }}
                                />
                              </Text>
                            </TouchableOpacity>
                          );
                        })
                      : null}
                  </View>
                </View>
              </View>
            ) : null}

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
