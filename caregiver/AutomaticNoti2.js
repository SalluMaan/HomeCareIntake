import React ,{ useState}from 'react';
import { StyleSheet,YellowBox, Text, View,ScrollView,Image,ActivityIndicator,StatusBar,Platform,Alert,TouchableOpacity } from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconAnt2 from 'react-native-vector-icons/Fontisto';
import IconAnt3 from 'react-native-vector-icons/Entypo';
import IconAnt4 from 'react-native-vector-icons/MaterialCommunityIcons';
import {Input,Item,Card} from 'native-base'
import { Button,RadioButton} from 'react-native-paper';
import * as Font from 'expo-font';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";
import { Container, Header, Content, DatePicker} from 'native-base';
YellowBox.ignoreWarnings(['Remote debugger']);

export default class AutomaticNoti2 extends React.Component{
    constructor(props){
        super(props);
        this.state = { chosenDate: new Date() };
        this.setDate = this.setDate.bind(this);
        YellowBox.ignoreWarnings([
          'Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'
        ]);
    }
    
      setDate(newDate) {
        this.setState({ chosenDate: newDate });
      }
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
        <View style={{marginTop:0,height:197,backgroundColor:'#FF4B7D'}}>
      
       <View style={{flexDirection:'row'}}>

       <IconAnt name="left" size={20} color='white' style={{marginTop:15, marginLeft:21}}/>
       <Text style={{fontSize:18,marginLeft:19,marginTop:15,fontWeight:'600',color:'#FFFFFF'}}>Electronic Visit Verification</Text>
        
        </View>
        
        <View style={{flexDirection:'row'}}>
        <Image  source={require('../assets/img2.png')} style={{width:79,height:79,marginTop:10,marginBottom:69,marginLeft:21, borderRadius: 150 / 2,overflow: "hidden",}}></Image> 
        <View>
        <Text style={{fontSize:20,marginLeft:19,marginTop:23,fontWeight:'600',color:'#FFFFFF'}}>Juliette Adams</Text>
        <Text style={{fontSize:12,marginLeft:19,marginTop:13,fontWeight:'600',color:'#FFFFFF'}}>Philadelphia</Text>
        </View>

         </View>
        </View>

        <View style={{marginTop:-40,width:340,marginBottom:50,height:350,backgroundColor:'white',alignSelf:'center',borderColor:'#BEBEBEBA',borderRadius:10,borderWidth:1}}>
     
        <Text style={{fontSize:20,textAlign:'center',marginTop:35,fontWeight:'600',color:'#141414'}}>Your work is in progress!</Text>
        <Text style={{fontSize:20,textAlign:'center',marginTop:35,fontWeight:'400',color:'#A4A4A4'}}>Check-in 9:30 AM</Text>
      
        <Text style={{fontSize:12,textAlign:'center',marginTop:35,fontWeight:'600',color:'#434343'}}>YOU'VE BEEN WORKING FOR</Text>
        <Text style={{fontSize:28,textAlign:'center',marginTop:35,fontWeight:'400',color:'#A4A4A4'}}>2h 35m 34s</Text>
    

        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Stack2')} >

        <Button   style={{marginTop:30,marginBottom:50,width:330,height:50,alignSelf:'center',backgroundColor:'#B20838',borderRadius:4,borderWidth:1,textAlign:'center'}}><Text style={{fontSize:16,alignSelf:'center',fontWeight:'600',color:'white'}}>Check-Out</Text></Button>
        </TouchableOpacity>

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
  