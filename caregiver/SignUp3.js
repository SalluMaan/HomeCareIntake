import React from 'react';
import { StyleSheet,YellowBox, Text, View,ScrollView,Image,ActivityIndicator,StatusBar,TouchableOpacity } from 'react-native';
import IconAnt from 'react-native-vector-icons/Feather';
import {Input,Item,Card} from 'native-base'
import { Button } from 'react-native-paper';
import * as Font from 'expo-font';
import { Container, Header, Content, Icon, Picker, Form } from "native-base";
YellowBox.ignoreWarnings(['Remote debugger']);

export default class SignUp3 extends React.Component{
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    headerShown: false,
  }
  state = {
    assetsLoaded: false,
};
constructor(props) {
  super(props);
  this.state = {
    selected: undefined
  };
}
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
      return(
      <View style={styles.container}>
        <ScrollView>
        
         <Text style={{fontSize:18,marginTop:200, marginTop:19,alignSelf:'center',fontWeight:'600'}}>Personal Information</Text>
      

         <Item    style={{marginLeft:15,marginRight:15,marginTop:75,width:334,height:50,alignSelf:'center',borderColor:'#E2E2E2',borderRadius:4,borderWidth:1,textAlign:'left'}} regular>
        <Input placeholder="Phone Number"
         placeholderTextColor={'#A4A4A4'}
        />
         </Item >


         <Content style={{marginLeft:15,marginTop:23,marginRight:15,width:334,height:50,borderColor:'#E2E2E2',borderRadius:4,borderWidth:1}}>
          <Form>
            <Picker
              mode="dropdown"
              placeholder="Select your SIM"
              iosIcon={<Icon name="arrow-down" />}
              placeholder="Select your SIM"
              textStyle={{ color: "#5cb85c" }}
              itemStyle={{
                backgroundColor: "#d3d3d3",
                marginLeft: 0,
                paddingLeft: 10
              }}
              itemTextStyle={{ color: '#788ad2' }}
              style={{ width: undefined,color:'#7D7D7D' }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="City" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
          </Form>
        </Content>













        <Item    style={{marginLeft:15,marginRight:15,marginTop:23,width:334,height:87,alignSelf:'center',borderColor:'#E2E2E2',borderRadius:4,borderWidth:1,textAlign:'left'}} regular>
        <Input placeholder="Your Home Address"
         placeholderTextColor={'#A4A4A4'}
        />
        </Item >


        <Item    style={{marginLeft:15,marginRight:15,marginTop:23,width:334,height:50,alignSelf:'center',borderColor:'#E2E2E2',borderRadius:4,borderWidth:1,textAlign:'left'}} regular>
        <Input placeholder="Enter Zipcode"
         placeholderTextColor={'#A4A4A4'}
        />
        </Item >



       
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignUp4')} >

       <Button   style={{marginTop:53,width:334,height:50,alignSelf:'center',backgroundColor:'#B20838',borderRadius:4,borderWidth:1,textAlign:'center'}}><Text style={{fontSize:16,alignSelf:'center',fontWeight:'600',color:'white'}}>NEXT</Text></Button>
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
  