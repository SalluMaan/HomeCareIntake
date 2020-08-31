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
import IconAnt2 from "react-native-vector-icons/MaterialIcons";
import IconAnt from "react-native-vector-icons/AntDesign";
import IconAnt3 from "react-native-vector-icons/Feather";
import { Input, Item, Card } from "native-base";
import { Button } from "react-native-paper";
import * as Font from "expo-font";
import moment from 'moment'
import * as Location from 'expo-location';

import * as CareGiverServices from "../src/services/CareGiver";

YellowBox.ignoreWarnings(["Remote debugger"]);

export default class ScheduleDetCare extends React.Component {
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    headerShown: false,
  };
  state = {
    assetsLoaded: false,
    schedule: null,
    nextAction: 'checkin'
  };

  constructor(props) {
    super(props)

    const { params } = props.navigation.state
    if (params?.schedule) {
      this.state.schedule = params.schedule
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      proximanova: require("../assets/fonts/proximanova.otf"),
    });

    this.setState({ assetsLoaded: true });
  }

  onCheckinPress = async () => {
    const { schedule } = this.state
    if (schedule == null) return;

    const { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('', 'Unable to checkin without location permission.');
      return;
    }

    try {
      const location = await Location.getLastKnownPositionAsync();
      console.log('onCheckinPress-location', location)
    } catch (error) {
      console.log('Location.requestPermissionsAsync-error', error)
      Alert.alert('', 'Unable to get your location for checkin process. Check your settings and enable location.');

      return;
    }

    CareGiverServices.chechinSchedule(schedule.id).then(response => {
      console.log('CareGiverServices.chechinSchedule-response', response)
      // this.props.navigation.navigate("ScheduleDet2")
      this.setState({
        nextAction: 'checkout'
      })
    }).catch(error => {
      console.log('CareGiverServices.chechinSchedule-error', error)
      Alert.alert('', 'An error occured while checking in. Please try again.');
    })
  }

  onCheckoutPress = async () => {
    const { schedule } = this.state
    if (schedule == null) return;

    CareGiverServices.chechoutSchedule(schedule.id).then(response => {
      console.log('CareGiverServices.chechoutSchedule-response', response)
      this.setState({
        nextAction: 'checkin'
      })
    }).catch(error => {
      console.log('CareGiverServices.chechoutSchedule-error', error)
      Alert.alert('', 'An error occured while checking in. Please try again.');
    })
  }

  render() {
    const { schedule, assetsLoaded } = this.state

    if (schedule && assetsLoaded) {
      return this.renderDetails()
    }

    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    )
  }

  renderDetails() {
    const { schedule, nextAction } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View
            style={{ marginTop: 13, marginLeft: 20, flexDirection: "row" }}
          >
            <IconAnt
              name="left"
              size={20}
              color="#A4A4A4"
              style={{ marginRight: 5 }}
            />
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("EditSchedule")}
            ></TouchableOpacity>
          </View>

          <View
            style={{
              width: 334,
              height: 170,
              backgroundColor: "white",
              borderRadius: 7,
              alignSelf: "center",
              marginTop: 12,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                marginLeft: 17,
                marginTop: 19,
                fontWeight: "600",
                color: "#434343",
              }}
            >
              {schedule?.client_name || ''}
            </Text>
            <View
              style={{ flexDirection: "row", marginLeft: 17, marginTop: 30 }}
            >
              <IconAnt name="home" size={20} color="#FF4B7D" />
              <Text
                style={{
                  fontSize: 14,
                  marginLeft: 10,
                  fontWeight: "600",
                  color: "#7D7D7D",
                }}
              >{schedule.address}{schedule.address_line2 ? '\n' + schedule.address_line2 : ''}</Text>
            </View>
            <View
              style={{ flexDirection: "row", marginLeft: 17, marginTop: 10 }}
            >
              <IconAnt name="phone" size={20} color="#FF4B7D" />
              <Text
                style={{
                  fontSize: 14,
                  marginLeft: 10,
                  fontWeight: "600",
                  color: "#7D7D7D",
                }}
              >{schedule.phone || ''}</Text>
            </View>
          </View>

          <Button
            style={{
              marginTop: 23,
              width: 138,
              height: 50,
              marginLeft: 20,
              backgroundColor: "#B20838",
              borderRadius: 4,
              borderWidth: 1,
              textAlign: "center",
            }}
          >
            <IconAnt3
              name="map-pin"
              size={15}
              color="white"
              style={{ marginLeft: 5 }}
            />
            <Text> </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 5,
                marginTop: 5,
                fontWeight: "600",
                color: "white",
              }}
            >
              MAP
            </Text>
          </Button>

          <View
            style={{
              backgroundColor: "#7D7D7D",
              borderWidth: 0.5,
              marginTop: 12,
            }}
          ></View>

          <View
            style={{
              width: 334,
              height: 400,
              backgroundColor: "#FFFFFF",
              borderRadius: 7,
              alignSelf: "center",
              marginTop: 17,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                marginLeft: 17,
                marginTop: 19,
                fontWeight: "700",
                color: "#434343",
              }}
            >{moment(schedule.date, 'YYYY-MM-DD').format('dddd, MMMM D, YYYY')}</Text>
            <View
              style={{ flexDirection: "row", marginLeft: 17, marginTop: 0 }}
            >
              <Text
                style={{
                  fontSize: 12,
                  marginLeft: 0,
                  fontWeight: "600",
                  color: "#7D7D7D",
                }}
              >
                Start time: {moment(schedule.timeStart, 'hh:mm:ss').format('h:mm A')}
                {" - "}
                {moment(schedule.timeEnd, 'hh:mm:ss').format('h:mm A')}
              </Text>
            </View>

            {nextAction == 'checkin' &&
              <TouchableOpacity
                onPress={this.onCheckinPress}
              >
                <Button
                  style={{
                    marginTop: 20,
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
                    Check-in
                </Text>
                </Button>
              </TouchableOpacity>
            }

            <View style={{ marginLeft: 17, marginTop: 56 }}>
              <Text
                style={{
                  fontSize: 16,
                  marginLeft: 0,
                  fontWeight: "600",
                  color: "#434343",
                }}
              >
                Task List
              </Text>

              <View style={{ flexDirection: "row" }}>
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      marginLeft: 0,
                      fontWeight: "600",
                      color: "#7D7D7D",
                      marginTop: 10,
                    }}
                  >
                    Bed Bath/Sponge Bath
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      marginLeft: 0,
                      fontWeight: "600",
                      color: "#7D7D7D",
                      marginTop: 10,
                    }}
                  >
                    Brushing Teeth
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      marginLeft: 0,
                      fontWeight: "600",
                      color: "#7D7D7D",
                      marginTop: 10,
                    }}
                  >
                    Assist to Bathroom
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      marginLeft: 0,
                      fontWeight: "600",
                      color: "#7D7D7D",
                      marginTop: 10,
                    }}
                  >
                    Brushing Teeth
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      marginLeft: 0,
                      fontWeight: "600",
                      color: "#7D7D7D",
                      marginTop: 10,
                    }}
                  >
                    Maintain Bedroom
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      marginLeft: 0,
                      fontWeight: "600",
                      color: "#7D7D7D",
                      marginTop: 10,
                    }}
                  >
                    Take for a Walk
                  </Text>
                </View>

                <View style={{ marginLeft: 120 }}>
                  <View style={{ flexDirection: "row" }}>
                    <IconAnt
                      name="checkcircle"
                      size={20}
                      color="#EFEEEE"
                      style={{ marginTop: 5 }}
                    />
                  </View>

                  <View style={{ flexDirection: "row" }}>
                    <IconAnt
                      name="checkcircle"
                      size={20}
                      color="#EFEEEE"
                      style={{ marginTop: 5 }}
                    />
                  </View>

                  <View style={{ flexDirection: "row" }}>
                    <IconAnt
                      name="checkcircle"
                      size={20}
                      color="#EFEEEE"
                      style={{ marginTop: 5 }}
                    />
                  </View>

                  <View style={{ flexDirection: "row" }}>
                    <IconAnt
                      name="checkcircle"
                      size={20}
                      color="#EFEEEE"
                      style={{ marginTop: 5 }}
                    />
                  </View>

                  <View style={{ flexDirection: "row" }}>
                    <IconAnt
                      name="checkcircle"
                      size={20}
                      color="#EFEEEE"
                      style={{ marginTop: 5 }}
                    />
                  </View>

                  <View style={{ flexDirection: "row" }}>
                    <IconAnt
                      name="checkcircle"
                      size={20}
                      color="#EFEEEE"
                      style={{ marginTop: 8 }}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: "#7D7D7D",
              borderWidth: 0.5,
              marginTop: 30,
            }}
          ></View>

          <Text
            style={{
              fontSize: 18,
              marginLeft: 17,
              marginTop: 19,
              fontWeight: "600",
              color: "#434343",
            }}
          >
            Notes
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
            <Input placeholderTextColor={"#A4A4A4"} />
          </Item>

          <Button
            style={{
              marginTop: 20,
              width: 138,
              height: 34,
              marginLeft: 20,
              backgroundColor: "#B20838",
              borderRadius: 4,
              borderWidth: 1,
              textAlign: "center",
            }}
          >
            <Text
              style={{
                fontSize: 12,
                alignSelf: "center",
                fontWeight: "600",
                color: "white",
              }}
            >
              Upload file
            </Text>
          </Button>

          <View
            style={{
              backgroundColor: "#7D7D7D",
              borderWidth: 0.5,
              marginTop: 30,
            }}
          ></View>

          {nextAction == 'checkout' &&
            <Button
              style={{
                marginTop: 20,
                width: 334,
                marginBottom: 50,
                height: 50,
                alignSelf: "center",
                backgroundColor: "#B20838",
                borderRadius: 4,
                borderWidth: 1,
                textAlign: "center",
              }}
              onPress={this.onCheckoutPress}
            >
              <Text
                style={{
                  fontSize: 16,
                  alignSelf: "center",
                  fontWeight: "600",
                  color: "white",
                }}
              >
                Check-out
            </Text>
            </Button>
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
