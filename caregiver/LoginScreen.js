import React from 'react';
import { StyleSheet,YellowBox, Text, View,ScrollView,ActivityIndicator,StatusBar} from 'react-native';
import IconAnt from 'react-native-vector-icons/Feather';
import {Input,Item} from 'native-base'
import { Button } from 'react-native-paper';
import * as Font from 'expo-font';
YellowBox.ignoreWarnings(['Remote debugger']);

export default class LoginScreen extends React.Component{
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
        return(
        
        <View style={styles.container}>
          <ScrollView>
          <Text style={styles.logintxt}>Login</Text>
          <Text style={styles.logintitletxt}>Lorem ipsum dolor sit amet consectetur adi</Text>
        
          <Item    style={styles.inputtxt1} regular>
          <Input placeholder="Email address"
           placeholderTextColor={'#A4A4A4'}/>
          </Item >
  
          <Item    style={styles.inputtxt2} regular>
          <Input placeholder="Password"
           placeholderTextColor={'#A4A4A4'}  />
           <IconAnt name="eye-off" size={20} color='#A4A4A4' style={{marginRight:5}}/>
          </Item >
  
  
          
  
         <Button onPress={()=>this.props.navigation.navigate('Reset')} style={styles.submitbtn}><Text style={styles.btntxt}>LOGIN</Text></Button>
        
        
         <Text style={styles.resetpasstxt}>Reset Password?</Text>
         
          </ScrollView>
        </View>
      );
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
    logintxt:{
      fontSize:24, marginTop:125,alignSelf:'center',fontWeight:'600'
    },
    logintitletxt:{
      fontSize:14, marginTop:72,alignSelf:'center',fontWeight:'300',color:'#A4A4A4'
    },
    inputtxt1:{
      marginLeft:15,marginRight:15,marginTop:110,width:334,height:50,alignSelf:'center',borderColor:'#E2E2E2',borderRadius:4,borderWidth:1,textAlign:'left'
    },
    inputtxt2:{
      marginLeft:15,marginRight:15,marginTop:23,width:334,height:50,alignSelf:'center',borderColor:'#E2E2E2',borderRadius:4,borderWidth:1,textAlign:'left'    
    },
    submitbtn:{
      marginTop:23,width:334,height:50,alignSelf:'center',backgroundColor:'#B20838',borderRadius:4,borderWidth:1,textAlign:'center'
    },
    btntxt:{
      fontSize:16,alignSelf:'center',fontWeight:'600',color:'white'
    },
    resetpasstxt:{
      fontSize:14, marginTop:52,alignSelf:'center',fontWeight:'600',color:'#FF4B7D',marginBottom:139
    }
  });
  