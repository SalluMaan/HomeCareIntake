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
import { Container, Header, Content, Picker, Form ,CheckBox,ListItem,Body,Label,Radio } from "native-base";
YellowBox.ignoreWarnings(['Remote debugger']);

export default class ContactUs extends React.Component{
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
        <View style={{marginTop:0,height:20,backgroundColor:'white'}}>
      
       <View style={{flexDirection:'row'}}>
       <IconAnt name="left" size={20} color='#A4A4A4' style={{marginTop:15, marginLeft:21}}/>
        </View>

        </View>

       
     
          <Text style={{fontSize:18,marginTop:50,marginLeft:21,fontWeight:'700',color:'#141414'}}>Contact support</Text>
         
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
          style={{ width:320,height:45,alignSelf:'center',backgroundColor:'white',marginTop:0,borderWidth:1,borderRadius:10,borderColor:'#E2E2E2' }}
          selectedValue={this.state.selected}
          onValueChange={this.onValueChange.bind(this)}
        >
          <Picker.Item label="Subject" value="key0" />
          <Picker.Item label="ATM Card" value="key1" />
          <Picker.Item label="Debit Card" value="key2" />
          <Picker.Item label="Credit Card" value="key3" />
          <Picker.Item label="Net Banking" value="key4" />
        </Picker>
      </Form>
    </View>

        <Item    style={{marginLeft:21,marginRight:15,marginTop:5,width:334,height:136,alignSelf:'center',borderColor:'#E2E2E2',borderRadius:4,borderWidth:1,textAlign:'left'}} regular>
          <Input placeholder="Your Message"
           placeholderTextColor={'#A4A4A4'}
          />
          </Item >
     
        
      
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Feedback')} >  
  
          <Button   style={{marginTop:23,marginBottom:50,width:334,height:50,alignSelf:'center',backgroundColor:'#B20838',borderRadius:4,borderWidth:1,textAlign:'center'}}><Text style={{fontSize:16,alignSelf:'center',fontWeight:'600',color:'white'}}>SEND</Text></Button>
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
  