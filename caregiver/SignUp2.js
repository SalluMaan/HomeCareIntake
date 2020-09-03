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
YellowBox.ignoreWarnings(["Remote debugger"]);

export default class SignUp2 extends React.Component {
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    headerShown: false,
  };
  state = {
    assetsLoaded: false,
    name: "",
    email: "",
    password: "",
    confirmPasword: "",
  };

  async componentDidMount() {
    await Font.loadAsync({
      proximanova: require("../assets/fonts/proximanova.otf"),
    });

    this.setState({ assetsLoaded: true });
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
      this.state.password === "" ||
      this.state.confirmPasword === "" ||
      this.state.name === ""
    ) {
      alert("Error!Dont Leave Blank Fields!");
      return false;
    }
    return true;
  }

  validatePassword(pass) {
    if (/^.{3,}$/.test(pass)) {
      return true;
    }
    alert(
      "You have entered an invalid Password(Password contain atleast 3 characters)"
    );
    return false;
  }
  validateBothPassword(pass, confirm) {
    if (pass === confirm) {
      return true;
    }
    alert("Password and Confirm Password doesn't match!");
    return false;
  }

  moveProps = () => {
    if (
      this.ValidateEmail(this.state.email) &&
      this.checkEmptyInput() &&
      this.validatePassword(this.state.password) &&
      this.validatePassword(this.state.confirmPasword) &&
      this.validateBothPassword(this.state.password, this.state.confirmPasword)
    ) {
      this.props.navigation.navigate("SignUp3", {
        user: {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          confirm: this.state.confirmPasword,
        },
      });
    }
  };

  render() {
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
              STEP 01
            </Text>
            <Text
              style={{
                fontSize: 24,
                marginTop: 19,
                alignSelf: "center",
                fontWeight: "600",
              }}
            >
              Caregiver Application
            </Text>

            <Text
              style={{
                fontSize: 15,
                marginLeft: 30,
                marginRight: 30,
                marginTop: 28,
                textAlign: "center",
                fontWeight: "400",
                color: "#7D7D7D",
              }}
            >
              Download our employee agreement form. Once you filled out please
              upload it to our system. Your E-sign is mandatory.
            </Text>

            <Button
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
                Download Form
              </Text>
            </Button>

            <Text
              style={{
                fontSize: 16,
                marginTop: 45,
                alignSelf: "center",
                fontWeight: "600",
                color: "#F51C58",
              }}
            >
              STEP 02
            </Text>
            <Text
              style={{
                fontSize: 18,
                marginTop: 19,
                alignSelf: "center",
                fontWeight: "600",
              }}
            >
              Process General Informations
            </Text>

            <Item
              style={{
                marginLeft: 15,
                marginRight: 15,
                marginTop: 45,
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
                placeholder="Full name"
                placeholderTextColor={"#A4A4A4"}
                value={this.state.name}
                onChangeText={(name) =>
                  this.setState({
                    name,
                  })
                }
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
                placeholder="Email address"
                placeholderTextColor={"#A4A4A4"}
                value={this.state.email}
                onChangeText={(email) =>
                  this.setState({
                    email,
                  })
                }
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
                placeholder="Password"
                placeholderTextColor={"#A4A4A4"}
                value={this.state.password}
                onChangeText={(password) =>
                  this.setState({
                    password,
                  })
                }
              />
              <IconAnt
                name="eye-off"
                size={20}
                color="#A4A4A4"
                style={{ marginRight: 5 }}
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
                value={this.state.confirmPasword}
                onChangeText={(confirmPasword) =>
                  this.setState({
                    confirmPasword,
                  })
                }
                placeholderTextColor={"#A4A4A4"}
              />
              <IconAnt
                name="eye-off"
                size={20}
                color="#A4A4A4"
                style={{ marginRight: 5 }}
              />
            </Item>

            <TouchableOpacity onPress={() => this.moveProps()}>
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
                  NEXT
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
