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
  _View,
  TouchableOpacity,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/Feather";

import IconAnt from "react-native-vector-icons/Fontisto";
import IconAnt2 from "react-native-vector-icons/AntDesign";
import IconAnt3 from "react-native-vector-icons/Entypo";
import { Input, Item, Card } from "native-base";
import { Button } from "react-native-paper";
import DateTimePicker from "react-native-modal-datetime-picker";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import * as ImagePicker from "expo-image-picker";

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
import NumericInput from "react-native-numeric-input";
import * as Font from "expo-font";
import axios from "axios";

YellowBox.ignoreWarnings(["Remote debugger"]);
// https://aplushome.facebhoook.com/api/addclient
import AsyncStorage from "@react-native-community/async-storage";

export default class AddNewClient extends React.Component {
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    headerShown: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
      selected: undefined,
      name: "",
      email: "",
      phone: "",
      rate: 1,
      task: "task-1",
      tasks: [],
      classification: "",
      address: "",
      intakeId: 1,
      response: "",
      imagePickerPath: "",
      imageUri: "",
    };
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
      }
    } catch (e) {
      // error reading value
      console.log("Reading Value Error", e);
    }
  };

  // GooglePlacesInput = () => {
  //   return (
  //     <GooglePlacesAutocomplete
  //       placeholder="Search"
  //       minLength={2}
  //       fetchDetails={true}
  //       onPress={(data, details = null) => {
  //         // 'details' is provided when fetchDetails = true
  //         console.log("Google :", data, details);
  //       }}
  //       currentLocation={true}
  //       query={{
  //         key: "AIzaSyBxWvVr7wfqPzV6a7SRivdGqoVsFxXz8rA",
  //         language: "en",
  //         types: "establishment",
  //       }}
  //       debounce={200}
  //       GooglePlacesDetailsQuery={{
  //         fields: ["formatted_address", "geometry"],
  //       }}
  //     />
  //   );
  // };
  validatePhone(phone) {
    if (/^\d{11}$/.test(phone)) {
      return true;
    }
    alert("You have entered an invalid Phone Number(Must be 11 digit Number)!");
    return false;
  }
  ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    alert("You have entered an invalid email address!");
    return false;
  }
  checkEmptyInput() {
    if (
      this.state.email === "" ||
      this.state.name === "" ||
      this.state.phone === "" ||
      this.state.rate === "" ||
      this.state.task === "" ||
      this.state.address === "" ||
      this.state.classification === ""
    ) {
      alert("Error!Dont Leave Blank Fields!");
      return false;
    }
    return true;
  }

  onClickListener = () => {
    const Email = this.state.email;
    const Gender = this.state.selected;
    const Name = this.state.name;
    const Address = this.state.address;
    const Phone = this.state.phone;
    const Rate = this.state.rate;
    const Tasks = this.state.task;
    const Taskk = this.state.tasks[0];
    const Classification = this.state.classification;
    const IntakeCordID = this.state.intakeId;
    const image = this.state.imagePickerPath;

    console.log(
      "AddClient:",
      Email,
      Gender,
      Name,
      Address,
      Phone,
      Rate,
      Tasks,
      Classification,
      IntakeCordID
    );

    if (
      this.checkEmptyInput() &&
      this.ValidateEmail(Email)
      // &&
      // this.validatePhone(Phone)
    ) {
      console.log(
        "AddClient Validation :",
        Email,
        Gender,
        Name,
        Address,
        Phone,
        Rate,
        Taskk,
        Classification,
        IntakeCordID
      );
      const formData = new FormData();
      formData.append("name", Name);
      formData.append("email", Email);
      formData.append("gender", Gender);
      formData.append("phone", Phone);
      formData.append("payroll", Rate);
      formData.append("client_task", Taskk);
      formData.append("classification", Classification);
      formData.append("intake_Co", IntakeCordID);
      formData.append("address", Address);
      formData.append("image", {
        uri: image,
        name: "userProfile.jpg",
        type: "image/jpg",
      });

      axios
        .post(`https://aplushome.facebhoook.com/api/addclient`, formData)
        .then((res) => {
          const data = res.data["success"];
          console.log("Response", data);
          this.setState({
            response: data,
            selected: undefined,
            name: "",
            email: "",
            phone: "",
            rate: 0,
            tasks: [],
            classification: "",
            address: "",
            intakeId: 1,
            imagePickerPath: null,
          });
          alert("Client Successfully Added!");

          // this.timeOut();
        })
        .catch((err) => {
          console.log(err.data);
          const error = "Error!Dont Leave Blank Fields";
          this.setState({ response: error });
        });
      //   }
      // }
    }
  };

  onValueChange(value) {
    this.setState({
      selected: value,
    });
  }

  state = {
    assetsLoaded: false,
  };

  onChangeText = this.onChangeText.bind(this);

  onChangeText(text) {
    this.setState({
      selected: text,
    });
  }

  addTasks = () => {
    const newtask = this.state.task;
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
  };
  removeTask = (id) => {
    console.log("task Id", id);
    const list = this.state.tasks;
    const newList = list.filter((item) => item !== id);
    console.log("List", newList);
    this.setState({ tasks: newList });
  };

  mapArray() {
    const taskList = this.state.tasks;
    return (taskList = this.state.tasks.map((item, id) => {
      <Text>{item}</Text>;
    }));
  }

  async componentDidMount() {
    await Font.loadAsync({
      proximanova: require("../assets/fonts/proximanova.otf"),
    });
    this.getData();

    this.setState({ assetsLoaded: true });
  }

  showImage = (data) => {
    if (this.state.imagePickerPath) {
      return { uri: this.state.imagePickerPath };
    }
    if (data) {
      return {
        uri: "https://aplushome.facebhoook.com/public/clients/" + data.image,
      };
    } else {
      return require("../assets/img2.png");
    }
  };

  ImagePick = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
    this.setState({
      imagePickerPath: pickerResult.uri,
      imageUri: pickerResult,
    });
  };
  render() {
    const { assetsLoaded } = this.state;

    if (assetsLoaded) {
      return (
        <View style={styles.container}>
          <ScrollView>
            <View
              style={{ marginTop: 13, marginLeft: 20, flexDirection: "row" }}
            >
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <IconAnt2
                  name="left"
                  size={20}
                  color="#A4A4A4"
                  style={{ marginRight: 5 }}
                />
              </TouchableOpacity>

              <TouchableOpacity
              // onPress={() => this.props.navigation.navigate("AddNewCareg")}
              >
                <Text
                  style={{
                    fontSize: 16,
                    marginLeft: 95,
                    marginTop: 0,
                    fontWeight: "600",
                    color: "#141414",
                  }}
                >
                  Add New Client
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  width: "50%",
                  height: 7,
                  marginTop: 50,
                  backgroundColor: "#FF4B7D",
                }}
              ></View>
              <View
                style={{
                  width: "50%",
                  height: 7,
                  marginTop: 50,
                  backgroundColor: "#FCC9D7",
                }}
              ></View>
            </View>

            <Image
              source={
                this.state.imagePickerPath
                  ? { uri: this.state.imagePickerPath }
                  : require("../assets/img2.png")
              }
              style={{
                width: 120,
                height: 120,
                marginTop: 10,
                alignSelf: "center",
                borderRadius: 150 / 2,
                overflow: "hidden",
              }}
            ></Image>
            <TouchableOpacity
              style={{
                fontSize: 10,
                alignSelf: "center",
                marginLeft: "25%",
                height: 25,
                width: 25,
                borderRadius: 100,
                backgroundColor: "#fff",
                marginTop: "-11%",
              }}
              onPress={() => this.ImagePick()}
            >
              <IconAnt
                name="camera"
                size={15}
                color="#FF4B7D"
                style={{ padding: 4 }}
              />
            </TouchableOpacity>
            <Text style={{ color: "#7D7D7D", marginLeft: 20, marginTop: 30 }}>
              Name
            </Text>
            <Item
              style={{
                backgroundColor: "white",
                marginLeft: 15,
                marginRight: 15,
                marginTop: 0,
                width: 328,
                height: 50,
                alignSelf: "center",
                borderColor: "#E2E2E2",
                borderRadius: 4,
                borderWidth: 1,
                textAlign: "left",
              }}
              regular
            >
              <Input
                value={this.state.name}
                onChangeText={(name) => this.setState({ name })}
              />
            </Item>

            <Text style={{ color: "#7D7D7D", marginLeft: 20, marginTop: 30 }}>
              Email
            </Text>
            <Item
              style={{
                backgroundColor: "white",
                marginLeft: 15,
                marginRight: 15,
                marginTop: 0,
                width: 328,
                height: 50,
                alignSelf: "center",
                borderColor: "#E2E2E2",
                borderRadius: 4,
                borderWidth: 1,
                textAlign: "left",
              }}
              regular
            >
              <Input
                value={this.state.email}
                onChangeText={(email) => this.setState({ email })}
              />
            </Item>

            <Text style={{ color: "#7D7D7D", marginLeft: 20, marginTop: 30 }}>
              Gender
            </Text>
            <Content
              style={{
                marginLeft: 15,
                marginTop: 0,
                marginRight: 15,
                width: 334,
                height: 50,
                borderColor: "#E2E2E2",
                borderRadius: 4,
                borderWidth: 1,
              }}
            >
              <Form>
                <Picker
                  mode="dropdown"
                  placeholder="Select your SIM"
                  iosIcon={<Icon name="arrow-down" />}
                  placeholder="Select your SIM"
                  textStyle={{ color: "red" }}
                  itemStyle={{
                    backgroundColor: "white",
                    marginLeft: 0,
                    paddingLeft: 10,
                  }}
                  itemTextStyle={{ color: "red" }}
                  style={{ width: undefined, color: "#7D7D7D" }}
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}
                >
                  <Picker.Item label="Male" value="Male" />
                  <Picker.Item label="Female" value="Female" />
                  <Picker.Item label="Other" value="Other" />
                </Picker>
              </Form>
            </Content>

            <Text style={{ color: "#7D7D7D", marginLeft: 20, marginTop: 30 }}>
              Phone
            </Text>
            <Item
              style={{
                backgroundColor: "white",
                marginLeft: 15,
                marginRight: 15,
                marginTop: 0,
                width: 328,
                height: 50,
                alignSelf: "center",
                borderColor: "#E2E2E2",
                borderRadius: 4,
                borderWidth: 1,
                textAlign: "left",
              }}
              regular
            >
              <Input
                value={this.state.phone}
                onChangeText={(phone) => this.setState({ phone })}
              />
            </Item>

            <Text style={{ color: "#7D7D7D", marginLeft: 20, marginTop: 30 }}>
              Hourly Rate
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Button
                style={{
                  marginLeft: 20,
                  marginTop: 0,
                  width: 80,
                  height: 50,
                  alignSelf: "center",
                  backgroundColor: "white",
                  borderColor: "black",
                  borderRadius: 4,
                  borderWidth: 1,
                  textAlign: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    alignSelf: "center",
                    fontWeight: "600",
                    color: "black",
                  }}
                >
                  $
                </Text>
              </Button>

              <NumericInput
                type="up-down"
                // onChangeText={(email) => this.setState({ email })}

                onChange={(rate) => this.setState({ rate })}
                value={this.state.rate}
                totalWidth={240}
                totalHeight={50}
                containerStyle={{
                  marginLeft: -5,
                  marginTop: 0,
                  backgroundColor: "white",
                  borderRadius: 4,
                }}
              />
            </View>

            <Text style={{ color: "#7D7D7D", marginLeft: 20, marginTop: 30 }}>
              Tasks
            </Text>
            <View
              style={{
                backgroundColor: "white",
                marginLeft: 15,
                width: 328,
                height: 250,
                borderColor: "#E2E2E2",
                borderRadius: 4,
                borderWidth: 1,
                padding: 5,
                paddingHorizontal: 10,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Input
                  placeholder="Add Task Here..."
                  style={{
                    height: 30,
                    fontSize: 15,
                  }}
                  onChangeText={(task) => this.setState({ task })}
                  value={this.state.task}
                  placeholderTextColor={"#A4A4A4"}
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
                      borderRadius: 25,
                      borderWidth: 0.3,
                      borderColor: "#a4a4a4",
                      textAlign: "center",
                      paddingTop: 5,
                      color: "#a4a4a4",
                    }}
                  >
                    Add Task
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
                              borderRadius: 25,
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

            <Text style={{ color: "#7D7D7D", marginLeft: 20, marginTop: 30 }}>
              Classification
            </Text>
            <Item
              style={{
                backgroundColor: "white",
                marginLeft: 15,
                marginRight: 15,
                marginTop: 0,
                width: 328,
                height: 60,
                alignSelf: "center",
                borderColor: "#E2E2E2",
                borderRadius: 4,
                borderWidth: 1,
                textAlign: "left",
              }}
              regular
            >
              <Input
                value={this.state.classification}
                onChangeText={(classification) =>
                  this.setState({ classification })
                }
              />
            </Item>

            <Text style={{ color: "#7D7D7D", marginLeft: 20, marginTop: 30 }}>
              Address
            </Text>
            <Item
              style={{
                backgroundColor: "white",
                marginLeft: 15,
                marginRight: 15,
                marginTop: 0,
                width: 328,
                height: 60,
                alignSelf: "center",
                borderColor: "#E2E2E2",
                borderRadius: 4,
                borderWidth: 1,
                textAlign: "left",
              }}
              regular
            >
              <Input
                value={this.state.address}
                onChangeText={(address) => this.setState({ address })}
              />
            </Item>
            {/* <Item
              style={{
                backgroundColor: "white",
                marginLeft: 15,
                marginRight: 15,
                marginTop: 0,
                height: 500,
                alignSelf: "center",
                borderColor: "#E2E2E2",
                borderRadius: 4,
                borderWidth: 1,
                textAlign: "left",
              }}
              regular
            >
              {this.GooglePlacesInput()}
            </Item> */}

            <Button
              style={{
                marginTop: 89,
                marginBottom: 50,
                width: 334,
                height: 50,
                alignSelf: "center",
                backgroundColor: "#B20838",
                borderRadius: 4,
                borderWidth: 1,
                textAlign: "center",
              }}
              onPress={() => this.onClickListener()}
            >
              <Text
                style={{
                  fontSize: 16,
                  alignSelf: "center",
                  fontWeight: "600",
                  color: "white",
                }}
              >
                Next
              </Text>
            </Button>
            {/* <Text>{this.state.response}</Text> */}
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
