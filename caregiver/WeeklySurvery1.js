import React ,{ useState}from 'react';
import { StyleSheet,YellowBox, Text, View,ScrollView,Image,ActivityIndicator,StatusBar,Platform,Alert,TouchableOpacity } from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconAnt2 from 'react-native-vector-icons/Octicons';
import IconAnt3 from 'react-native-vector-icons/Entypo';
import IconAnt4 from 'react-native-vector-icons/MaterialCommunityIcons';
import {Input,Item,Card} from 'native-base'
import { Button,RadioButton} from 'react-native-paper';
import * as Font from 'expo-font';
import { Menu, MenuProvider, MenuOptions, MenuOption,Left,Right,MenuTrigger} from "react-native-popup-menu";
import { Container, Header, Content, Picker, Form ,CheckBox,ListItem,Body,Label,Radio } from "native-base";
YellowBox.ignoreWarnings(['Remote debugger']);

export default class WeeklySurvery1 extends React.Component{
    constructor(props){
        super(props);
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
        <View style={{marginTop:0,height:240,backgroundColor:'#FF4B7D'}}>
      
       <View style={{flexDirection:'row'}}>
       <IconAnt name="left" size={20} color='white' style={{marginTop:15, marginLeft:21}}/>
       <Text style={{fontSize:18,marginLeft:80,marginTop:15,fontWeight:'600',color:'#FFFFFF'}}>Weekly Survey</Text>
    
        </View>

        <View style={{flexDirection:'row'}}>
        <Image  source={require('../assets/img2.png')} style={{width:79,height:79,marginTop:10,marginBottom:69,marginLeft:21, borderRadius: 150 / 2,overflow: "hidden",}}></Image> 
        <View>
        <Text style={{fontSize:16,marginLeft:19,marginTop:23,fontWeight:'600',color:'#FFFFFF'}}>Diana Wagner</Text>
        <Text style={{fontSize:12,marginLeft:19,marginTop:13,fontWeight:'600',color:'#FFFFFF'}}>Philadelphia</Text>
        <Button   style={{marginTop:15,width:138,height:34,marginLeft:10,backgroundColor:'#FF7EA2',borderRadius:4,borderWidth:1,textAlign:'center'}}><Text style={{fontSize:11,alignSelf:'center',fontWeight:'600',color:'white'}}>View Schedule</Text></Button>
        </View>
         </View>
        </View>

        <View style={{marginTop:-40,width:340,height:321,backgroundColor:'white',alignSelf:'center',borderColor:'#BEBEBEBA',borderRadius:10,borderWidth:1}}>
        <Text style={{fontSize:14,textAlign:'center',marginTop:24,fontWeight:'600',color:'#A4A4A4',textTransform:'uppercase'}}>Question: 01</Text>
        
        <View style={{flexDirection:'row',alignSelf:'center',width:230}}>
        <Text style={{fontSize:18,textAlign:'center',marginTop:30,fontWeight:'600',color:'#434343'}}>Does your client need extra hours of care?</Text>
        </View>

        <View style={{flexDirection:'row',alignSelf:'center',marginTop:50}}>
        <Radio selected={true}  style={{}}/>
        <Text style={{marginLeft:15,color:'#A4A4A4',fontSize:14}}>Yes</Text>
        <Radio selected={false}  style={{marginLeft:15}}/>
        <Text style={{marginLeft:15,color:'#A4A4A4',fontSize:14}}>NO</Text>
        </View>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('WeeklySurvery2')} >
 
        <Button   style={{marginTop:41,width:138,height:34,alignSelf:'center',backgroundColor:'#B20838',borderRadius:4,borderWidth:1,textAlign:'center'}}><Text style={{fontSize:11,alignSelf:'center',fontWeight:'600',color:'white'}}>Next</Text></Button>
        </TouchableOpacity>
      
        </View>



        <View style={{flexDirection:'row',alignSelf:'center',marginTop:15,marginBottom:100}}>
        <IconAnt2 name="primitive-dot" size={30} color='#FC3E73' style={{marginTop:15,alignSelf:'center'}}/>
        <IconAnt2 name="primitive-dot" size={30} color='#FFC8D7' style={{marginTop:15,marginLeft:10, alignSelf:'center'}}/>
        <IconAnt2 name="primitive-dot" size={30} color='#FFC8D7' style={{marginTop:15,marginLeft:10, alignSelf:'center'}}/>
        <IconAnt2 name="primitive-dot" size={30} color='#FFC8D7' style={{marginTop:15,marginLeft:10, alignSelf:'center'}}/>
        <IconAnt2 name="primitive-dot" size={30} color='#FFC8D7' style={{marginTop:15,marginLeft:10, alignSelf:'center'}}/>
     
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
  