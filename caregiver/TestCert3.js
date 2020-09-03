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

YellowBox.ignoreWarnings(["Remote debugger"]);

export default class TestCert3Care extends React.Component {
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
  async componentDidMount() {
    await Font.loadAsync({
      proximanova: require("../assets/fonts/proximanova.otf"),
    });

    this.setState({ assetsLoaded: true });
  }

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
                  onPress={() => this.props.navigation.navigate("TestCert2")}
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
                fontWeight: "400",
                color: "#141414",
              }}
            >
              Add Medical Test Report
            </Text>

            <Content
              style={{
                marginLeft: 15,
                marginTop: 23,
                marginRight: 15,
                width: 334,
                height: 50,
                borderColor: "#E2E2E2",
                borderRadius: 4,
                borderWidth: 1,
              }}
            >
              <Form>
                <Picker
                  mode="dropdown"
                  placeholder="Select your SIM"
                  iosIcon={<Icon name="arrow-down" />}
                  placeholder="Select your SIM"
                  textStyle={{ color: "#5cb85c" }}
                  itemStyle={{
                    backgroundColor: "#d3d3d3",
                    marginLeft: 0,
                    paddingLeft: 10,
                  }}
                  itemTextStyle={{ color: "#788ad2" }}
                  style={{ width: undefined, color: "#7D7D7D" }}
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}
                >
                  <Picker.Item label="Test Name" value="key0" />
                  <Picker.Item label="ATM Card" value="key1" />
                  <Picker.Item label="Debit Card" value="key2" />
                  <Picker.Item label="Credit Card" value="key3" />
                  <Picker.Item label="Net Banking" value="key4" />
                </Picker>
              </Form>
            </Content>

            <Content
              style={{
                marginLeft: 15,
                marginTop: 23,
                marginRight: 15,
                width: 334,
                height: 50,
                borderColor: "#E2E2E2",
                borderRadius: 4,
                borderWidth: 1,
              }}
            >
              <DatePicker
                defaultDate={new Date(2018, 4, 4)}
                minimumDate={new Date(2018, 1, 1)}
                maximumDate={new Date(2018, 12, 31)}
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Test Date"
                textStyle={{ color: "green" }}
                placeHolderTextStyle={{ color: "#7D7D7D" }}
                onDateChange={this.setDate}
                disabled={false}
              />
              {/* <Text>
              Date: {this.state.chosenDate.toString().substr(4, 12)}
            </Text> */}
            </Content>

            <Content
              style={{
                marginLeft: 15,
                marginTop: 23,
                marginRight: 15,
                width: 334,
                height: 50,
                borderColor: "#E2E2E2",
                borderRadius: 4,
                borderWidth: 1,
              }}
            >
              <DatePicker
                defaultDate={new Date(2018, 4, 4)}
                minimumDate={new Date(2018, 1, 1)}
                maximumDate={new Date(2018, 12, 31)}
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Expire Date"
                textStyle={{ color: "green" }}
                placeHolderTextStyle={{ color: "#7D7D7D" }}
                onDateChange={this.setDate}
                disabled={false}
              />
              {/* <Text>
              Date: {this.state.chosenDate.toString().substr(4, 12)}
            </Text> */}
            </Content>

            <Button
              style={{
                marginTop: 30,
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
                Upload Report
              </Text>
            </Button>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("GeneralFAQ")}
            >
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
                  Save
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
