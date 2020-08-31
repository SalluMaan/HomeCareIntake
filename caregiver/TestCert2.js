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
import IconAnt1 from "react-native-vector-icons/AntDesign";
import * as Font from "expo-font";
import {
  Container,
  Header,
  Content,
  Icon,
  Picker,
  Form,
  DatePicker,
} from "native-base";

YellowBox.ignoreWarnings(["Remote debugger"]);

export default class TestCert2Care extends React.Component {
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    headerShown: false,
  };
  state = {
    assetsLoaded: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined,
    };
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
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

  render() {
    const { assetsLoaded } = this.state;
    if (assetsLoaded) {
      return (
        <View style={styles.container}>
          <ScrollView>
            <View
              style={{ marginTop: 13, marginLeft: 20, flexDirection: "row" }}
            >
              <View>
                <IconAnt1
                  name="left"
                  size={20}
                  color="#A4A4A4"
                  style={{ marginRight: 5 }}
                />
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                width: 330,
                marginLeft: 10,
                height: 50,
                borderWidth: 1,
                borderColor: "#E5E5E5",
                backgroundColor: "white",
                borderRadius: 4,
                alignSelf: "center",
                marginTop: 30,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  marginLeft: 25,
                  alignSelf: "center",
                  fontWeight: "600",
                  color: "#A4A4A4",
                }}
              >
                Resources
              </Text>
              <Button
                style={{
                  alignSelf: "center",
                  width: 140,
                  height: 38,
                  marginLeft: 50,
                  backgroundColor: "#FEF2F5",
                  borderRadius: 4,
                  borderWidth: 1,
                  textAlign: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 10,
                    marginLeft: 5,
                    fontWeight: "600",
                    color: "#FF4B7D",
                  }}
                >
                  Certifications
                </Text>
              </Button>
            </View>

            <View style={{ flexDirection: "row", marginTop: 50 }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("TestCert3")}
              >
                <Text
                  style={{
                    fontSize: 16,
                    marginTop: 0,
                    marginLeft: 16,
                    fontWeight: "600",
                    color: "#141414",
                  }}
                >
                  Certifications
                </Text>
              </TouchableOpacity>

              <IconAnt1
                name="addfile"
                size={30}
                color="#FF4B7D"
                style={{ marginTop: 0, marginLeft: 180 }}
              />
            </View>

            <View
              style={{
                backgroundColor: "#7D7D7D",
                borderWidth: 0.5,
                marginTop: 150,
              }}
            ></View>

            <View style={{ flexDirection: "row", marginTop: 30 }}>
              <Text
                style={{
                  fontSize: 16,
                  marginTop: 0,
                  marginLeft: 16,
                  fontWeight: "600",
                  color: "#141414",
                }}
              >
                Medical Test Report
              </Text>
              <IconAnt1
                name="addfile"
                size={30}
                color="#FF4B7D"
                style={{ marginTop: 0, marginLeft: 150 }}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                width: 334,
                height: 126,
                backgroundColor: "#00000029",
                borderRadius: 7,
                alignSelf: "center",
                marginTop: 20,
              }}
            >
              <View>
                <IconAnt1
                  name="addfile"
                  size={60}
                  color="#FF4B7D"
                  style={{ marginTop: 20, marginLeft: 20 }}
                />
                <Text
                  style={{
                    fontSize: 14,
                    marginLeft: 10,
                    alignSelf: "center",
                    marginTop: 0,
                    fontWeight: "600",
                    color: "#434343",
                  }}
                >
                  Docs
                </Text>
              </View>
              <View style={{ width: 160 }}>
                <Text
                  style={{
                    fontSize: 13,
                    marginLeft: 14,
                    marginTop: 20,
                    fontWeight: "600",
                    color: "#434343",
                  }}
                >
                  HIV Test
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    marginLeft: 10,
                    alignSelf: "center",
                    fontWeight: "600",
                    color: "#A4A4A4",
                  }}
                >
                  Tested Date: July 29, 2020
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    marginLeft: 10,
                    alignSelf: "center",
                    fontWeight: "600",
                    color: "#A4A4A4",
                  }}
                >
                  Tested Date: July 29, 2020
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                width: 334,
                height: 126,
                backgroundColor: "#00000029",
                borderRadius: 7,
                alignSelf: "center",
                marginTop: 20,
              }}
            >
              <View>
                <IconAnt1
                  name="addfile"
                  size={60}
                  color="#FF4B7D"
                  style={{ marginTop: 20, marginLeft: 20 }}
                />
                <Text
                  style={{
                    fontSize: 14,
                    marginLeft: 10,
                    alignSelf: "center",
                    marginTop: 0,
                    fontWeight: "600",
                    color: "#434343",
                  }}
                >
                  Docs
                </Text>
              </View>
              <View style={{ width: 160 }}>
                <Text
                  style={{
                    fontSize: 13,
                    marginLeft: 14,
                    marginTop: 20,
                    fontWeight: "600",
                    color: "#434343",
                  }}
                >
                  HIV Test
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    marginLeft: 10,
                    alignSelf: "center",
                    fontWeight: "600",
                    color: "#A4A4A4",
                  }}
                >
                  Tested Date: July 29, 2020
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    marginLeft: 10,
                    alignSelf: "center",
                    fontWeight: "600",
                    color: "#A4A4A4",
                  }}
                >
                  Tested Date: July 29, 2020
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                width: 334,
                height: 126,
                backgroundColor: "#00000029",
                borderRadius: 7,
                alignSelf: "center",
                marginTop: 20,
              }}
            >
              <View>
                <IconAnt1
                  name="addfile"
                  size={60}
                  color="#FF4B7D"
                  style={{ marginTop: 20, marginLeft: 20 }}
                />
                <Text
                  style={{
                    fontSize: 14,
                    marginLeft: 10,
                    alignSelf: "center",
                    marginTop: 0,
                    fontWeight: "600",
                    color: "#434343",
                  }}
                >
                  Docs
                </Text>
              </View>
              <View style={{ width: 160 }}>
                <Text
                  style={{
                    fontSize: 13,
                    marginLeft: 14,
                    marginTop: 20,
                    fontWeight: "600",
                    color: "#434343",
                  }}
                >
                  HIV Test
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    marginLeft: 10,
                    alignSelf: "center",
                    fontWeight: "600",
                    color: "#A4A4A4",
                  }}
                >
                  Tested Date: July 29, 2020
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    marginLeft: 10,
                    alignSelf: "center",
                    fontWeight: "600",
                    color: "#A4A4A4",
                  }}
                >
                  Tested Date: July 29, 2020
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                width: 334,
                height: 126,
                backgroundColor: "#00000029",
                borderRadius: 7,
                alignSelf: "center",
                marginTop: 20,
              }}
            >
              <View>
                <IconAnt1
                  name="addfile"
                  size={60}
                  color="#FF4B7D"
                  style={{ marginTop: 20, marginLeft: 20 }}
                />
                <Text
                  style={{
                    fontSize: 14,
                    marginLeft: 10,
                    alignSelf: "center",
                    marginTop: 0,
                    fontWeight: "600",
                    color: "#434343",
                  }}
                >
                  Docs
                </Text>
              </View>
              <View style={{ width: 160 }}>
                <Text
                  style={{
                    fontSize: 13,
                    marginLeft: 14,
                    marginTop: 20,
                    fontWeight: "600",
                    color: "#434343",
                  }}
                >
                  HIV Test
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    marginLeft: 10,
                    alignSelf: "center",
                    fontWeight: "600",
                    color: "#A4A4A4",
                  }}
                >
                  Tested Date: July 29, 2020
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    marginLeft: 10,
                    alignSelf: "center",
                    fontWeight: "600",
                    color: "#A4A4A4",
                  }}
                >
                  Tested Date: July 29, 2020
                </Text>
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
