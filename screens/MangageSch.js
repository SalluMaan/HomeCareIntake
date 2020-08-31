import React, { useState }  from 'react';
import { StyleSheet,YellowBox, Text, View,ScrollView,Image,ActivityIndicator,StatusBar,TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

import IconAnt from 'react-native-vector-icons/Fontisto';
import IconAnt2 from 'react-native-vector-icons/AntDesign';
import IconAnt3 from 'react-native-vector-icons/Entypo';
import {Input,Item,Card} from 'native-base'
import { Button } from 'react-native-paper';
import DateTimePicker from "react-native-modal-datetime-picker";
import { Container, Header, Content, Picker, Form ,CheckBox,ListItem,Body,Left,Right,Radio} from "native-base";

import * as Font from 'expo-font';

YellowBox.ignoreWarnings(['Remote debugger']);

export default class MangageSch extends React.Component{
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    headerShown: false,
  }
  
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
      selected: undefined
    };
  }
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }
  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
    console.log("A date has been picked: ", date);
    this.hideDateTimePicker();
  };

  state = {
    assetsLoaded: false,

};


onChangeText = this.onChangeText.bind(this);


onChangeText(text){
        this.setState({
            selected:text,
        })
      }

      
async componentDidMount() {
    await Font.loadAsync({
        'proximanova': require('../assets/fonts/proximanova.otf')
    });

    this.setState({ assetsLoaded: true });
}

render()
{
 
    const {assetsLoaded} = this.state;
    if( assetsLoaded ) 
    {
      return(<View style={styles.container}>
        <ScrollView>
        <View style={{marginTop:13,marginLeft:20,flexDirection:'row'}}>
       <View>
       <IconAnt2 name="left" size={20} color='#A4A4A4' style={{marginRight:5}}/>
        
        </View>
        <View >
       </View>
        </View>
        <Text style={{fontSize:18,marginLeft:20,marginTop:23,fontWeight:'600',color:'#141414'}}>Manage Schedules</Text>
      
        <View style={{width:334,height:162,backgroundColor:'#FF88AF',borderRadius:7,alignSelf:'center',marginTop:22}}>
       <IconAnt name="ellipse" size={40} color='white' style={{alignSelf:'center',marginTop:15}} />
        
        <IconAnt2 name="arrowright" size={30} color='white' style={{alignSelf:'center',marginTop:18}}/>
        <Text style={{fontSize:16,alignSelf:'center',fontWeight:'400',color:'white',marginTop:16}}>Add New Schedule</Text>
     </View>
        
     <View style={{width:334,height:162,backgroundColor:'#74D0FF',borderRadius:7,alignSelf:'center',marginTop:22}}>
       <IconAnt name="ellipse" size={40} color='white' style={{alignSelf:'center',marginTop:15}}/>
        
        <IconAnt2 name="arrowright" size={30} color='white' style={{alignSelf:'center',marginTop:18}}/>
        <Text style={{fontSize:16,alignSelf:'center',fontWeight:'400',color:'white',marginTop:16}}>Recurring Schedule</Text>
     </View>
        
     <View style={{width:334,height:162,backgroundColor:'#FFB492',borderRadius:7,alignSelf:'center',marginTop:22,marginBottom:50}}>
       <IconAnt name="ellipse" size={40} color='white' style={{alignSelf:'center',marginTop:15}}/>
        
        <IconAnt2 name="arrowright" size={30} color='white' style={{alignSelf:'center',marginTop:18}}/>
        <Text style={{fontSize:16,alignSelf:'center',fontWeight:'400',color:'white',marginTop:16}}>Edit existing scheduley</Text>
     </View>

        </ScrollView>
      </View>);
    }
    else
    {
      return (<View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
    </View>);
    }
        
    
}}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F3F3F3',
    },
  });
  

  