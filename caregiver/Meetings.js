import React ,{ useState}from 'react';
import { StyleSheet,YellowBox, Text, View,ScrollView,Image,ActivityIndicator,StatusBar,Platform,Alert,TouchableOpacity  } from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconAnt2 from 'react-native-vector-icons/Fontisto';
import IconAnt3 from 'react-native-vector-icons/Entypo';
import IconAnt4 from 'react-native-vector-icons/Feather';
import {Input,Item,Card} from 'native-base'
import { Button,RadioButton} from 'react-native-paper';
import * as Font from 'expo-font';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";
import { Container, Header, Content, Picker, Form ,CheckBox,ListItem,Body} from "native-base";
YellowBox.ignoreWarnings(['Remote debugger']);

export default class Meetings extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selected: undefined
          };
        YellowBox.ignoreWarnings([
          'Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'
        ]);
    }
    
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    headerShown: false,
  }
  state = {
    assetsLoaded: false,
    
};
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
      return(<View style={styles.container}>
        <ScrollView>
        <View style={{marginTop:0,height:20,backgroundColor:'#F3F3F3'}}>
      
       <View style={{flexDirection:'row'}}>
       <TouchableOpacity onPress={()=>this.props.navigation.navigate('ContactUs')} >  
      
       <IconAnt name="left" size={20} color='#A4A4A4' style={{marginTop:15, marginLeft:21}}/>
       </TouchableOpacity>
       </View>
        </View>

        <View style={{flexDirection:'row',width:334,marginLeft:17,height:50,backgroundColor:'white',borderRadius:4,alignSelf:'center',marginTop:30}}>
        <Text style={{fontSize:18,marginLeft:25,alignSelf:'center',fontWeight:'600',color:'#A4A4A4'}}>Charles Adkins</Text> 
  
         <Button   style={{alignSelf:'center',width:123,height:38,marginLeft:25,backgroundColor:'#FEF2F5',borderRadius:4,borderWidth:1,textAlign:'center'}}><Text style={{fontSize:10,marginLeft:5,fontWeight:'600',color:'#FF4B7D'}}>My Meetings</Text></Button>
      

        </View>
    
        <View style={{width:334,height:293,backgroundColor:'white',borderRadius:10,alignSelf:'center',marginTop:30}}>
        <Text style={{fontSize:12,marginLeft:17,marginTop:5,fontWeight:'600',color:'#7D7D7D'}}>March 25, 2020</Text>
        <Text style={{fontSize:18,marginLeft:17,marginTop:19,fontWeight:'600',color:'#434343'}}>Charles Adkins</Text> 
        <View style={{flexDirection:'row',marginLeft:17,marginTop:30}}> 
        <IconAnt name="home" size={15} color='#FF4B7D' />
        <Text style={{fontSize:12,marginLeft:10,fontWeight:'600',color:'#7D7D7D'}}>1536 S, 52nd St Philadelphia, PA 19143</Text>
        </View>   
        <View style={{flexDirection:'row',marginLeft:17,marginTop:10}}> 
        <IconAnt name="phone" size={15} color='#FF4B7D' />
        <Text style={{fontSize:12,marginLeft:10,fontWeight:'600',color:'#7D7D7D'}}>267-7307610</Text>
        </View>   
        <Text style={{fontSize:13,marginLeft:17,marginTop:25,fontWeight:'600',color:'#7D7D7D'}}>Meeting Time: Mar 24, 2020 | 01:30 PM</Text>
        <Button   style={{marginTop:23,width:138,height:40,marginLeft:20,backgroundColor:'#B20838',borderRadius:4,borderWidth:1,textAlign:'center'}}> <IconAnt4 name="map-pin" size={15} color='white' style={{marginLeft:5}} /><Text>   </Text><Text style={{fontSize:16,marginLeft:5,fontWeight:'600',color:'white'}}>MAP</Text></Button>
        </View>
  
        <View style={{width:334,height:293,backgroundColor:'white',borderRadius:10,alignSelf:'center',marginTop:30}}>
        <Text style={{fontSize:12,marginLeft:17,marginTop:5,fontWeight:'600',color:'#7D7D7D'}}>March 25, 2020</Text>
        <Text style={{fontSize:18,marginLeft:17,marginTop:19,fontWeight:'600',color:'#434343'}}>Charles Adkins</Text> 
        <View style={{flexDirection:'row',marginLeft:17,marginTop:30}}> 
        <IconAnt name="home" size={15} color='#FF4B7D' />
        <Text style={{fontSize:12,marginLeft:10,fontWeight:'600',color:'#7D7D7D'}}>1536 S, 52nd St Philadelphia, PA 19143</Text>
        </View>   
        <View style={{flexDirection:'row',marginLeft:17,marginTop:10}}> 
        <IconAnt name="phone" size={15} color='#FF4B7D' />
        <Text style={{fontSize:12,marginLeft:10,fontWeight:'600',color:'#7D7D7D'}}>267-7307610</Text>
        </View>   
        <Text style={{fontSize:13,marginLeft:17,marginTop:25,fontWeight:'600',color:'#7D7D7D'}}>Meeting Time: Mar 24, 2020 | 01:30 PM</Text>
        <Button   style={{marginTop:23,width:138,height:40,marginLeft:20,backgroundColor:'#B20838',borderRadius:4,borderWidth:1,textAlign:'center'}}> <IconAnt4 name="map-pin" size={15} color='white' style={{marginLeft:5}} /><Text>   </Text><Text style={{fontSize:16,marginLeft:5,fontWeight:'600',color:'white'}}>MAP</Text></Button>
        </View>
  
        <View style={{width:334,height:293,backgroundColor:'white',borderRadius:10,alignSelf:'center',marginTop:30}}>
        <Text style={{fontSize:12,marginLeft:17,marginTop:5,fontWeight:'600',color:'#7D7D7D'}}>March 25, 2020</Text>
        <Text style={{fontSize:18,marginLeft:17,marginTop:19,fontWeight:'600',color:'#434343'}}>Charles Adkins</Text> 
        <View style={{flexDirection:'row',marginLeft:17,marginTop:30}}> 
        <IconAnt name="home" size={15} color='#FF4B7D' />
        <Text style={{fontSize:12,marginLeft:10,fontWeight:'600',color:'#7D7D7D'}}>1536 S, 52nd St Philadelphia, PA 19143</Text>
        </View>   
        <View style={{flexDirection:'row',marginLeft:17,marginTop:10}}> 
        <IconAnt name="phone" size={15} color='#FF4B7D' />
        <Text style={{fontSize:12,marginLeft:10,fontWeight:'600',color:'#7D7D7D'}}>267-7307610</Text>
        </View>   
        <Text style={{fontSize:13,marginLeft:17,marginTop:25,fontWeight:'600',color:'#7D7D7D'}}>Meeting Time: Mar 24, 2020 | 01:30 PM</Text>
        <Button   style={{marginTop:23,width:138,height:40,marginLeft:20,backgroundColor:'#B20838',borderRadius:4,borderWidth:1,textAlign:'center'}}> <IconAnt4 name="map-pin" size={15} color='white' style={{marginLeft:5}} /><Text>   </Text><Text style={{fontSize:16,marginLeft:5,fontWeight:'600',color:'white'}}>MAP</Text></Button>
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
    headerText: {
      fontSize: 10,
      fontWeight: "bold"
    },
    menuContent: {
      color: "#000",
      fontWeight: "bold",
      padding: 2,
      fontSize: 20
    }
  });
  