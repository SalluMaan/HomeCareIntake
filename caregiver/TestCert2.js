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
  TouchableOpacity,
} from "react-native";
import IconAnt from "react-native-vector-icons/Feather";
import { Input, Item, Card } from "native-base";
import { Button } from "react-native-paper";
import IconAnt1 from "react-native-vector-icons/AntDesign";
import * as Font from "expo-font";
import * as Linking from "expo-linking";

import {
  Container,
  Header,
  Content,
  Icon,
  Picker,
  Form,
  DatePicker,
} from "native-base";
import { createOpenLink } from "react-native-open-maps";

YellowBox.ignoreWarnings(["Remote debugger"]);
import axios from "axios";
import * as DocumentPicker from "expo-document-picker";

import AsyncStorage from "@react-native-community/async-storage";
import {
  AddCertificatePath,
  GetCertificatePath,
  GetMedicalReportPath,
} from "./constantCaregiver";

export default class TestCert2Care extends React.Component {
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    headerShown: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      bgMeeting: "#fff",
      bgSchedule: "#FEF2F5",
      clrMeeting: "#a4a4a4",
      clrSchedule: "#FF4B7D",
      clicked: false,
      selected: undefined,
      token: "",
      assetsLoaded: false,
      pick: false,
      fileObject: "",
      reports: "",
    };
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
    this.getData();

    this.setState({ assetsLoaded: true });
  }

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        // value previously stored
        console.log("Token", value);
        this.setState({
          token: value,
        });
        this.getCertificate();
        this.getMedicalReport();
      }
    } catch (e) {
      // error reading value
      console.log("Reading Value Error", e);
    }
  };

  getCertificate = () => {
    axios
      .get(GetCertificatePath + this.state.token)
      .then((res) => {
        // console.log("Certificate:", res.data);
        let obj = res.data.success;
        obj = obj[0];
        console.log("response Certificate Get:", obj);
        console.log();
        this.setState({
          fileObject: obj,
          pick: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getMedicalReport = () => {
    axios
      .get(GetMedicalReportPath + this.state.token)
      .then((res) => {
        console.log("GET MEDIC REPORT:", res.data.success);
        // let obj = res.data.success;
        // obj = obj[0];
        // console.log("response Certificate Get:", obj);
        // console.log();
        const data = res.data.success;
        this.setState({
          reports: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    // console.log(result)
    let name = result.name;
    name = name.split(".");
    let type = name[name.length - 1];

    let file = result.uri;
    const Docobj = {
      uri: file,
      type: "file/" + type,
      name: "CertificateID-" + this.state.token,
    };
    this.setState({
      pick: true,
    });
    const formData = new FormData();
    formData.append("certificate", Docobj);
    console.log("FormData Certidcate:", formData);

    axios
      .post(AddCertificatePath + this.state.token, formData)
      .then((res) => {
        console.log("Certificate:", res.data);
        Alert.alert("Response", res.data.message);
        this.setState({
          pick: true,
        });
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Response", "Error while uploading Certificate");
      });
  };

  getResources = () => {
    this.setState({
      clicked: true,
      bgSchedule: "#fff",
      bgMeeting: "#FEF2F5",
      clrMeeting: "#FF4B7D",
      clrSchedule: "#a4a4a4",
      // refreshing: false,
    });
  };

  handleLinkCertificate = (link) => {
    console.log("Certificate");
    Linking.openURL(
      "http://aplushome.facebhoook.com/public/caregivercertificate/1117485087.docx"
    );
  };
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
                onPress={() => this.getResources()}
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
                  Resources
                </Text>
              </Button>
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
                  Certifications
                </Text>
              </Button>
            </View>
            {this.state.clicked ? (
              <View>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("TestCert2")}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      marginTop: 200,
                      marginTop: 19,
                      marginLeft: 20,
                      fontWeight: "400",
                      color: "#434343",
                    }}
                  >
                    Training Videos
                  </Text>
                </TouchableOpacity>

                <View
                  style={{
                    flexDirection: "row",
                    width: 334,
                    height: 192,
                    backgroundColor: "#00000029",
                    borderRadius: 7,
                    alignSelf: "center",
                    marginTop: 20,
                  }}
                ></View>

                <View
                  style={{
                    flexDirection: "row",
                    width: 334,
                    height: 192,
                    backgroundColor: "#00000029",
                    borderRadius: 7,
                    alignSelf: "center",
                    marginTop: 20,
                  }}
                >
                  <Image
                    source={require("../assets/img2.png")}
                    style={{
                      width: 112,
                      height: 136,
                      marginTop: 20,
                      marginLeft: 12,
                    }}
                  ></Image>

                  <View style={{ width: 160 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        marginLeft: 10,
                        alignSelf: "center",
                        marginTop: 20,
                        fontWeight: "600",
                        color: "#434343",
                      }}
                    >
                      The Caregiver's Handbook
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
                      Lorem ipsum dolor sit amet,consetetur sadipscing elitr
                    </Text>
                    <Button
                      style={{
                        marginTop: 23,
                        width: 127,
                        height: 40,
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
                        Download
                      </Text>
                    </Button>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    width: 334,
                    height: 192,
                    backgroundColor: "#00000029",
                    borderRadius: 7,
                    alignSelf: "center",
                    marginTop: 20,
                  }}
                >
                  <Image
                    source={require("../assets/img2.png")}
                    style={{
                      width: 112,
                      height: 136,
                      marginTop: 20,
                      marginLeft: 12,
                    }}
                  ></Image>

                  <View style={{ width: 160 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        marginLeft: 10,
                        alignSelf: "center",
                        marginTop: 20,
                        fontWeight: "600",
                        color: "#434343",
                      }}
                    >
                      The Caregiver's Handbook
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
                      Lorem ipsum dolor sit amet,consetetur sadipscing elitr
                    </Text>
                    <Button
                      style={{
                        marginTop: 23,
                        width: 127,
                        height: 40,
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
                        Download
                      </Text>
                    </Button>
                  </View>
                </View>
              </View>
            ) : (
              <View>
                <View style={{ flexDirection: "row", marginTop: 50 }}>
                  <TouchableOpacity
                  // onPress={() => this.props.navigation.navigate("TestCert3")}
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
                  <TouchableOpacity onPress={() => this.pickDocument()}>
                    <IconAnt1
                      name="addfile"
                      size={30}
                      color="#FF4B7D"
                      style={{ marginTop: 0, marginLeft: 180 }}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{ height: 130 }}>
                  {this.state.pick ? (
                    <TouchableOpacity
                      onPress={() =>
                        this.handleLinkCertificate(
                          this.state.fileObject.certificate
                        )
                      }
                    >
                      <IconAnt1
                        name="addfile"
                        size={30}
                        color="#FF4B7D"
                        style={{ marginTop: "5%", marginHorizontal: "8%" }}
                      />
                    </TouchableOpacity>
                  ) : null}
                </View>

                <View
                  style={{
                    backgroundColor: "#7D7D7D",
                    borderWidth: 0.5,
                    marginTop: 10,
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
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("TestCert3")}
                  >
                    <IconAnt1
                      name="addfile"
                      size={30}
                      color="#FF4B7D"
                      style={{ marginTop: 0, marginLeft: 150 }}
                    />
                  </TouchableOpacity>
                </View>

                {/* -----------------------------------------------Medical Report------------------------------ */}
                {this.state.reports ? (
                  this.state.reports.map((report, id) => {
                    return (
                      <View
                        key={id}
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
                          <TouchableOpacity
                            onPress={() =>
                              Alert.alert(
                                "Server Response",
                                "File Name:" + report.report
                              )
                            }
                          >
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
                          </TouchableOpacity>
                        </View>
                        <View style={{ width: 160 }}>
                          <Text
                            style={{
                              fontSize: 13,
                              marginLeft: 10,
                              marginTop: 20,
                              fontWeight: "600",
                              color: "#434343",
                            }}
                          >
                            {report.test_name || "Test Name"}
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
                            Tested Date:{report.test_date || "XXXX-XX-XX"}
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
                            Expiry Date:{report.expire_date || "XXXX-XX-XX"}
                          </Text>
                        </View>
                      </View>
                    );
                  })
                ) : (
                  <Text style={{ color: "#a4a4a4", margin: 25 }}>
                    No Report Found...
                  </Text>
                )}
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
