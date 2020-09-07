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
import axios from "axios";
import * as DocumentPicker from "expo-document-picker";

import AsyncStorage from "@react-native-community/async-storage";

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
import { updateProfile } from "../src/services/CareGiver";
import {
  CareUpdateProfilePath,
  uploadNotesProfilePath,
  GetCareProfilePath,
} from "./constantCaregiver";
YellowBox.ignoreWarnings(["Remote debugger"]);
export default class MyaccountCare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined,
      token: "token",
      name: "",
      fullName: "",
      password: "",
      phone: "",
      data: "",
      imagePickerPath: "",
      imageUri: "",
      file: null,
      dob: "",
      pick: false,
    };
    YellowBox.ignoreWarnings([
      "Warning: isMounted(...) is deprecated",
      "Module RCTImageLoader",
    ]);
  }

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

  getProfile = () => {
    const Id = this.state.token;
    console.log("ID:", Id);
    axios.get(GetCareProfilePath + this.state.token).then((res) => {
      const data = res.data["success"];
      console.log("Response", data);

      this.setState({
        data: data,
        fullName: data.name,
        password: data.password,
        phone: data.phone,
        dob: data.dob,
        imagePickerPath: data.image,
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

  onClickListener = () => {
    // const Data = this.state.profileData;
    const Id = this.state.token;
    const Dob = this.state.dob;
    // const name = this.state.name;
    // const Password = this.state.password;
    const Phone = this.state.phone;
    const image = this.state.imagePickerPath;
    // const file = this.state.file;
    console.log("Image Info :", this.state.imageUri);

    const formData = new FormData();
    formData.append("dob", Dob);
    formData.append("phone", Phone);
    this.state.pick
      ? formData.append("image", {
          uri: image,
          name: "userProfile.jpg",
          type: "image/jpg",
        })
      : null;

    console.log("ProfileGET:", Id, formData);
    // formData.append("file", {
    //   uri: file,
    //   name: "userProfile.jpg",
    //   type: "image/jpg",
    // });

    // console.log("PROFILE SAVE :", Id, FullName, Password, Phone, image);
    // // const url =
    // //   "https://aplushome.facebhoook.com/api/updateintakeprofile/" + Id;

    // if (this.checkEmptyInput()) {
    //   console.log("IF-ELSE :", Id, FullName, Password, Phone);

    axios
      .post(CareUpdateProfilePath + Id, formData)
      .then((res) => {
        alert("Your Profile has been Updated Successfully!");
        // this.componentDidMount();
      })
      .catch((err) => {
        console.log(err);
        alert("Error while Updating your Profile.");
      });
    // }
  };

  pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    // console.log(result)
    let name = result.name;
    name = name.split(".");
    let type = name[name.length - 1];
    console.log("type:", type);

    let file = result.uri;
    const Docobj = {
      uri: file,
      type: "file/" + type,
      name: "ProfileNotesID-" + this.state.token,
    };

    const formData = new FormData();
    formData.append("caregiver_id", this.state.token);
    formData.append("notes", Docobj);

    axios
      .post(uploadNotesProfilePath, formData)
      .then((res) => {
        console.log("PICKIDDOC:", res.data);
        Alert.alert("Response", res.data.message);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Response", "Error while uploading ID Documents");
      });
  };

  showImage = (data) => {
    if (this.state.imagePickerPath && this.state.pick === true) {
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
      pick: true,
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
    const { data } = this.state;

    if (assetsLoaded) {
      return (
        <View style={styles.container}>
          <ScrollView>
            <View
              style={{
                marginTop: 0,
                height: 294,
                backgroundColor: "#F3F3F3",
                borderBottomWidth: 2,
                borderBottomColor: "#A8A8A8D9",
              }}
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

              <View style={{ height: 280, backgroundColor: "#F3F3F3" }}>
                <Image
                  source={this.showImage(data)}
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
                  {data.name}
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

                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("Myaccount2Care")
                  }
                >
                  <Button
                    style={{
                      marginTop: 20,
                      width: 134,
                      height: 34,
                      alignSelf: "center",
                      backgroundColor: "#B20838",
                      borderRadius: 4,
                      borderWidth: 1,
                      textAlign: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 12,
                        alignSelf: "center",
                        fontWeight: "600",
                        color: "white",
                      }}
                    >
                      Edit Profile
                    </Text>
                  </Button>
                </TouchableOpacity>
              </View>
            </View>

            <Text
              style={{
                fontSize: 16,
                marginTop: 35,
                marginLeft: 16,
                fontWeight: "600",
                color: "#141414",
              }}
            >
              Skills
            </Text>

            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Button
                style={{
                  marginTop: 15,
                  width: 92,
                  height: 35,
                  marginLeft: 10,
                  backgroundColor: "#FEF2F5",
                  borderRadius: 4,
                  borderWidth: 1,
                  textAlign: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 10,
                    alignSelf: "center",
                    fontWeight: "600",
                    color: "#FF4B7D",
                  }}
                >
                  SKILL #01
                </Text>
              </Button>
              <Button
                style={{
                  marginTop: 15,
                  width: 92,
                  height: 35,
                  marginLeft: 10,
                  backgroundColor: "#FEF2F5",
                  borderRadius: 4,
                  borderWidth: 1,
                  textAlign: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 10,
                    alignSelf: "center",
                    fontWeight: "600",
                    color: "#FF4B7D",
                  }}
                >
                  SKILL #02
                </Text>
              </Button>
              <Button
                style={{
                  marginTop: 15,
                  width: 92,
                  height: 35,
                  marginLeft: 10,
                  backgroundColor: "#FEF2F5",
                  borderRadius: 4,
                  borderWidth: 1,
                  textAlign: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 10,
                    alignSelf: "center",
                    fontWeight: "600",
                    color: "#FF4B7D",
                  }}
                >
                  SKILL #03
                </Text>
              </Button>
            </View>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Button
                style={{
                  marginTop: 0,
                  width: 92,
                  height: 35,
                  marginLeft: 10,
                  backgroundColor: "#FEF2F5",
                  borderRadius: 4,
                  borderWidth: 1,
                  textAlign: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 10,
                    alignSelf: "center",
                    fontWeight: "600",
                    color: "#FF4B7D",
                  }}
                >
                  SKILL #04
                </Text>
              </Button>
              <Button
                style={{
                  marginTop: 0,
                  width: 92,
                  height: 35,
                  marginLeft: 10,
                  backgroundColor: "#FEF2F5",
                  borderRadius: 4,
                  borderWidth: 1,
                  textAlign: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 10,
                    alignSelf: "center",
                    fontWeight: "600",
                    color: "#FF4B7D",
                  }}
                >
                  SKILL #05
                </Text>
              </Button>
            </View>

            <Form>
              <Item style={{ marginTop: 10 }} stackedLabel last>
                <Label style={{ color: "#A4A4A4" }}>PHONE NUMBER</Label>
                <Input
                  placeholder="+00-0000000"
                  value={this.state.phone}
                  onChangeText={(phone) =>
                    this.setState({
                      phone,
                    })
                  }
                />
              </Item>

              <Item style={{ marginTop: 10 }} stackedLabel last>
                <Label style={{ color: "#A4A4A4" }}>Password</Label>
                <Input
                  value={this.state.password}
                  disabled={true}

                  // onChangeText={(password) => this.setState({ password })}
                />
              </Item>

              <Item style={{ marginTop: 10 }} stackedLabel last>
                <Label style={{ color: "#A4A4A4", textTransform: "uppercase" }}>
                  Date of birth
                </Label>
                <Input
                  value={this.state.dob}
                  onChangeText={(dob) => this.setState({ dob })}
                />
              </Item>
            </Form>

            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Text
                style={{
                  fontSize: 16,
                  marginTop: 0,
                  marginLeft: 16,
                  fontWeight: "600",
                  color: "#141414",
                }}
              >
                Identification Documents
              </Text>
              <TouchableOpacity onPress={() => this.pickDocument()}>
                <IconAnt
                  name="addfile"
                  size={30}
                  color="#FF4B7D"
                  style={{ marginTop: 0, marginLeft: 120 }}
                />
              </TouchableOpacity>
            </View>
            <View>
              {this.state.file ? (
                <IconAnt
                  name="addfile"
                  size={30}
                  color="#FF4B7D"
                  style={{ marginTop: "5%", marginHorizontal: "8%" }}
                />
              ) : null}
            </View>

            <View style={{ flexDirection: "row", marginTop: 50 }}>
              <Text
                style={{
                  fontSize: 16,
                  marginTop: 0,
                  marginBottom: 80,
                  marginLeft: 16,
                  fontWeight: "600",
                  color: "#141414",
                }}
              >
                Employee Agreement Form
              </Text>
              <IconAnt
                name="addfile"
                size={30}
                color="#FF4B7D"
                style={{ marginTop: 0, marginLeft: 110 }}
              />
            </View>
            <View style={{ height: 80 }}>
              <TouchableOpacity onPress={() => this.onClickListener()}>
                <Button
                  style={{
                    marginTop: 20,
                    width: 134,
                    height: 34,
                    alignSelf: "center",
                    backgroundColor: "#B20838",
                    borderRadius: 4,
                    borderWidth: 1,
                    textAlign: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      alignSelf: "center",
                      fontWeight: "600",
                      color: "white",
                    }}
                  >
                    Update
                  </Text>
                </Button>
              </TouchableOpacity>
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
