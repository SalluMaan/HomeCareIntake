import React from 'react';
import { StyleSheet,YellowBox, Text, View,ScrollView,Image,ActivityIndicator,StatusBar,TouchableOpacity } from 'react-native';
import IconAnt from 'react-native-vector-icons/Feather';
import {Input,Item,Card} from 'native-base'
import { Button } from 'react-native-paper';
import IconAnt1 from 'react-native-vector-icons/AntDesign';
import * as Font from 'expo-font';
import { Container, Header, Content, Icon, Picker, Form,DatePicker} from "native-base";

YellowBox.ignoreWarnings(['Remote debugger']);

export default class Incident extends React.Component{
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    headerShown: false,
  }
  state = {
    assetsLoaded: false,
};
constructor(props) {
  super(props);
  this.state = {
    selected: undefined
  };
  this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
}
setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
onValueChange(value) {
  this.setState({
    selected: value
  });
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
       <View>
       <IconAnt1 name="left" size={20} color='#A4A4A4' style={{marginRight:5}}/>
        
        </View>
      
        </View>

        <View style={{flexDirection:'row',width:330,marginLeft:10,height:50,borderWidth:1,borderColor:'#E5E5E5',backgroundColor:'white',borderRadius:4,alignSelf:'center',marginTop:30}}>
        <Button   style={{alignSelf:'center',width:140,height:38,marginLeft:25,backgroundColor:'#FEF2F5',borderRadius:4,borderWidth:1,textAlign:'center'}}><Text style={{fontSize:10,marginLeft:5,fontWeight:'600',color:'#FF4B7D'}}>New Report</Text></Button>
        <Text style={{fontSize:14,marginLeft:25,alignSelf:'center',fontWeight:'600',color:'#A4A4A4'}}>Existing Reports</Text> 
        </View>

      
         <Text style={{fontSize:16,marginTop:200, marginTop:19,marginLeft:20,fontWeight:'400',color:'#7D7D7D'}}>Reminder Title</Text>
      
         <Item    style={{marginLeft:15,marginRight:15,marginTop:0,width:334,height:50,alignSelf:'center',borderColor:'#E2E2E2',borderRadius:4,borderWidth:1,textAlign:'left'}} regular>
        <Input 
         placeholderTextColor={'#A4A4A4'}
        />
         </Item >

       

        <Item    style={{marginLeft:15,marginRight:15,marginTop:20,width:334,height:91,alignSelf:'center',borderColor:'#E2E2E2',borderRadius:4,borderWidth:1,textAlign:'left'}} regular>
        <Input placeholder="Your Message"
         placeholderTextColor={'#A4A4A4'}
        />
        </Item >
       
        <Button   style={{marginTop:53,width:334,height:50,alignSelf:'center',backgroundColor:'#E3E3E3',borderRadius:4,borderWidth:1,textAlign:'center'}}><Text style={{fontSize:16,alignSelf:'center',fontWeight:'600',color:'#434343'}}>Upload file</Text></Button>
    

        <TouchableOpacity onPress={()=>this.props.navigation.navigate('IntakeCoList2')} >

       <Button   style={{marginTop:23,width:334,height:50,alignSelf:'center',backgroundColor:'#B20838',borderRadius:4,borderWidth:1,textAlign:'center'}}><Text style={{fontSize:16,alignSelf:'center',fontWeight:'600',color:'white'}}>Set a new Reminder</Text></Button>
       </TouchableOpacity>
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
      backgroundColor: '#fff',
    },
  });
  