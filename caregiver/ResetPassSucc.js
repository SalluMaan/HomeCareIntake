import React from 'react';
import { StyleSheet,YellowBox, Text, View,ScrollView,Image,ActivityIndicator,StatusBar,TouchableOpacity} from 'react-native';
import IconAnt from 'react-native-vector-icons/Feather';
import {Input,Item,Card} from 'native-base'
import { Button } from 'react-native-paper';
import * as Font from 'expo-font';
YellowBox.ignoreWarnings(['Remote debugger']);

export default class ResetPassSucc extends React.Component{
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
        <Image  source={require('../assets/check.png')} style={{width:136,height:136,marginTop:117,alignSelf:'center'}}>
        </Image>
       
        <Text style={{fontSize:24, marginTop:107,alignSelf:'center',fontWeight:'600',fontFamily:'proximanova'}}>Reset Password</Text>
        <Text style={{fontSize:24, marginTop:4,alignSelf:'center',fontWeight:'600',fontFamily:'proximanova'}}>Successful</Text>
       
        <Text style={{fontSize:14,marginLeft:50,marginRight:30, marginTop:74,alignSelf:'center',fontWeight:'300',color:'#A4A4A4'}}>You have successfully reset your password.</Text>
        <Text style={{fontSize:14,marginLeft:50,marginRight:30, marginTop:4,alignSelf:'center',fontWeight:'300',color:'#A4A4A4'}}>Please use your new password to login.</Text>
        
   
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Notification01')} >
      
        <Button   style={{marginTop:61,marginBottom:161,width:334,height:50,alignSelf:'center',backgroundColor:'#F5F5F5',borderColor:'#E5E5E5',borderRadius:4,borderWidth:1,textAlign:'center'}}><Text style={{fontSize:14,alignSelf:'center',fontWeight:'600',color:'black'}}>STAY LOGGED IN</Text></Button>
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
  