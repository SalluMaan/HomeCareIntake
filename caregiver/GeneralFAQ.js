import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import { StyleSheet,YellowBox, Text, View,ScrollView,Image,ActivityIndicator,StatusBar,TouchableOpacity } from 'react-native';
import FAQ1 from './FAQ1';
import FAQ2 from './FAQ2';
import IconAnt1 from 'react-native-vector-icons/AntDesign';
export default class GeneralFAQ extends Component {
  render() {
    return (
        
      <Container>
     <View style={{marginTop:13,marginLeft:20,flexDirection:'row',marginBottom:30}}>
     <TouchableOpacity onPress={()=>this.props.navigation.navigate('Feedback')} >

       <IconAnt1 name="left" size={20} color='#A4A4A4' style={{marginRight:5}}/>
       </TouchableOpacity>
      
        </View>
        <Tabs style={{backgroundColor:'white'}}>
          <Tab heading="QUESTIONS">
            <FAQ1/>
          </Tab>
          <Tab heading="VIDEOS">
            <FAQ2 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}