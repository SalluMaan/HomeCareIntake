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
import axios from "axios";
import { GetAllQuizPath, GetQuizPath } from "./constantCaregiver";
import AsyncStorage from "@react-native-community/async-storage";
import moment from "moment";
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
var _ = require("lodash");

YellowBox.ignoreWarnings(["Remote debugger"]);

export default class CareQuiz extends React.Component {
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    headerShown: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined,
      assetsLoaded: false,
      quiz: "",
      token: "",
    };
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
        this.getQuiz();
      }
    } catch (e) {
      // error reading value
      console.log("Reading Value Error", e);
    }
  };

  getQuiz = () => {
    axios
      .get(GetAllQuizPath + this.state.token)
      .then((res) => {
        console.log("QUIZ GET:", res.data);
        // const data = res.data["Quiz"];

        const Quiz = res.data.Quiz;
        const Data = res.data.Data;
        var UnattemptQuiz = _.differenceWith(Quiz, Data, function (o1, o2) {
          return o1["quiz_id"] === o2["quiz_id"];
        });
        // Quiz.map((quiz, id) => {
        //   Data.map((data, id) => {
        //     if (quiz.quiz_id !== data.quiz_id) {
        //       UnattemptQuiz.push(quiz);
        //     }
        //   });
        // });
        console.log("Unattempt Quiz:", UnattemptQuiz);
        this.setState({
          quiz: UnattemptQuiz,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { assetsLoaded, quiz } = this.state;
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
            <TouchableOpacity
            // onPress={() => this.props.navigation.navigate("WeeklySurvery1")}
            >
              <Text
                style={{
                  fontSize: 18,
                  marginLeft: 21,
                  marginTop: 25,
                  fontWeight: "600",
                  color: "#141414",
                }}
              >
                Care Quiz
              </Text>
            </TouchableOpacity>

            {/* -------------------------------------------------------------------------------- */}
            {Array.isArray(quiz) && quiz.length > 0 && quiz ? (
              quiz.map((item, id) => {
                return (
                  <View
                    key={id}
                    style={{
                      width: 334,

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
                      Friday, March 26, 2020
                      {/* {moment(Date.now(), "YYYY-MM-DD").format("dddd, MMMM D, YYYY")} */}
                    </Text>
                    <Text
                      style={{
                        fontSize: 20,
                        marginLeft: 17,
                        marginTop: 25,
                        fontWeight: "600",
                        color: "#434343",
                      }}
                    >
                      {item.quizname || "ABC"}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        marginLeft: 17,
                        marginTop: 10,
                        fontWeight: "600",
                        color: "#7D7D7D",
                      }}
                    >
                      Let's participate in the Quiz
                    </Text>
                    <Button
                      onPress={() =>
                        this.props.navigation.navigate("Quiz", {
                          quiz: item,
                          careID: this.state.token,
                        })
                      }
                      style={{
                        marginTop: 23,
                        marginBottom: 50,
                        width: 138,
                        height: 34,
                        marginLeft: 17,
                        backgroundColor: "#B20838",
                        borderRadius: 4,
                        borderWidth: 1,
                        textAlign: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                          alignSelf: "center",
                          fontWeight: "600",
                          color: "white",
                        }}
                      >
                        Participate
                      </Text>
                    </Button>
                  </View>
                );
              })
            ) : (
              <Text style={{ color: "#a4a4a4", margin: 25 }}>
                NO New Quiz Found{" "}
              </Text>
            )}

            {/* ----------------------------------------------------------- */}
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
