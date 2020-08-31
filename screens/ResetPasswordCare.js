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
import * as Font from "expo-font";
import { Input } from "native-base";
YellowBox.ignoreWarnings(["Remote debugger"]);
import axios from "axios";
import IconAnt from "react-native-vector-icons/AntDesign";
import { CareEmailVerificationPath } from "../caregiver/constantCaregiver";

export default class ResetPasswordCare extends React.Component {
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    headerShown: false,
  };
  state = {
    assetsLoaded: false,
    email: "",
    response: "",
  };

  ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    alert("You have entered an invalid email address!");
    return false;
  }
  onClickListener = () => {
    console.log("Clicked:", this.state.email);
    if (this.state.email != "") {
      const email = this.state.email;
      if (this.ValidateEmail(email)) {
        this.sendEmail(email);
      }
    } else {
      this.setState({
        response: "Type Email Correct",
      });
    }
    setTimeout(() => {
      this.setState({
        response: "",
      });
    }, 3000);
  };

  timeOut = () => {
    setTimeout(() => {
      this.setState({
        response: "",
      });
    }, 5000);
  };

  sendEmail(email) {
    // console.log("Email:", email);
    const formData = new FormData();
    formData.append("email", email);
    axios
      .post(CareEmailVerificationPath, formData)
      .then((res) => {
        console.log("Email", res.data);
        if (res.data["success"]) {
          Alert.alert("Server Response", res.data["success"]);
          this.props.navigation.navigate("OTPcodeCare");
        } else {
          Alert.alert("Server Response", res.data["error"]);
          this.props.navigation.navigate("LoginCare");
        }
      })
      .catch((err) => {
        console.log("Error", err);
        Alert.alert("Server Response", "User not found!");
        this.props.navigation.navigate("LoginCare");
      });
  }

  async componentDidMount() {
    await Font.loadAsync({
      proximanova: require("../assets/fonts/proximanova.otf"),
    });

    this.setState({ assetsLoaded: true });
  }

  render() {
    const { assetsLoaded } = this.state;
    if (assetsLoaded) {
      return (
        <View style={styles.container}>
          <ScrollView>
            <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("LoginCare")}
              >
                <View style={{ flexDirection: "row", marginTop: 5 }}>
                  <IconAnt
                    name="left"
                    size={20}
                    color="#A4A4A4"
                    style={{ marginRight: 5, marginLeft: 5, marginTop: 3 }}
                  />
                  <Text style={{ fontSize: 18 }}>Back to Login</Text>
                </View>
              </TouchableOpacity>
            </View>
            <Text
              style={{
                fontSize: 24,
                marginTop: 100,
                alignSelf: "center",
                fontWeight: "600",
                fontFamily: "proximanova",
              }}
            >
              Reset Password
            </Text>

            <View
              style={{
                marginTop: 74,
                width: 302,
                height: 50,
                alignSelf: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "300",
                  color: "#A4A4A4",
                  alignSelf: "center",
                }}
              >
                Select which contact details should be used to
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "300",
                  color: "#A4A4A4",
                  alignSelf: "center",
                }}
              >
                reset your password.
              </Text>
            </View>
            <Text
              style={{
                color: "red",
                marginHorizontal: "5%",
                fontWeight: "bold",
              }}
            >
              {this.state.response}
            </Text>
            <View
              style={{
                width: 334,
                height: 152,
                backgroundColor: "#DEDCDC",
                borderRadius: 7,
                alignSelf: "center",
                marginTop: 155,
                flexDirection: "row",
              }}
            >
              <View>
                <TouchableOpacity
                // onPress={() => this.props.navigation.navigate("ResetPass")}
                >
                  <Image
                    source={require("../assets/img1.png")}
                    style={{
                      width: 100,
                      height: 75,
                      marginTop: 31,
                      marginLeft: 25,
                    }}
                  ></Image>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  borderLeftWidth: 1,
                  borderLeftColor: "black",
                  height: 120,
                  marginTop: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    marginLeft: 10,
                    marginTop: 20,
                    alignSelf: "center",
                  }}
                >
                  Via email address
                </Text>
                <Input
                  style={{
                    fontSize: 15,
                    marginLeft: 10,
                    fontWeight: "600",
                  }}
                  placeholder="*****ab@gmail.com"
                  placeholderTextColor="#A4A4A4"
                  onChangeText={(email) => this.setState({ email })}
                />
                <TouchableOpacity onPress={() => this.onClickListener()}>
                  <Text
                    style={{
                      alignSelf: "center",
                      height: 25,
                      width: 60,
                      backgroundColor: "#B20838",
                      color: "#fff",
                      borderRadius: 10,
                      textAlign: "center",
                      paddingTop: 3,
                      fontSize: 12,
                    }}
                  >
                    Submit
                  </Text>
                </TouchableOpacity>
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
    backgroundColor: "#fff",
  },
});
