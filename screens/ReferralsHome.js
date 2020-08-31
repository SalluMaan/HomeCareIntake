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
import axios from "axios";

import IconAnt from "react-native-vector-icons/AntDesign";
import IconAnt2 from "react-native-vector-icons/Fontisto";
import { Input, Item, Card } from "native-base";
import { Button, RadioButton } from "react-native-paper";
import SearchInput, { createFilter } from "react-native-search-filter";

import * as Font from "expo-font";
YellowBox.ignoreWarnings(["Remote debugger"]);

//     sch: this.props.navigation.state.params.schedule,

export default class ReferralsHome extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    headerShown: false,
  };
  state = {
    assetsLoaded: false,
    clients: this.props.navigation.state.params.Clients[0],
  };

  searchUpdated(term) {
    this.setState({ searchTerm: term });
  }

  async componentDidMount() {
    await Font.loadAsync({
      proximanova: require("../assets/fonts/proximanova.otf"),
    });

    this.setState({ assetsLoaded: true });
  }

  render() {
    // const filteredClients = this.state.client
    //   ? this.state.client.filter(
    //       createFilter(this.state.searchTerm, "client_name")
    //     )
    //   : null;

    // console.log("Filtered", filteredClients);
    console.log("PROPS CL:", this.state.clients);
    const { assetsLoaded } = this.state;
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
            </View>
            <TouchableOpacity
              style={{
                borderBottomWidth: 0.3,
                borderColor: "#a4a4a4",
                marginHorizontal: "5%",
                paddingBottom: 25,
              }}
              // onPress={() => this.props.navigation.navigate("TotalClients2")}
            >
              <Text
                style={{
                  fontSize: 20,
                  marginLeft: 20,
                  marginTop: 23,
                  color: "#141414",
                  textAlign: "center",
                }}
              >
                {"Clients Scheduled Today"} {"( "}
                {this.state.clients ? this.state.clients.length : "11"} {")"}
              </Text>
            </TouchableOpacity>
            {/* {filteredClients
              ? filteredClients.map((element) => {
                  return <Text key={id}>{element.client_name}</Text>;
                })
              : null} */}
            {/* {filteredClients ? (
              filteredClients.map((client_, id) => {
                return ( */}
            {this.state.clients ? (
              this.state.clients.map((client_, id) => {
                return (
                  <View
                    key={id}
                    style={{
                      backgroundColor: "#F3F3F3",
                      width: 334,
                      height: 73,
                      flexDirection: "row",
                      marginTop: 18,
                      alignSelf: "center",
                    }}
                  >
                    <View>
                      {/* {console.log("Image = ", "./" + client_.image)} */}
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
                        }}
                      ></Image>
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: 14,
                          marginLeft: 26,
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
                          marginLeft: 26,
                          marginTop: 10,
                          fontWeight: "600",
                          color: "#A4A4A4",
                        }}
                      >
                        {client_.address}
                      </Text>
                    </View>
                  </View>
                );
              })
            ) : (
              <Text style={{ color: "gray", marginHorizontal: "7%" }}>
                No Clients Scheduled Today
              </Text>
            )}

            {/* );
              })
            ) : ( */}
            {/* <View style={{ marginTop: "5%" }}>
              <ActivityIndicator />
            </View> */}
            {/* )} */}
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
  searchInput: {
    marginLeft: 5,
  },
});
