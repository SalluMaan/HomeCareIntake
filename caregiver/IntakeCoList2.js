import React ,{ useState }from 'react';
import { StyleSheet,YellowBox, Text, View,ScrollView,Image,ActivityIndicator,StatusBar,TouchableOpacity } from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconAnt2 from 'react-native-vector-icons/Fontisto';
import {Input,Item,Card} from 'native-base'
import { Button,RadioButton} from 'react-native-paper';
import * as Font from 'expo-font';
YellowBox.ignoreWarnings(['Remote debugger']);

export default class IntakeCoList2 extends React.Component{
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
        <View >
         </View>
        </View>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('ScheduleDet3')} >

        <Text style={{fontSize:18,marginLeft:26,marginTop:17,fontWeight:'700',color:'#141414'}}>All clients (23)</Text> 
        </TouchableOpacity>

          <View  style={{backgroundColor: 'white',width:334,height:73,flexDirection:'row',marginTop:18,alignSelf:'center'}}>
            <View > 
            <Image  source={require('../assets/img2.png')} style={{width:49,height:49,marginTop:12,marginLeft:12, borderRadius: 150 / 2,
            overflow: "hidden",}}></Image> 
            </View >     
            <View > 
            <Text style={{fontSize:14,marginLeft:26,marginTop:17,fontWeight:'700',color:'#A4A4A4'}}>Grant Marshall</Text> 
            <Text style={{fontSize:12,marginLeft:26,marginTop:10,fontWeight:'600',color:'#A4A4A4'}}>Massachusetts</Text> 
            </View >    
            </View>

            <View  style={{backgroundColor: 'white',width:334,height:73,flexDirection:'row',marginTop:18,alignSelf:'center'}}>
            <View > 
            <Image  source={require('../assets/img2.png')} style={{width:49,height:49,marginTop:12,marginLeft:12, borderRadius: 150 / 2,
            overflow: "hidden",}}></Image> 
            </View >     
            <View > 
            <Text style={{fontSize:14,marginLeft:26,marginTop:17,fontWeight:'700',color:'#A4A4A4'}}>Grant Marshall</Text> 
            <Text style={{fontSize:12,marginLeft:26,marginTop:10,fontWeight:'600',color:'#A4A4A4'}}>Massachusetts</Text> 
            </View >    
            </View>

            <View  style={{backgroundColor: 'white',width:334,height:73,flexDirection:'row',marginTop:18,alignSelf:'center'}}>
            <View > 
            <Image  source={require('../assets/img2.png')} style={{width:49,height:49,marginTop:12,marginLeft:12, borderRadius: 150 / 2,
            overflow: "hidden",}}></Image> 
            </View >     
            <View > 
            <Text style={{fontSize:14,marginLeft:26,marginTop:17,fontWeight:'700',color:'#A4A4A4'}}>Grant Marshall</Text> 
            <Text style={{fontSize:12,marginLeft:26,marginTop:10,fontWeight:'600',color:'#A4A4A4'}}>Massachusetts</Text> 
            </View >    
            </View>


            <View  style={{backgroundColor: 'white',width:334,height:73,flexDirection:'row',marginTop:18,alignSelf:'center'}}>
            <View > 
            <Image  source={require('../assets/img2.png')} style={{width:49,height:49,marginTop:12,marginLeft:12, borderRadius: 150 / 2,
            overflow: "hidden",}}></Image> 
            </View >     
            <View > 
            <Text style={{fontSize:14,marginLeft:26,marginTop:17,fontWeight:'700',color:'#A4A4A4'}}>Grant Marshall</Text> 
            <Text style={{fontSize:12,marginLeft:26,marginTop:10,fontWeight:'600',color:'#A4A4A4'}}>Massachusetts</Text> 
            </View >    
            </View>


            <View  style={{backgroundColor: 'white',width:334,height:73,flexDirection:'row',marginTop:18,alignSelf:'center'}}>
            <View > 
            <Image  source={require('../assets/img2.png')} style={{width:49,height:49,marginTop:12,marginLeft:12, borderRadius: 150 / 2,
            overflow: "hidden",}}></Image> 
            </View >     
            <View > 
            <Text style={{fontSize:14,marginLeft:26,marginTop:17,fontWeight:'700',color:'#A4A4A4'}}>Grant Marshall</Text> 
            <Text style={{fontSize:12,marginLeft:26,marginTop:10,fontWeight:'600',color:'#A4A4A4'}}>Massachusetts</Text> 
            </View >    
            </View>


            <View  style={{backgroundColor: 'white',width:334,height:73,flexDirection:'row',marginTop:18,alignSelf:'center'}}>
            <View > 
            <Image  source={require('../assets/img2.png')} style={{width:49,height:49,marginTop:12,marginLeft:12, borderRadius: 150 / 2,
            overflow: "hidden",}}></Image> 
            </View >     
            <View > 
            <Text style={{fontSize:14,marginLeft:26,marginTop:17,fontWeight:'700',color:'#A4A4A4'}}>Grant Marshall</Text> 
            <Text style={{fontSize:12,marginLeft:26,marginTop:10,fontWeight:'600',color:'#A4A4A4'}}>Massachusetts</Text> 
            </View >    
            </View>


            <View  style={{backgroundColor: 'white',width:334,height:73,flexDirection:'row',marginTop:18,alignSelf:'center'}}>
            <View > 
            <Image  source={require('../assets/img2.png')} style={{width:49,height:49,marginTop:12,marginLeft:12, borderRadius: 150 / 2,
            overflow: "hidden",}}></Image> 
            </View >     
            <View > 
            <Text style={{fontSize:14,marginLeft:26,marginTop:17,fontWeight:'700',color:'#A4A4A4'}}>Grant Marshall</Text> 
            <Text style={{fontSize:12,marginLeft:26,marginTop:10,fontWeight:'600',color:'#A4A4A4'}}>Massachusetts</Text> 
            </View >    
            </View>


            <View  style={{backgroundColor: 'white',width:334,height:73,flexDirection:'row',marginTop:18,alignSelf:'center'}}>
            <View > 
            <Image  source={require('../assets/img2.png')} style={{width:49,height:49,marginTop:12,marginLeft:12, borderRadius: 150 / 2,
            overflow: "hidden",}}></Image> 
            </View >     
            <View > 
            <Text style={{fontSize:14,marginLeft:26,marginTop:17,fontWeight:'700',color:'#A4A4A4'}}>Grant Marshall</Text> 
            <Text style={{fontSize:12,marginLeft:26,marginTop:10,fontWeight:'600',color:'#A4A4A4'}}>Massachusetts</Text> 
            </View >    
            </View>


            <View  style={{backgroundColor: 'white',width:334,height:73,flexDirection:'row',marginTop:18,alignSelf:'center'}}>
            <View > 
            <Image  source={require('../assets/img2.png')} style={{width:49,height:49,marginTop:12,marginLeft:12, borderRadius: 150 / 2,
            overflow: "hidden",}}></Image> 
            </View >     
            <View > 
            <Text style={{fontSize:14,marginLeft:26,marginTop:17,fontWeight:'700',color:'#A4A4A4'}}>Grant Marshall</Text> 
            <Text style={{fontSize:12,marginLeft:26,marginTop:10,fontWeight:'600',color:'#A4A4A4'}}>Massachusetts</Text> 
            </View >    
            </View>


            <View  style={{backgroundColor: 'white',width:334,height:73,flexDirection:'row',marginTop:18,alignSelf:'center'}}>
            <View > 
            <Image  source={require('../assets/img2.png')} style={{width:49,height:49,marginTop:12,marginLeft:12, borderRadius: 150 / 2,
            overflow: "hidden",}}></Image> 
            </View >     
            <View > 
            <Text style={{fontSize:14,marginLeft:26,marginTop:17,fontWeight:'700',color:'#A4A4A4'}}>Grant Marshall</Text> 
            <Text style={{fontSize:12,marginLeft:26,marginTop:10,fontWeight:'600',color:'#A4A4A4'}}>Massachusetts</Text> 
            </View >    
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
      backgroundColor: '#F9F9F9',
    },
  });
  