import React from 'react'
import { View, Text, TouchableOpacity,Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Icons} from 'react-native-vector-icons/Ionicons'
import Home from '../Screenfortab/Home';
import Profile from '../Screenfortab/Profile';
import Setting from '../Screenfortab/Setting';

const Tab = createBottomTabNavigator();
export default  function Tabnavigation(){
    return(
        <NavigationContainer>
        <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}
          
     options={{
         tabBarIcon:({focused})=> 
          (
            
            <Image source={require('../assests/home.png')}  />
               
          ),
            
         }} />
        <Tab.Screen name="Setting" component={Setting} 
           options={{
            tabBarIcon:({focused})=> 
             (
               
               <Image source={require('../assests/Settings.png')}  />
                  
             ),
               
            }} />
        <Tab.Screen name="Profile" component={Profile} 
         options={{
            tabBarIcon:({focused})=> 
             (
               
               <Image source={require('../assests/profile.jpg')}style={{width:30,height:30}}  />
                  
             ),
               
            }}/>
      
      </Tab.Navigator> 
      </NavigationContainer> 
    )
} 
