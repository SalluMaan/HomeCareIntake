import React ,{ useState}from 'react';
import { StyleSheet,YellowBox,ImageBackground, Text, View,ScrollView,Image,ActivityIndicator,StatusBar,Platform,Alert,TouchableOpacity  } from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconAnt2 from 'react-native-vector-icons/Fontisto';
import IconAnt3 from 'react-native-vector-icons/Entypo';
import IconAnt4 from 'react-native-vector-icons/Feather';
import {Input,Item,Card} from 'native-base'
import { Button,RadioButton} from 'react-native-paper';
import * as Font from 'expo-font';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";
import { Container, Header, Content, Picker, Form ,CheckBox,ListItem,Body,Label} from "native-base";
YellowBox.ignoreWarnings(['Remote debugger']);

export default class FirstScreen extends React.Component{
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
        <View style={{marginTop:0,height:20,backgroundColor:'white'}}>
      
       <View style={{flexDirection:'row'}}>
       <Text style={{fontSize:14,marginTop:23,marginLeft:290,fontWeight:'700',color:'#434343'}}>Skip</Text>
         
       <IconAnt name="right" size={20} color='#A4A4A4' style={{marginTop:23, marginLeft:10}}/>
        </View>

        </View>

        <View style={{width:250,marginLeft:50,marginTop:300,alignSelf:'flex-start'}}>
         <Text style={{fontSize:24,marginTop:50,textAlign:'center',fontWeight:'700',color:'#434343'}}>Monthly Quiz, Training, Certifications etc.</Text>
         
         
    
          <Text style={{fontSize:15,marginTop:31,textAlign:'center',fontWeight:'400',color:'#A4A4A4'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel metus ornare urna gravida pellentesque</Text>
          </View>
         
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignUp')} >
     <Button   style={{marginTop:83,width:334,marginBottom:30,height:50,alignSelf:'center',backgroundColor:'#B20838',borderRadius:4,borderWidth:1,textAlign:'center'}}><Text style={{fontSize:16,alignSelf:'center',fontWeight:'600',color:'white'}}>Get started</Text></Button>
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
  