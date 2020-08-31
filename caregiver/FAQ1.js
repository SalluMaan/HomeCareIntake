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
import { Container, Header, Content, Picker, Form ,CheckBox,ListItem,Body,Label} from "native-base";
YellowBox.ignoreWarnings(['Remote debugger']);

export default class FAQ1 extends React.Component{
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
  
       
       
          <Text style={{fontSize:16,marginTop:50,marginLeft:21,fontWeight:'700',color:'#434343'}}>The facts about long-term care</Text>
        

          <Text style={{fontSize:14,marginTop:31,marginLeft:21,fontWeight:'400',color:'#A4A4A4'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, purus ac consectetur aliquam, libero est pulvinar dui, ac porta justo ante at lacus. Aliquam vitae tellus mi.</Text>
    
          <Text style={{fontSize:16,marginTop:50,marginLeft:21,fontWeight:'700',color:'#434343'}}>When should you buy long-term care insurance?</Text>
          <Text style={{fontSize:14,marginTop:31,marginLeft:21,fontWeight:'400',color:'#A4A4A4'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, purus ac consectetur aliquam, libero est pulvinar dui, ac porta justo ante at lacus. Aliquam vitae tellus mi.</Text>
    
          <Text style={{fontSize:16,marginTop:50,marginLeft:21,fontWeight:'700',color:'#434343'}}>The Facts About Long-Term Care</Text>
          <Text style={{fontSize:14,marginTop:31,marginLeft:21,fontWeight:'400',color:'#A4A4A4'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, purus ac consectetur aliquam, libero est pulvinar dui, ac porta justo ante at lacus. Aliquam vitae tellus mi.</Text>
    

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
  