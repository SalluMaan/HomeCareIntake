import React from 'react';
import { StyleSheet,YellowBox, Text, View,ScrollView,Image,ActivityIndicator,StatusBar, Alert,AsyncStorage, SafeAreaView, FlatList, TouchableOpacity, Platform } from 'react-native';
import IconAnt2 from 'react-native-vector-icons/Fontisto';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconAnt3 from 'react-native-vector-icons/Feather';
import { Button } from 'react-native-paper';
import { fetchUpdateAsync } from 'expo/build/Updates/Updates';
import DateTimePicker from "react-native-modal-datetime-picker";
import DateSelect from 'react-native-datepicker';
import { TextInput } from 'react-native-gesture-handler';
import moment from "moment";
import * as Font from 'expo-font';
import { Container, Header, Label, Content, Item, Input, Textarea, DatePicker, Body, Title, Icon, Picker, Form } from 'native-base';

YellowBox.ignoreWarnings(['Remote debugger']);
var datepicker='';
var leavetype='';
var reason='';
var access_token_receieved='';
var chosenDate='';
var newDate='';
export default class SignUp5 extends React.Component{
    
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    headerShown: false,
  }
  state = {
    assetsLoaded: false,
    choosenLabel: '', choosenindex: ''
};
constructor(props) {
    super(props);
    this.state = { 
        chosenDate:'',
        date: '',
        selected: undefined,
        datepicker:'',
        reason:'',
        leavetype:'',
     };
    this.setDate = this.setDate.bind(this);
} 
setDate(newDate)
    {
      this.chosenDate= new Date(),
      this.setState({ chosenDate: newDate });
    }
    onIconclick(){
      //this.setDate();
      chosenDate= new Date()
      this.setState({ chosenDate: newDate });
    }
    onValueChange(value) 
    {
        this.setState({choosenLabel: itemValue, choosenIndex: itemIndex})
    }
async componentDidMount() {
    await Font.loadAsync({
        'proximanova': require('../assets/fonts/proximanova.otf')
    });

    this.setState({ assetsLoaded: true });
}

render()
{
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    const { navigation } = this.props.navigation; 
   
    const {assetsLoaded} = this.state;
    if( assetsLoaded ) 
    {
      return(<View style={styles.container}>
        <ScrollView>
     
      
       <View>
        <View style={{width:334,height:60,backgroundColor:'#FCDEE6',borderRadius:10,alignSelf:'center',flexDirection:'row',marginTop:44}}>
        <Text style={{fontSize:16,marginLeft:17,marginTop:18,fontWeight:'600',color:'#7D7D7D'}}>Friday, March 28</Text>
        <View
        style={{
            height:40,
            alignSelf:'center',
            marginLeft:24,
        borderLeftWidth: 2,
        borderLeftColor: '#A4A4A4',
        }}
        />
        <Text style={{fontSize:16,marginLeft:19,marginTop:18,fontWeight:'700',color:'#A4A4A4'}}>9:00 AM - 1:30 PM</Text>

        </View>
        <View style={{width:334,height:584,marginBottom:40,backgroundColor:'#FFFFFF',borderBottomRightRadius:10,borderBottomLeftRadius:10,alignSelf:'center',marginTop:-10}}>
        <Text style={{fontSize:20,marginLeft:17,marginTop:25,fontWeight:'600',color:'#141414'}}>Your previous day's EVV has not been completed yet!</Text>
        <Text style={{fontSize:13,marginLeft:17,marginTop:19,fontWeight:'600',color:'#7D7D7D'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ante sapien, convallis eget commodo quis</Text> 
        <View style={{flexDirection:'row',marginLeft:17,marginTop:30}}> 
        </View>   
     
        <Button   style={{marginTop:38,width:330,height:50,alignSelf:'center',backgroundColor:'#B20838',borderRadius:4,borderWidth:1,textAlign:'center'}}><Text style={{fontSize:16,alignSelf:'center',fontWeight:'600',color:'white'}}>Upload timesheet</Text></Button>
   
        <Text style={{fontSize:16, marginTop:48,fontWeight:'600',color:'#434343'}}>Take a note</Text>

        <Item    style={{marginLeft:15,marginRight:15,marginTop:0,width:330,height:91,alignSelf:'center',borderColor:'#E2E2E2',borderRadius:4,borderWidth:1,textAlign:'left'}} regular>
        <Input 
         placeholderTextColor={'#A4A4A4'}
        />
         </Item >

         <TouchableOpacity onPress={()=>this.props.navigation.navigate('AutomaticNoti')} >

         <Button   style={{marginTop:43,width:330,height:50,alignSelf:'center',backgroundColor:'#F5F5F5',borderColor:'#E5E5E5',borderRadius:4,borderWidth:1,textAlign:'center'}}><Text style={{fontSize:14,alignSelf:'center',fontWeight:'600',color:'black'}}>Upload file</Text></Button>
         </TouchableOpacity>

        </View>
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
    container1: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom:15,
        marginTop:15
      },
      middlecontainer: {
        flex: 1,
        flexDirection: 'row',
         paddingBottom:15,
      },
      btncontainer: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom:15,
      },
      
     
      
      containerLast: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom:25,
      },
      iconstyle:{
        fontSize: 25,
        color: '#A4A4A4',
        marginLeft:20,
      },
      taskItemContent: { 
        color: 'black',
        fontSize: 15,
        marginLeft:20,
      },
      dateItemContent:{
        color: 'black',
        fontSize: 15,
        marginLeft:10,
      },
      
      datepickerstyle:{color:'white'},
      
      buttontemContent: { 
        color: 'white',
        fontWeight:'bold',
        fontSize: 15,
   
      },
      
      bodyStyle:{
        borderWidth:0,
      },
      
      textbodyStyle:{
        borderWidth:0,
        alignContent:'flex-start',
      },
      
      taskItemHeader: { 
        color: 'black',
        fontSize: 25,
        alignContent:'flex-start',
        paddingBottom:15,
        paddingLeft:15,
      },
    
      buttonContainerRight: {
          flex: 1,
           marginLeft:15,
          marginTop:0,
          marginRight:15,
          marginBottom:0,
          backgroundColor: '#ffffff',
          height:60,
          borderRadius:5,
          borderColor:'#E2E2E2',
          borderWidth:2
      },
      
      textinputContainerRight: {
        flex: 1,
        alignContent:'flex-start',
        marginLeft:15,
        marginTop:0,
        marginRight:15,
        marginBottom:0,
        backgroundColor: '#ffffff',
        height:160,
        borderRadius:8,
        shadowColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
        elevation: 10,
      },
      
      viewstyle1:{
        alignItems:'flex-start',
      },
      viewstyle2:{
        alignItems:'flex-end',
      },
      
      calenderContainerRight: {
        flex: 1,
        marginLeft:15,
        marginTop:0,
        marginRight:5,
        marginBottom:0,
        height:60,
        borderRadius:5,
      },
      
      calenderContainerLeft: {
        flex: 1,
       
        marginLeft:5,
        marginTop:0,
        marginBottom:0,
        height:60,
        borderRadius:8,
      },
      
      calenderContainerRight1: {
        flex: 1,
        height:60,
        borderRadius:8,
      },
      
      textContainerRight: {
        flex: 1,
        marginLeft:15,
        marginTop:0,
        marginRight:15,
        marginBottom:0,
        backgroundColor: '#ffffff',
        height:120,
        borderRadius:8,
        shadowColor: "#000",
      shadowColor: "#000",
      shadowOffset: {
      width: 0,
      height: 0,
      },
      shadowOpacity: 0.50,
      shadowRadius: 12.35,
      elevation: 10,
      },
      
      btn:{
        borderRadius:0,
      
      },
      body:{
        paddingTop:15,
        paddingBottom:30,
        backgroundColor: '#efefef',
      }
  });
  



  