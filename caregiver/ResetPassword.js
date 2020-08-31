import React from 'react';
import { StyleSheet,YellowBox, Text, View,ScrollView,Image,ActivityIndicator,StatusBar,TouchableOpacity } from 'react-native';
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
      return(<View style={styles.container}>
        <ScrollView>
            
       
        <Text style={{fontSize:24, marginTop:125,alignSelf:'center',fontWeight:'600',fontFamily:'proximanova'}}>Reset Password</Text>
        
        <View style={{marginTop:74,width:302,height:50,alignSelf:'center'}}>
        <Text style={{fontSize:14,fontWeight:'300',color:'#A4A4A4',alignSelf:'center'}}>Select which contact details should be used to</Text>
        <Text style={{fontSize:14,fontWeight:'300',color:'#A4A4A4',alignSelf:'center'}}>reset your password.</Text>
        </View>
        
        <View style={{width:334,height:152,backgroundColor:'#DEDCDC',borderRadius:7,alignSelf:'center',marginTop:155,flexDirection:'row'}}>
       <View>
         <TouchableOpacity onPress={()=>this.props.navigation.navigate('ResetPass')} >
        <Image source={require('../assets/img1.png')} style={{width:106,height:91,marginTop:31,marginLeft:49}}>
        </Image>
        </TouchableOpacity>
        </View>
        <View style={{borderLeftWidth:1,borderLeftColor:'black',height:120,marginTop:20}}>
        <Text style={{fontSize:16,marginLeft:10,marginTop:40,alignSelf:'center',fontWeight:'600'}}>Via email address</Text>
        <Text style={{fontSize:16,marginLeft:15,marginTop:4,alignSelf:'center',fontWeight:'600',color:'#A4A4A4'}}>*****ab@gmail.com</Text>
      
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
      backgroundColor: '#fff',
    },
  });
  