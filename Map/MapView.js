import MapView, { Marker } from "react-native-maps";
import React, { createRef } from "react";
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
  RefreshControl,
  Alert,
} from "react-native";

YellowBox.ignoreWarnings(["Remote debugger"]);
import IconAnt from "react-native-vector-icons/FontAwesome5";
import IconAnt2 from "react-native-vector-icons/AntDesign";

export default class MapViewIntake extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
    this.map = createRef();
  }
  // componentDidMount() {
  //   this.map.current.fitToSuppliedMarkers(
  //     Number(this.props.navigation.state.params.id)
  //   );
  //   console.log("ID", this.props.navigation.state.params.id);
  // }

  render() {
    console.log(
      "DATA:",
      this.props.navigation.state.params.lang,
      this.props.navigation.state.params.lat
    );

    return (
      <View style={{ width: "100%", height: "100%" }}>
        <View
          style={{
            height: 40,
            margin: 5,
            flexDirection: "row",
            backgroundColor: "#fff",
          }}
        >
          <View>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <IconAnt2
                name="left"
                size={20}
                color="#A4A4A4"
                style={{ marginLeft: 10, marginTop: 10 }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: "#a4a4a4",
                fontSize: 18,
                marginLeft: 130,
                marginTop: 8,
              }}
            >
              Map
            </Text>
            <IconAnt
              name="map"
              size={20}
              color="#A4A4A4"
              style={{ marginLeft: 10, marginTop: 10 }}
            />
          </View>
        </View>
        <MapView
          // ref={this.map}
          style={{ width: "100%", height: "100%" }}
          region={this.state.region}
        >
          <Marker
            // identifier={this.props.navigation.state.params.id}
            coordinate={{
              latitude: Number(this.props.navigation.state.params.lat),
              longitude: Number(this.props.navigation.state.params.lang),
            }}
          />
        </MapView>
      </View>
    );
  }
}
