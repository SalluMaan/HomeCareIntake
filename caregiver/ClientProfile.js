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
YellowBox.ignoreWarnings(['Remote debugger']);

export default class ClientProfile extends React.Component{
    constructor(props){
        super(props);
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

       <IconAnt name="left" size={20} color='#A4A4A4' style={{marginTop:15, marginLeft:21}}/>
       <TouchableOpacity onPress={()=>this.props.navigation.navigate('ViewSchedule')} >
       <IconAnt4 name="send-circle" size={40} color='#FFAFC5' style={{marginTop:15, marginLeft:270}}/>
       </TouchableOpacity>

        </View>
        <View style={{flexDirection:'row'}}>
        <Image  source={require('../assets/img2.png')} style={{width:79,height:79,marginTop:10,marginBottom:69,marginLeft:21, borderRadius: 150 / 2,overflow: "hidden",}}></Image> 
        <View>
        <Text style={{fontSize:16,marginLeft:19,marginTop:23,fontWeight:'600',color:'#FFFFFF'}}>Jerry Jackson</Text>
        <Text style={{fontSize:12,marginLeft:19,marginTop:13,fontWeight:'600',color:'#FFFFFF'}}>Philadelphia</Text>
        </View>

         </View>
        </View>

        <View style={{marginTop:-40,width:340,height:197,backgroundColor:'white',alignSelf:'center',borderColor:'#BEBEBEBA',borderRadius:10,borderWidth:1}}>
        <Text style={{fontSize:14,marginLeft:10,marginTop:24,fontWeight:'600',color:'#A4A4A4'}}>Caregiver name</Text>
        <Text style={{fontSize:14,marginLeft:10,marginTop:24,fontWeight:'600',color:'#A4A4A4'}}>Tina Bauer, Newport | +11-12121212</Text>
        
        <View style={{flexDirection:'row'}}>
        <Button   style={{marginTop:15,width:150,height:34,marginLeft:10,backgroundColor:'#FEF2F5',borderRadius:4,borderWidth:1,textAlign:'center'}}><Text style={{fontSize:11,alignSelf:'center',fontWeight:'600',color:'#FF4B7D'}}>View Schedule</Text></Button>
        <Button   style={{marginTop:15,width:150,height:34,marginLeft:10,backgroundColor:'#FEF2F5',borderRadius:4,borderWidth:1,textAlign:'center'}}><Text style={{fontSize:11,alignSelf:'center',fontWeight:'600',color:'#FF4B7D'}}>Edit Schedule</Text></Button>
       
        </View>
        <Button   style={{marginTop:15,width:200,height:34,marginLeft:10,backgroundColor:'#FEF2F5',borderRadius:4,borderWidth:1,textAlign:'center'}}><Text style={{fontSize:11,alignSelf:'center',fontWeight:'600',color:'#FF4B7D'}}>Recurring Schedule</Text></Button>
       
        </View>


      
      
  
          <View  style={{backgroundColor: '#F3F3F3',width:334,height:50,flexDirection:'row',marginTop:25,alignSelf:'center'}}>
             <Text style={{fontSize:14,marginLeft:15,alignSelf:'center',fontWeight:'700',color:'#434343'}}>Edit Profile</Text> 
             <IconAnt3 name="chevron-small-right" size={30} color='#A4A4A4' style={{alignSelf:'center',marginLeft:190}}/> 
    
            </View>

       
            <View  style={{backgroundColor: '#F3F3F3',width:334,height:50,flexDirection:'row',marginTop:18,alignSelf:'center'}}>
             <Text style={{fontSize:14,marginLeft:15,alignSelf:'center',fontWeight:'700',color:'#434343'}}>Assessment</Text> 
             <IconAnt3 name="chevron-small-right" size={30} color='#A4A4A4' style={{alignSelf:'center',marginLeft:180}}/> 
    
            </View>

            <View  style={{backgroundColor: '#F3F3F3',width:334,height:50,flexDirection:'row',marginTop:18,alignSelf:'center'}}>
             <Text style={{fontSize:14,marginLeft:15,alignSelf:'center',fontWeight:'700',color:'#434343'}}>Home Safety Assessment</Text> 
             <IconAnt3 name="chevron-small-right" size={30} color='#A4A4A4' style={{alignSelf:'center',marginLeft:98}}/> 
    
            </View>


            <View  style={{backgroundColor: '#F3F3F3',width:334,height:50,flexDirection:'row',marginTop:18,alignSelf:'center'}}>
             <Text style={{fontSize:14,marginLeft:15,alignSelf:'center',fontWeight:'700',color:'#434343'}}>MCO</Text> 
             <IconAnt3 name="chevron-small-right" size={30} color='#A4A4A4' style={{alignSelf:'center',marginLeft:230}}/> 
    
            </View>
           
            <View  style={{backgroundColor: '#F3F3F3',width:334,height:50,flexDirection:'row',marginTop:18,marginBottom:18,alignSelf:'center'}}>
             <Text style={{fontSize:14,marginLeft:15,alignSelf:'center',fontWeight:'700',color:'#434343'}}>Work History</Text> 
             <IconAnt3 name="chevron-small-right" size={30} color='#A4A4A4' style={{alignSelf:'center',marginLeft:180}}/> 
    
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
  