import React from 'react';
import { StyleSheet,YellowBox, Text, View,ScrollView,Image,ActivityIndicator,StatusBar,TouchableOpacity} from 'react-native';
import IconAnt from 'react-native-vector-icons/Fontisto';
import IconAnt2 from 'react-native-vector-icons/AntDesign';
import {Input,Item,Card} from 'native-base'
import { Button } from 'react-native-paper';
import * as Font from 'expo-font';
import CustomHeader  from '../Header/MyHeader'
YellowBox.ignoreWarnings(['Remote debugger']);

export default class HomePage extends React.Component{
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
        <CustomHeader navigation={this.props.navigation} />
        <ScrollView>
        {/* <View style={{marginTop:13,marginLeft:20,flexDirection:'row'}}>
       <View>
       <IconAnt name="left" size={20} color='#A4A4A4' style={{marginRight:5}}/>
        
        </View>
        <View >
         <Text style={{fontSize:8,marginLeft:230,alignSelf:'center',fontWeight:'600',color:'#A4A4A4'}}>CLOSE X</Text>
         <Text style={{fontSize:16,marginLeft:0,marginRight:-20,fontWeight:'400',color:'white'}}>Clients scheduled today</Text>
    
        </View>
        </View>
        <Text style={{fontSize:18,marginLeft:20,marginTop:23,fontWeight:'600',color:'#141414'}}>Notifications</Text>
       */}
        <View style={{width:334,height:110,backgroundColor:'#FF88AF',borderRadius:7,alignSelf:'center',marginTop:22,flexDirection:'row'}}>
        <View >
        <View style={{flexDirection:'row'}}>
        <IconAnt name="ellipse" size={40} color='white' style={{marginLeft:18,marginTop:15}}/>
        <Text style={{fontSize:30,marginLeft:13,marginTop:15,fontWeight:'700',color:'white'}}>340</Text>
       
        <IconAnt2 name="arrowright" size={30} color='white' style={{marginLeft:150,marginTop:40}}/>
        </View>
        <Text style={{fontSize:16,marginLeft:18,fontWeight:'400',color:'white'}}>Clients scheduled today</Text>
       </View>
     </View>
        
     <View style={{width:334,height:110,backgroundColor:'#FFB492',borderRadius:7,alignSelf:'center',marginTop:22,flexDirection:'row'}}>
        <View >
        <View style={{flexDirection:'row'}}>
        <IconAnt name="ellipse" size={40} color='white' style={{marginLeft:18,marginTop:15}}/>
        <Text style={{fontSize:30,marginLeft:13,marginTop:15,fontWeight:'700',color:'white'}}>243</Text>
       
        <IconAnt2 name="arrowright" size={30} color='white' style={{marginLeft:150,marginTop:40}}/>
        </View>
        <Text style={{fontSize:16,marginLeft:18,fontWeight:'400',color:'white'}}>Caregivers assigned to work today</Text>
       </View>
     </View>

     <View style={{width:334,height:110,backgroundColor:'#74D0FF',borderRadius:7,alignSelf:'center',marginTop:22,flexDirection:'row'}}>
        <View >
        <View style={{flexDirection:'row'}}>
        <IconAnt name="ellipse" size={40} color='white' style={{marginLeft:18,marginTop:15}}/>
        <Text style={{fontSize:30,marginLeft:13,marginTop:15,fontWeight:'700',color:'white'}}>39</Text>
       
        <IconAnt2 name="arrowright" size={30} color='white' style={{marginLeft:150,marginTop:40}}/>
        </View>
        <Text style={{fontSize:16,marginLeft:18,fontWeight:'400',color:'white'}}>New referrals this week</Text>
       </View>
     </View>
     <TouchableOpacity onPress={()=>this.props.navigation.navigate('Stack3')} >
     <Button   style={{marginTop:39,width:334,height:50,alignSelf:'center',backgroundColor:'#B20838',borderRadius:4,borderWidth:1,textAlign:'center'}}><Text style={{fontSize:16,alignSelf:'center',fontWeight:'600',color:'white'}}>Make New Schedule</Text></Button>
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























// // import React from 'react';
// // import { Button, Text, View } from 'react-native';
// // import { Ionicons } from '@expo/vector-icons'; // 6.2.2
// // import IconAnt from 'react-native-vector-icons/Entypo';
// // import IconAnt2 from 'react-native-vector-icons/AntDesign';
// // import IconAnt3 from 'react-native-vector-icons/MaterialIcons';
// // import { createAppContainer, TabBarBottom } from 'react-navigation'; // 1.0.0-beta.27
// // import { createBottomTabNavigator } from 'react-navigation-tabs';
// // import { createDrawerNavigator,DrawerItems } from 'react-navigation-drawer';
// // import HomeScreen from '../TabsSceens/HomeScreen'
// // import AddClientScreen from '../TabsSceens/AddClientScreen'
// // import AddCarevigor from '../TabsSceens/AddCarevigor'
// // import ManageSchedule from '../TabsSceens/ManageSchedule'



// export default createAppContainer(createBottomTabNavigator(  
//     {  
//       Home:{  
//         screen:HomeScreen,  
//         navigationOptions:{  
//           tabBarLabel:'Home',  
//           tabBarIcon:({tintColor})=>(  
//             <IconAnt2 name="home" size={25} color='#A4A4A4'/>
//           )  
//         }  
//       },  
//       Add: {  
//         screen:AddClientScreen,  
//         navigationOptions:{  
//           tabBarLabel:'AddClient',  
//           tabBarIcon:({tintColor})=>(  
//             <IconAnt name="add-user" size={25} color='#A4A4A4'/>
//           )  
//         }  
//       },  
//       AddCare: {  
//         screen:AddCarevigor,  
//         navigationOptions:{  
//           tabBarLabel:'AddCarevigor',  
//           tabBarIcon:({tintColor})=>(  
//             <IconAnt3 name="library-add" size={25} color='#A4A4A4'/>
//           )  
//         }  
//       }, 
//       Manage: {  
//         screen:ManageSchedule,  
//         navigationOptions:{  
//           tabBarLabel:'Manage Schedule',  
//           tabBarIcon:({tintColor})=>(  
//             <IconAnt2 name="calendar" size={25} color='#A4A4A4'/>
//           )  
//         }  
//       }, 
//     },  
//     // {  
//     //   initialRouteName: "Home"  
//     // },  
// ));
  