import React, { useState }  from 'react';
import { StyleSheet,YellowBox, Text, View,ScrollView,Image,ActivityIndicator,StatusBar, _View,TouchableOpacity } from 'react-native';
import IconAnt2 from 'react-native-vector-icons/AntDesign';
import {Input,Item,Card} from 'native-base'
import { Button } from 'react-native-paper';
import { Container, Header, Content, Picker, Form ,CheckBox,ListItem,Body,Left,Right,Radio} from "native-base";

import * as Font from 'expo-font';

YellowBox.ignoreWarnings(['Remote debugger']);

export default class AddNewCareg extends React.Component{
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
      return(
      <View style={styles.container}>
        <ScrollView>
        <View style={{marginTop:13,marginLeft:20,flexDirection:'row'}}>

       <IconAnt2 name="left" size={20} color='#A4A4A4' style={{marginRight:5}}/>

       <TouchableOpacity onPress={()=>this.props.navigation.navigate('MangageSch')} >
       <Text style={{fontSize:16,marginLeft:20,marginTop:0,fontWeight:'600',color:'#141414'}}>Add New Caregiver</Text>
       </TouchableOpacity>
       </View>
    
       <View style={{flexDirection:'row'}}>
        <View style={{width:'50%',height:7,marginTop:50,backgroundColor:'#FF4B7D'}}>
       </View>
       <View style={{width:'50%',height:7,marginTop:50,backgroundColor:'#FCC9D7'}}>
       </View>
       </View>
       
           <Text style={{color:'#7D7D7D',marginLeft:20,marginTop:30}}>First Name</Text>
         <Item    style={{backgroundColor:'white',marginLeft:15,marginRight:15,marginTop:0,width:328,height:50,alignSelf:'center',borderColor:'#E2E2E2',borderRadius:4,borderWidth:1,textAlign:'left'}} regular>
          <Input />
          </Item >

          <Text style={{color:'#7D7D7D',marginLeft:20,marginTop:30}}>Middle Name</Text>
          <Item    style={{backgroundColor:'white',marginLeft:15,marginRight:15,marginTop:0,width:328,height:50,alignSelf:'center',borderColor:'#E2E2E2',borderRadius:4,borderWidth:1,textAlign:'left'}} regular>
          <Input />
          </Item >

            <View style={{flexDirection:'row',marginLeft:8,marginTop:15}}>
            <CheckBox checked={false} color="#FCC9D7"/>
            <Text style={{marginLeft:20}}>No Middle Name</Text>
            </View>

          <Text style={{color:'#7D7D7D',marginLeft:20,marginTop:30}}>First Name</Text>
         <Item    style={{backgroundColor:'white',marginLeft:15,marginRight:15,marginTop:0,width:328,height:50,alignSelf:'center',borderColor:'#E2E2E2',borderRadius:4,borderWidth:1,textAlign:'left'}} regular>
          <Input />
          </Item >

          <Text style={{color:'#7D7D7D',marginLeft:20,marginTop:30}}>Last Name</Text>
          <Item    style={{backgroundColor:'white',marginLeft:15,marginRight:15,marginTop:0,width:328,height:50,alignSelf:'center',borderColor:'#E2E2E2',borderRadius:4,borderWidth:1,textAlign:'left'}} regular>
          <Input />
          </Item >

          <Text style={{color:'#7D7D7D',marginLeft:20,marginTop:30}}>Address Line 2</Text>
         <Item    style={{backgroundColor:'white',marginLeft:15,marginRight:15,marginTop:0,width:328,height:50,alignSelf:'center',borderColor:'#E2E2E2',borderRadius:4,borderWidth:1,textAlign:'left'}} regular>
          <Input />
          </Item >

          <Button   style={{marginTop:89,marginBottom:50,width:334,height:50,alignSelf:'center',backgroundColor:'#B20838',borderRadius:4,borderWidth:1,textAlign:'center'}}><Text style={{fontSize:16,alignSelf:'center',fontWeight:'600',color:'white'}}>Next</Text></Button>
       
      
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
  

  