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
import * as Font from "expo-font";
import { Input } from "native-base";
import IconAnt from "react-native-vector-icons/AntDesign";

YellowBox.ignoreWarnings(["Remote debugger"]);
import axios from "axios";

export default class OTP extends React.Component {
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    headerShown: false,
  };
  state = {
    assetsLoaded: false,
    code: "",
    response: "",
  };

  ValidateCode(code) {
    if (code.length === 9) {
      return true;
    }
    alert("You have entered an invalid OTP Code!");
    return false;
  }

  //   http://aplushome.facebhoook.com/api/getOtp
  // // otp verification
  onClickListener = () => {
    console.log("Clicked:", this.state.email);

    if (this.state.code != "") {
      const code = this.state.code;
      this.sendCode(code);

      //   if (this.ValidateCode(code))
      //   this.sendCode(code);
      // } else {
      //   this.setState({
      //     response: "Type Email Correct",
      //   });
      // }
    }
  };

  sendCode(code) {
    console.log("OTP:", code);
    // const formData = new FormData();
    // formData.append("otp", code);

    axios
      .post(`https://aplushome.facebhoook.com/api/getOtp`, {
        otp: code,
      })
      .then((res) => {
        console.log("Response OTP:", res.data);
        const obj = res.data["success"];
        console.log("ID:", obj[0].id);
        res.data["success"]
          ? this.props.navigation.navigate("ResetPass", {
              id: obj[0].id,
            })
          : null;
      })
      .catch((err) => {
        console.log("Error OTP:", err);
      });
    //     this.props.navigation.navigate("OTPcode");
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
                onPress={() => this.props.navigation.navigate("Login")}
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
                marginTop: 125,
                alignSelf: "center",
                fontWeight: "600",
                fontFamily: "proximanova",
              }}
            >
              OTP Code Verification
            </Text>

            <View
              style={{
                marginTop: 74,
                width: "100%",
                height: 200,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: "#A4A4A4",
                  textAlign: "center",
                }}
              >
                Kindly Check Your Inbox We 've sent OTP code to your email
                Address
              </Text>
              <Input
                style={{
                  fontSize: 15,
                  marginLeft: 10,
                  marginTop: 80,
                  fontWeight: "600",
                  borderBottomWidth: 1,
                  borderColor: "#A4A4A4",
                }}
                placeholder="Enter Here Your OTP Code..."
                placeholderTextColor="#A4A4A4"
                onChangeText={(code) => this.setState({ code })}
              />
              <TouchableOpacity
                onPress={() => this.onClickListener()}
                style={{ marginTop: 25 }}
              >
                <Text
                  style={{
                    height: 35,
                    width: 70,
                    backgroundColor: "#B20838",
                    padding: 5,
                    textAlign: "center",
                    borderRadius: 10,
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  Send
                </Text>
              </TouchableOpacity>
            </View>
            <Text>{this.state.response}</Text>
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
