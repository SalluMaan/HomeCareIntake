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

export default class Myaccount2Care extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined,
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
                <IconAnt
                  name="left"
                  size={20}
                  color="#A4A4A4"
                  style={{ marginTop: 15, marginLeft: 21 }}
                />
              </View>

              <View style={{ height: 280, backgroundColor: "#F3F3F3" }}>
                <Image
                  source={require("../assets/img2.png")}
                  style={{
                    width: 118,
                    height: 118,
                    marginTop: 10,
                    alignSelf: "center",
                    borderRadius: 150 / 2,
                    overflow: "hidden",
                  }}
                ></Image>

                <Text
                  style={{
                    fontSize: 16,
                    marginTop: 16,
                    alignSelf: "center",
                    fontWeight: "600",
                    color: "#434343",
                  }}
                >
                  Jerry Jackson
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
                  Philadelphia
                </Text>

                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("ViewSchedule")}
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

            <Item
              style={{
                marginLeft: 15,
                marginRight: 15,
                marginTop: 20,
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
                placeholder="Add New Skill"
                placeholderTextColor={"#A4A4A4"}
              />
            </Item>
            <Text
              style={{
                fontSize: 16,
                marginTop: 200,
                marginTop: 0,
                marginLeft: 280,
                fontWeight: "400",
                color: "#A4A4A4",
              }}
            >
              SAVE
            </Text>
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
