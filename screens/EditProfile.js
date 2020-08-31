import React, { useState }  from 'react';
import { StyleSheet,YellowBox, Text, View,ScrollView,Image,ActivityIndicator,StatusBar,TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import IconAnt2 from 'react-native-vector-icons/Fontisto';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconAnt3 from 'react-native-vector-icons/Entypo';
import {Input,Item,Card} from 'native-base'
import { Button } from 'react-native-paper';
import DateTimePicker from "react-native-modal-datetime-picker";
import { Container, Header, Content, Picker, Form ,CheckBox,ListItem,Body,Left,Right,Radio,Label} from "native-base";

import * as Font from 'expo-font';

YellowBox.ignoreWarnings(['Remote debugger']);

export default class EditProfile extends React.Component{
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
       <IconAnt name="left" size={20} color='#A4A4A4' style={{marginRight:5}}/>
        
        </View>
        <View >
       </View>
        </View>

        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Assessment')} >    
        <Text style={{fontSize:18,marginLeft:20,marginTop:23,fontWeight:'600',color:'#141414'}}>Personal Information</Text>
        </TouchableOpacity>


        <Form style={{marginTop:30}}>
            <Item stackedLabel last>
              <Label style={{color:'#BBBBBB'}}>CAREGIVER NAME</Label>
              <Input placeholder="Michelle C. Moore" />
              <IconAnt name="edit" size={20} color='#A4A4A4' style={{marginLeft:290,marginTop:-35}}/>
            </Item>
            <Item stackedLabel last style={{marginTop:15}}>
              <Label style={{color:'#BBBBBB'}}>PHONE NUMBER</Label>
              <Input placeholder="3234324234234" />
              <IconAnt name="edit" size={20} color='#A4A4A4' style={{marginLeft:290,marginTop:-35}}/>
            </Item>
            <Item stackedLabel last style={{marginTop:15}}>
              <Label style={{color:'#BBBBBB'}}>ADDRESS</Label>
              <Input placeholder="Streeno 30 " />
              <IconAnt name="edit" size={20} color='#A4A4A4' style={{marginLeft:290,marginTop:-35}}/>
               </Item>
            <Item stackedLabel last style={{marginTop:15}}>
              <Label style={{color:'#BBBBBB'}}>ADDRESS LINE2</Label>
              <Input placeholder="City Thialnd" />
              <IconAnt name="edit" size={20} color='#A4A4A4' style={{marginLeft:290,marginTop:-35}}/>
               </Item>
          </Form>

          <View style={{flexDirection:'row'}}>
        <Text style={{fontSize:16,marginLeft:20,marginTop:40,fontWeight:'500',color:'#434343'}}>Documents</Text>
        <IconAnt name="edit" size={20} color='#A4A4A4' style={{marginLeft:230,marginTop:50}}/>
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
      backgroundColor: 'white',
    },
  });
  

  