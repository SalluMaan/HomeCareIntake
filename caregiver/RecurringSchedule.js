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
import { Container, Header, Content, Picker, Form ,CheckBox,ListItem,Body,Left,Right,Radio} from "native-base";

import * as Font from 'expo-font';

YellowBox.ignoreWarnings(['Remote debugger']);

export default class RecurringSchedule extends React.Component{
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
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Chat2')} >
     
        <Text style={{fontSize:18,marginLeft:20,marginTop:23,fontWeight:'600',color:'#141414'}}>Recurring Schedule</Text>
        </TouchableOpacity>

        <View style={{width:334,height:70,backgroundColor:'#F3F3F3',borderRadius:7,alignSelf:'center'}}>
       
           <Form>
            <Picker
              mode="dropdown"
              placeholder="Select your SIM"
              iosIcon={<IconAnt name="left" size={20} color='#A4A4A4' style={{marginRight:5}}/>}
              placeholder="Select your SIM"
              textStyle={{ color: "#5cb85c" }}
              itemStyle={{
                backgroundColor: "#d3d3d3",
                marginLeft: 0,
                paddingLeft: 10
              }}
              itemTextStyle={{ color: '#788ad2' }}
              style={{ width:330,alignSelf:'center',backgroundColor:'white',marginTop:26,borderWidth:1,borderRadius:10,borderColor:'#E2E2E2' }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Select caregiver profile" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
          </Form>
        
        </View>



        <View style={{width:334,height:331,backgroundColor:'#00000029',borderRadius:7,alignSelf:'center',marginTop:17}}>
        <Text style={{color:'#7D7D7D',marginLeft:8,marginTop:10}}>Start Date</Text>
          
        <Item  onPress={this.showDateTimePicker}  style={{backgroundColor:'white',marginLeft:15,marginRight:15,marginTop:5,width:320,height:50,alignSelf:'center',borderColor:'#E2E2E2',borderRadius:4,borderWidth:1,textAlign:'left'}} regular>
          <Text style={{color:'#A4A4A4',marginLeft:20}}> Select date </Text>
           <IconAnt name="calendar" size={20} color='#A4A4A4' style={{marginLeft:180}}/>
          </Item >
          <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
        />

<Text style={{color:'#7D7D7D',marginLeft:8,marginTop:15}}>End Date</Text>
        <Item  onPress={this.showDateTimePicker}  style={{backgroundColor:'white',marginLeft:15,marginRight:15,marginTop:5,width:320,height:50,alignSelf:'center',borderColor:'#E2E2E2',borderRadius:4,borderWidth:1,textAlign:'left'}} regular>
          <Text style={{color:'#A4A4A4',marginLeft:20}}> Select date </Text>
           <IconAnt name="calendar" size={20} color='#A4A4A4' style={{marginLeft:180}}/>
          </Item >
          <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
        />
          <View style={{flexDirection:'row'}}> 
          <Item  onPress={this.showDateTimePicker}  style={{backgroundColor:'white',marginLeft:7,marginRight:15,marginTop:23,width:130,height:50,borderColor:'#E2E2E2',borderRadius:4,borderWidth:1,textAlign:'left'}} regular>
          <Text style={{color:'#A4A4A4',marginLeft:10}}> 09:30 AM </Text>
           <IconAnt name="down" size={20} color='#A4A4A4' style={{marginLeft:15}}/>
          </Item >
          <Text style={{marginTop:40}}> TO </Text>
          <Item  onPress={this.showDateTimePicker}  style={{backgroundColor:'white',marginLeft:9,marginRight:15,marginTop:23,width:130,height:50,borderColor:'#E2E2E2',borderRadius:4,borderWidth:1,textAlign:'left'}} regular>
          <Text style={{color:'#A4A4A4',marginLeft:10}}> 01:30 PM </Text>
           <IconAnt name="down" size={20} color='#A4A4A4' style={{marginLeft:15}}/>
          </Item >
          </View>
        </View>
        <Text style={{fontSize:16,marginLeft:20,marginTop:43,fontWeight:'600',color:'#141414'}}>Recurring Pattern</Text>
      
        <View style={{flexDirection:'row',marginTop:10,marginLeft:21}}>
             
             <View style={{marginLeft:0}}>
              <Radio selected={true} style={{color:'red'}}/>
              </View>
              <View style={{marginLeft:5,marginTop:3}}>
          
              <Text>Daily</Text>
              </View>
              <View style={{marginLeft:25}}>
          
              <Radio selected={false} />
              </View>
              <View style={{marginLeft:5,marginTop:3}}>
          
              <Text>Weekly</Text>
              </View>

              <View style={{marginLeft:25}}>
              <Radio selected={false} />
              </View>
              
            <View style={{marginLeft:5,marginTop:3}}>
             
              <Text>Monthly</Text>
              </View>
              
        </View>
           
        <View style={{flexDirection:'row',marginTop:10,marginLeft:21}}>
             
            
              <Text style={{marginTop:10}}>Add Custom Recurring Schedule</Text>
              <IconAnt3 name="plus" size={30} color='#FF4B7D' style={{marginLeft:70,marginTop:7}}/>
          

                
        </View>
       
       
          <Button   style={{marginTop:23,width:334,height:50,marginBottom:50,alignSelf:'center',backgroundColor:'#B20838',borderRadius:4,borderWidth:1,textAlign:'center'}}><Text style={{fontSize:16,alignSelf:'center',fontWeight:'600',color:'white'}}>SAVE</Text></Button>
      
  
          
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
  

  