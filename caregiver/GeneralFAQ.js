import React, { Component } from "react";
import { Container, Header, Content, Tab, Tabs } from "native-base";
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
import FAQ1 from "./FAQ1";
import FAQ2 from "./FAQ2";
import IconAnt1 from "react-native-vector-icons/AntDesign";
import { color } from "react-native-reanimated";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";
import { GetFAQsPath } from "./constantCaregiver";

export default class GeneralFAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined,
      assetsLoaded: false,
      FAQs: "",
    };
  }

  componentDidMount = () => {
    this.getFAQs();
  };

  getFAQs = () => {
    axios
      .get(GetFAQsPath)
      .then((res) => {
        // console.log("FAQS GET:", res.data["FAQs"]);
        const data = res.data["FAQs"];
        this.setState({
          FAQs: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <Container>
        <View
          style={{
            marginTop: 13,
            marginLeft: 20,
            flexDirection: "row",
            marginBottom: 30,
          }}
        >
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <IconAnt1
              name="left"
              size={20}
              color="#A4A4A4"
              style={{ marginRight: 5 }}
            />
          </TouchableOpacity>
        </View>
        <Tabs style={{ backgroundColor: "white" }}>
          <Tab
            heading="QUESTIONS"
            tabStyle={{ backgroundColor: "#fff" }}
            activeTabStyle={{ backgroundColor: "#FEF2F5" }}
            activeTextStyle={{ color: "#FF4B7D" }}
            textStyle={{ color: "#a4a4a4" }}
          >
            <FAQ1 FAQData={this.state.FAQs} />
          </Tab>
          <Tab
            heading="VIDEOS"
            tabStyle={{ backgroundColor: "#fff" }}
            activeTabStyle={{ backgroundColor: "#FEF2F5" }}
            activeTextStyle={{ color: "#FF4B7D" }}
            textStyle={{ color: "#a4a4a4" }}
          >
            <FAQ2 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
