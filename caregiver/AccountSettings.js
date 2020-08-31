import React ,{ useState}from 'react';
import { StyleSheet,YellowBox, Text, View,ScrollView,Image,ActivityIndicator,StatusBar,Platform,Alert,TouchableOpacity } from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconAnt2 from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAnt3 from 'react-native-vector-icons/Entypo';
import IconAnt4 from 'react-native-vector-icons/Feather';
import {Input,Item,Card} from 'native-base'
import { Button,RadioButton} from 'react-native-paper';
import * as Font from 'expo-font';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";
import { Container, Header, Content, Picker, Form ,CheckBox,ListItem,Body,Label} from "native-base";
YellowBox.ignoreWarnings(['Remote debugger']);

export default class AccountSettings extends React.Component{
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
       <View style={{flexDirection:'row'}}>
       <IconAnt name="left" size={20} color='#A4A4A4' style={{marginTop:15, marginLeft:21}}/>
        </View>
   
        <Text style={{fontSize:18,marginTop:20,marginLeft:21,fontWeight:'700',color:'#141414'}}>Account settings</Text>
      
        <Form>
            <Item style={{marginTop:30}}  stackedLabel last>
              <Label style={{color:'#A4A4A4'}} >FULL NAME</Label>
              <Input placeholder="Juliette Adams" />
              <IconAnt name="edit" size={20} color='#A4A4A4' style={{marginTop:-30, marginLeft:270}}/>
      
            </Item>
            <Item style={{marginTop:10}} stackedLabel last>
              <Label style={{color:'#A4A4A4'}}>CHANGE PASSWORD</Label>
              <Input placeholder="*************" />
              <IconAnt name="edit" size={20} color='#A4A4A4' style={{marginTop:-30, marginLeft:270}}/>
            </Item>
          </Form>

          <View style={{flexDirection:'row',marginTop:40}}>

          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Incident')} >
     
          <Text style={{fontSize:18,marginTop:20,marginLeft:21,fontWeight:'700',color:'#141414'}}>Account settings</Text>
          </TouchableOpacity>

         <IconAnt2 name="toggle-switch" size={60} color='#FFC8D7' style={{marginTop:10, marginLeft:130}}/>
        </View>
        
          <View style={{backgroundColor:'#7D7D7D',borderWidth:0.5,marginTop:40}}>
         </View>

          <TouchableOpacity onPress={()=>this.props.navigation.navigate('TOS')} >
          <Text style={{fontSize:16,marginTop:20,marginLeft:21,fontWeight:'700',color:'#434343'}}>Terms of Service</Text>
          </TouchableOpacity>

          <Text style={{fontSize:14,marginTop:31,marginLeft:21,fontWeight:'400',color:'#A4A4A4'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ante sapien, convallis eget commodo quis, finibus tempor nibh. Maecenas efficitur blandit eleifend. Duis luctus iaculis erat sit amet vestibulum.</Text>
    
          <Text style={{fontSize:14,marginTop:50,marginBottom:50,marginLeft:21,fontWeight:'400',color:'#A4A4A4'}}>Read More</Text>
    
        
       
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
  