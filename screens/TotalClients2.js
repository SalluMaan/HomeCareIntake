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
  Animated,
} from "react-native";
import IconAnt from "react-native-vector-icons/AntDesign";
import IconAnt2 from "react-native-vector-icons/Fontisto";
import IconAnt3 from "react-native-vector-icons/Entypo";
import { Input, Item, Card } from "native-base";
import { Button, RadioButton } from "react-native-paper";
import { ConfirmDialog } from "react-native-simple-dialogs";
import * as Font from "expo-font";
import Modal from "react-native-simple-modal";
import axios from "axios";
import SearchInput, { createFilter } from "react-native-search-filter";
import AsyncStorage from "@react-native-community/async-storage";
// YellowBox.ignoreWarnings([
//   'Animated: `useNativeDriver` was not specified.',
// ]);
// //import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";
// import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
YellowBox.ignoreWarnings(["Remote debugger"]);

export default class TotalClients2 extends React.Component {
  animatedValue = new Animated.Value(0);
  constructor(props) {
    super(props);
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
    open: false,
    useNativeDriver: true,
    client: "",
    searchedClient: "",
    user: {},
    searchTerm: "",
    token: "",
  };

  getClient = () => {
    axios
      .get(
        `https://aplushome.facebhoook.com/api/getclients/` + this.state.token
      )
      .then((res) => {
        const data = res.data["success"];
        console.log("Response Clinets", data);

        this.setState({ client: data });
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
        this.getClient();
      }
    } catch (e) {
      // error reading value
      console.log("Reading Value Error", e);
    }
  };

  searchUpdated(term) {
    this.setState({ searchTerm: term });
  }

  ModalFunc(client_) {
    <Modal
      containerStyle={{ justifyContent: "center" }}
      offset={this.state.offset}
      open={this.state.open}
      modalDidOpen={this.modalDidOpen}
      modalDidClose={this.modalDidClose}
    >
      <TouchableOpacity
        style={{ margin: 5 }}
        onPress={() =>
          this.props.navigation.navigate("ClientProfile", {
            user: client_,
          })
        }
      >
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 15 }}>View Profile</Text>
        </View>
      </TouchableOpacity>
    </Modal>;
  }

  async componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 1000,
    }).start();
    this.getData();
    await Font.loadAsync({
      proximanova: require("../assets/fonts/proximanova.otf"),
    });

    this.setState({ assetsLoaded: true });
  }

  modalDidOpen = () => console.log("Modal did open.");

  modalDidClose = () => {
    this.setState({ open: false });
    console.log("Modal did close.");
  };

  moveUp = () => this.setState({ offset: -100 });

  resetPosition = () => this.setState({ offset: 0 });

  openModal = (user) => this.setState({ open: true, user: user });

  closeModal = () => this.setState({ open: false });

  onChangeText = (text) => {
    let filtered = this.state.client;
    if (text) {
      console.log("i am in", filtered[0].client_name);
      const textLower = text.trim().toLowerCase();
      console.log("LOwer", textLower);
      const dataArr = [];
      this.state.client.map((obj, id) => {
        dataArr.push(obj);
      });

      console.log("Array:", dataArr);

      const data =
        dataArr === null
          ? dataArr.filter((l) => {
              return l.client_name.toLowerCase().match(textLower);
            })
          : "";
      console.log("Searched:", data);
      this.setState({
        client: data,
      });
    }
  };

  render() {
    const { assetsLoaded } = this.state;
    const filteredClients = this.state.client
      ? this.state.client.filter(
          createFilter(this.state.searchTerm, "client_name")
        )
      : null;
    if (assetsLoaded) {
      return (
        <View style={styles.container}>
          <ScrollView>
            <View
              style={{ marginTop: 13, marginLeft: 20, flexDirection: "row" }}
            >
              <View>
                <TouchableOpacity
                  onPress={() => this.props.navigation.goBack()}
                >
                  <IconAnt
                    name="left"
                    size={20}
                    color="#A4A4A4"
                    style={{ marginRight: 5 }}
                  />
                </TouchableOpacity>
              </View>
              <View></View>
            </View>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 18,
                  marginLeft: 20,
                  marginTop: 23,
                  fontWeight: "600",
                  color: "#141414",
                }}
              >
                {"Total Clients"} {"( "}
                {this.state.client ? this.state.client.length : null} {")"}
              </Text>
            </TouchableOpacity>

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
              <IconAnt
                name="search1"
                size={20}
                color="#A4A4A4"
                style={{ marginLeft: 8 }}
              />

              <SearchInput
                onChangeText={(term) => {
                  this.searchUpdated(term);
                }}
                style={styles.searchInput}
                placeholder="Type a message to search"
              />
            </Item>

            {/* //pak */}
            {filteredClients ? (
              filteredClients.map((client_, id) => {
                return (
                  <View key={id} style={{ alignItems: "center" }}>
                    <View
                      style={{
                        backgroundColor: "#F3F3F3",
                        width: "95%",
                        height: 73,
                        flexDirection: "row",
                        marginTop: 18,
                      }}
                    >
                      <View style={{ width: "25%" }}>
                        <Image
                          // source={require("../assets/img2.png")}
                          source={
                            client_.image
                              ? {
                                  uri:
                                    "https://aplushome.facebhoook.com/public/clients/" +
                                    client_.image,
                                }
                              : require("../assets/img2.png")
                          }
                          style={{
                            width: 49,
                            height: 49,
                            marginTop: 12,
                            marginLeft: 12,
                            borderRadius: 150 / 2,
                            overflow: "hidden",
                            justifyContent: "space-around",
                          }}
                        ></Image>
                      </View>
                      <View style={{ width: "65%" }}>
                        <Text
                          style={{
                            fontSize: 14,
                            marginTop: 17,
                            fontWeight: "700",
                            color: "#A4A4A4",
                          }}
                        >
                          {client_.client_name}
                        </Text>
                        <Text
                          style={{
                            fontSize: 12,
                            marginTop: 10,
                            fontWeight: "600",
                            color: "#A4A4A4",
                          }}
                        >
                          {client_.address}
                        </Text>
                      </View>
                      <View style={{ width: "10%" }}>
                        <TouchableOpacity
                          onPress={(id) => this.openModal(client_)}
                        >
                          <IconAnt3
                            name="dots-three-vertical"
                            size={20}
                            color="#A4A4A4"
                            style={{ marginTop: 25 }}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                );
              })
            ) : (
              <View style={{ marginTop: "5%" }}>
                <ActivityIndicator />
              </View>
            )}

            {/* ///Pak */}
          </ScrollView>
          <Modal
            containerStyle={{ justifyContent: "center" }}
            offset={this.state.offset}
            open={this.state.open}
            modalDidOpen={this.modalDidOpen}
            modalDidClose={this.modalDidClose}
          >
            <TouchableOpacity
              style={{ margin: 5 }}
              onPress={() =>
                this.props.navigation.navigate("ClientProfile", {
                  user: this.state.user,
                })
              }
            >
              <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 15 }}>View Profile</Text>
              </View>
            </TouchableOpacity>
            {/* <TouchableOpacity
              style={{ margin: 5 }}
              onPress={() =>
                this.props.navigation.navigate("ClientProfile", {
                  user: this.state.user,
                })
              }
            >
              <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 15 }}>Send Message</Text>
              </View>
            </TouchableOpacity> */}
            <TouchableOpacity
              style={{ margin: 5 }}
              onPress={() =>
                this.props.navigation.navigate("ViewClientSch", {
                  user: this.state.user,
                })
              }
            >
              <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 15 }}>View Schedule</Text>
              </View>
            </TouchableOpacity>
            {/* <TouchableOpacity
              style={{ margin: 5 }}
              onPress={() =>
                this.props.navigation.navigate("ClientProfile", {
                  user: this.state.user,
                })
              }
            >
              <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 15 }}>Edit Schedule</Text>
              </View>
            </TouchableOpacity> */}
            <TouchableOpacity
              style={{ margin: 5 }}
              onPress={() =>
                this.props.navigation.navigate("ClientProfile", {
                  user: this.state.user,
                })
              }
            >
              <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 15 }}>Recurring Schedule</Text>
              </View>
            </TouchableOpacity>
          </Modal>
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
  searchInput: {
    marginLeft: 5,
  },
});
