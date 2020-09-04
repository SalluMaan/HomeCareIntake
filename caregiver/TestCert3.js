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
  Alert,
  TouchableOpacity,
} from "react-native";
import IconAnt from "react-native-vector-icons/Feather";
import { Input, Item, Card } from "native-base";
import { Button } from "react-native-paper";
import IconAnt1 from "react-native-vector-icons/AntDesign";
import * as Font from "expo-font";
import { AddMedicalReportPath } from "./constantCaregiver";
import axios from "axios";
import Moment from "moment";
import * as DocumentPicker from "expo-document-picker";

import {
  Container,
  Header,
  Content,
  Icon,
  Picker,
  Form,
  DatePicker,
} from "native-base";
import AsyncStorage from "@react-native-community/async-storage";

YellowBox.ignoreWarnings(["Remote debugger"]);

export default class TestCert3Care extends React.Component {
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    headerShown: false,
  };
  // state = {
  //   assetsLoaded: false,
  // };
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined,
      assetsLoaded: false,
      name: "",
      testDate: null,
      expiryDate: null,
      file: "",
      typeFile: "",
      filename: "",
    };
    // this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
    this.setDate2 = this.setDate2.bind(this);
  }

  pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    console.log(result);
    let name = result.name;
    name = name.split(".");
    let type = name[name.length - 1];
    console.log("type:", type);
    this.setState({
      file: result.uri,
      typeFile: type,
      fileName: name,
    });
  };

  setDate(newDate) {
    const newDat = Moment(newDate).format("YYYY-MM-DD");
    console.log("A date has been picked: ", newDat);
    this.setState({ testDate: newDat });
  }
  setDate2(newDate) {
    const newDat = Moment(newDate).format("YYYY-MM-DD");
    console.log("A date has been picked: ", newDat);
    this.setState({ expiryDate: newDat });
  }

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
      if (value !== null) {
        // value previously stored
        console.log("token", value);
        this.setState({
          careID: value,
        });
        // this.getSchedule();
      }
    } catch (e) {
      // error reading value
      console.log("Reading Value Error", e);
    }
  };

  onClickListener = () => {
    const Name = this.state.name;
    const TestDate = this.state.testDate;
    const ExpiryDate = this.state.expiryDate;
    const ID = this.state.careID;
    const obj = {
      uri: this.state.file,
      type: "file/" + this.state.typeFile,
      name: Name + ID,
    };
    console.log("ID:", ID);
    const formData = new FormData();
    formData.append("test_name", Name);
    formData.append("test_date", TestDate);
    formData.append("expire_date", ExpiryDate);
    formData.append("report", obj);
    console.log("Fomr Data", formData);

    axios
      .post(AddMedicalReportPath + ID, formData)
      .then((res) => {
        console.log("res", res.data);
        Alert.alert("Response", res.data.message);
        this.setState({
          name: "",
          testDate: null,
          expiryDate: null,
          file: "",
          typeFile: "",
          filename: "",
        });
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Response", "Error while Adding Reminder");
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
              <View>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("TestCert2")}
                >
                  <IconAnt1
                    name="left"
                    size={20}
                    color="#A4A4A4"
                    style={{ marginRight: 5 }}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <Text
              style={{
                fontSize: 18,
                marginTop: 200,
                marginTop: 19,
                marginLeft: 20,
                fontWeight: "400",
                color: "#141414",
              }}
            >
              Add Medical Test Report
            </Text>

            <Content
              style={{
                marginLeft: 15,
                marginTop: 23,
                marginRight: 15,
                width: 334,
                height: 50,
                borderColor: "#E2E2E2",
                borderRadius: 4,
                borderWidth: 1,
              }}
            >
              <Input
                placeholderTextColor={"#A4A4A4"}
                placeholder="Test Name"
                value={this.state.name}
                onChangeText={(name) =>
                  this.setState({
                    name,
                  })
                }
              />
            </Content>

            <Content
              style={{
                marginLeft: 15,
                marginTop: 23,
                marginRight: 15,
                width: 334,
                height: 50,
                borderColor: "#E2E2E2",
                borderRadius: 4,
                borderWidth: 1,
              }}
            >
              <DatePicker
                locale={"en"}
                timeZoneOffsetInMinutes={false}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Test Date"
                textStyle={{ color: "green" }}
                placeHolderTextStyle={{ color: "#7D7D7D" }}
                onDateChange={this.setDate}
                disabled={false}
              />
              {/* <Text>
              Date: {this.state.chosenDate.toString().substr(4, 12)}
            </Text> */}
            </Content>

            <Content
              style={{
                marginLeft: 15,
                marginTop: 23,
                marginRight: 15,
                width: 334,
                height: 50,
                borderColor: "#E2E2E2",
                borderRadius: 4,
                borderWidth: 1,
              }}
            >
              <DatePicker
                locale={"en"}
                timeZoneOffsetInMinutes={false}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Expire Date"
                textStyle={{ color: "green" }}
                placeHolderTextStyle={{ color: "#7D7D7D" }}
                onDateChange={this.setDate2}
                disabled={false}
              />
              {/* <Text>
              Date: {this.state.chosenDate.toString().substr(4, 12)}
            </Text> */}
            </Content>

            <Button
              onPress={() => this.pickDocument()}
              style={{
                marginTop: 30,
                width: 334,
                height: 50,
                alignSelf: "center",
                backgroundColor: "#E3E3E3",
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
                  color: "#434343",
                }}
              >
                Upload Report
              </Text>
            </Button>

            <TouchableOpacity onPress={() => this.onClickListener()}>
              <Button
                style={{
                  marginTop: 23,
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
                  Save
                </Text>
              </Button>
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
});
