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
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Assets } from "react-navigation-stack";
import { ScrollView } from "react-native-gesture-handler";
const { StatusBarManager } = NativeModules;
var windowWidth = Dimensions.get("window").width;
const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 25 : StatusBarManager.HEIGHT;

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
    };
  }

  submitSingleAnswer = (qsID, answer) => {
    console.log("QuestionID:" + qsID + "- Answer:", answer);
    this.setState({
      selectID: null,
    });
  };
  render() {
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
          <View style={{ flex: 4 }}>
            <Text
              style={{ fontSize: 25, fontWeight: "bold", alignSelf: "center" }}
            >
              Question 1
            </Text>
            <View
              style={{
                flex: 0.5,
                alignItems: "center",
                margin: 30,
              }}
            >
              <Text
                style={{ color: "grey", fontSize: 15, textAlign: "center" }}
              >
                Lorem ipsum is a pseudo-Latin text used in web design,
                typography, layout, and printing in place of English to
                emphasise design elements over content. It’s also called
                placeholder (or filler) text. It’s a convenient tool for
                mock-ups.
              </Text>
            </View>

            {/* ----------------------------------------------------- */}
            <View style={{ flex: 0.3, flexDirection: "row", marginBottom: 5 }}>
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
                  borderColor: this.state.p1borderColor,
                  height: 45,
                }}
                onPress={() =>
                  this.setState({
                    p1borderColor: "#4A89F6",
                    p2borderColor: "#E5E5E5",
                    p3borderColor: "#E5E5E5",
                    p4borderColor: "#E5E5E5",
                    selectID: 1,
                  })
                }
              >
                <Text style={{ fontSize: 15, color: "#A4A4A4" }}>Perfect</Text>
              </TouchableOpacity>
              <View style={{ flex: 0.3 }}></View>
            </View>
            <View style={{ flex: 0.3, flexDirection: "row", marginBottom: 5 }}>
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
                  borderColor: this.state.p2borderColor,
                  height: 45,
                }}
                onPress={() =>
                  this.setState({
                    p1borderColor: "#E5E5E5",
                    p2borderColor: "#4A89F6",
                    p3borderColor: "#E5E5E5",
                    p4borderColor: "#E5E5E5",
                    selectID: 2,
                  })
                }
              >
                <Text style={{ fontSize: 15, color: "#A4A4A4" }}>Perfect</Text>
              </TouchableOpacity>
              <View style={{ flex: 0.3 }}></View>
            </View>
            <View style={{ flex: 0.3, flexDirection: "row", marginBottom: 5 }}>
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
                  borderColor: this.state.p3borderColor,
                  height: 45,
                }}
                onPress={() =>
                  this.setState({
                    p1borderColor: "#E5E5E5",
                    p2borderColor: "#E5E5E5",
                    p3borderColor: "#4A89F6",
                    p4borderColor: "#E5E5E5",
                    selectID: 3,
                  })
                }
              >
                <Text style={{ fontSize: 15, color: "#A4A4A4" }}>Perfect</Text>
              </TouchableOpacity>
              <View style={{ flex: 0.3 }}></View>
            </View>
            <View style={{ flex: 0.3, flexDirection: "row", marginBottom: 5 }}>
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
                  borderColor: this.state.p4borderColor,
                  height: 45,
                }}
                onPress={() =>
                  this.setState({
                    p1borderColor: "#E5E5E5",
                    p2borderColor: "#E5E5E5",
                    p3borderColor: "#E5E5E5",
                    p4borderColor: "#4A89F6",
                    selectID: 4,
                  })
                }
              >
                <Text style={{ fontSize: 15, color: "#A4A4A4" }}>Perfect</Text>
              </TouchableOpacity>
              <View style={{ flex: 0.3 }}></View>
            </View>

            {/* ------------------------------------------------- */}

            <TouchableOpacity
              onPress={() => this.submitSingleAnswer(35, this.state.selectID)}
              style={{ marginTop: 15, alignSelf: "center" }}
            >
              <Text
                style={{
                  height: 30,
                  width: 100,
                  backgroundColor: "#B20838",
                  color: "#fff",
                  borderRadius: 15,
                  textAlign: "center",
                  paddingTop: 7,
                  fontSize: 10,
                }}
              >
                Submit Answer 1
              </Text>
            </TouchableOpacity>
          </View>

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
