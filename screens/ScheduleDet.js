import React from 'react';
import { StyleSheet,YellowBox, Text, View,ScrollView,Image,ActivityIndicator,StatusBar,TouchableOpacity } from 'react-native';
import IconAnt2 from 'react-native-vector-icons/MaterialIcons';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconAnt3 from 'react-native-vector-icons/Feather';
import {Input,Item,Card} from 'native-base'
import { Button } from 'react-native-paper';
import * as Font from 'expo-font';
YellowBox.ignoreWarnings(['Remote debugger']);

export default class ScheduleDet extends React.Component{
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

       <IconAnt name="left" size={20} color='#A4A4A4' style={{marginRight:5}}/>
       <TouchableOpacity onPress={()=>this.props.navigation.navigate('EditSchedule')} >
     
       <Button   style={{marginTop:6,width:88,height:34,marginLeft:190,backgroundColor:'#B20838',borderRadius:5,borderWidth:1,textAlign:'center'}}><Text style={{fontSize:12,alignSelf:'center',fontWeight:'600',color:'white'}}>EDIT</Text></Button>
       </TouchableOpacity>
        </View>

        <View style={{width:334,height:170,backgroundColor:'white',borderRadius:7,alignSelf:'center',marginTop:12}}>
         <Text style={{fontSize:20,marginLeft:17,marginTop:19,fontWeight:'600',color:'#434343'}}>Charles Adkins</Text> 
        <View style={{flexDirection:'row',marginLeft:17,marginTop:30}}> 
        <IconAnt name="home" size={20} color='#FF4B7D' />
        <Text style={{fontSize:14,marginLeft:10,fontWeight:'600',color:'#7D7D7D'}}>1536 S, 52nd St Philadelphia, PA 19143</Text>
        </View>   
        <View style={{flexDirection:'row',marginLeft:17,marginTop:10}}> 
        <IconAnt name="phone" size={20} color='#FF4B7D' />
        <Text style={{fontSize:14,marginLeft:10,fontWeight:'600',color:'#7D7D7D'}}>267-7307610</Text>
        </View>   
         </View>
        
          
         <View style={{backgroundColor:'#7D7D7D',borderWidth:0.5,marginTop:12}}>
         </View>
       
        
        <View style={{width:334,height:300,backgroundColor:'#FFFFFF',borderRadius:7,alignSelf:'center',marginTop:17}}>
         <Text style={{fontSize:18,marginLeft:17,marginTop:19,fontWeight:'700',color:'#434343'}}>Friday, March 28, 2020</Text> 
        <View style={{flexDirection:'row',marginLeft:17,marginTop:0}}> 
        <Text style={{fontSize:12,marginLeft:0,fontWeight:'600',color:'#7D7D7D'}}>Start time: 9:00 AM - 1:30 PM</Text>
        </View>   

        <View style={{marginLeft:17,marginTop:56}}> 
        <Text style={{fontSize:16,marginLeft:0,fontWeight:'600',color:'#434343'}}>Task List</Text>
       
        <View style={{flexDirection:'row'}}>
        <View> 
        <Text style={{fontSize:14,marginLeft:0,fontWeight:'600',color:'#7D7D7D',marginTop:10}}>Bed Bath/Sponge Bath</Text>
        <Text style={{fontSize:14,marginLeft:0,fontWeight:'600',color:'#7D7D7D',marginTop:10}}>Brushing Teeth</Text>
        <Text style={{fontSize:14,marginLeft:0,fontWeight:'600',color:'#7D7D7D',marginTop:10}}>Assist to Bathroom</Text>
        <Text style={{fontSize:14,marginLeft:0,fontWeight:'600',color:'#7D7D7D',marginTop:10}}>Brushing Teeth</Text>
        <Text style={{fontSize:14,marginLeft:0,fontWeight:'600',color:'#7D7D7D',marginTop:10}}>Maintain Bedroom</Text>
        <Text style={{fontSize:14,marginLeft:0,fontWeight:'600',color:'#7D7D7D',marginTop:10}}>Take for a Walk</Text>
     
        </View> 

        <View style={{marginLeft:120}}> 
        
        <View style={{flexDirection:'row'}}>
        <IconAnt name="checkcircle" size={20} color='#FF4B7D' style={{marginTop:5}} />
        <IconAnt2 name="not-interested" size={25} color='#FFC8D7' style={{marginTop:2,marginLeft:4}} />
        </View> 

        <View style={{flexDirection:'row'}}>
        <IconAnt name="checkcircle" size={20} color='#FF4B7D' style={{marginTop:5}} />
        <IconAnt2 name="not-interested" size={25} color='#FFC8D7' style={{marginTop:2,marginLeft:4}} />
        </View> 

        <View style={{flexDirection:'row'}}>
        <IconAnt name="checkcircle" size={20} color='#FF4B7D' style={{marginTop:5}} />
        <IconAnt2 name="not-interested" size={25} color='#FFC8D7' style={{marginTop:2,marginLeft:4}} />
        </View> 

        <View style={{flexDirection:'row'}}>
        <IconAnt name="checkcircle" size={20} color='#FF4B7D' style={{marginTop:5}} />
        <IconAnt2 name="not-interested" size={25} color='#FFC8D7' style={{marginTop:2,marginLeft:4}} />
        </View> 

        <View style={{flexDirection:'row'}}>
        <IconAnt name="checkcircle" size={20} color='#FF4B7D' style={{marginTop:5}} />
        <IconAnt2 name="not-interested" size={25} color='#FFC8D7' style={{marginTop:2,marginLeft:4}} />
        </View> 

        <View style={{flexDirection:'row'}}>
        <IconAnt name="checkcircle" size={20} color='#FF4B7D' style={{marginTop:8}} />
        <IconAnt2 name="not-interested" size={25} color='#FFC8D7' style={{marginTop:5,marginLeft:4}} />
        </View> 


        </View> 
        </View>

     
     
      
        </View>   
        </View>

        <View style={{backgroundColor:'#7D7D7D',borderWidth:0.5,marginTop:30}}>
         </View>
       
        <View style={{width:334,height:253,backgroundColor:'#FFFFFF',borderRadius:7,alignSelf:'center',marginTop:7}}>
        <Text style={{fontSize:18,marginLeft:17,marginTop:19,fontWeight:'600',color:'#434343'}}>Notes</Text> 
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
      backgroundColor: 'white',
    },
  });
  