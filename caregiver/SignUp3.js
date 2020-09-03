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
import { Container, Header, Content, Icon, Picker, Form } from "native-base";
YellowBox.ignoreWarnings(["Remote debugger"]);

export default class SignUp3 extends React.Component {
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    headerShown: false,
  };
  state = {
    assetsLoaded: false,
    phoneNumber: "",
    city: "",
    address: "",
    zipCode: "",
  };
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined,
    };
  }
  onValueChange(value) {
    this.setState({
      selected: value,
    });
  }
  async componentDidMount() {
    await Font.loadAsync({
      proximanova: require("../assets/fonts/proximanova.otf"),
    });

    this.setState({ assetsLoaded: true });
  }

  checkEmptyInput() {
    if (
      this.state.phoneNumber === "" ||
      this.state.city === "" ||
      this.state.address === "" ||
      this.state.zipCode === ""
    ) {
      alert("Error!Dont Leave Blank Fields!");
      return false;
    }
    return true;
  }
  moveProps = (user) => {
    if (this.checkEmptyInput()) {
      this.props.navigation.navigate("SignUp4", {
        user: {
          ...user,
          phone: this.state.phoneNumber,
          city: this.state.city,
          address: this.state.address,
          zipcode: this.state.zipCode,
        },
      });
    }
  };

  render() {
    const { user } = this.props.navigation.state.params;
    console.log("User :", user);

    console.log();

    const { assetsLoaded } = this.state;
    if (assetsLoaded) {
      return (
        <View style={styles.container}>
          <ScrollView>
            <Text
              style={{
                fontSize: 18,
                marginTop: 200,
                marginTop: 19,
                alignSelf: "center",
                fontWeight: "600",
              }}
            >
              Personal Information
            </Text>

            <Item
              style={{
                marginLeft: 15,
                marginRight: 15,
                marginTop: 75,
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
                placeholder="Phone Number"
                placeholderTextColor={"#A4A4A4"}
                value={this.state.phoneNumber}
                onChangeText={(phoneNumber) =>
                  this.setState({
                    phoneNumber,
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
                placeholder="Enter City Here..."
                placeholderTextColor={"#A4A4A4"}
                value={this.state.city}
                onChangeText={(city) =>
                  this.setState({
                    city,
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
                height: 87,
                alignSelf: "center",
                borderColor: "#E2E2E2",
                borderRadius: 4,
                borderWidth: 1,
                textAlign: "left",
              }}
              regular
            >
              <Input
                placeholder="Your Home Address"
                placeholderTextColor={"#A4A4A4"}
                value={this.state.address}
                onChangeText={(address) =>
                  this.setState({
                    address,
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
                placeholder="Enter Zipcode"
                placeholderTextColor={"#A4A4A4"}
                value={this.state.zipCode}
                onChangeText={(zipCode) =>
                  this.setState({
                    zipCode,
                  })
                }
              />
            </Item>

            <TouchableOpacity onPress={() => this.moveProps(user)}>
              <Button
                style={{
                  marginTop: 53,
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
