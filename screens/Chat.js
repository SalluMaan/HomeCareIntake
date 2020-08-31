import React, { Component } from "react";
import CustomHeader2 from "../Header/MyHeader2";
import IconAnt3 from "react-native-vector-icons/MaterialCommunityIcons";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList,
  Button,
} from "react-native";
import IconAnt2 from "react-native-vector-icons/AntDesign";

export default class Chat extends Component {
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    headerShown: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          date: "9:50 am",
          type: "in",
          message: "Lorem ipsum dolor sit amet",
        },
        {
          id: 2,
          date: "9:50 am",
          type: "out",
          message: "Lorem ipsum dolor sit amet",
        },
        {
          id: 3,
          date: "9:50 am",
          type: "in",
          message: "Lorem ipsum dolor sit a met",
        },
        {
          id: 4,
          date: "9:50 am",
          type: "in",
          message: "Lorem ipsum dolor sit a met",
        },
        {
          id: 5,
          date: "9:50 am",
          type: "out",
          message: "Lorem ipsum dolor sit a met",
        },
        {
          id: 6,
          date: "9:50 am",
          type: "out",
          message: "Lorem ipsum dolor sit a met",
        },
        {
          id: 7,
          date: "9:50 am",
          type: "in",
          message: "Lorem ipsum dolor sit a met",
        },
        {
          id: 8,
          date: "9:50 am",
          type: "in",
          message: "Lorem ipsum dolor sit a met",
        },
        {
          id: 9,
          date: "9:50 am",
          type: "in",
          message: "Lorem ipsum dolor sit a met",
        },
      ],
    };
  }

  renderDate = (date) => {
    return <Text style={styles.time}>{date}</Text>;
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <CustomHeader2 navigation={this.props.navigation} /> */}

        {/* Head */}
        <View
          style={{
            backgroundColor: "#a4a4a4",
            height: 50,
            flexDirection: "row",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 11,
            },
            shadowOpacity: 0.57,
            shadowRadius: 15.19,

            elevation: 23,
          }}
        >
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <IconAnt2
              name="left"
              size={20}
              color="#fff"
              style={{ marginLeft: 15, marginTop: 20 }}
            />
          </TouchableOpacity>

          <View>
            <Text
              style={{
                fontSize: 18,
                marginLeft: 20,
                alignSelf: "center",
                fontWeight: "700",
                color: "#fff",
                marginTop: 18,
              }}
            >
              Admin
            </Text>
          </View>
        </View>
        {/* Head */}

        <View
          style={[
            styles.balloon,
            {
              backgroundColor: "#dcdcdc",
              alignSelf: "flex-start",
              borderBottomLeftRadius: 0,
            },
          ]}
        >
          <Text>ABC</Text>
        </View>
        <View
          style={[
            styles.balloon,
            {
              backgroundColor: "#f5e6e8",
              alignSelf: "flex-end",
              borderBottomRightRadius: 0,
            },
          ]}
        >
          <Text>ABC</Text>
        </View>

        <View style={styles.footer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Type a message"
              underlineColorAndroid="transparent"
              // onChangeText={(name_address) => this.setState({ name_address })}
            />
          </View>

          <TouchableOpacity
            // onPress={() => this.props.navigation.navigate("TotalClients")}
            style={styles.btnSend}
          >
            <IconAnt3
              name="send-circle"
              size={40}
              color="white"
              style={{ alignSelf: "center" }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingHorizontal: 17,
  },
  footer: {
    flexDirection: "row",
    height: 60,
    backgroundColor: "#a4a4a4",
    position: "absolute",
    padding: 10,
    width: "100%",
    bottom: 0,
    paddingHorizontal: 10,
  },
  btnSend: {
    backgroundColor: "#FF4B7D",
    width: 40,
    height: 40,
    borderRadius: 360,
    alignItems: "center",
    justifyContent: "center",
  },
  iconSend: {
    width: 30,
    height: 30,
    alignSelf: "center",
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    // borderBottomWidth: 1,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginRight: 10,
  },
  inputs: {
    height: 40,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  balloon: {
    width: "85%",
    padding: 15,
    borderRadius: 30,
    overflow: "hidden",
    alignSelf: "flex-start",
    marginTop: 10,
    marginHorizontal: 5,
  },
  itemIn: {
    alignSelf: "flex-start",
  },
  itemOut: {
    alignSelf: "flex-end",
  },
  time: {
    alignSelf: "flex-end",
    margin: 15,
    fontSize: 12,
    color: "#808080",
  },
  item: {
    marginVertical: 14,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#d3d3d3",
    borderRadius: 300,
    padding: 5,
  },
});
