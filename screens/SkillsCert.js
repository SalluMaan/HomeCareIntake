import React ,{ useState }from 'react';
import { StyleSheet,YellowBox, Text, View,ScrollView,Image,ActivityIndicator,StatusBar,TouchableOpacity } from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconAnt2 from 'react-native-vector-icons/Fontisto';
import {Input,Item,Card} from 'native-base'
import { Button,RadioButton} from 'react-native-paper';
import * as Font from 'expo-font';
import NumericInput from 'react-native-numeric-input'
YellowBox.ignoreWarnings(['Remote debugger']);

export default class SkillsCert extends React.Component{
    constructor(props){
        super(props);
       
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
        <View style={{marginTop:13,marginLeft:20,flexDirection:'row'}}>
       <View>
       <IconAnt name="left" size={20} color='#A4A4A4' style={{marginRight:5}}/>
        
        </View>
       
        </View>

        <TouchableOpacity onPress={()=>this.props.navigation.navigate('PayrollRate')} >
       
        <Text style={{fontSize:18,marginLeft:20,marginTop:23,fontWeight:'700',color:'#434343'}}>Skills & Certifications</Text>
        </TouchableOpacity>

        <View style={{flexDirection:'row'}}>
        <Text style={{fontSize:18,marginLeft:20,marginTop:60,fontWeight:'700',color:'#434343'}}>Documents</Text>
        <IconAnt name="edit" size={20} color='#A4A4A4' style={{marginLeft:210,marginTop:65}}/>
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
  });
  