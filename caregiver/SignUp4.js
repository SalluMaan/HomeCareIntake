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
  Alert,
} from "react-native";
import IconAnt from "react-native-vector-icons/Feather";
import { Input, Item, Card } from "native-base";
import { Button } from "react-native-paper";
import * as Font from "expo-font";
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
YellowBox.ignoreWarnings(["Remote debugger"]);
import axios from "axios";
import Moment from "moment";
import { CareSignUpPath } from "./constantCaregiver";
export default class SignUp4 extends React.Component {
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    headerShown: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      assetsLoaded: false,
      selected: undefined,
      chosenDate: new Date(),
      file: "",
      typeFile: "",
      filename: "",
      file2: "",
      typeFile2: "",
      filename2: "",
      docName: "",
      docType: "",
      time: "",
    };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    const newdate = Moment(newDate).format("YYYY-MM-DD");
    console.log("A date has been picked: ", newdate);
    this.setState({ time: newdate });
  }
  onValueChange(value) {
    this.setState({
      docType: value,
    });
  }
  async componentDidMount() {
    await Font.loadAsync({
      proximanova: require("../assets/fonts/proximanova.otf"),
    });

    this.setState({ assetsLoaded: true });
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

  pickDocument2 = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    console.log(result);
    let name = result.name;
    name = name.split(".");
    let type = name[name.length - 1];
    console.log("type:", type);
    this.setState({
      file2: result.uri,
      typeFile2: type,
      fileName2: name,
    });
  };

  checkEmptyInput() {
    if (
      this.state.docName === "" ||
      this.state.docType === "" ||
      this.state.time === "" ||
      this.state.file === "" ||
      this.state.file2 === ""
    ) {
      alert("Error!Dont Leave Blank Fields!");
      return false;
    }
    return true;
  }

  onClickListener = () => {
    const DocName = this.state.docName;
    const DocType = this.state.docType;
    const ExpiryDate = this.state.time;
    console.log("ExpiryDat", ExpiryDate);
    // const ID = this.state.careID;

    const { user } = this.props.navigation.state.params;
    console.log("User :", user);

    const Docobj = {
      uri: this.state.file,
      type: "file/" + this.state.typeFile,
      name: "FileName-" + user.name,
    };

    const Employobj = {
      uri: this.state.file2,
      type: "file/" + this.state.typeFile2,
      name: "FileName-" + user.name,
    };

    const formData = new FormData();
    formData.append("name", user.name);
    formData.append("email", user.email);
    formData.append("c_password", user.confirm);
    formData.append("password", user.password);
    formData.append("phone", user.phone);
    formData.append("city", user.city);
    formData.append("address", user.address);
    formData.append("zipcode", user.zipcode);
    formData.append("doc_name", DocName);
    formData.append("doc_type", DocType);
    formData.append("expiry_date", ExpiryDate);
    formData.append("file", Employobj);
    formData.append("doc", Docobj);

    console.log("Fomr Data", formData);

    axios
      .post(CareSignUpPath, formData)
      .then((res) => {
        console.log("Response.SignUP:", res.data);
        Alert.alert("Response", res.data.message);
        this.props.navigation.navigate("LoginCare");
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Response", "Error while Sign Up!");
      });
  };

  render() {
    const { user } = this.props.navigation.state.params;
    console.log("User :", user);

    const { assetsLoaded } = this.state;
    if (assetsLoaded) {
      return (
        <View style={styles.container}>
          <ScrollView>
            <Text
              style={{
                fontSize: 16,
                marginTop: 45,
                alignSelf: "center",
                fontWeight: "600",
                color: "#F51C58",
              }}
            >
              STEP 03
            </Text>
            <Text
              style={{
                fontSize: 18,
                marginTop: 19,
                alignSelf: "center",
                fontWeight: "600",
              }}
            >
              Upload Documents
            </Text>

            <Text
              style={{
                fontSize: 15,
                marginLeft: 30,
                marginRight: 30,
                marginTop: 28,
                textAlign: "center",
                fontWeight: "400",
                color: "#83878A",
              }}
            >
              Add your identity verification documents such as passport, NID,
              driving license, etc.
            </Text>

            <Item
              style={{
                marginLeft: 15,
                marginRight: 15,
                marginTop: 30,
                width: 334,
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
                placeholder="Document Name"
                placeholderTextColor={"#A4A4A4"}
                onChangeText={(docName) => this.setState({ docName })}
              />
            </Item>

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
              <Form>
                <Picker
                  mode="dropdown"
                  placeholder="Select your Identity Document Type"
                  iosIcon={<Icon name="arrow-down" />}
                  placeholder="Select your SIM"
                  textStyle={{ color: "#5cb85c" }}
                  itemStyle={{
                    backgroundColor: "#d3d3d3",
                    marginLeft: 0,
                    paddingLeft: 10,
                  }}
                  itemTextStyle={{ color: "#788ad2" }}
                  style={{ width: undefined, color: "#7D7D7D" }}
                  selectedValue={this.state.docType}
                  onValueChange={this.onValueChange.bind(this)}
                >
                  <Picker.Item
                    label="Select your Identity Document Type"
                    value="0"
                  />
                  <Picker.Item label="ID Card" value="idCard" />
                  <Picker.Item label="Passport" value="passport" />
                  <Picker.Item label="Driving License" value="drivingLicense" />
                  {/* <Picker.Item label="Passport" value="passport" /> */}
                  <Picker.Item label="ATM Card" value="atmCard" />
                  <Picker.Item label="Debit Card" value="debitCard" />
                  <Picker.Item label="Credit Card" value="creditCard" />
                  <Picker.Item label="Net Banking" value="netBanking" />
                </Picker>
              </Form>
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
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Expiry Date"
                textStyle={{ color: "green" }}
                placeHolderTextStyle={{ color: "#7D7D7D" }}
                onDateChange={this.setDate}
                disabled={false}
              />
              {/* <Text>
              Date: {this.state.chosenDate.toString().substr(4, 12)}
            </Text> */}
            </Content>

            <Button
              onPress={() => this.pickDocument()}
              style={{
                marginTop: 43,
                width: 334,
                height: 50,
                alignSelf: "center",
                backgroundColor: "#F5F5F5",
                borderColor: "#E5E5E5",
                borderRadius: 4,
                borderWidth: 1,
                textAlign: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  alignSelf: "center",
                  fontWeight: "600",
                  color: "black",
                }}
              >
                Upload Documents
              </Text>
            </Button>

            <View
              style={{
                marginLeft: 15,
                marginTop: 45,
                marginRight: 15,
                width: 334,
                height: 152,
                borderRadius: 8,
                backgroundColor: "#FFF3F7",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  marginTop: 28,
                  alignSelf: "center",
                  fontWeight: "600",
                  color: "#83878A",
                }}
              >
                Upload Employee Agreement Form
              </Text>

              <Button
                onPress={() => this.pickDocument2()}
                style={{
                  marginTop: 24,
                  width: 297,
                  height: 50,
                  alignSelf: "center",
                  backgroundColor: "#FFFFFF",
                  borderColor: "#E5E5E5",
                  borderRadius: 4,
                  borderWidth: 1,
                  textAlign: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    alignSelf: "center",
                    fontWeight: "600",
                    color: "black",
                  }}
                >
                  Upload File
                </Text>
              </Button>
            </View>
            {/* this.props.navigation.navigate("SignUp5") */}

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
                  Compelte Sign up
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
