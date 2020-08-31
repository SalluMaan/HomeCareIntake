import React from 'react';
import { StyleSheet,YellowBox, Text, View,ScrollView,Image,ActivityIndicator,StatusBar,TouchableOpacity } from 'react-native';
import IconAnt from 'react-native-vector-icons/Feather';
import {Input,Item,Card} from 'native-base'
import { Button } from 'react-native-paper';
import IconAnt1 from 'react-native-vector-icons/AntDesign';
import * as Font from 'expo-font';
import { Container, Header, Content, Icon, Picker, Form,DatePicker} from "native-base";

YellowBox.ignoreWarnings(['Remote debugger']);

export default class CareQuiz extends React.Component{
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
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('WeeklySurvery1')} >
 
        <Text style={{fontSize:18,marginLeft:21,marginTop:25,fontWeight:'600',color:'#141414'}}>Care Quiz</Text>
        </TouchableOpacity>

        <View style={{width:334,height:271,backgroundColor:'#E1F4FE',borderRadius:7,alignSelf:'center',marginTop:25}}>
        <Text style={{fontSize:12,marginLeft:17,marginTop:25,fontWeight:'600',color:'#A4A4A4'}}>Friday, March 26, 2020</Text>
        <Text style={{fontSize:20,marginLeft:17,marginTop:25,fontWeight:'600',color:'#434343'}}>Title goes here</Text>
        <Text style={{fontSize:12,marginLeft:17,marginTop:10,fontWeight:'600',color:'#7D7D7D'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel metus ornare urna gravida pellentesque quis eget urna. Sed tortor orci, aliquam nec sapien non, tempor tristique libero.</Text>
        <Button   style={{marginTop:23,marginBottom:50,width:138,height:34,marginLeft:17,backgroundColor:'#B20838',borderRadius:4,borderWidth:1,textAlign:'center'}}><Text style={{fontSize:10,alignSelf:'center',fontWeight:'600',color:'white'}}>Participate</Text></Button>
   
        </View>
       
        <View style={{width:334,height:271,marginBottom:50,backgroundColor:'#FFF4EF',borderRadius:7,alignSelf:'center',marginTop:25}}>
        <Text style={{fontSize:12,marginLeft:17,marginTop:25,fontWeight:'600',color:'#A4A4A4'}}>Friday, March 26, 2020</Text>
        <Text style={{fontSize:20,marginLeft:17,marginTop:25,fontWeight:'600',color:'#434343'}}>Title goes here</Text>
        <Text style={{fontSize:12,marginLeft:17,marginTop:10,fontWeight:'600',color:'#7D7D7D'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel metus ornare urna gravida pellentesque quis eget urna. Sed tortor orci, aliquam nec sapien non, tempor tristique libero.</Text>
        <Button   style={{marginTop:23,marginBottom:50,width:138,height:34,marginLeft:17,backgroundColor:'#D6C8C2',borderRadius:4,borderWidth:1,textAlign:'center'}}><Text style={{fontSize:10,alignSelf:'center',fontWeight:'600',color:'white'}}>Participate</Text></Button>
   
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
  