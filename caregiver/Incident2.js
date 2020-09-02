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
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import IconAnt from "react-native-vector-icons/Feather";
import { Input, Item, Card } from "native-base";
import { Button } from "react-native-paper";
import IconAnt1 from "react-native-vector-icons/AntDesign";
import * as Font from "expo-font";
import Moment from "moment";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

import {
  Container,
  Header,
  Content,
  Icon,
  Picker,
  Form,
  DatePicker,
} from "native-base";
import { GetAllReportsPath, AddNewReportPath } from "./constantCaregiver";
import * as DocumentPicker from "expo-document-picker";

YellowBox.ignoreWarnings(["Remote debugger"]);

export default class Incident2 extends React.Component {
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
      bgMeeting: "#fff",
      bgSchedule: "#FEF2F5",
      clrMeeting: "#a4a4a4",
      clrSchedule: "#FF4B7D",
      clicked: false,
      refreshing: false,
      reports: "",
      careID: 0,
      file: null,
      title: "",
      message: "",
      typeFile: "",
      fileName: "",
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
  pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    console.log(result);
    let name = result.name;
    name = name.split(".");
    let type = name[name.length - 1];
    console.log("type:", type);
    this.setState({
      file: result.uri,
      typeFile: type,
      fileName: name,
    });
  };
  onRefresh = () => {
    //Clear old data of the list
    this.setState({ reports: "", refreshing: true });
    //Call the Service to get the latest data and in this function set refreshing to false
    this.getReports();
  };

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        // value previously stored
        console.log("token", value);
        this.setState({
          careID: value,
        });
        this.getReports();
      }
    } catch (e) {
      // error reading value
      console.log("Reading Value Error", e);
    }
  };

  async componentDidMount() {
    await Font.loadAsync({
      proximanova: require("../assets/fonts/proximanova.otf"),
    });
    this.getData();
    this.setState({ assetsLoaded: true });
  }

  getReports = () => {
    console.log("ID", this.state.careID);
    axios
      .get(GetAllReportsPath + this.state.careID)
      .then((res) => {
        console.log("RSp:", res.data);
        const data = res.data["notes"];
        console.log("Response", data);

        this.setState({ reports: data, refreshing: false });
      })
      .catch((error) => {
        console.log("Error", error);
      });

    this.setState({
      clicked: true,
      bgSchedule: "#fff",
      bgMeeting: "#FEF2F5",
      clrMeeting: "#FF4B7D",
      clrSchedule: "#a4a4a4",
      refreshing: false,
    });
  };
  checkEmptyInput() {
    if (
      this.state.title === "" ||
      this.state.message === "" ||
      this.state.file === "" ||
      this.state.file === null
    ) {
      alert("Error!Dont Leave Blank Fields!");
      return false;
    }
    return true;
  }

  onClickListener = () => {
    const Title = this.state.title;
    const Message = this.state.message;
    const ID = this.state.careID;
    const obj = {
      uri: this.state.file,
      type: "file/" + this.state.typeFile,
      name: "FileName-" + ID,
    };

    if (Title === "") {
      console.log("Title Empty");
    }

    console.log("File", obj);

    if (
      Title !== "" &&
      Message !== "" &&
      obj.uri !== "" &&
      Title !== undefined &&
      Message !== undefined &&
      obj.uri !== undefined
    ) {
      const formData = new FormData();
      formData.append("caregiver_id", ID);
      formData.append("title", Title);
      formData.append("message", Message);
      formData.append("notes", obj);
      console.log("Fomr Data", formData);

      axios
        .post(AddNewReportPath, formData)
        .then((res) => {
          console.log("Response REport ADD", res.data);
          Alert.alert("Response", res.data.message);
          this.setState({
            title: "",
            message: "",
            file: "",
            typeFile: "",
            fileName: "",
          });
        })
        .catch((err) => {
          console.log(err);
          Alert.alert("Response", "Error while Adding Reports");
        });
    } else {
      Alert.alert("Response", "Error!Dont Leave Blank Fields!");
    }
  };

  render() {
    const { assetsLoaded } = this.state;
    if (assetsLoaded) {
      return (
        <View style={styles.container}>
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={() => this.onRefresh()}
              />
            }
          >
            <View
              style={{ marginTop: 13, marginLeft: 20, flexDirection: "row" }}
            >
              <View>
                <TouchableOpacity
                  onPress={() => this.props.navigation.goBack()}
                >
                  <IconAnt1
                    name="left"
                    size={20}
                    color="#A4A4A4"
                    style={{ marginRight: 5 }}
                  />
                </TouchableOpacity>
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
              <Button
                onPress={() =>
                  this.setState({
                    clicked: false,
                    bgMeeting: "#fff",
                    bgSchedule: "#FEF2F5",
                    clrMeeting: "#a4a4a4",
                    clrSchedule: "#FF4B7D",
                  })
                }
                style={{
                  alignSelf: "center",
                  width: 150,
                  height: 38,
                  marginLeft: 10,
                  backgroundColor: this.state.bgSchedule,
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
                    color: this.state.clrSchedule,
                  }}
                >
                  New Report
                </Text>
              </Button>
              <Button
                onPress={() => this.getReports()}
                style={{
                  alignSelf: "center",
                  width: 150,
                  height: 38,
                  marginLeft: 10,
                  backgroundColor: this.state.bgMeeting,
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
                    color: this.state.clrMeeting,
                  }}
                >
                  Existing Reports
                </Text>
              </Button>
            </View>
            {this.state.clicked ? (
              this.state.reports ? (
                this.state.reports.map((report, id) => {
                  return (
                    <View
                      key={id}
                      style={{
                        width: 334,
                        height: 339,
                        backgroundColor: "#E1F4FE",
                        borderRadius: 7,
                        alignSelf: "center",
                        marginTop: 25,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          marginLeft: 17,
                          marginTop: 25,
                          fontWeight: "600",
                          color: "#A4A4A4",
                        }}
                      >
                        {Moment(report.created_at).format("DD MMM YYYY")}
                      </Text>

                      <TouchableOpacity
                        onPress={() =>
                          this.props.navigation.navigate("IntakeCoList2")
                        }
                      >
                        <Text
                          style={{
                            fontSize: 20,
                            marginLeft: 17,
                            marginTop: 25,
                            fontWeight: "600",
                            color: "#434343",
                          }}
                        >
                          {report.title}
                        </Text>
                      </TouchableOpacity>

                      <Text
                        style={{
                          fontSize: 12,
                          marginLeft: 17,
                          marginTop: 10,
                          fontWeight: "600",
                          color: "#7D7D7D",
                        }}
                      >
                        {report.message}
                      </Text>

                      <View
                        style={{
                          flexDirection: "row",
                          width: 297,
                          height: 120,
                          backgroundColor: "white",
                          borderRadius: 7,
                          alignSelf: "center",
                          marginTop: 25,
                        }}
                      >
                        <IconAnt1
                          name="right"
                          size={20}
                          color="#A4A4A4"
                          style={{ alignSelf: "center", marginLeft: 270 }}
                        />
                      </View>
                    </View>
                  );
                })
              ) : (
                <Text style={{ margin: "10%", color: "#a4a4a4" }}>
                  No Reports Found ......
                </Text>
              )
            ) : (
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    marginTop: 200,
                    marginTop: 19,
                    marginLeft: 20,
                    fontWeight: "400",
                    color: "#7D7D7D",
                  }}
                >
                  Report Title
                </Text>

                <Item
                  style={{
                    marginLeft: 15,
                    marginRight: 15,
                    marginTop: 0,
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
                    value={this.state.title}
                    onChangeText={(title) => this.setState({ title })}
                    placeholderTextColor={"#A4A4A4"}
                  />
                </Item>

                <Item
                  style={{
                    marginLeft: 15,
                    marginRight: 15,
                    marginTop: 20,
                    width: 334,
                    height: 120,
                    alignSelf: "center",
                    borderColor: "#E2E2E2",
                    borderRadius: 4,
                    borderWidth: 1,
                    textAlign: "left",
                  }}
                  regular
                >
                  <Input
                    value={this.state.message}
                    onChangeText={(message) =>
                      this.setState({
                        message,
                      })
                    }
                    placeholder={"Your Message Here....."}
                    placeholderTextColor={"#A4A4A4"}
                  />
                </Item>

                <Button
                  onPress={() => this.pickDocument()}
                  style={{
                    marginTop: 53,
                    width: 334,
                    height: 50,
                    alignSelf: "center",
                    backgroundColor: "#E3E3E3",
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
                      color: "#434343",
                    }}
                  >
                    Upload file
                  </Text>
                </Button>

                <TouchableOpacity onPress={() => this.onClickListener()}>
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
                      Add Report
                    </Text>
                  </Button>
                </TouchableOpacity>
              </View>
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
    backgroundColor: "#fff",
  },
});
