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
import * as Font from "expo-font";
import { Input } from "native-base";
import IconAnt from "react-native-vector-icons/AntDesign";
import AsyncStorage from "@react-native-community/async-storage";

YellowBox.ignoreWarnings(["Remote debugger"]);
import axios from "axios";

export default class MoveScreen extends React.Component {
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    headerShown: false,
  };
  state = {
    assetsLoaded: false,
  };

  clearStorage = async () => {
    try {
      await AsyncStorage.clear();
      // alert("Storage successfully cleared!");
    } catch (e) {
      // alert("Failed to clear the async storage.");
    }
  };
  async componentDidMount() {
    this.clearStorage();
    await Font.loadAsync({
      proximanova: require("../assets/fonts/proximanova.otf"),
    });

    this.setState({ assetsLoaded: true });
  }

  render() {
    const { assetsLoaded } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          <TouchableOpacity
          // onPress={this.props.navigation.replace("First2")}
          ></TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
