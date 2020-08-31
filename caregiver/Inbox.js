import React from 'react';
import { StyleSheet,YellowBox, Text, View,ScrollView,Image,ActivityIndicator,StatusBar,TouchableOpacity } from 'react-native';
import IconAnt2 from 'react-native-vector-icons/Fontisto';
import IconAnt from 'react-native-vector-icons/AntDesign';
import {Input,Item,Card} from 'native-base'
import { Button } from 'react-native-paper';
import * as Font from 'expo-font';
YellowBox.ignoreWarnings(['Remote debugger']);

export default class Inbox extends React.Component{
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
        <View style={{marginTop:13,marginLeft:20,flexDirection:'row'}}>
       <View>
       <IconAnt name="left" size={20} color='#A4A4A4' style={{marginRight:5}}/>
        
        </View>
        <View >
       </View>
        </View>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Notification02')} >
     
        <Text style={{fontSize:18,marginLeft:20,marginTop:23,fontWeight:'600',color:'#141414'}}>Inbox</Text>
        </TouchableOpacity>

        <View style={{width:334,height:174,backgroundColor:'#FFFFFF',borderRadius:7,alignSelf:'center',marginTop:17,flexDirection:'row'}}>
        <View >
        <View style={{flexDirection:'row'}}>
        <IconAnt2 name="ellipse" size={40} color='#FF88AF' style={{marginLeft:18,marginTop:15}}/>
        <Text style={{fontSize:14,marginLeft:13,marginTop:22,fontWeight:'700',color:'#434343'}}>Nick Lawson</Text>
        <Text style={{fontSize:10,marginLeft:110,marginTop:19,fontWeight:'700',color:'#BBBBBB'}}>04/05/2020</Text> 
        </View>
        <Text style={{fontSize:14,marginLeft:18,marginTop:27,fontWeight:'400',color:'#A4A4A4'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla el metus ornare urna gravida pellentesque quis eget urna. Sed tortor orci.</Text>
       </View>
        </View>
        


        <View style={{width:334,height:174,backgroundColor:'#FFFFFF',borderRadius:7,alignSelf:'center',marginTop:17,flexDirection:'row'}}>
        <View >
        <View style={{flexDirection:'row'}}>
        <IconAnt2 name="ellipse" size={40} color='#FF88AF' style={{marginLeft:18,marginTop:15}}/>
        <Text style={{fontSize:14,marginLeft:13,marginTop:22,fontWeight:'700',color:'#434343'}}>Nick Lawson</Text>
        <Text style={{fontSize:10,marginLeft:110,marginTop:19,fontWeight:'700',color:'#BBBBBB'}}>04/05/2020</Text> 
        </View>
        <Text style={{fontSize:14,marginLeft:18,marginTop:27,fontWeight:'400',color:'#A4A4A4'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla el metus ornare urna gravida pellentesque quis eget urna. Sed tortor orci.</Text>
       </View>
        </View>
        



        <View style={{width:334,height:174,backgroundColor:'#FFFFFF',borderRadius:7,alignSelf:'center',marginTop:17,flexDirection:'row'}}>
        <View >
        <View style={{flexDirection:'row'}}>
        <IconAnt2 name="ellipse" size={40} color='#FF88AF' style={{marginLeft:18,marginTop:15}}/>
        <Text style={{fontSize:14,marginLeft:13,marginTop:22,fontWeight:'700',color:'#434343'}}>Nick Lawson</Text>
        <Text style={{fontSize:10,marginLeft:110,marginTop:19,fontWeight:'700',color:'#BBBBBB'}}>04/05/2020</Text> 
        </View>
        <Text style={{fontSize:14,marginLeft:18,marginTop:27,fontWeight:'400',color:'#A4A4A4'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla el metus ornare urna gravida pellentesque quis eget urna. Sed tortor orci.</Text>
       </View>
        </View>
        



        <View style={{width:334,height:174,backgroundColor:'#FFFFFF',borderRadius:7,alignSelf:'center',marginTop:17,flexDirection:'row'}}>
        <View >
        <View style={{flexDirection:'row'}}>
        <IconAnt2 name="ellipse" size={40} color='#FF88AF' style={{marginLeft:18,marginTop:15}}/>
        <Text style={{fontSize:14,marginLeft:13,marginTop:22,fontWeight:'700',color:'#434343'}}>Nick Lawson</Text>
        <Text style={{fontSize:10,marginLeft:110,marginTop:19,fontWeight:'700',color:'#BBBBBB'}}>04/05/2020</Text> 
        </View>
        <Text style={{fontSize:14,marginLeft:18,marginTop:27,fontWeight:'400',color:'#A4A4A4'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla el metus ornare urna gravida pellentesque quis eget urna. Sed tortor orci.</Text>
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
  