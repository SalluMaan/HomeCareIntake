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
import IconAnt from "react-native-vector-icons/Feather";
import { Input, Item, Card } from "native-base";
import { Button } from "react-native-paper";
import * as Font from "expo-font";
import axios from "axios";

YellowBox.ignoreWarnings(["Remote debugger"]);

export default class ResetPassword extends React.Component {
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    headerShown: false,
  };
  state = {
    assetsLoaded: false,
    password: "",
    confirm: "",
    email: "",
    id: 0,
  };

  async componentDidMount() {
    await Font.loadAsync({
      proximanova: require("../assets/fonts/proximanova.otf"),
    });

    this.setState({ assetsLoaded: true });
  }
  validatePassword(pass, confirm) {
    if (pass === confirm) {
      return true;
    }
    alert("Password and Confirm Password doesn't match!");
    return false;
  }

  onClickListener = () => {
    console.log("Email", this.state.email);
    if (
      this.state.password != "" &&
      this.state.confirm != "" &&
      this.validatePassword(this.state.password, this.state.confirm)
    ) {
      const Confirm = this.state.confirm;
      const Password = this.state.password;

      //   if (this.validatePassword(Password, Confirm)) {
      //     console.log("ok");
      //   }
      // }

      axios
        .post(
          "https://aplushome.facebhoook.com/api/intakeupdatepassword/" +
            this.state.id,
          {
            password: Password,
            c_password: Confirm,
          }
        )
        .then((res) => {
          this.props.navigation.navigate("ResetPassSucc", {
            myData: res.data,
          });
        })
        .catch((err) => {
          console.log(err.data);
          const error = "Error";
          this.setState({ response: error });
        });
    }
  };

  render() {
    const { assetsLoaded } = this.state;
    const { id } = this.props.navigation.state.params
      ? this.props.navigation.state.params
      : null;

    // const email = "134";

    console.log("ID:", id);

    if (assetsLoaded) {
      return (
        <View style={styles.container}>
          <ScrollView>
            <Text
              style={{
                fontSize: 24,
                marginTop: 125,
                alignSelf: "center",
                fontWeight: "600",
              }}
            >
              Reset Password
            </Text>

            <Item
              style={{
                marginLeft: 15,
                marginRight: 15,
                marginTop: 169,
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
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(password) =>
                  this.setState({ password: password, id: id })
                }
                placeholderTextColor={"#A4A4A4"}
              />
            </Item>

            <Item
              style={{
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
              }}
              regular
            >
              <Input
                placeholder="Confirm Password"
                secureTextEntry={true}
                placeholderTextColor={"#A4A4A4"}
                onChangeText={(confirm) => this.setState({ confirm })}
              />
            </Item>

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
                  set new password
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
