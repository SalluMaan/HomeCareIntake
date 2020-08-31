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
import Moment from "moment";
import axios from "axios";
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
export default class ViewClientSch extends React.Component {
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
      user: this.props.navigation.state.params.user,
      schedule: undefined,
    };
    this.setDate = this.setDate.bind(this);
  }

  getData = () => {
    const formData = new FormData();
    formData.append("client_id", this.state.user.id);
    formData.append("intakeco_id", this.state.user.intake_Co);
    console.log("Data", formData);
    axios
      .post(
        `https://aplushome.facebhoook.com/api/getclientintakeschedule`,
        formData
      )
      .then((res) => {
        console.log("NameCLIENT", res.data["schedule"]);
        const data = res.data["schedule"];
        this.setState({
          schedule: data,
        });
      })
      .catch((err) => {
        console.log(err.data);
      });
  };
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
    this.getData();

    this.setState({ assetsLoaded: true });
  }

  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : "";
    const { navigation } = this.props.navigation;
    console.log("UserDataClient:", this.state.user);
    const { user, schedule } = this.state;

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
              <View></View>
            </View>

            <View style={styles.container1}>
              <View style={styles.buttonContainerRight}>
                {/* <View style={styles.middlecontainer}> */}
                <Text
                  style={{
                    color: "#a4a4a4",
                    fontSize: 15,
                    alignSelf: "center",
                    textAlign: "center",
                    marginTop: 18,
                    textTransform: "uppercase",
                  }}
                >
                  Client Schedule
                </Text>
                {/* <View style={styles.calenderContainerLeft}>
                <DatePicker
                style={styles.datepickerstyle}
                date={this.state.date}
                showIcon={false}
              
                format="DD-MM-YYYY"
                showIcon = {true}
                modalTransparent={false}
                animationType={"fade"}
                placeHolderText={<Text style={{color:'#A4A4A4',marginLeft:10}}><Icon type="FontAwesome" name='calendar' style={styles.iconstyle} onPress={() => this.setDate}/>     This week</Text>}
                onDateChange={this.setDate}
                disabled={false}
              />
            </View> */}
                {/* <View style={styles.calenderContainerRight}>
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
                  </View> */}
                {/* </View> */}
              </View>
            </View>

            <TouchableOpacity
            // onPress={() => this.props.navigation.navigate("SchDetComp")}
            >
              <Text
                style={{
                  fontSize: 12,
                  marginLeft: 260,
                  marginTop: 10,
                  fontWeight: "600",
                  color: "#141414",
                  textTransform: "uppercase",
                }}
              >
                Edit schedule
              </Text>
            </TouchableOpacity>

            {schedule ? (
              schedule.map((sch, id) => {
                return (
                  <View key={id}>
                    <View
                      style={{
                        width: 334,
                        height: 60,
                        backgroundColor: "#FF4B7D",
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
                          color: "white",
                        }}
                      >
                        {Moment(sch.date).format("D MMM YYYY")}
                        {/* {Moment(sch.date).format("D MMM YYYY")} */}
                      </Text>
                      <View
                        style={{
                          height: 40,
                          alignSelf: "center",
                          marginLeft: 30,
                          borderLeftWidth: 2,
                          borderLeftColor: "white",
                        }}
                      />
                      <Text
                        style={{
                          fontSize: 16,
                          marginLeft: 19,
                          marginTop: 18,
                          fontWeight: "600",
                          color: "white",
                        }}
                      >
                        {sch.timeStart.substring(0, 5)}
                        {sch.timeStart.substring(0, 2) >= 12 ? " PM" : " AM"}
                        {"-"}
                        {sch.timeEnd.substring(0, 5)}
                        {sch.timeEnd.substring(0, 2) >= 12 ? " PM" : " AM"}
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
                        Client Information
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
                        {user.client_name ? user.client_name : "Name not taken"}{" "}
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
                          {user.address ? user.address : "Address Not Found"}{" "}
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
                          {user.phone ? user.phone : "Phone Numer is not Found"}{" "}
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
                            fontWeight: "600",
                            color: "white",
                          }}
                        >
                          MAP
                        </Text>
                      </Button>
                    </View>
                  </View>
                );
              })
            ) : (
              <Text style={{ marginHorizontal: "5%" }}>No Schedule Found</Text>
            )}
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
