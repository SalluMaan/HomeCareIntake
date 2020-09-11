import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  Image,
  NativeModules,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Assets } from "react-navigation-stack";
import { ScrollView } from "react-native-gesture-handler";
import { GetQuizPath, QuizSubmitPath } from "./constantCaregiver";
import axios from "axios";
// const { StatusBarManager } = NativeModules;
// var windowWidth = Dimensions.get("window").width;
// const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 25 : StatusBarManager.HEIGHT;

export default class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      p1borderColor: "#E5E5E5",
      p2borderColor: "#E5E5E5",
      p3borderColor: "#E5E5E5",
      p4borderColor: "#E5E5E5",
      p5borderColor: "#E5E5E5",
      p6borderColor: "#E5E5E5",
      p7borderColor: "#E5E5E5",
      p8borderColor: "#E5E5E5",
      selectID: null,
      answer: [],
      btnID: "",
      Quiz: "",
    };
  }

  selected = (qsID, id, answer) => {
    console.log("DTAT:", qsID, id, answer);
    const data = {
      id,
      answer,
    };
    const arData = this.state.answer;
    arData.push(data);
    if (answer === "A") {
      this.setState({
        p1borderColor: "#4A89F6",
        p2borderColor: "#E5E5E5",
        p3borderColor: "#E5E5E5",
        p4borderColor: "#E5E5E5",
        selectID: answer,
        btnID: qsID,
        answer: arData,
      });
    } else if (answer === "B") {
      this.setState({
        p1borderColor: "#E5E5E5",
        p2borderColor: "#4A89F6",
        p3borderColor: "#E5E5E5",
        p4borderColor: "#E5E5E5",
        selectID: answer,
        btnID: qsID,
        answer: arData,
      });
    } else if (answer === "C") {
      this.setState({
        p1borderColor: "#E5E5E5",
        p2borderColor: "#E5E5E5",
        p3borderColor: "#4A89F6",
        p4borderColor: "#E5E5E5",
        selectID: answer,
        btnID: qsID,
        answer: arData,
      });
    } else if (answer === "D") {
      this.setState({
        p1borderColor: "#E5E5E5",
        p2borderColor: "#E5E5E5",
        p3borderColor: "#E5E5E5",
        p4borderColor: "#4A89F6",
        selectID: answer,
        btnID: qsID,
        answer: arData,
      });
    }
  };

  getQuiz = () => {
    const { quiz, careID } = this.props.navigation.state.params;

    console.log("QUIZ ID FROM :", quiz.quiz_id);
    axios
      .get(GetQuizPath + quiz.quiz_id)
      .then((res) => {
        console.log("QUIZ GET For Specific ID:", res.data);
        const data = res.data.Quiz;
        this.setState({
          Quiz: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  postQuiz = (careID, answer) => {
    const { quiz } = this.props.navigation.state.params;

    const formData = new FormData();
    formData.append("caregiver_id", careID);
    formData.append("answer", JSON.stringify(answer));

    axios
      .post(QuizSubmitPath + quiz.quiz_id, formData)
      .then((res) => {
        console.log("POST QUIZ RESPONSE:", res.data);
        Alert.alert("Server Response", "Thank You for Submitting Quiz!");

        this.setState({
          answer: null,
          selectID: null,
        });
        this.props.navigation.replace("QuizStart");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  submitSingleAnswer = (qsID, answer) => {
    const { quiz, careID } = this.props.navigation.state.params;
    if (answer === null || answer === undefined || answer === "") {
      Alert.alert("Server Response", "You havn't Selected Any Answer!");
    } else {
      this.postQuiz(careID, answer, qsID);
      this.setState({
        selectID: null,
        p1borderColor: "#E5E5E5",
        p2borderColor: "#E5E5E5",
        p3borderColor: "#E5E5E5",
        p4borderColor: "#E5E5E5",
      });
    }
  };
  submitQuiz = () => {
    const { quiz, careID } = this.props.navigation.state.params;

    if (this.state.Quiz.length === this.state.answer.length) {
      const newArr = this.state.answer;
      newArr.sort((a, b) => a.qsID < b.qsID).reverse();
      let AnswerArray = [];
      newArr.map((arr, id) => {
        AnswerArray.push(arr.answer);
      });

      console.log("Array Sort", newArr, AnswerArray);
      // const newAnswerArray=newArr.
      this.postQuiz(careID, AnswerArray);
    } else {
      Alert.alert(
        "Server Response",
        "Complete your Quiz and Double check your Questions!"
      );
    }
  };

  componentDidMount() {
    this.getQuiz();
  }
  render() {
    // const { quiz, careID } = this.props.navigation.state.params;
    // console.log("Params:", quiz, careID, quiz.length);
    return (
      <View style={styles.container}>
        <ScrollView>
          <View
            style={{
              width: "100%",
              height: 150,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: 150,
                height: 150,
                resizeMode: "contain",
              }}
              source={require("../assets/logo2.png")}
            />
          </View>

          {/* ------------------------------START QUESTIONS------------------------------ */}

          {Array.isArray(this.state.Quiz) &&
          this.state.Quiz.length > 0 &&
          this.state.Quiz ? (
            this.state.Quiz.map((quest, id) => {
              return (
                <View key={id} style={{ flex: 4, marginTop: 25 }}>
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: "bold",
                      alignSelf: "center",
                    }}
                  >
                    Question {id + 1}
                  </Text>
                  <View
                    style={{
                      flex: 0.5,
                      alignItems: "center",
                      margin: 30,
                    }}
                  >
                    <Text
                      style={{
                        color: "grey",
                        fontSize: 15,
                        textAlign: "center",
                      }}
                    >
                      {quest.question || "Question Details"}
                    </Text>
                  </View>

                  {/* ----------------------------------------------------- */}
                  <View
                    style={{ flex: 0.3, flexDirection: "row", marginBottom: 5 }}
                  >
                    <View
                      style={{
                        flex: 0.5,
                        alignItems: "flex-end",
                        marginRight: 10,
                        marginTop: 15,
                      }}
                    >
                      <Text>A.</Text>
                    </View>
                    <TouchableOpacity
                      style={{
                        flex: 2,
                        borderWidth: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 5,
                        borderColor:
                          this.state.btnID === quest.id
                            ? this.state.p1borderColor
                            : "#E5E5E5",
                        height: 45,
                      }}
                      onPress={() => this.selected(quest.id, id + 1, "A")}
                    >
                      <Text style={{ fontSize: 15, color: "#A4A4A4" }}>
                        {quest.answer_a || "Options"}
                      </Text>
                    </TouchableOpacity>
                    <View style={{ flex: 0.3 }}></View>
                  </View>
                  <View
                    style={{ flex: 0.3, flexDirection: "row", marginBottom: 5 }}
                  >
                    <View
                      style={{
                        flex: 0.5,
                        alignItems: "flex-end",
                        marginRight: 10,
                        marginTop: 15,
                      }}
                    >
                      <Text>B.</Text>
                    </View>
                    <TouchableOpacity
                      style={{
                        flex: 2,
                        borderWidth: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 5,
                        borderColor:
                          this.state.btnID === quest.id
                            ? this.state.p2borderColor
                            : "#E5E5E5",
                        height: 45,
                      }}
                      onPress={() => this.selected(quest.id, id + 1, "B")}
                    >
                      <Text style={{ fontSize: 15, color: "#A4A4A4" }}>
                        {quest.answer_b || "Options"}
                      </Text>
                    </TouchableOpacity>
                    <View style={{ flex: 0.3 }}></View>
                  </View>
                  <View
                    style={{ flex: 0.3, flexDirection: "row", marginBottom: 5 }}
                  >
                    <View
                      style={{
                        flex: 0.5,
                        alignItems: "flex-end",
                        marginRight: 10,
                        marginTop: 15,
                      }}
                    >
                      <Text>C.</Text>
                    </View>
                    <TouchableOpacity
                      style={{
                        flex: 2,
                        borderWidth: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 5,
                        borderColor:
                          this.state.btnID === quest.id
                            ? this.state.p3borderColor
                            : "#E5E5E5",
                        height: 45,
                      }}
                      onPress={() => this.selected(quest.id, id + 1, "C")}
                    >
                      <Text style={{ fontSize: 15, color: "#A4A4A4" }}>
                        {quest.answer_c || "Options"}
                      </Text>
                    </TouchableOpacity>
                    <View style={{ flex: 0.3 }}></View>
                  </View>
                  <View
                    style={{ flex: 0.3, flexDirection: "row", marginBottom: 5 }}
                  >
                    <View
                      style={{
                        flex: 0.5,
                        alignItems: "flex-end",
                        marginRight: 10,
                        marginTop: 15,
                      }}
                    >
                      <Text>D.</Text>
                    </View>
                    <TouchableOpacity
                      style={{
                        flex: 2,
                        borderWidth: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 5,
                        borderColor:
                          this.state.btnID === quest.id
                            ? this.state.p4borderColor
                            : "#E5E5E5",
                        height: 45,
                      }}
                      onPress={() => this.selected(quest.id, id + 1, "D")}
                    >
                      <Text style={{ fontSize: 15, color: "#A4A4A4" }}>
                        {quest.answer_d || "Options"}
                      </Text>
                    </TouchableOpacity>
                    <View style={{ flex: 0.3 }}></View>
                  </View>

                  {/* ------------------------------------------------- */}
                </View>
              );
            })
          ) : (
            <Text style={{ margin: 25, color: "#a4a4a4" }}>
              There is no Question......
            </Text>
          )}

          <TouchableOpacity
            onPress={() => this.submitQuiz()}
            style={{ marginVertical: 30, alignSelf: "center" }}
          >
            <Text
              style={{
                height: 40,
                width: 130,
                backgroundColor: "#B20838",
                color: "#fff",
                borderRadius: 15,
                textAlign: "center",
                paddingTop: 9,
                fontSize: 14,
              }}
            >
              Submit Quiz
            </Text>
          </TouchableOpacity>

          {/* <TouchableOpacity
            onPress={() => this.submitQuiz()}
            style={{ marginTop: 30, alignSelf: "center" }}
          >
            <Text
              style={{
                height: 40,
                width: 140,
                backgroundColor: "#B20838",
                color: "#fff",
                borderRadius: 15,
                textAlign: "center",
                paddingTop: 8,
                fontSize: 15,
                marginVertical: 25,
              }}
            >
              Submit Quiz
            </Text>
          </TouchableOpacity> */}

          {/* {/* <View style={{ flex: 0.3, flexDirection: "row", marginBottom: 15 }}>
              <View
                style={{
                  flex: 0.5,
                  justifyContent: "center",
                  alignItems: "flex-end",
                  marginRight: 10,
                }}
              >
                <Text>B.</Text>
              </View>
              <TouchableOpacity
                style={{
                  flex: 2,
                  borderWidth: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 5,
                  borderColor: this.state.p2borderColor,
                }}
                onPress={() =>
                  this.setState({
                    p1borderColor: "#E5E5E5",
                    p2borderColor: "#4A89F6",
                    p3borderColor: "#E5E5E5",
                    p4borderColor: "#E5E5E5",
                  })
                }
              >
                <Text style={{ fontSize: 20, color: "#A4A4A4" }}>Not Good</Text>
              </TouchableOpacity>
              <View style={{ flex: 0.3 }}></View>
            </View>
            <View style={{ flex: 0.3, flexDirection: "row", marginBottom: 15 }}>
              <View
                style={{
                  flex: 0.5,
                  justifyContent: "center",
                  alignItems: "flex-end",
                  marginRight: 10,
                }}
              >
                <Text>C.</Text>
              </View>
              <TouchableOpacity
                style={{
                  flex: 2,
                  borderWidth: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 5,
                  borderColor: this.state.p3borderColor,
                }}
                onPress={() =>
                  this.setState({
                    p1borderColor: "#E5E5E5",
                    p2borderColor: "#E5E5E5",
                    p3borderColor: "#4A89F6",
                    p4borderColor: "#E5E5E5",
                  })
                }
              >
                <Text style={{ fontSize: 20, color: "#A4A4A4" }}>
                  Very Good
                </Text>
              </TouchableOpacity>
              <View style={{ flex: 0.3 }}></View>
            </View>
            <View style={{ flex: 0.3, flexDirection: "row", marginBottom: 15 }}>
              <View
                style={{
                  flex: 0.5,
                  justifyContent: "center",
                  alignItems: "flex-end",
                  marginRight: 10,
                }}
              >
                <Text>D.</Text>
              </View>
              <TouchableOpacity
                style={{
                  flex: 2,
                  borderWidth: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 5,
                  borderColor: this.state.p4borderColor,
                }}
                onPress={() =>
                  this.setState({
                    p1borderColor: "#E5E5E5",
                    p2borderColor: "#E5E5E5",
                    p3borderColor: "#E5E5E5",
                    p4borderColor: "#4A89F6",
                  })
                }
              >
                <Text style={{ fontSize: 20, color: "#A4A4A4" }}>Average</Text>
              </TouchableOpacity>
              <View style={{ flex: 0.3 }}></View>
            </View>
          </View>
          <View style={{ flex: 4, height: 600 }}>
            <View
              style={{
                flex: 0.5,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 30 }}>Question 2</Text>
            </View>
            <View
              style={{
                flex: 0.5,
                justifyContent: "center",
                alignItems: "center",
                margin: 30,
                marginTop: 10,
              }}
            >
              <Text style={{ color: "grey", fontSize: 15 }}>
                Lorem ipsum is a pseudo-Latin text used in web design,
                typography, layout, and printing in place of English to
                emphasise design elements over content. It’s also called
                placeholder (or filler) text. It’s a convenient tool for
                mock-ups.
              </Text>
            </View>
            <View style={{ flex: 0.3, flexDirection: "row", marginBottom: 15 }}>
              <View
                style={{
                  flex: 0.5,
                  justifyContent: "center",
                  alignItems: "flex-end",
                  marginRight: 10,
                }}
              >
                <Text>A.</Text>
              </View>
              <TouchableOpacity
                style={{
                  flex: 2,
                  borderWidth: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 5,
                  borderColor: this.state.p5borderColor,
                }}
                onPress={() =>
                  this.setState({
                    p5borderColor: "#4A89F6",
                    p6borderColor: "#E5E5E5",
                    p7borderColor: "#E5E5E5",
                    p8borderColor: "#E5E5E5",
                  })
                }
              >
                <Text style={{ fontSize: 20, color: "#A4A4A4" }}>Perfect</Text>
              </TouchableOpacity>
              <View style={{ flex: 0.3 }}></View>
            </View>
            <View style={{ flex: 0.3, flexDirection: "row", marginBottom: 15 }}>
              <View
                style={{
                  flex: 0.5,
                  justifyContent: "center",
                  alignItems: "flex-end",
                  marginRight: 10,
                }}
              >
                <Text>B.</Text>
              </View>
              <TouchableOpacity
                style={{
                  flex: 2,
                  borderWidth: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 5,
                  borderColor: this.state.p6borderColor,
                }}
                onPress={() =>
                  this.setState({
                    p5borderColor: "#E5E5E5",
                    p6borderColor: "#4A89F6",
                    p7borderColor: "#E5E5E5",
                    p8borderColor: "#E5E5E5",
                  })
                }
              >
                <Text style={{ fontSize: 20, color: "#A4A4A4" }}>Not Good</Text>
              </TouchableOpacity>
              <View style={{ flex: 0.3 }}></View>
            </View>
            <View style={{ flex: 0.3, flexDirection: "row", marginBottom: 15 }}>
              <View
                style={{
                  flex: 0.5,
                  justifyContent: "center",
                  alignItems: "flex-end",
                  marginRight: 10,
                }}
              >
                <Text>C.</Text>
              </View>
              <TouchableOpacity
                style={{
                  flex: 2,
                  borderWidth: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 5,
                  borderColor: this.state.p7borderColor,
                }}
                onPress={() =>
                  this.setState({
                    p5borderColor: "#E5E5E5",
                    p6borderColor: "#E5E5E5",
                    p7borderColor: "#4A89F6",
                    p8borderColor: "#E5E5E5",
                  })
                }
              >
                <Text style={{ fontSize: 20, color: "#A4A4A4" }}>
                  Very Good
                </Text>
              </TouchableOpacity>
              <View style={{ flex: 0.3 }}></View>
            </View>
            <View style={{ flex: 0.3, flexDirection: "row", marginBottom: 15 }}>
              <View
                style={{
                  flex: 0.5,
                  justifyContent: "center",
                  alignItems: "flex-end",
                  marginRight: 10,
                }}
              >
                <Text>D.</Text>
              </View>
              <TouchableOpacity
                style={{
                  flex: 2,
                  borderWidth: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 5,
                  borderColor: this.state.p8borderColor,
                }}
                onPress={() =>
                  this.setState({
                    p5borderColor: "#E5E5E5",
                    p6borderColor: "#E5E5E5",
                    p7borderColor: "#E5E5E5",
                    p8borderColor: "#4A89F6",
                  })
                }
              >
                <Text style={{ fontSize: 20, color: "#A4A4A4" }}>Average</Text>
              </TouchableOpacity>
              <View style={{ flex: 0.3 }}></View>
            </View>
          </View>
          <View style={{ height: 50, flexDirection: "row", margin: 20 }}>
            <View style={{ flex: 2 }}></View>
            <TouchableOpacity
              style={{
                flex: 2,
                borderRadius: 5,
                backgroundColor: "#4C8AF5",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#FFFFFF", fontSize: 20 }}>Submit</Text>
            </TouchableOpacity>
            <View style={{ flex: 2 }}></View> */}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: STATUSBAR_HEIGHT,
    backgroundColor: "#FFFFFF",
  },
});
