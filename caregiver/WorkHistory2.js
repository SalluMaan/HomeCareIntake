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
  Alert,
  AsyncStorage,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Platform,
} from "react-native";
import IconAnt2 from "react-native-vector-icons/Fontisto";
import IconAnt from "react-native-vector-icons/AntDesign";
import IconAnt3 from "react-native-vector-icons/Feather";
import { Button } from "react-native-paper";
import { fetchUpdateAsync } from "expo/build/Updates/Updates";
import DateTimePicker from "react-native-modal-datetime-picker";
import DateSelect from "react-native-datepicker";
import { TextInput } from "react-native-gesture-handler";
import moment from "moment";
import * as Font from "expo-font";
import {
  Container,
  Header,
  Label,
  Content,
  Item,
  Input,
  Textarea,
  DatePicker,
  Body,
  Title,
  Icon,
  Picker,
  Form,
} from "native-base";

YellowBox.ignoreWarnings(["Remote debugger"]);
var datepicker = "";
var leavetype = "";
var reason = "";
var access_token_receieved = "";
var chosenDate = "";
var newDate = "";
export default class WorkHistory2Care extends React.Component {
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    headerShown: false,
  };
  state = {
    assetsLoaded: false,
    choosenLabel: "",
    choosenindex: "",
  };
  constructor(props) {
    super(props);
    this.state = {
      chosenDate: "",
      date: "",
      selected: undefined,
      datepicker: "",
      reason: "",
      leavetype: "",
    };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    (this.chosenDate = new Date()), this.setState({ chosenDate: newDate });
  }
  onIconclick() {
    //this.setDate();
    chosenDate = new Date();
    this.setState({ chosenDate: newDate });
  }
  onValueChange(value) {
    this.setState({ choosenLabel: itemValue, choosenIndex: itemIndex });
  }
  async componentDidMount() {
    await Font.loadAsync({
      proximanova: require("../assets/fonts/proximanova.otf"),
    });

    this.setState({ assetsLoaded: true });
  }

  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : "";
    const { navigation } = this.props.navigation;

    const { assetsLoaded } = this.state;
    if (assetsLoaded) {
      return (
        <View style={styles.container}>
          <ScrollView>
            <View
              style={{ marginTop: 13, marginLeft: 20, flexDirection: "row" }}
            >
              <View>
                <IconAnt
                  name="left"
                  size={20}
                  color="#A4A4A4"
                  style={{ marginRight: 5 }}
                />
              </View>
              <View></View>
            </View>

            <View style={styles.container1}>
              <View style={styles.buttonContainerRight}>
                <View style={styles.middlecontainer}>
                  <View style={styles.calenderContainerLeft}>
                    <DatePicker
                      style={styles.datepickerstyle}
                      date={this.state.date}
                      showIcon={false}
                      format="DD-MM-YYYY"
                      showIcon={true}
                      modalTransparent={false}
                      animationType={"fade"}
                      placeHolderText={
                        <Text style={{ color: "#A4A4A4", marginLeft: 10 }}>
                          <Icon
                            type="FontAwesome"
                            name="calendar"
                            style={styles.iconstyle}
                            onPress={() => this.setDate}
                          />{" "}
                          This week
                        </Text>
                      }
                      onDateChange={this.setDate}
                      disabled={false}
                    />
                  </View>
                  <View style={styles.calenderContainerRight}>
                    <Text onPress={this.setDate}>
                      <Text
                        note
                        numberOfLines={1}
                        style={styles.dateItemContent}
                        disabled
                      >
                        {this.state.chosenDate.toString().substr(4, 11)}
                      </Text>
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.view2}>
              <View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.txt1}>2</Text>
                  <Text style={styles.txt2}>Clients worked with</Text>
                </View>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderColor: "#7D7D7D",
                    marginTop: 0,
                    marginLeft: 20,
                  }}
                ></View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.txt11}>20.5h</Text>
                  <Text style={styles.txt22}>Total Amount of Work</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("TestCert1")}
            >
              <Text
                style={{
                  fontSize: 16,
                  marginLeft: 21,
                  marginTop: 46,
                  fontWeight: "400",
                  color: "#434343",
                }}
              >
                All Schedule
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 16,
                marginLeft: 21,
                marginTop: 5,
                fontWeight: "400",
                color: "#A4A4A4",
              }}
            >
              23/04/2020 - 30/04/2020
            </Text>

            <View>
              <View
                style={{
                  width: 334,
                  height: 60,
                  backgroundColor: "#FCEEF2",
                  borderRadius: 10,
                  alignSelf: "center",
                  flexDirection: "row",
                  marginTop: 17,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    marginLeft: 17,
                    marginTop: 18,
                    fontWeight: "600",
                    color: "#7D7D7D",
                  }}
                >
                  Friday, March 28
                </Text>
                <View
                  style={{
                    height: 40,
                    alignSelf: "center",
                    marginLeft: 30,
                    borderLeftWidth: 2,
                    borderLeftColor: "#A4A4A4",
                  }}
                />
                <Text
                  style={{
                    fontSize: 16,
                    marginLeft: 19,
                    marginTop: 18,
                    fontWeight: "600",
                    color: "#A4A4A4",
                  }}
                >
                  9:00 AM - 1:30 PM
                </Text>
              </View>
              <View
                style={{
                  width: 334,
                  height: 253,
                  backgroundColor: "#FFFFFF",
                  borderBottomRightRadius: 10,
                  borderBottomLeftRadius: 10,
                  alignSelf: "center",
                  marginTop: -10,
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    marginLeft: 17,
                    marginTop: 25,
                    fontWeight: "600",
                    color: "#7D7D7D",
                  }}
                >
                  Caregiver Information
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    marginLeft: 17,
                    marginTop: 19,
                    fontWeight: "600",
                    color: "#434343",
                  }}
                >
                  Charles Adkins
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: 17,
                    marginTop: 30,
                  }}
                >
                  <IconAnt name="home" size={15} color="#FF4B7D" />
                  <Text
                    style={{
                      fontSize: 12,
                      marginLeft: 10,
                      fontWeight: "600",
                      color: "#7D7D7D",
                    }}
                  >
                    1536 S, 52nd St Philadelphia, PA 19143
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: 17,
                    marginTop: 10,
                  }}
                >
                  <IconAnt name="phone" size={15} color="#FF4B7D" />
                  <Text
                    style={{
                      fontSize: 12,
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
                    height: 40,
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
                      fontWeight: "600",
                      color: "white",
                    }}
                  >
                    MAP
                  </Text>
                </Button>
              </View>
            </View>

            <View>
              <View
                style={{
                  width: 334,
                  height: 60,
                  backgroundColor: "#FCDEE6",
                  borderRadius: 10,
                  alignSelf: "center",
                  flexDirection: "row",
                  marginTop: 17,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    marginLeft: 17,
                    marginTop: 18,
                    fontWeight: "600",
                    color: "#7D7D7D",
                  }}
                >
                  Friday, March 28
                </Text>
                <View
                  style={{
                    height: 40,
                    alignSelf: "center",
                    marginLeft: 30,
                    borderLeftWidth: 2,
                    borderLeftColor: "#A4A4A4",
                  }}
                />
                <Text
                  style={{
                    fontSize: 16,
                    marginLeft: 19,
                    marginTop: 18,
                    fontWeight: "600",
                    color: "#A4A4A4",
                  }}
                >
                  9:00 AM - 1:30 PM
                </Text>
              </View>
              <View
                style={{
                  width: 334,
                  height: 253,
                  marginBottom: 40,
                  backgroundColor: "white",
                  borderBottomRightRadius: 10,
                  borderBottomLeftRadius: 10,
                  alignSelf: "center",
                  marginTop: -10,
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    marginLeft: 17,
                    marginTop: 25,
                    fontWeight: "600",
                    color: "#7D7D7D",
                  }}
                >
                  Caregiver Information
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    marginLeft: 17,
                    marginTop: 19,
                    fontWeight: "600",
                    color: "#434343",
                  }}
                >
                  Charles Adkins
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: 17,
                    marginTop: 30,
                  }}
                >
                  <IconAnt name="home" size={15} color="#FF4B7D" />
                  <Text
                    style={{
                      fontSize: 12,
                      marginLeft: 10,
                      fontWeight: "600",
                      color: "#7D7D7D",
                    }}
                  >
                    1536 S, 52nd St Philadelphia, PA 19143
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: 17,
                    marginTop: 10,
                  }}
                >
                  <IconAnt name="phone" size={15} color="#FF4B7D" />
                  <Text
                    style={{
                      fontSize: 12,
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
                    height: 40,
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
                      fontWeight: "600",
                      color: "white",
                    }}
                  >
                    MAP
                  </Text>
                </Button>
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
    backgroundColor: "#F3F3F3",
  },
  container1: {
    flex: 1,
    flexDirection: "row",
    paddingBottom: 15,
    marginTop: 15,
  },
  titletxt: {
    fontSize: 18,
    marginLeft: 21,
    marginTop: 10,
    fontWeight: "600",
    color: "#141414",
    textTransform: "uppercase",
  },
  view2: {
    width: 334,
    height: 116,
    backgroundColor: "#FBEBEF",
    borderRadius: 7,
    alignSelf: "center",
    marginTop: 22,
    flexDirection: "row",
  },
  txt1: {
    fontSize: 30,
    marginLeft: 13,
    marginTop: 15,
    fontWeight: "700",
    color: "#FF4B7D",
  },
  txt2: {
    fontSize: 14,
    marginLeft: 20,
    marginTop: 25,
    fontWeight: "600",
    color: "#A4A4A4",
  },
  txt11: {
    fontSize: 30,
    marginLeft: 13,
    marginTop: 15,
    fontWeight: "700",
    color: "#FF4B7D",
  },
  txt22: {
    fontSize: 14,
    marginLeft: 20,
    marginTop: 25,
    fontWeight: "600",
    color: "#A4A4A4",
  },
  txt3: {
    fontSize: 16,
    marginLeft: 18,
    fontWeight: "400",
    color: "#7D7D7D",
  },
  middlecontainer: {
    flex: 1,
    flexDirection: "row",
    paddingBottom: 15,
  },
  btncontainer: {
    flex: 1,
    flexDirection: "row",
    paddingBottom: 15,
  },

  containerLast: {
    flex: 1,
    flexDirection: "row",
    paddingBottom: 25,
  },
  iconstyle: {
    fontSize: 25,
    color: "#A4A4A4",
    marginLeft: 20,
  },
  taskItemContent: {
    color: "black",
    fontSize: 15,
    marginLeft: 20,
  },
  dateItemContent: {
    color: "black",
    fontSize: 15,
    marginLeft: 10,
  },

  datepickerstyle: { color: "white" },

  buttontemContent: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },

  bodyStyle: {
    borderWidth: 0,
  },

  textbodyStyle: {
    borderWidth: 0,
    alignContent: "flex-start",
  },

  taskItemHeader: {
    color: "black",
    fontSize: 25,
    alignContent: "flex-start",
    paddingBottom: 15,
    paddingLeft: 15,
  },

  buttonContainerRight: {
    flex: 1,
    marginLeft: 15,
    marginTop: 0,
    marginRight: 15,
    marginBottom: 0,
    backgroundColor: "#ffffff",
    height: 60,
    borderRadius: 5,
    borderColor: "#E2E2E2",
    borderWidth: 2,
  },

  textinputContainerRight: {
    flex: 1,
    alignContent: "flex-start",
    marginLeft: 15,
    marginTop: 0,
    marginRight: 15,
    marginBottom: 0,
    backgroundColor: "#ffffff",
    height: 160,
    borderRadius: 8,
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 10,
  },

  viewstyle1: {
    alignItems: "flex-start",
  },
  viewstyle2: {
    alignItems: "flex-end",
  },

  calenderContainerRight: {
    flex: 1,
    marginLeft: 15,
    marginTop: 0,
    marginRight: 5,
    marginBottom: 0,
    height: 60,
    borderRadius: 5,
  },

  calenderContainerLeft: {
    flex: 1,

    marginLeft: 5,
    marginTop: 0,
    marginBottom: 0,
    height: 60,
    borderRadius: 8,
  },

  calenderContainerRight1: {
    flex: 1,
    height: 60,
    borderRadius: 8,
  },

  textContainerRight: {
    flex: 1,
    marginLeft: 15,
    marginTop: 0,
    marginRight: 15,
    marginBottom: 0,
    backgroundColor: "#ffffff",
    height: 120,
    borderRadius: 8,
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 10,
  },

  btn: {
    borderRadius: 0,
  },
  body: {
    paddingTop: 15,
    paddingBottom: 30,
    backgroundColor: "#efefef",
  },
});
