import * as React from "react";
import { Appbar, StyleSheet } from "react-native-paper";
//import Icon from 'react-native-ionicons'
import { Text, Component, Image, View } from "react-native";
import IconAnt from "react-native-vector-icons/SimpleLineIcons";
import IconAnt3 from "react-native-vector-icons/MaterialCommunityIcons";
import IconAnt2 from "react-native-vector-icons/AntDesign";
import * as Font from "expo-font";

// export default class CustomHeader extends React.Component {
//   state = {
//     assetsLoaded: false,
// };

// async componentDidMount() {
//     await Font.loadAsync({
//       'bauhs93': require('./assets/fonts/BAUHS93.ttf')
//     });

//     this.setState({ assetsLoaded: true });

//   render() {
//   return( <Appbar.Header  style={{backgroundColor: '#02B875',height:60}}>
//   <IconAnt name="menu" size={35} color='white' onPress={()=>navigation.toggleDrawer()} style={{marginLeft:10}}/>
//   <Text
//     style={{marginLeft:90,color:'white',fontSize:30}}
//   >MEET</Text>
//  </Appbar.Header>
// );
//   }}

export default function CustomHeader({ navigation }) {
  return (
    <View
      style={{ backgroundColor: "white", height: 60, flexDirection: "row" }}
    >
      <IconAnt2
        name="left"
        size={20}
        color="#A4A4A4"
        style={{ marginLeft: 15, marginTop: 25 }}
      />

      <Image
        source={require("../assets/img2.png")}
        style={{
          width: 37,
          height: 37,
          marginLeft: 10,
          marginTop: 3,
          alignSelf: "center",
          borderRadius: 150 / 2,
          overflow: "hidden",
        }}
      ></Image>

      <View>
        <Text
          style={{
            fontSize: 16,
            marginLeft: 10,
            alignSelf: "center",
            fontWeight: "700",
            color: "#434343",
            marginTop: 18,
          }}
        >
          Jonathon Doe
        </Text>
        <Text
          style={{
            fontSize: 10,
            marginLeft: -30,
            alignSelf: "center",
            fontWeight: "500",
            color: "#A4A4A4",
            marginTop: 4,
          }}
        >
          STAFF
        </Text>
      </View>
    </View>
  );
}

//  export default function CustomHeader({ navigation }) {

// return();

// }
