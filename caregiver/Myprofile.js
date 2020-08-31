import React ,{ useState}from 'react';
import { StyleSheet,YellowBox, Text, View,ScrollView,Image,ActivityIndicator,StatusBar,Platform,Alert,TouchableOpacity } from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconAnt2 from 'react-native-vector-icons/Fontisto';
import IconAnt3 from 'react-native-vector-icons/Entypo';
import IconAnt4 from 'react-native-vector-icons/Feather';
import {Input,Item,Card} from 'native-base'
import { Button,RadioButton} from 'react-native-paper';
import * as Font from 'expo-font';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";
import { Container, Header, Content, Picker, Form ,CheckBox,ListItem,Body} from "native-base";
YellowBox.ignoreWarnings(['Remote debugger']);

export default class Myprofile extends React.Component{
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
        <View style={{marginTop:0,height:197,backgroundColor:'#F3F3F3'}}>
      
       <View style={{flexDirection:'row'}}>
       <IconAnt name="left" size={20} color='#A4A4A4' style={{marginTop:15, marginLeft:21}}/>
      
       <TouchableOpacity onPress={()=>this.props.navigation.navigate('AddNewClient')} >
       <Text style={{fontSize:12,marginLeft:270,marginTop:15,fontWeight:'600',color:'#FF4B7D'}}>Edit</Text>
       </TouchableOpacity>

        </View>
        <View style={{flexDirection:'row'}}>
        <Image  source={require('../assets/img2.png')} style={{width:118,height:118,marginTop:10,marginBottom:69,marginLeft:21, borderRadius: 150 / 2,overflow: "hidden",}}>
            
            </Image> 
      
        <View>
        <Text style={{fontSize:16,marginLeft:19,marginTop:23,fontWeight:'600',color:'#434343'}}>Jerry Jackson</Text>
        <Text style={{fontSize:12,marginLeft:19,marginTop:13,fontWeight:'600',color:'#434343'}}>Philadelphia</Text>
        <Text style={{fontSize:12,marginLeft:19,marginTop:13,fontWeight:'600',color:'#434343'}}>rose.evans@mail.com</Text>
        </View>

         </View>
        </View>

     
      

        <View style={{width:334,height:50,backgroundColor:'white',borderWidth:2,borderRadius:10,borderColor:'#E2E2E2' ,alignSelf:'center',marginTop:10}}>
       
           <Form>
            <Picker
              mode="dropdown"
              placeholder="Select your SIM"
              iosIcon={<IconAnt name="left" size={20} color='#A4A4A4' style={{marginRight:5}}/>}
              placeholder="Select your SIM"
              textStyle={{ color: "#5cb85c" }}
              itemStyle={{
                backgroundColor: "#d3d3d3",
                marginLeft: 0,
                paddingLeft: 10
              }}
              itemTextStyle={{ color: '#788ad2' }}
              style={{ width:323,height:45,alignSelf:'center',backgroundColor:'white',marginTop:0,borderWidth:1,borderRadius:10,borderColor:'#E2E2E2' }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="This week" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
          </Form>
        </View>
      
        
        <View style={{width:334,height:293,backgroundColor:'#F3F3F3',borderRadius:10,alignSelf:'center',marginTop:10}}>
        <IconAnt3 name="dots-three-vertical" size={20} color='#A4A4A4' style={{marginTop:10,marginLeft:300}}/> 
        <Text style={{fontSize:12,marginLeft:17,marginTop:5,fontWeight:'600',color:'#7D7D7D'}}>March 25, 2020</Text>
        <Text style={{fontSize:18,marginLeft:17,marginTop:19,fontWeight:'600',color:'#434343'}}>Charles Adkins</Text> 
        <View style={{flexDirection:'row',marginLeft:17,marginTop:30}}> 
        <IconAnt name="home" size={15} color='#FF4B7D' />
        <Text style={{fontSize:12,marginLeft:10,fontWeight:'600',color:'#7D7D7D'}}>1536 S, 52nd St Philadelphia, PA 19143</Text>
        </View>   
        <View style={{flexDirection:'row',marginLeft:17,marginTop:10}}> 
        <IconAnt name="phone" size={15} color='#FF4B7D' />
        <Text style={{fontSize:12,marginLeft:10,fontWeight:'600',color:'#7D7D7D'}}>267-7307610</Text>
        </View>   
        <Text style={{fontSize:13,marginLeft:17,marginTop:25,fontWeight:'600',color:'#7D7D7D'}}>Meeting Time: Mar 24, 2020 | 01:30 PM</Text>
        <Button   style={{marginTop:23,width:138,height:40,marginLeft:20,backgroundColor:'#B20838',borderRadius:4,borderWidth:1,textAlign:'center'}}> <IconAnt4 name="map-pin" size={15} color='white' style={{marginLeft:5}} /><Text>   </Text><Text style={{fontSize:16,marginLeft:5,fontWeight:'600',color:'white'}}>MAP</Text></Button>
        </View>
  
        <View style={{width:334,height:293,backgroundColor:'#F3F3F3',borderRadius:10,alignSelf:'center',marginTop:10}}>
        <IconAnt3 name="dots-three-vertical" size={20} color='#A4A4A4' style={{marginTop:10,marginLeft:300}}/> 
        <Text style={{fontSize:12,marginLeft:17,marginTop:5,fontWeight:'600',color:'#7D7D7D'}}>March 25, 2020</Text>
        <Text style={{fontSize:18,marginLeft:17,marginTop:19,fontWeight:'600',color:'#434343'}}>Charles Adkins</Text> 
        <View style={{flexDirection:'row',marginLeft:17,marginTop:30}}> 
        <IconAnt name="home" size={15} color='#FF4B7D' />
        <Text style={{fontSize:12,marginLeft:10,fontWeight:'600',color:'#7D7D7D'}}>1536 S, 52nd St Philadelphia, PA 19143</Text>
        </View>   
        <View style={{flexDirection:'row',marginLeft:17,marginTop:10}}> 
        <IconAnt name="phone" size={15} color='#FF4B7D' />
        <Text style={{fontSize:12,marginLeft:10,fontWeight:'600',color:'#7D7D7D'}}>267-7307610</Text>
        </View>   
        <Text style={{fontSize:13,marginLeft:17,marginTop:25,fontWeight:'600',color:'#7D7D7D'}}>Meeting Time: Mar 24, 2020 | 01:30 PM</Text>
        <Button   style={{marginTop:23,width:138,height:40,marginLeft:20,backgroundColor:'#B20838',borderRadius:4,borderWidth:1,textAlign:'center'}}> <IconAnt4 name="map-pin" size={15} color='white' style={{marginLeft:5}} /><Text>   </Text><Text style={{fontSize:16,marginLeft:5,fontWeight:'600',color:'white'}}>MAP</Text></Button>
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
  