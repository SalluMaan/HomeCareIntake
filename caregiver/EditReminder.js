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
  Alert,
} from "react-native";
import IconAnt from "react-native-vector-icons/Feather";
import { Input, Item, Card } from "native-base";
import { Button } from "react-native-paper";
import IconAnt1 from "react-native-vector-icons/AntDesign";
import * as Font from "expo-font";
import Moment from "moment";
import { CareSetReminderPath, EditReminderPath } from "./constantCaregiver";
import axios from "axios";
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
import AsyncStorage from "@react-native-community/async-storage";

export default class EditReminder extends React.Component {
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    headerShown: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      assetsLoaded: false,
      selected: undefined,
      title: this.props.navigation.state.params.obj.title,
      details: this.props.navigation.state.params.obj.details,
      time: this.props.navigation.state.params.obj.date,
      reminderID: this.props.navigation.state.params.obj.id,
      careID: 0,
      chosenDate: new Date(),
    };
    // this.state = {  };
    this.setDate = this.setDate.bind(this);
  }

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        // value previously stored
        console.log("token", value);
        this.setState({
          careID: value,
        });
        // this.getSchedule();
      }
    } catch (e) {
      // error reading value
      console.log("Reading Value Error", e);
    }
  };

  setDate(newDate) {
    const newdate = Moment(newDate).format("YYYY-MM-DD");
    console.log("A date has been picked: ", newdate);
    this.setState({ time: newdate });
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

  onClickListener = () => {
    const Date = this.state.time;
    const Title = this.state.title;
    const Details = this.state.details;
    const ID = this.state.careID;

    const ReminderID = this.state.reminderID;
    const formData = new FormData();
    formData.append("caregiver_id", ID);
    formData.append("title", Title);
    formData.append("date", Date);
    formData.append("details", Details);
    console.log("Fomr Data", formData);

    axios
      .post(EditReminderPath + ReminderID, formData)
      .then((res) => {
        Alert.alert("Response", res.data.success);
        this.setState({
          title: "",
          details: "",
          time: "",
        });
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Response", "Error while Adding Reminder");
      });
  };

  render() {
    const { assetsLoaded } = this.state;
    console.log("ID", this.props.navigation.state.params.obj.title);
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

            <Text
              style={{
                fontSize: 18,
                marginTop: 200,
                marginTop: 19,
                marginLeft: 20,
                fontWeight: "700",
                color: "#000000",
              }}
            >
              Edit Existing Reminder
            </Text>

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
              Reminder Title
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
                placeholderTextColor={"#A4A4A4"}
                value={this.state.title}
                onChangeText={(title) =>
                  this.setState({
                    title,
                  })
                }
              />
            </Item>

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
              Select Date {this.state.time}
            </Text>

            {/* <View></View> */}
            <View
              style={{
                flexDirection: "row",
                marginLeft: 15,
                marginTop: 0,
                marginRight: 15,
                width: 334,
                height: 50,
                borderRadius: 4,
                backgroundColor: "#DEDCDC",
                justifyContent: "center",
              }}
            >
              <DatePicker
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="CALENDAR"
                textStyle={{ color: "green" }}
                placeHolderTextStyle={{ color: "#7D7D7D", alignSelf: "center" }}
                onDateChange={this.setDate}
                disabled={false}
                defaultDate={this.state.time}
              />
              {/* <Text>
              Date: {this.state.chosenDate.toString().substr(4, 12)}
            </Text> */}
              <IconAnt1
                name="calendar"
                size={20}
                color="#7D7D7D"
                style={{ alignSelf: "center", marginTop: -5 }}
              />
            </View>

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
              Write Details
            </Text>
            <Item
              style={{
                marginLeft: 15,
                marginRight: 15,
                marginTop: 0,
                width: 334,
                height: 91,
                alignSelf: "center",
                borderColor: "#E2E2E2",
                borderRadius: 4,
                borderWidth: 1,
                textAlign: "left",
              }}
              regular
            >
              <Input
                value={this.state.details}
                onChangeText={(details) =>
                  this.setState({
                    details,
                  })
                }
                placeholderTextColor={"#A4A4A4"}
              />
            </Item>
            <Text
              style={{
                fontSize: 10,
                marginTop: 0,
                marginLeft: 20,
                fontWeight: "400",
                color: "#7D7D7D",
              }}
            >
              Character limit 120
            </Text>

            <TouchableOpacity onPress={() => this.onClickListener()}>
              <Button
                style={{
                  marginTop: 53,
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
                  Update Reminder
                </Text>
              </Button>
            </TouchableOpacity>
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
