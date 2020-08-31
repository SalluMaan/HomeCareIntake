import * as React from "react";
import { Appbar, StyleSheet } from "react-native-paper";
//import Icon from 'react-native-ionicons'
import { Text, Component, Image, View } from "react-native";
import IconAnt from "react-native-vector-icons/SimpleLineIcons";
import IconAnt2 from "react-native-vector-icons/MaterialIcons";
import IconAnt3 from "react-native-vector-icons/MaterialCommunityIcons";
import IconAnt4 from "react-native-vector-icons/AntDesign";
import * as Font from "expo-font";
import { TouchableOpacity } from "react-native-gesture-handler";

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

export default function CustomHeader2({ navigation, name, image }) {
  return (
    <View
      style={{
        backgroundColor: "#F3F3F3",
        height: 50,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", width: "35%" }}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("MyaccountCare")}
          >
            <Image
              source={
                image
                  ? {
                      uri:
                        "https://aplushome.facebhoook.com/public/clients/" +
                        image,
                    }
                  : require("./assets/img2.png")
              }
              // source={require("./assets/img2.png")}
              style={{
                width: 38,
                height: 38,
                marginTop: 6,
                marginLeft: 21,
                borderRadius: 150 / 2,
                overflow: "hidden",
              }}
            ></Image>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("MyaccountCare")}
          >
            <Text
              // onPress={navigation.navigate("Myaccount")}
              style={{
                fontSize: 14,
                marginLeft: 20,
                alignSelf: "center",
                fontWeight: "700",
                color: "#434343",
                marginTop: 18,
              }}
            >
              {name}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flexDirection: "row", marginRight: 21 }}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("NotificationCare")}
          >
            <IconAnt2
              name="notifications-none"
              size={30}
              color="#A4A4A4"
              style={{ marginTop: 10, marginLeft: 40 }}
            />
          </TouchableOpacity>
        </View>

        <View>
          <IconAnt
            name="menu"
            size={30}
            color="#A4A4A4"
            onPress={() => navigation.toggleDrawer()}
            style={{ marginTop: 10, marginLeft: 20 }}
          />
        </View>
      </View>
    </View>
  );
}

//  export default function CustomHeader({ navigation }) {

// return();

// }
