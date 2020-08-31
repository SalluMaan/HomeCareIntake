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
import * as Font from "expo-font";
import * as ImagePicker from "expo-image-picker";

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
  Label,
} from "native-base";
YellowBox.ignoreWarnings(["Remote debugger"]);
import axios from "axios";

import AsyncStorage from "@react-native-community/async-storage";

export default class Myaccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined,
      // profileData: this.props.navigation.state.params.myData[0],
      token: "token",
      name: "",
      fullName: "",
      password: "",
      phone: "",
      data: "",
      imagePickerPath: "",
      imageUri: "",
    };
    YellowBox.ignoreWarnings([
      "Warning: isMounted(...) is deprecated",
      "Module RCTImageLoader",
    ]);
  }
  getProfile = () => {
    const Id = this.state.token;
    console.log("ID:", Id);
    axios
      .get(
        "https://aplushome.facebhoook.com/api/getintakeprofile/" +
          this.state.token
      )
      .then((res) => {
        const data = res.data["success"];
        console.log("Response", data);

        this.setState({
          data: data,
          fullName: data.intake_name,
          password: data.password,
          phone: data.phone,
        });
      });
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
        this.getProfile();
      }
    } catch (e) {
      // error reading value
      console.log("Reading Value Error", e);
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

  checkEmptyInput() {
    if (
      this.state.fullName === "" ||
      this.state.password === "" ||
      this.state.phone === ""
    ) {
      alert("Error!Dont Leave Blank Fields!");
      return false;
    }
    return true;
  }

  onClickListener = () => {
    const Data = this.state.profileData;
    const Id = this.state.data.id;
    const FullName = this.state.fullName;
    const Password = this.state.password;
    const Phone = this.state.phone;
    const image = this.state.imagePickerPath;
    console.log("Image Info :", this.state.imageUri);

    const formData = new FormData();
    formData.append("intake_name", FullName);
    formData.append("password", Password);
    formData.append("phone", Phone);
    formData.append("image", {
      uri: image,
      name: "userProfile.jpg",
      type: "image/jpg",
    });

    console.log("PROFILE SAVE :", Id, FullName, Password, Phone, image);
    // const url =
    //   "https://aplushome.facebhoook.com/api/updateintakeprofile/" + Id;

    if (this.checkEmptyInput()) {
      console.log("IF-ELSE :", Id, FullName, Password, Phone);

      axios
        .post(
          "https://aplushome.facebhoook.com/api/updateintakeprofile/" + Id,
          // {
          //   intake_name: FullName,
          //   password: Password,
          //   phone: Phone,
          //   image: imageData,
          // }
          formData
        )
        .then((res) => {
          alert("Your Profile has been Updated Successfully!");
          // this.componentDidMount();
        })
        .catch((err) => {
          console.log(err.data);
          alert("Error while Updating your Profile.");
          const error = "Error!Type Correct Email and Password";
          this.setState({ response: error });
        });
    }
  };

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
    // const { myData } = this.props.navigation.state.params;

    // console.log("MyProfile:Props ", myData[0]);
    // const data = myData[0];
    const { data } = this.state;

    const { assetsLoaded } = this.state;
    if (assetsLoaded) {
      return (
        <View style={styles.container}>
          <ScrollView>
            <View
              style={{
                marginTop: 0,
                height: 270,
                backgroundColor: "#F3F3F3",
                borderBottomWidth: 2,
                borderBottomColor: "#A8A8A8D9",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("First")}
                >
                  <IconAnt
                    name="left"
                    size={20}
                    color="#A4A4A4"
                    style={{ marginTop: 15, marginLeft: 21 }}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ height: 232, backgroundColor: "#F3F3F3" }}>
                <Image
                  source={this.showImage(data)}
                  // source={{ uri: this.state.imagePickerPath }}
                  // source={
                  //   this.state.imagePickerPath
                  //     ? {
                  //         uri: this.state.imagePickerPath,
                  //       }
                  //     : {uri:"https://aplushome.facebhoook.com/public/clients/" +data.image}
                  // }
                  style={{
                    width: 118,
                    height: 118,
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
                    size={16}
                    color="#FF4B7D"
                    style={{ padding: 4 }}
                  />
                </TouchableOpacity>

                <Text
                  style={{
                    fontSize: 16,
                    marginTop: 16,
                    alignSelf: "center",
                    fontWeight: "600",
                    color: "#434343",
                  }}
                >
                  {data.intake_name}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    marginTop: 13,
                    alignSelf: "center",
                    fontWeight: "600",
                    color: "#434343",
                  }}
                >
                  {data.address}
                </Text>
              </View>
            </View>

            <Form>
              <Item stackedLabel last>
                <Label style={{ color: "#A4A4A4" }}> FULL NAME</Label>
                <Input
                  value={this.state.fullName}
                  // placeholder={data.intake_name}
                  onChangeText={(fullName) =>
                    this.setState({
                      fullName,
                    })
                  }
                />
              </Item>
              <Item stackedLabel last>
                <Label style={{ color: "#A4A4A4" }}>CHANGE PASSWORD</Label>
                <Input
                  value={this.state.password}
                  // placeholder={data.password}
                  onChangeText={(password) =>
                    this.setState({
                      password,
                    })
                  }
                />
              </Item>
              <Item stackedLabel last>
                <Label style={{ color: "#A4A4A4" }}>PHONE NUMBER</Label>
                <Input
                  // value={}
                  value={this.state.phone}
                  // placeholder={data.phone}
                  onChangeText={(phone) =>
                    this.setState({
                      phone,
                    })
                  }
                />
              </Item>
              <TouchableOpacity>
                <Text
                  onPress={() => this.onClickListener()}
                  style={{
                    height: 30,
                    width: 70,
                    backgroundColor: "#B20838",
                    padding: 4,
                    textAlign: "center",
                    borderRadius: 10,
                    color: "#fff",
                    fontWeight: "bold",
                    alignSelf: "center",
                    marginTop: 5,
                  }}
                >
                  Update
                </Text>
              </TouchableOpacity>
            </Form>

            <Text
              style={{
                fontSize: 16,
                marginTop: 40,
                marginLeft: 21,
                fontWeight: "700",
                color: "#434343",
              }}
            >
              Terms of Service
            </Text>

            <Text
              style={{
                fontSize: 14,
                marginTop: 31,
                marginLeft: 21,
                fontWeight: "400",
                color: "#A4A4A4",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              ante sapien, convallis eget commodo quis, finibus tempor nibh.
              Maecenas efficitur blandit eleifend. Duis luctus iaculis erat sit
              amet vestibulum.
            </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("TOS")}
            >
              <Text
                style={{
                  fontSize: 14,
                  marginTop: 20,
                  marginBottom: 50,
                  marginLeft: 21,
                  fontWeight: "bold",
                  color: "#A4A4A4",
                }}
              >
                Read More
              </Text>
            </TouchableOpacity>
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
