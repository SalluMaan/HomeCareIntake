import React from 'react';
import { StyleSheet,YellowBox, Text, View,ScrollView,Image,ActivityIndicator,StatusBar,TouchableOpacity } from 'react-native';
import IconAnt from 'react-native-vector-icons/Feather';
import {Input,Item,Card} from 'native-base'
import { Button } from 'react-native-paper';
import * as Font from 'expo-font';
import { Container, Header, Content, Icon, Picker, Form,DatePicker } from "native-base";
YellowBox.ignoreWarnings(['Remote debugger']);

export default class SignUp4 extends React.Component{
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
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
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
        
        <Text style={{fontSize:16, marginTop:45,alignSelf:'center',fontWeight:'600',color:'#F51C58'}}>STEP 03</Text>
        <Text style={{fontSize:18, marginTop:19,alignSelf:'center',fontWeight:'600'}}>Upload Documents</Text>
        
        <Text style={{fontSize:15,marginLeft:30,marginRight:30,marginTop:28,textAlign:'center',fontWeight:'400',color:'#83878A'}}>Add your identity verification documents such as passport, NID, driving license, etc.</Text>
      
        <Item    style={{marginLeft:15,marginRight:15,marginTop:30,width:334,height:50,alignSelf:'center',borderColor:'#E2E2E2',borderRadius:4,borderWidth:1,textAlign:'left'}} regular>
        <Input placeholder="Document Name"
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
              <Picker.Item label="Document type-Passport" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
          </Form>
        </Content>





        <Content style={{marginLeft:15,marginTop:23,marginRight:15,width:334,height:50,borderColor:'#E2E2E2',borderRadius:4,borderWidth:1}}>
          <DatePicker
            defaultDate={new Date(2018, 4, 4)}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Expire Date"
            textStyle={{ color: "green" }}
          
            placeHolderTextStyle={{ color: "#7D7D7D" }}
            onDateChange={this.setDate}
            disabled={false}
            />
            {/* <Text>
              Date: {this.state.chosenDate.toString().substr(4, 12)}
            </Text> */}
        </Content>




        <Button   style={{marginTop:43,width:334,height:50,alignSelf:'center',backgroundColor:'#F5F5F5',borderColor:'#E5E5E5',borderRadius:4,borderWidth:1,textAlign:'center'}}><Text style={{fontSize:14,alignSelf:'center',fontWeight:'600',color:'black'}}>Upload Documents</Text></Button>
     
        <View style={{marginLeft:15,marginTop:45,marginRight:15,width:334,height:152,borderRadius:8,backgroundColor:'#FFF3F7'}}>
        <Text style={{fontSize:16, marginTop:28,alignSelf:'center',fontWeight:'600',color:'#83878A'}}>Upload Employee Agreement Form</Text>
        
        <Button   style={{marginTop:24,width:297,height:50,alignSelf:'center',backgroundColor:'#FFFFFF',borderColor:'#E5E5E5',borderRadius:4,borderWidth:1,textAlign:'center'}}><Text style={{fontSize:14,alignSelf:'center',fontWeight:'600',color:'black'}}>Upload File</Text></Button>
     
        </View>
   
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignUp5')} >

       <Button   style={{marginTop:23,width:334,height:50,alignSelf:'center',backgroundColor:'#B20838',borderRadius:4,borderWidth:1,textAlign:'center'}}><Text style={{fontSize:16,alignSelf:'center',fontWeight:'600',color:'white'}}>Compelte Sign up</Text></Button>
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
  