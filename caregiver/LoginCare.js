import React from "react";
import {
  StyleSheet,
  YellowBox,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import IconAnt from "react-native-vector-icons/Feather";
import { Input, Item } from "native-base";
import { Button } from "react-native-paper";
import * as Font from "expo-font";
YellowBox.ignoreWarnings(["Remote debugger"]);
import axios from "axios";
// import Email from "./Email";
import AsyncStorage from "@react-native-community/async-storage";
import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as CareGiverServices from "../src/services/CareGiver";
import { CareLoginPath } from "./constantCaregiver";

export default class LoginCare extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    headerShown: false,
  };
  state = {
    assetsLoaded: false,
    email: "uz391110@gmail.com",
    password: "012345",
    response: "",
    eyeBtnClicked: true,
  };

  async componentDidMount() {
    await Font.loadAsync({
      proximanova: require("../assets/fonts/proximanova.otf"),
    });

    this.setState({ assetsLoaded: true });
  }
  setToken(id, name, carePayroll, image, email, password) {
    try {
      AsyncStorage.setItem("token", id);
      AsyncStorage.setItem("Carename", name);
      AsyncStorage.setItem("Careimage", image);
      AsyncStorage.setItem("CarePayroll", carePayroll);
      AsyncStorage.setItem("Careemail", email);
      AsyncStorage.setItem("Carepassword", password);
      console.log("Set Token", name, id, carePayroll);
    } catch (e) {
      // saving error
      console.log("Error AsyncStorage");
    }
  }
  handleEyeClicked = () => {
    this.setState({
      eyeBtnClicked: !this.state.eyeBtnClicked,
    });
  };

  ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    alert("You have entered an invalid email address!");
    return false;
  }
  checkEmptyInput() {
    if (this.state.email === "" || this.state.password === "") {
      alert("Error!Dont Leave Blank Fields!");
      return false;
    }
    return true;
  }

  onClickListener = () => {
    const email = this.state.email;
    const password = this.state.password;
    console.log("Login:", email, password);

    if (this.checkEmptyInput()) {
      if (this.ValidateEmail(email)) {
        axios
          .post(CareLoginPath, {
            email,
            password,
          })
          .then((res) => {
            console.log("Name", res.data);
            const name = res.data["success"].name;
            const id = res.data["success"].id;
            const carePayroll = res.data["success"].caregiver_payroll;
            const image = res.data["success"].image;
            const Password = res.data["success"].password;
            const Email = res.data["success"].email;

            console.log("Name:", name, id, carePayroll, Email, Password, image);
            this.setToken(id, name, carePayroll, image, Email, Password);
            this.props.navigation.navigate("First2");
          })
          .catch((err) => {
            console.log(err.data);
            const error = "Error!Type Correct Email and Password";
            this.setState({ response: error });
          });
      }
    }
  };
  render() {
    const { assetsLoaded } = this.state;
    if (assetsLoaded) {
      return (
        <View style={styles.container}>
          <ScrollView>
            <Text style={styles.logintxt}>Login</Text>
            {this.state.response ? (
              <View style={{ marginHorizontal: "10%", marginTop: "20%" }}>
                <Text style={{ color: "red", fontWeight: "bold" }}>
                  {this.state.response}
                </Text>
              </View>
            ) : (
              <Text></Text>
            )}
            <Item style={styles.inputtxt1} regular>
              <Input
                placeholder="Email address"
                textContentType="emailAddress"
                onChangeText={(email) => this.setState({ email })}
                placeholderTextColor={"#A4A4A4"}
              />
            </Item>

            <Item style={styles.inputtxt2} regular>
              <Input
                placeholder="Password"
                onChangeText={(password) => this.setState({ password })}
                placeholderTextColor={"#A4A4A4"}
                secureTextEntry={this.state.eyeBtnClicked}
              />
              <TouchableOpacity onPress={() => this.handleEyeClicked()}>
                <IconAnt
                  name={this.state.eyeBtnClicked ? "eye-off" : "eye"}
                  size={20}
                  color="#A4A4A4"
                  style={{ marginRight: 5 }}
                />
              </TouchableOpacity>
            </Item>

            {/* <Button
              onPress={() => this.props.navigation.navigate("First")}
              style={styles.submitbtn}
            >
              <Text style={styles.btntxt}>LOGIN</Text>
            </Button> */}
            {/* onPress={() => this.onClickListener()} */}
            <Text
              onPress={() => this.props.navigation.navigate("Reset2")}
              style={styles.resetpasstxt}
            >
              Reset Password?
            </Text>
            <Button
              onPress={() => this.onClickListener()}
              style={styles.submitbtn}
            >
              <Text style={styles.btntxt}>LOGIN</Text>
            </Button>

            {/* <Text
              onPress={() => this.props.navigation.navigate("Reset2")}
              style={styles.resetpasstxt}
            >
              Reset Password?
            </Text> */}

            <Button
              onPress={() => this.props.navigation.navigate("SignUp2")}
              style={styles.submitbtn}
            >
              <Text style={styles.btntxt}>Get started</Text>
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
    backgroundColor: "#fff",
  },
  logintxt: {
    fontSize: 24,
    marginTop: 125,
    alignSelf: "center",
    fontWeight: "600",
    marginBottom: 30,
  },
  logintitletxt: {
    fontSize: 14,
    marginTop: 72,
    alignSelf: "center",
    fontWeight: "300",
    color: "#A4A4A4",
  },
  inputtxt1: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    width: 334,
    height: 50,
    alignSelf: "center",
    borderColor: "#E2E2E2",
    borderRadius: 4,
    borderWidth: 1,
    textAlign: "left",
  },
  inputtxt2: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 23,
    width: 334,
    height: 50,
    alignSelf: "center",
    borderColor: "#E2E2E2",
    borderRadius: 4,
    borderWidth: 1,
    textAlign: "left",
  },
  submitbtn: {
    marginTop: 10,
    width: 334,
    height: 50,
    alignSelf: "center",
    backgroundColor: "#B20838",
    borderRadius: 4,
    borderWidth: 1,
    textAlign: "center",
  },
  btntxt: {
    fontSize: 16,
    alignSelf: "center",
    fontWeight: "600",
    color: "white",
  },
  resetpasstxt: {
    fontSize: 14,
    marginTop: 30,
    alignSelf: "center",
    fontWeight: "600",
    color: "#FF4B7D",
    marginBottom: 20,
  },
});
