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
import IconAnt2 from "react-native-vector-icons/Entypo";
import IconAnt from "react-native-vector-icons/AntDesign";
import IconAnt3 from "react-native-vector-icons/Feather";
import { Input, Item, Card } from "native-base";
import { Button } from "react-native-paper";
import * as Font from "expo-font";
YellowBox.ignoreWarnings(["Remote debugger"]);

export default class ScheduleDet3Care extends React.Component {
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    headerShown: false,
  };
  state = {
    assetsLoaded: false,
  };

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
              style={{ marginTop: 13, marginLeft: 20, flexDirection: "row" }}
            >
              <IconAnt
                name="left"
                size={20}
                color="#A4A4A4"
                style={{ marginRight: 5 }}
              />
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("EditSchedule")}
              ></TouchableOpacity>
            </View>

            <View
              style={{
                width: 334,
                height: 300,
                backgroundColor: "white",
                borderRadius: 7,
                alignSelf: "center",
                marginTop: 12,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: 20,
                    marginLeft: 17,
                    marginTop: 19,
                    fontWeight: "600",
                    color: "#434343",
                  }}
                >
                  Charles Adkins
                </Text>
                <IconAnt2
                  name="dots-three-vertical"
                  size={20}
                  color="#A4A4A4"
                  style={{ marginTop: 15, marginLeft: 130 }}
                />
              </View>
              <View
                style={{ flexDirection: "row", marginLeft: 17, marginTop: 30 }}
              >
                <IconAnt name="home" size={20} color="#FF4B7D" />
                <Text
                  style={{
                    fontSize: 14,
                    marginLeft: 10,
                    fontWeight: "600",
                    color: "#7D7D7D",
                  }}
                >
                  1536 S, 52nd St Philadelphia, PA 19143
                </Text>
              </View>
              <View
                style={{ flexDirection: "row", marginLeft: 17, marginTop: 10 }}
              >
                <IconAnt name="phone" size={20} color="#FF4B7D" />
                <Text
                  style={{
                    fontSize: 14,
                    marginLeft: 10,
                    fontWeight: "600",
                    color: "#7D7D7D",
                  }}
                >
                  267-7307610
                </Text>
              </View>
              <Button
                style={{
                  marginTop: 23,
                  width: 138,
                  height: 50,
                  marginLeft: 20,
                  backgroundColor: "#B20838",
                  borderRadius: 4,
                  borderWidth: 1,
                  textAlign: "center",
                }}
              >
                {" "}
                <IconAnt3
                  name="map-pin"
                  size={15}
                  color="white"
                  style={{ marginLeft: 5 }}
                />
                <Text> </Text>
                <Text
                  style={{
                    fontSize: 16,
                    marginLeft: 5,
                    marginTop: 5,
                    fontWeight: "600",
                    color: "white",
                  }}
                >
                  MAP
                </Text>
              </Button>
            </View>

            <View
              style={{
                width: 334,
                height: 400,
                backgroundColor: "#FFFFFF",
                borderRadius: 7,
                alignSelf: "center",
                marginTop: -57,
              }}
            >
              <View
                style={{
                  backgroundColor: "#7D7D7D",
                  borderWidth: 0.5,
                  marginTop: 10,
                }}
              ></View>

              <Text
                style={{
                  fontSize: 18,
                  marginLeft: 17,
                  marginTop: 19,
                  fontWeight: "700",
                  color: "#434343",
                }}
              >
                Friday, March 28, 2020
              </Text>
              <View
                style={{ flexDirection: "row", marginLeft: 17, marginTop: 0 }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    marginLeft: 0,
                    fontWeight: "600",
                    color: "#7D7D7D",
                  }}
                >
                  Start time: 9:00 AM - 1:30 PM
                </Text>
              </View>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("WorkHistory2")}
              >
                <Button
                  style={{
                    marginTop: 20,
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
                    Check-in
                  </Text>
                </Button>
              </TouchableOpacity>

              <View style={{ marginLeft: 17, marginTop: 56 }}>
                <Text
                  style={{
                    fontSize: 16,
                    marginLeft: 0,
                    fontWeight: "600",
                    color: "#434343",
                  }}
                >
                  Task List
                </Text>

                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Text
                      style={{
                        fontSize: 14,
                        marginLeft: 0,
                        fontWeight: "600",
                        color: "#7D7D7D",
                        marginTop: 10,
                      }}
                    >
                      Bed Bath/Sponge Bath
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        marginLeft: 0,
                        fontWeight: "600",
                        color: "#7D7D7D",
                        marginTop: 10,
                      }}
                    >
                      Brushing Teeth
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        marginLeft: 0,
                        fontWeight: "600",
                        color: "#7D7D7D",
                        marginTop: 10,
                      }}
                    >
                      Assist to Bathroom
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        marginLeft: 0,
                        fontWeight: "600",
                        color: "#7D7D7D",
                        marginTop: 10,
                      }}
                    >
                      Brushing Teeth
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        marginLeft: 0,
                        fontWeight: "600",
                        color: "#7D7D7D",
                        marginTop: 10,
                      }}
                    >
                      Maintain Bedroom
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        marginLeft: 0,
                        fontWeight: "600",
                        color: "#7D7D7D",
                        marginTop: 10,
                      }}
                    >
                      Take for a Walk
                    </Text>
                  </View>

                  <View style={{ marginLeft: 120 }}>
                    <View style={{ flexDirection: "row" }}>
                      <IconAnt
                        name="checkcircle"
                        size={20}
                        color="#FF4B7D"
                        style={{ marginTop: 5 }}
                      />
                    </View>

                    <View style={{ flexDirection: "row" }}>
                      <IconAnt
                        name="checkcircle"
                        size={20}
                        color="#FF4B7D"
                        style={{ marginTop: 5 }}
                      />
                    </View>

                    <View style={{ flexDirection: "row" }}>
                      <IconAnt
                        name="checkcircle"
                        size={20}
                        color="#EFEEEE"
                        style={{ marginTop: 5 }}
                      />
                    </View>

                    <View style={{ flexDirection: "row" }}>
                      <IconAnt
                        name="checkcircle"
                        size={20}
                        color="#EFEEEE"
                        style={{ marginTop: 5 }}
                      />
                    </View>

                    <View style={{ flexDirection: "row" }}>
                      <IconAnt
                        name="checkcircle"
                        size={20}
                        color="#FF4B7D"
                        style={{ marginTop: 5 }}
                      />
                    </View>

                    <View style={{ flexDirection: "row" }}>
                      <IconAnt
                        name="checkcircle"
                        size={20}
                        color="#EFEEEE"
                        style={{ marginTop: 8 }}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>

            <View
              style={{
                width: 334,
                height: 253,
                backgroundColor: "#FFFFFF",
                borderRadius: 7,
                alignSelf: "center",
                marginTop: -7,
              }}
            >
              <View
                style={{
                  backgroundColor: "#7D7D7D",
                  borderWidth: 0.5,
                  marginTop: 30,
                }}
              ></View>

              <Text
                style={{
                  fontSize: 18,
                  marginLeft: 17,
                  marginTop: 19,
                  fontWeight: "600",
                  color: "#434343",
                }}
              >
                Notes
              </Text>
            </View>

            <View
              style={{
                width: 334,
                height: 253,
                backgroundColor: "#FFFFFF",
                borderRadius: 7,
                alignSelf: "center",
                marginTop: -7,
              }}
            >
              <View
                style={{
                  backgroundColor: "#7D7D7D",
                  borderWidth: 0.5,
                  marginTop: 0,
                }}
              ></View>

              <Text
                style={{
                  fontSize: 18,
                  marginLeft: 17,
                  marginTop: 19,
                  fontWeight: "600",
                  color: "#434343",
                }}
              >
                TimeSheet
              </Text>
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
    backgroundColor: "#F3F3F3",
  },
});
