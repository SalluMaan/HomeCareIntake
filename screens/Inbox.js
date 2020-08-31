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
import IconAnt2 from "react-native-vector-icons/Fontisto";
import IconAnt from "react-native-vector-icons/AntDesign";
import { Input, Item, Card } from "native-base";
import { Button } from "react-native-paper";
import * as Font from "expo-font";
YellowBox.ignoreWarnings(["Remote debugger"]);
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

export default class Inbox extends React.Component {
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    headerShown: false,
  };
  state = {
    assetsLoaded: false,
    token: "",
    messages: "",
  };

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
        this.getMessage();
      }
    } catch (e) {
      // error reading value
      console.log("Reading Value Error", e);
    }
  };

  getMessage = () => {
    console.log("getMessage");
    const url =
      "https://aplushome.facebhoook.com/api/getmessage/" + this.state.token;
    axios.get(url).then((res) => {
      const data = res.data["success"];
      console.log("Response", data);
      this.setState({ messages: data });
    });
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
                  <IconAnt
                    name="left"
                    size={20}
                    color="#A4A4A4"
                    style={{ marginRight: 5 }}
                  />
                </TouchableOpacity>
              </View>
              <View></View>
            </View>
            <TouchableOpacity
            // onPress={() => this.props.navigation.navigate("Notification02")}
            >
              <Text
                style={{
                  fontSize: 18,
                  marginLeft: 20,
                  marginTop: 23,
                  fontWeight: "600",
                  color: "#141414",
                }}
              >
                Inbox
              </Text>
            </TouchableOpacity>

            {this.state.messages ? (
              this.state.messages.map((msg, id) => {
                return (
                  <View
                    key={id}
                    style={{
                      width: 334,
                      backgroundColor: "#FFFFFF",
                      borderRadius: 7,
                      alignSelf: "center",
                      marginTop: 10,
                      flexDirection: "row",
                      paddingBottom: 20,
                    }}
                  >
                    <View>
                      <TouchableOpacity
                        onPress={() =>
                          this.props.navigation.navigate("ChatAdmin")
                        }
                      >
                        <View style={{ flexDirection: "row" }}>
                          <IconAnt2
                            name="ellipse"
                            size={40}
                            color="#FF88AF"
                            style={{ marginLeft: 18, marginTop: 15 }}
                          />
                          <Text
                            style={{
                              fontSize: 14,
                              marginLeft: 13,
                              marginTop: 22,
                              fontWeight: "700",
                              color: "#434343",
                            }}
                          >
                            Admin
                          </Text>
                          <Text
                            style={{
                              fontSize: 10,
                              marginLeft: 110,
                              marginTop: 19,
                              fontWeight: "700",
                              color: "#BBBBBB",
                            }}
                          >
                            {msg.date} {msg.time}
                          </Text>
                        </View>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 14,
                          marginLeft: 18,
                          marginTop: 27,
                          fontWeight: "400",
                          color: "#A4A4A4",
                        }}
                      >
                        {msg.message}
                      </Text>
                    </View>
                  </View>
                );
              })
            ) : (
              <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
              </View>
            )}

            {/* <View style={{width:334,height:174,backgroundColor:'#FFFFFF',borderRadius:7,alignSelf:'center',marginTop:17,flexDirection:'row'}}>
        <View >
        <View style={{flexDirection:'row'}}>
        <IconAnt2 name="ellipse" size={40} color='#FF88AF' style={{marginLeft:18,marginTop:15}}/>
        <Text style={{fontSize:14,marginLeft:13,marginTop:22,fontWeight:'700',color:'#434343'}}>Nick Lawson</Text>
        <Text style={{fontSize:10,marginLeft:110,marginTop:19,fontWeight:'700',color:'#BBBBBB'}}>04/05/2020</Text> 
        </View>
        <Text style={{fontSize:14,marginLeft:18,marginTop:27,fontWeight:'400',color:'#A4A4A4'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla el metus ornare urna gravida pellentesque quis eget urna. Sed tortor orci.</Text>
       </View>
        </View>
        



        <View style={{width:334,height:174,backgroundColor:'#FFFFFF',borderRadius:7,alignSelf:'center',marginTop:17,flexDirection:'row'}}>
        <View >
        <View style={{flexDirection:'row'}}>
        <IconAnt2 name="ellipse" size={40} color='#FF88AF' style={{marginLeft:18,marginTop:15}}/>
        <Text style={{fontSize:14,marginLeft:13,marginTop:22,fontWeight:'700',color:'#434343'}}>Nick Lawson</Text>
        <Text style={{fontSize:10,marginLeft:110,marginTop:19,fontWeight:'700',color:'#BBBBBB'}}>04/05/2020</Text> 
        </View>
        <Text style={{fontSize:14,marginLeft:18,marginTop:27,fontWeight:'400',color:'#A4A4A4'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla el metus ornare urna gravida pellentesque quis eget urna. Sed tortor orci.</Text>
       </View>
        </View>
        



        <View style={{width:334,height:174,backgroundColor:'#FFFFFF',borderRadius:7,alignSelf:'center',marginTop:17,flexDirection:'row'}}>
        <View >
        <View style={{flexDirection:'row'}}>
        <IconAnt2 name="ellipse" size={40} color='#FF88AF' style={{marginLeft:18,marginTop:15}}/>
        <Text style={{fontSize:14,marginLeft:13,marginTop:22,fontWeight:'700',color:'#434343'}}>Nick Lawson</Text>
        <Text style={{fontSize:10,marginLeft:110,marginTop:19,fontWeight:'700',color:'#BBBBBB'}}>04/05/2020</Text> 
        </View>
        <Text style={{fontSize:14,marginLeft:18,marginTop:27,fontWeight:'400',color:'#A4A4A4'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla el metus ornare urna gravida pellentesque quis eget urna. Sed tortor orci.</Text>
       </View>
        </View> */}
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
    backgroundColor: "#F3F3F3",
  },
});
