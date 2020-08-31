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
  TouchableOpacity,
} from "react-native";
import IconAnt from "react-native-vector-icons/AntDesign";
import IconAnt2 from "react-native-vector-icons/Fontisto";
import IconAnt3 from "react-native-vector-icons/Entypo";

import { Input, Item, Card } from "native-base";
import { Button, RadioButton } from "react-native-paper";
import * as Font from "expo-font";
import axios from "axios";
import Modal from "react-native-simple-modal";
import SearchInput, { createFilter } from "react-native-search-filter";
import AsyncStorage from "@react-native-community/async-storage";

YellowBox.ignoreWarnings(["Remote debugger"]);

export default class TotalCaregiver2 extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    headerShown: false,
  };
  state = {
    assetsLoaded: false,
    useNativeDriver: true,
    caregivers: "",
    user: "",
    open: false,
    searchTerm: "",
    token: "",
  };

  getCaregivers = () => {
    axios
      .get(
        `https://aplushome.facebhoook.com/api/getcaregivers/` + this.state.token
      )
      .then((res) => {
        const data = res.data["success"];
        console.log("Response Xaregiver", data);

        this.setState({ caregivers: data });
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
        this.getCaregivers();
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
  openModal = (user) => this.setState({ open: true, user: user });

  closeModal = () => this.setState({ open: false });

  modalDidOpen = () => console.log("Modal did open.");

  modalDidClose = () => {
    this.setState({ open: false });
    console.log("Modal did close.");
  };

  async componentDidMount() {
    this.getData();
    await Font.loadAsync({
      proximanova: require("../assets/fonts/proximanova.otf"),
    });

    this.setState({ assetsLoaded: true });
  }

  render() {
    const { assetsLoaded } = this.state;
    const filteredClients = this.state.caregivers
      ? this.state.caregivers.filter(
          createFilter(this.state.searchTerm, "name")
        )
      : null;
    console.log("Filtered", filteredClients);

    console.log("State", this.state.caregivers);
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

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("TotalCaregiver2")}
            >
              <Text
                style={{
                  fontSize: 18,
                  marginLeft: 20,
                  marginTop: 23,
                  fontWeight: "600",
                  color: "#141414",
                }}
              >
                {"Total Caregivers"} {"( "}
                {this.state.caregivers
                  ? this.state.caregivers.length
                  : null}{" "}
                {")"}
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
            {/* {this.state.caregivers ? this.list() : <Text>Loading</Text>} */}
            {filteredClients ? (
              filteredClients.map((caregiver, id) => {
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
                            caregiver.image
                              ? {
                                  uri:
                                    "https://aplushome.facebhoook.com/public/clients/" +
                                    caregiver.image,
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
                          {caregiver.name}
                        </Text>
                        <Text
                          style={{
                            fontSize: 12,
                            marginTop: 10,
                            fontWeight: "600",
                            color: "#A4A4A4",
                          }}
                        >
                          {caregiver.address}
                        </Text>
                      </View>
                      <View style={{ width: "10%" }}>
                        <TouchableOpacity
                          onPress={(id) => this.openModal(caregiver)}
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
            open={this.state.open}
            modalDidOpen={this.modalDidOpen}
            modalDidClose={this.modalDidClose}
          >
            <TouchableOpacity
              style={{ margin: 5 }}
              onPress={() =>
                this.props.navigation.navigate("Caregiverdetails", {
                  user: this.state.user,
                })
              }
            >
              <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 15 }}>View Profile</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ margin: 5 }}
              // onPress={() =>
              //   this.props.navigation.navigate("ClientProfile", {
              //     user: this.state.user,
              //   })
              // }
            >
              <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 15 }}>Send Message</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ margin: 5 }}
              onPress={() =>
                this.props.navigation.navigate("ViewCaregiverSch", {
                  user: this.state.user,
                })
              }
            >
              <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 15 }}>View Schedule</Text>
              </View>
            </TouchableOpacity>
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
  searchInput: {
    marginLeft: 5,
  },
});
