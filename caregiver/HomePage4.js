import React from 'react';
import { StyleSheet,YellowBox, Text, View,ScrollView,Image,ActivityIndicator,StatusBar,TouchableOpacity } from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconAnt1 from 'react-native-vector-icons/Entypo';
import IconAnt2 from 'react-native-vector-icons/MaterialIcons';

import {Input,Item,Card} from 'native-base'
import { Button } from 'react-native-paper';
import * as Font from 'expo-font';
YellowBox.ignoreWarnings(['Remote debugger']);

export default class HomePage4 extends React.Component{
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    headerShown: false,
  }
  state = {
    assetsLoaded: false,
};

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
     
      
        <View style={{width:334,height:420,backgroundColor:'#FFFFFF',borderRadius:7,alignSelf:'center',marginTop:25}}>
      
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('SetRemainder')} >
        <Text style={{fontSize:12,marginLeft:17,marginTop:40,fontWeight:'600',color:'#A4A4A4'}}>Friday, March 26, 2020</Text>
        </TouchableOpacity>
      
        <Text style={{fontSize:20,marginLeft:17,marginTop:40,fontWeight:'600',color:'#434343'}}>Hi Talal, Just want to grab your attention here.</Text>
        <Text style={{fontSize:14,marginLeft:17,marginTop:20,fontWeight:'600',color:'#7D7D7D'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel metus ornare urna gravida pellentesque quis eget urna. Sed tortor orci, aliquam nec sapien non, tempor tristique libero.</Text>
        <Text style={{fontSize:14,marginLeft:17,marginTop:20,fontWeight:'600',color:'#7D7D7D'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel metus ornare urna gravida pellentesque quis eget urna. Sed tortor orci, aliquam nec sapien non, tempor tristique libero.</Text>
      
        <View style={{borderBottomWidth:1,borderBottomColor:'#7D7D7D',width:334,marginTop:50}}  />
        <View style={{flexDirection:'row',marginLeft:230,marginTop:10}}> 
        <IconAnt2 name="edit" size={25} color='#A4A4A4' style={{marginLeft:0}} />
        <IconAnt2 name="delete" size={25} color='#A4A4A4' style={{marginLeft:15}} />
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
  });
  