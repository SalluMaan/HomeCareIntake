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
import IconAnt2 from "react-native-vector-icons/Octicons";
import IconAnt3 from "react-native-vector-icons/FontAwesome";
import IconAnt4 from "react-native-vector-icons/MaterialCommunityIcons";
import { Input, Item, Card } from "native-base";
import { Button, RadioButton } from "react-native-paper";
import * as Font from "expo-font";
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  Left,
  Right,
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
  Radio,
} from "native-base";
import axios from "axios";
import {
  GetSurveyPath,
  PostSurveyPath,
  GetCareProfilePath,
} from "./constantCaregiver";
import AsyncStorage from "@react-native-community/async-storage";

YellowBox.ignoreWarnings(["Remote debugger"]);

export default class WeeklySurvery3 extends React.Component {
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
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    survey: "",
    careID: "",
    data: "",
  };

  async componentDidMount() {
    await Font.loadAsync({
      proximanova: require("../assets/fonts/proximanova.otf"),
    });
    this.getData();

    this.setState({ assetsLoaded: true });
  }

  getProfile = () => {
    const Id = this.state.careID;
    console.log("ID:", Id);
    axios.get(GetCareProfilePath + Id).then((res) => {
      const data = res.data["success"];
      console.log("Response", data);

      this.setState({
        data: data,
      });
    });
  };

  getAnswer = () => {
    const { option1, option2, option3, option4 } = this.state;
    if (option1) {
      return "A";
    } else if (option2) {
      return "B";
    } else if (option3) {
      return "C";
    } else if (option4) {
      return "D";
    } else {
      Alert.alert("Surver Response", "You haven't selected any Given Options");
    }
  };

  submitSingleAnswer = (qsID) => {
    const answer = this.getAnswer();

    if (answer) {
      this.postSurvey(this.state.careID, answer, qsID);
      this.setState({
        option1: false,
        option2: false,
        option3: false,
        option4: false,
      });
    }
  };

  postSurvey = (careID, answer, qsID) => {
    const formData = new FormData();
    formData.append("caregiver_id", careID);
    formData.append("answer", answer);

    axios
      .post(PostSurveyPath + qsID, formData)
      .then((res) => {
        console.log("Res Survey:", res.data);
        // Alert.alert("Server Response", res.data.success);
        this.setState({
          answer: null,
          selectID: null,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    let ValidArray =
      Array.isArray(this.state.survey) && this.state.survey.length;
    if (ValidArray > 0) {
      this.props.navigation.navigate("WeeklySurveyLoop", {
        survey: this.state.survey,
        objPicker: 1,
        careID: this.state.careID,
        data: this.state.data,
      });
    }
  };

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        // value previously stored
        console.log("Token", value);
        this.setState({
          careID: value,
        });
        this.getSurvey();
        this.getProfile();
      }
    } catch (e) {
      // error reading value
      console.log("Reading Value Error", e);
    }
  };

  getSurvey = () => {
    axios
      .get(GetSurveyPath)
      .then((res) => {
        console.log("Survey GET:", res.data["Survey"]);
        const data = res.data["Survey"];
        this.setState({
          survey: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { assetsLoaded, data } = this.state;
    const object = this.state.survey[0];
    console.log("Object:", object);

    if (assetsLoaded) {
      return (
        <View style={styles.container}>
          <ScrollView>
            <View
              style={{ marginTop: 0, height: 240, backgroundColor: "#FF4B7D" }}
            >
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.goBack()}
                >
                  <IconAnt
                    name="left"
                    size={20}
                    color="#A4A4A4"
                    style={{ marginTop: 15, marginLeft: 21 }}
                  />
                </TouchableOpacity>

                <Text
                  style={{
                    fontSize: 18,
                    marginLeft: 80,
                    marginTop: 15,
                    fontWeight: "600",
                    color: "#FFFFFF",
                  }}
                >
                  Weekly Survey
                </Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <Image
                  source={
                    data
                      ? {
                          uri:
                            "https://aplushome.facebhoook.com/public/clients/" +
                            data.image,
                        }
                      : require("../assets/img2.png")
                  }
                  style={{
                    width: 79,
                    height: 79,
                    marginTop: 10,
                    marginBottom: 69,
                    marginLeft: 21,
                    borderRadius: 150 / 2,
                    overflow: "hidden",
                  }}
                ></Image>
                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      marginLeft: 19,
                      marginTop: 23,
                      fontWeight: "600",
                      color: "#FFFFFF",
                    }}
                  >
                    {data.name || "Name"}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      marginLeft: 19,
                      marginTop: 13,
                      fontWeight: "600",
                      color: "#FFFFFF",
                    }}
                  >
                    {data.address || "Address"}
                  </Text>
                  <Button
                    style={{
                      marginTop: 15,
                      width: 138,
                      height: 34,
                      marginLeft: 10,
                      backgroundColor: "#FF7EA2",
                      borderRadius: 4,
                      borderWidth: 1,
                      textAlign: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 11,
                        alignSelf: "center",
                        fontWeight: "600",
                        color: "white",
                      }}
                    >
                      View Schedule
                    </Text>
                  </Button>
                </View>
              </View>
            </View>

            {/* ---------------------Survey----------------------------------- */}

            {object ? (
              <View
                style={{
                  marginTop: -40,
                  width: 340,
                  height: 380,
                  backgroundColor: "white",
                  alignSelf: "center",
                  borderColor: "#BEBEBEBA",
                  borderRadius: 10,
                  borderWidth: 1,
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    textAlign: "center",
                    marginTop: 24,
                    fontWeight: "600",
                    color: "#A4A4A4",
                    textTransform: "uppercase",
                  }}
                >
                  Question
                </Text>

                <Text
                  style={{
                    fontSize: 15,
                    marginTop: 50,
                    marginLeft: 21,
                    fontWeight: "600",
                    color: "#434343",
                  }}
                >
                  {object.survey_question || "Questions"}
                </Text>

                <View style={{ marginTop: 15, marginLeft: 21 }}>
                  <View style={{ marginLeft: 0, flexDirection: "row" }}>
                    <Radio
                      selected={this.state.option1}
                      onPress={() =>
                        this.setState({
                          option1: true,
                          option2: false,
                          option3: false,
                          option4: false,
                        })
                      }
                    />
                    <Text
                      style={{ marginLeft: 15, color: "blue", fontSize: 14 }}
                    >
                      {object.option_a || "Option"}
                    </Text>
                  </View>

                  <View
                    style={{
                      marginLeft: 0,
                      marginTop: 10,
                      flexDirection: "row",
                    }}
                  >
                    <Radio
                      selected={this.state.option2}
                      onPress={() =>
                        this.setState({
                          option1: false,
                          option2: true,
                          option3: false,
                          option4: false,
                        })
                      }
                    />
                    <Text
                      style={{ marginLeft: 15, color: "#A4A4A4", fontSize: 14 }}
                    >
                      {object.option_b || "Option"}
                    </Text>
                  </View>

                  <View
                    style={{
                      marginLeft: 0,
                      marginTop: 10,
                      flexDirection: "row",
                    }}
                  >
                    <Radio
                      selected={this.state.option3}
                      onPress={() =>
                        this.setState({
                          option1: false,
                          option2: false,
                          option3: true,
                          option4: false,
                        })
                      }
                    />
                    <Text
                      style={{ marginLeft: 15, color: "#A4A4A4", fontSize: 14 }}
                    >
                      {object.option_c || "Option"}
                    </Text>
                  </View>

                  <View
                    style={{
                      marginLeft: 0,
                      marginTop: 10,
                      flexDirection: "row",
                    }}
                  >
                    <Radio
                      selected={this.state.option4}
                      onPress={() =>
                        this.setState({
                          option1: false,
                          option2: false,
                          option3: false,
                          option4: true,
                        })
                      }
                    />
                    <Text
                      style={{ marginLeft: 15, color: "#A4A4A4", fontSize: 14 }}
                    >
                      {object.option_d || "Option"}
                    </Text>
                  </View>
                </View>

                {/* <Text style={{fontSize:15,marginTop:20,marginLeft:21,fontWeight:'600',color:'#434343'}}>How did you feel about the service?</Text> */}

                {/* <View style={{marginLeft:21,flexDirection:'row'}}>
          
        <IconAnt3 name="star" size={30} color='#E5E5E5' style={{marginTop:15, marginLeft:0}}/>
        <IconAnt3 name="star" size={30} color='#E5E5E5' style={{marginTop:15, marginLeft:10}}/>
        <IconAnt3 name="star" size={30} color='#E5E5E5' style={{marginTop:15, marginLeft:10}}/>
        <IconAnt3 name="star" size={30} color='#E5E5E5' style={{marginTop:15, marginLeft:10}}/>
        <IconAnt3 name="star" size={30} color='#E5E5E5' style={{marginTop:15, marginLeft:10}}/>
        </View> */}

                <TouchableOpacity
                  onPress={() =>
                    // this.props.navigation.navigate("WeeklySurvery4")
                    this.submitSingleAnswer(object.id)
                  }
                >
                  <Button
                    style={{
                      marginTop: 41,
                      width: 138,
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
                        fontSize: 11,
                        alignSelf: "center",
                        fontWeight: "600",
                        color: "white",
                      }}
                    >
                      Next
                    </Text>
                  </Button>
                </TouchableOpacity>
              </View>
            ) : (
              <Text>{"Wait......"}</Text>
            )}

            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
                marginTop: 15,
                marginBottom: 100,
              }}
            >
              <IconAnt2
                name="primitive-dot"
                size={30}
                color="#FFC8D7"
                style={{ marginTop: 15, alignSelf: "center" }}
              />
              <IconAnt2
                name="primitive-dot"
                size={30}
                color="#FFC8D7"
                style={{ marginTop: 15, marginLeft: 10, alignSelf: "center" }}
              />
              <IconAnt2
                name="primitive-dot"
                size={30}
                color="#FC3E73"
                style={{ marginTop: 15, marginLeft: 10, alignSelf: "center" }}
              />
              <IconAnt2
                name="primitive-dot"
                size={30}
                color="#FFC8D7"
                style={{ marginTop: 15, marginLeft: 10, alignSelf: "center" }}
              />
              <IconAnt2
                name="primitive-dot"
                size={30}
                color="#FFC8D7"
                style={{ marginTop: 15, marginLeft: 10, alignSelf: "center" }}
              />
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
