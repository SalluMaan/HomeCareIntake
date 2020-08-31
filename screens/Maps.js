import React, { useState } from "react";
import { View, Text,TouchableOpacity } from "react-native";
import IconAnt2 from 'react-native-vector-icons/AntDesign';
import MapView, { Marker } from "react-native-maps";

const mapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#1d2c4d"
      }
    ]
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#8ec3b9"
      }
    ]
  },
  // ...
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#3e73fd"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#4e6d70"
      }
    ]
  }
];

const CustomMarker = () => (
    
  <View>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('EditProfile')} >
       
     <View style={{width:334,height:122,backgroundColor:'#FFFFFF',borderRadius:7,alignSelf:'center',marginTop:22,flexDirection:'row'}}>
        <View >
        <View style={{flexDirection:'row'}}>
         <Text style={{fontSize:14,marginLeft:13,marginTop:15,fontWeight:'600',color:'#434343'}}>To 375 East Ave.</Text>
        <IconAnt2 name="arrowright" size={30} color='#FC3E73' style={{marginLeft:150,marginTop:30}}/>
        </View>
        <Text style={{fontSize:16,marginLeft:18,fontWeight:'400',color:'#A4A4A4',marginTop:0}}>4.1 mi via Washington Blvd Arrival time: 9:56 AM</Text>
       </View>
     </View>
     </TouchableOpacity>
       
  </View>
);

const App = () => {
  const [region, setRegion] = useState({
    latitude: 52.5200066,
    longitude: 13.404954,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005
  });

  return (
    <MapView
      style={{ flex: 1 }}
      region={region}
      onRegionChangeComplete={region => setRegion(region)}
      customMapStyle={mapStyle}
    >
      <Marker coordinate={{ latitude: 52.5200066, longitude: 13.404954 }}>
        <CustomMarker />
      </Marker>
    </MapView>
  );
};

export default App;