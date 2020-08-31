import React from 'react';
import { StyleSheet,YellowBox, Text, View,ScrollView,Image,ActivityIndicator,StatusBar,TouchableOpacity } from 'react-native';
import IconAnt from 'react-native-vector-icons/Feather';
import {Input,Item,Card} from 'native-base'
import { Button } from 'react-native-paper';
import * as Font from 'expo-font';
YellowBox.ignoreWarnings(['Remote debugger']);

export default class ResetPassword extends React.Component{
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
            
       
        <Text style={{fontSize:24, marginTop:125,alignSelf:'center',fontWeight:'600'}}>Reset Password</Text>
        
        <Item    style={{marginLeft:15,marginRight:15,marginTop:169,width:334,height:50,alignSelf:'center',borderColor:'#E2E2E2',borderRadius:4,borderWidth:1,textAlign:'left'}} regular>
        <Input placeholder="Password"
         placeholderTextColor={'#A4A4A4'}

        />
           
         <IconAnt name="eye-off" size={20} color='#A4A4A4' style={{marginRight:5}}/>
       
        </Item >
     
        <Item    style={{marginLeft:15,marginRight:15,marginTop:23,width:334,height:50,alignSelf:'center',borderColor:'#E2E2E2',borderRadius:4,borderWidth:1,textAlign:'left'}} regular>
       

        <Input placeholder="Confirm Password"
         placeholderTextColor={'#A4A4A4'}

        />
         <IconAnt name="eye-off" size={20} color='#A4A4A4' style={{marginRight:5}}/>
        </Item >


        <TouchableOpacity onPress={()=>this.props.navigation.navigate('ResetPassSucc')} >

       <Button   style={{marginTop:23,width:334,height:50,alignSelf:'center',backgroundColor:'#B20838',borderRadius:4,borderWidth:1,textAlign:'center'}}><Text style={{fontSize:16,alignSelf:'center',fontWeight:'600',color:'white'}}>set new password</Text></Button>
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
  });
  