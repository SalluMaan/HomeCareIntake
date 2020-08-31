import React from 'react';
import { StyleSheet,YellowBox, Text, View,ScrollView,Image,ActivityIndicator,StatusBar,TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import IconAnt2 from 'react-native-vector-icons/Fontisto';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconAnt3 from 'react-native-vector-icons/Feather';
import IconAnt4 from 'react-native-vector-icons/MaterialIcons';
import {Input,Item,Card} from 'native-base'
import { Button } from 'react-native-paper';
import * as Font from 'expo-font';
import CalendarPicker from 'react-native-calendar-picker';

YellowBox.ignoreWarnings(['Remote debugger']);

export default class Messagelist extends React.Component{
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
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
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
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';

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

        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Chat')} >
        <View style={{flexDirection:'row'}}>
        <Text style={{fontSize:18,marginLeft:20,marginTop:23,fontWeight:'600',color:'#141414'}}>Recent Messages</Text>
        <IconAnt4 name="contacts" size={20} color='#FF4B7D' style={{marginLeft:150}}/>
        </View>
        </TouchableOpacity>

    <View  style={{backgroundColor: '#F3F3F3',borderBottomWidth:1,borderBottomColor:'#7D7D7D',width:360,height:83,flexDirection:'row',marginTop:18}}> 
  
     <View > 
     <Image  source={require('../assets/img2.png')} style={{width:49,height:49,marginTop:5,marginLeft:20, borderRadius: 150 / 2,
     overflow: "hidden",}}></Image> 
     </View >     
     <View > 
     <Text style={{fontSize:14,marginLeft:20,marginTop:5,fontWeight:'700',color:'#A4A4A4'}}>Grant Marshall</Text> 
     <Text style={{fontSize:12,marginLeft:20,marginTop:3,fontWeight:'400',color:'#A4A4A4'}}>Lorem ipsum dolor sit amet,</Text> 
     <Text style={{fontSize:12,marginLeft:20,marginTop:3,fontWeight:'400',color:'#A4A4A4'}}>consectetur adipiscing elit.</Text> 
     </View >    
    <Text style={{fontSize:12,marginLeft:50,marginTop:3,fontWeight:'400',color:'#A4A4A4'}}>2:20 PM</Text>
  
    </View>
        
   
    <View  style={{backgroundColor: '#F3F3F3',borderBottomWidth:1,borderBottomColor:'#7D7D7D',width:360,height:83,flexDirection:'row',marginTop:18}}> 
  
  <View > 
  <Image  source={require('../assets/img2.png')} style={{width:49,height:49,marginTop:5,marginLeft:20, borderRadius: 150 / 2,
  overflow: "hidden",}}></Image> 
  </View >     
  <View > 
  <Text style={{fontSize:14,marginLeft:20,marginTop:5,fontWeight:'700',color:'#A4A4A4'}}>Grant Marshall</Text> 
  <Text style={{fontSize:12,marginLeft:20,marginTop:3,fontWeight:'400',color:'#A4A4A4'}}>Lorem ipsum dolor sit amet,</Text> 
  <Text style={{fontSize:12,marginLeft:20,marginTop:3,fontWeight:'400',color:'#A4A4A4'}}>consectetur adipiscing elit.</Text> 
  </View >    
 <Text style={{fontSize:12,marginLeft:50,marginTop:3,fontWeight:'400',color:'#A4A4A4'}}>2:20 PM</Text>

 </View>


 <View  style={{backgroundColor: '#F3F3F3',borderBottomWidth:1,borderBottomColor:'#7D7D7D',width:360,height:83,flexDirection:'row',marginTop:18}}> 
  
     <View > 
     <Image  source={require('../assets/img2.png')} style={{width:49,height:49,marginTop:5,marginLeft:20, borderRadius: 150 / 2,
     overflow: "hidden",}}></Image> 
     </View >     
     <View > 
     <Text style={{fontSize:14,marginLeft:20,marginTop:5,fontWeight:'700',color:'#A4A4A4'}}>Grant Marshall</Text> 
     <Text style={{fontSize:12,marginLeft:20,marginTop:3,fontWeight:'400',color:'#A4A4A4'}}>Lorem ipsum dolor sit amet,</Text> 
     <Text style={{fontSize:12,marginLeft:20,marginTop:3,fontWeight:'400',color:'#A4A4A4'}}>consectetur adipiscing elit.</Text> 
     </View >    
    <Text style={{fontSize:12,marginLeft:50,marginTop:3,fontWeight:'400',color:'#A4A4A4'}}>2:20 PM</Text>
  
    </View>

    <View  style={{backgroundColor: '#F3F3F3',borderBottomWidth:1,borderBottomColor:'#7D7D7D',width:360,height:83,flexDirection:'row',marginTop:18}}> 
  
     <View > 
     <Image  source={require('../assets/img2.png')} style={{width:49,height:49,marginTop:5,marginLeft:20, borderRadius: 150 / 2,
     overflow: "hidden",}}></Image> 
     </View >     
     <View > 
     <Text style={{fontSize:14,marginLeft:20,marginTop:5,fontWeight:'700',color:'#A4A4A4'}}>Grant Marshall</Text> 
     <Text style={{fontSize:12,marginLeft:20,marginTop:3,fontWeight:'400',color:'#A4A4A4'}}>Lorem ipsum dolor sit amet,</Text> 
     <Text style={{fontSize:12,marginLeft:20,marginTop:3,fontWeight:'400',color:'#A4A4A4'}}>consectetur adipiscing elit.</Text> 
     </View >    
    <Text style={{fontSize:12,marginLeft:50,marginTop:3,fontWeight:'400',color:'#A4A4A4'}}>2:20 PM</Text>
  
    </View>

    <View  style={{backgroundColor: '#F3F3F3',borderBottomWidth:1,borderBottomColor:'#7D7D7D',width:360,height:83,flexDirection:'row',marginTop:18}}> 
  
     <View > 
     <Image  source={require('../assets/img2.png')} style={{width:49,height:49,marginTop:5,marginLeft:20, borderRadius: 150 / 2,
     overflow: "hidden",}}></Image> 
     </View >     
     <View > 
     <Text style={{fontSize:14,marginLeft:20,marginTop:5,fontWeight:'700',color:'#A4A4A4'}}>Grant Marshall</Text> 
     <Text style={{fontSize:12,marginLeft:20,marginTop:3,fontWeight:'400',color:'#A4A4A4'}}>Lorem ipsum dolor sit amet,</Text> 
     <Text style={{fontSize:12,marginLeft:20,marginTop:3,fontWeight:'400',color:'#A4A4A4'}}>consectetur adipiscing elit.</Text> 
     </View >    
    <Text style={{fontSize:12,marginLeft:50,marginTop:3,fontWeight:'400',color:'#A4A4A4'}}>2:20 PM</Text>
  
    </View>

    <View  style={{backgroundColor: '#F3F3F3',borderBottomWidth:1,borderBottomColor:'#7D7D7D',width:360,height:83,flexDirection:'row',marginTop:18}}> 
  
     <View > 
     <Image  source={require('../assets/img2.png')} style={{width:49,height:49,marginTop:5,marginLeft:20, borderRadius: 150 / 2,
     overflow: "hidden",}}></Image> 
     </View >     
     <View > 
     <Text style={{fontSize:14,marginLeft:20,marginTop:5,fontWeight:'700',color:'#A4A4A4'}}>Grant Marshall</Text> 
     <Text style={{fontSize:12,marginLeft:20,marginTop:3,fontWeight:'400',color:'#A4A4A4'}}>Lorem ipsum dolor sit amet,</Text> 
     <Text style={{fontSize:12,marginLeft:20,marginTop:3,fontWeight:'400',color:'#A4A4A4'}}>consectetur adipiscing elit.</Text> 
     </View >    
    <Text style={{fontSize:12,marginLeft:50,marginTop:3,fontWeight:'400',color:'#A4A4A4'}}>2:20 PM</Text>
  
    </View>

    <View  style={{backgroundColor: '#F3F3F3',borderBottomWidth:1,borderBottomColor:'#7D7D7D',width:360,height:83,flexDirection:'row',marginTop:18}}> 
  
     <View > 
     <Image  source={require('../assets/img2.png')} style={{width:49,height:49,marginTop:5,marginLeft:20, borderRadius: 150 / 2,
     overflow: "hidden",}}></Image> 
     </View >     
     <View > 
     <Text style={{fontSize:14,marginLeft:20,marginTop:5,fontWeight:'700',color:'#A4A4A4'}}>Grant Marshall</Text> 
     <Text style={{fontSize:12,marginLeft:20,marginTop:3,fontWeight:'400',color:'#A4A4A4'}}>Lorem ipsum dolor sit amet,</Text> 
     <Text style={{fontSize:12,marginLeft:20,marginTop:3,fontWeight:'400',color:'#A4A4A4'}}>consectetur adipiscing elit.</Text> 
     </View >    
    <Text style={{fontSize:12,marginLeft:50,marginTop:3,fontWeight:'400',color:'#A4A4A4'}}>2:20 PM</Text>
  
    </View>

    <View  style={{backgroundColor: '#F3F3F3',borderBottomWidth:1,borderBottomColor:'#7D7D7D',width:360,height:83,flexDirection:'row',marginTop:18}}> 
  
     <View > 
     <Image  source={require('../assets/img2.png')} style={{width:49,height:49,marginTop:5,marginLeft:20, borderRadius: 150 / 2,
     overflow: "hidden",}}></Image> 
     </View >     
     <View > 
     <Text style={{fontSize:14,marginLeft:20,marginTop:5,fontWeight:'700',color:'#A4A4A4'}}>Grant Marshall</Text> 
     <Text style={{fontSize:12,marginLeft:20,marginTop:3,fontWeight:'400',color:'#A4A4A4'}}>Lorem ipsum dolor sit amet,</Text> 
     <Text style={{fontSize:12,marginLeft:20,marginTop:3,fontWeight:'400',color:'#A4A4A4'}}>consectetur adipiscing elit.</Text> 
     </View >    
    <Text style={{fontSize:12,marginLeft:50,marginTop:3,fontWeight:'400',color:'#A4A4A4'}}>2:20 PM</Text>
  
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
  