import React from 'react';
import { StyleSheet,YellowBox, Text, View,ScrollView,Image,ActivityIndicator,StatusBar,TouchableOpacity } from 'react-native';
import IconAnt2 from 'react-native-vector-icons/Fontisto';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconAnt3 from 'react-native-vector-icons/Feather';
import {Input,Item,Card} from 'native-base'
import { Button } from 'react-native-paper';
import * as Font from 'expo-font';
YellowBox.ignoreWarnings(['Remote debugger']);

export default class Newreferrals extends React.Component{
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
        <View >
       </View>
        </View>

        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Schmake')} >
        <Text style={{fontSize:18,marginLeft:20,marginTop:23,fontWeight:'600',color:'#141414'}}>7 New referrals this week</Text>
        </TouchableOpacity>

        <View style={{width:334,height:253,backgroundColor:'#FFFFFF',borderRadius:7,alignSelf:'center',marginTop:17}}>
        <Text style={{fontSize:10,marginLeft:17,marginTop:25,fontWeight:'600',color:'#7D7D7D'}}>March 25, 2020</Text>
        <Text style={{fontSize:18,marginLeft:17,marginTop:19,fontWeight:'600',color:'#434343'}}>Charles Adkins</Text> 
        <View style={{flexDirection:'row',marginLeft:17,marginTop:30}}> 
        <IconAnt name="home" size={15} color='#FF4B7D' />
        <Text style={{fontSize:12,marginLeft:10,fontWeight:'600',color:'#7D7D7D'}}>1536 S, 52nd St Philadelphia, PA 19143</Text>
        </View>   
        <View style={{flexDirection:'row',marginLeft:17,marginTop:10}}> 
        <IconAnt name="phone" size={15} color='#FF4B7D' />
        <Text style={{fontSize:12,marginLeft:10,fontWeight:'600',color:'#7D7D7D'}}>267-7307610</Text>
        </View>   
        <Button   style={{marginTop:23,width:138,height:40,marginLeft:20,backgroundColor:'#B20838',borderRadius:4,borderWidth:1,textAlign:'center'}}> <IconAnt3 name="map-pin" size={15} color='white' style={{marginLeft:5,alignSelf:'center'}} /><Text>   </Text><Text style={{fontSize:16,marginLeft:5,fontWeight:'600',color:'white',alignSelf:'center'}}>MAP</Text></Button>
        </View>
        
        
        <View style={{width:334,height:253,backgroundColor:'#FFFFFF',borderRadius:7,alignSelf:'center',marginTop:17}}>
        <Text style={{fontSize:10,marginLeft:17,marginTop:25,fontWeight:'600',color:'#7D7D7D'}}>March 25, 2020</Text>
        <Text style={{fontSize:18,marginLeft:17,marginTop:19,fontWeight:'600',color:'#434343'}}>Charles Adkins</Text> 
        <View style={{flexDirection:'row',marginLeft:17,marginTop:30}}> 
        <IconAnt name="home" size={15} color='#FF4B7D' />
        <Text style={{fontSize:12,marginLeft:10,fontWeight:'600',color:'#7D7D7D'}}>1536 S, 52nd St Philadelphia, PA 19143</Text>
        </View>   
        <View style={{flexDirection:'row',marginLeft:17,marginTop:10}}> 
        <IconAnt name="phone" size={15} color='#FF4B7D' />
        <Text style={{fontSize:12,marginLeft:10,fontWeight:'600',color:'#7D7D7D'}}>267-7307610</Text>
        </View>   
        <Button   style={{marginTop:23,width:138,height:40,marginLeft:20,backgroundColor:'#B20838',borderRadius:4,borderWidth:1,textAlign:'center'}}> <IconAnt3 name="map-pin" size={15} color='white' style={{marginLeft:5}} /><Text>   </Text><Text style={{fontSize:16,marginLeft:5,fontWeight:'600',color:'white'}}>MAP</Text></Button>
        </View>

        <View style={{width:334,height:253,backgroundColor:'#FFFFFF',borderRadius:7,alignSelf:'center',marginTop:17}}>
        <Text style={{fontSize:10,marginLeft:17,marginTop:25,fontWeight:'600',color:'#7D7D7D'}}>March 25, 2020</Text>
        <Text style={{fontSize:18,marginLeft:17,marginTop:19,fontWeight:'600',color:'#434343'}}>Charles Adkins</Text> 
        <View style={{flexDirection:'row',marginLeft:17,marginTop:30}}> 
        <IconAnt name="home" size={15} color='#FF4B7D' />
        <Text style={{fontSize:12,marginLeft:10,fontWeight:'600',color:'#7D7D7D'}}>1536 S, 52nd St Philadelphia, PA 19143</Text>
        </View>   
        <View style={{flexDirection:'row',marginLeft:17,marginTop:10}}> 
        <IconAnt name="phone" size={15} color='#FF4B7D' />
        <Text style={{fontSize:12,marginLeft:10,fontWeight:'600',color:'#7D7D7D'}}>267-7307610</Text>
        </View>   
        <Button   style={{marginTop:23,width:138,height:40,marginLeft:20,backgroundColor:'#B20838',borderRadius:4,borderWidth:1,textAlign:'center'}}> <IconAnt3 name="map-pin" size={15} color='white' style={{marginLeft:5}} /><Text>   </Text><Text style={{fontSize:16,marginLeft:5,fontWeight:'600',color:'white'}}>MAP</Text></Button>
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
  