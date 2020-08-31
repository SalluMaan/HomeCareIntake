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
import IconAnt from "react-native-vector-icons/AntDesign";
import { Input, Item, Card } from "native-base";
import { Button } from "react-native-paper";
import * as Font from "expo-font";
YellowBox.ignoreWarnings(["Remote debugger"]);

export default class Notification02 extends React.Component {
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    headerShown: false,
  };
  state = {
    assetsLoaded: false,
  };

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
                <IconAnt
                  name="left"
                  size={20}
                  color="#A4A4A4"
                  style={{ marginRight: 5 }}
                />
              </View>
              <View></View>
            </View>
            <TouchableOpacity
            // onPress={()=>this.props.navigation.navigate('Search')}
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
                Notifications
              </Text>
            </TouchableOpacity>

            <View style={{ flexDirection: "row", marginLeft: 20 }}>
              <Text
                style={{
                  fontSize: 12,
                  marginTop: 23,
                  fontWeight: "600",
                  color: "#FF4B7D",
                }}
              >
                RECENT
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  marginLeft: 47,
                  marginTop: 23,
                  fontWeight: "600",
                  color: "#A4A4A4",
                }}
              >
                PAST WEEK
              </Text>
            </View>

            <View
              style={{
                width: 334,
                height: 152,
                backgroundColor: "#E4F6FF",
                borderRadius: 7,
                alignSelf: "center",
                marginTop: 17,
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  marginLeft: 18,
                  marginTop: 23,
                  marginRight: 28,
                  fontWeight: "600",
                  color: "#A4A4A4",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vel metus ornare urna gravida pellentesque quis eget urna. Sed
                tortor orci, aliquam nec sapien non, tempor tristique libero.
              </Text>
            </View>

            <View
              style={{
                width: 334,
                height: 152,
                backgroundColor: "#FFF3F7",
                borderRadius: 7,
                alignSelf: "center",
                marginTop: 14,
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  marginLeft: 18,
                  marginTop: 23,
                  marginRight: 28,
                  fontWeight: "600",
                  color: "#A4A4A4",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vel metus ornare urna gravida pellentesque quis eget urna. Sed
                tortor orci, aliquam nec sapien non, tempor tristique libero.
              </Text>
            </View>

            <View
              style={{
                width: 334,
                height: 152,
                backgroundColor: "#FFF3F7",
                borderRadius: 7,
                alignSelf: "center",
                marginTop: 14,
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  marginLeft: 18,
                  marginTop: 23,
                  marginRight: 28,
                  fontWeight: "600",
                  color: "#A4A4A4",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vel metus ornare urna gravida pellentesque quis eget urna. Sed
                tortor orci, aliquam nec sapien non, tempor tristique libero.
              </Text>
            </View>

            <View
              style={{
                width: 334,
                height: 152,
                backgroundColor: "#E4F6FF",
                borderRadius: 7,
                alignSelf: "center",
                marginTop: 17,
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  marginLeft: 18,
                  marginTop: 23,
                  marginRight: 28,
                  fontWeight: "600",
                  color: "#A4A4A4",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vel metus ornare urna gravida pellentesque quis eget urna. Sed
                tortor orci, aliquam nec sapien non, tempor tristique libero.
              </Text>
            </View>

            <View
              style={{
                width: 334,
                height: 152,
                backgroundColor: "#D7F8F2",
                borderRadius: 7,
                alignSelf: "center",
                marginTop: 17,
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  marginLeft: 18,
                  marginTop: 23,
                  marginRight: 28,
                  fontWeight: "600",
                  color: "#A4A4A4",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vel metus ornare urna gravida pellentesque quis eget urna. Sed
                tortor orci, aliquam nec sapien non, tempor tristique libero.
              </Text>
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
});
