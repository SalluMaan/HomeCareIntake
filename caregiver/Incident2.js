import React from 'react';
import { StyleSheet,YellowBox, Text, View,ScrollView,Image,ActivityIndicator,StatusBar,TouchableOpacity } from 'react-native';
import IconAnt from 'react-native-vector-icons/Feather';
import {Input,Item,Card} from 'native-base'
import { Button } from 'react-native-paper';
import IconAnt1 from 'react-native-vector-icons/AntDesign';
import * as Font from 'expo-font';
import { Container, Header, Content, Icon, Picker, Form,DatePicker} from "native-base";

YellowBox.ignoreWarnings(['Remote debugger']);

export default class Incident2 extends React.Component{
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
        <Text style={{fontSize:14,marginLeft:25,alignSelf:'center',fontWeight:'600',color:'#A4A4A4'}}>New Report</Text> 
      
        <Button   style={{alignSelf:'center',width:140,height:38,marginLeft:50,backgroundColor:'#FEF2F5',borderRadius:4,borderWidth:1,textAlign:'center'}}><Text style={{fontSize:10,marginLeft:5,fontWeight:'600',color:'#FF4B7D'}}>Existing Reports</Text></Button>
        </View>

        <View style={{width:334,height:339,backgroundColor:'#E1F4FE',borderRadius:7,alignSelf:'center',marginTop:25}}>
        <Text style={{fontSize:12,marginLeft:17,marginTop:25,fontWeight:'600',color:'#A4A4A4'}}>Friday, March 26, 2020</Text>
      
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('IntakeCoList2')} >

        <Text style={{fontSize:20,marginLeft:17,marginTop:25,fontWeight:'600',color:'#434343'}}>Title goes here</Text>
        </TouchableOpacity>
      
        <Text style={{fontSize:12,marginLeft:17,marginTop:10,fontWeight:'600',color:'#7D7D7D'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel metus ornare urna gravida pellentesque quis eget urna. Sed tortor orci, aliquam nec sapien non, tempor tristique libero.</Text>
      
        <View style={{flexDirection:'row',width:297,height:120,backgroundColor:'white',borderRadius:7,alignSelf:'center',marginTop:25}}>
        <IconAnt1 name="right" size={20} color='#A4A4A4' style={{alignSelf:'center',marginLeft:270}}/>
        </View>
        </View>
       
        <View style={{width:334,height:339,marginBottom:50,backgroundColor:'#FFF4EF',borderRadius:7,alignSelf:'center',marginTop:25}}>
        <Text style={{fontSize:12,marginLeft:17,marginTop:25,fontWeight:'600',color:'#A4A4A4'}}>Friday, March 26, 2020</Text>
        <Text style={{fontSize:20,marginLeft:17,marginTop:25,fontWeight:'600',color:'#434343'}}>Title goes here</Text>
        <Text style={{fontSize:12,marginLeft:17,marginTop:10,fontWeight:'600',color:'#7D7D7D'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel metus ornare urna gravida pellentesque quis eget urna. Sed tortor orci, aliquam nec sapien non, tempor tristique libero.</Text>
        <View style={{flexDirection:'row',width:297,height:120,backgroundColor:'white',borderRadius:7,alignSelf:'center',marginTop:25}}>
        <IconAnt1 name="right" size={20} color='#A4A4A4' style={{alignSelf:'center',marginLeft:270}}/>
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
      backgroundColor: '#fff',
    },
  });
  