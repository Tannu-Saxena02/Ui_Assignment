import React from 'react'
import { View, Text, TouchableOpacity,Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Icons} from 'react-native-vector-icons/Ionicons'
import Home from '../Screenfortab/Home';
import Profile from '../Screenfortab/Profile';
import Setting from '../Screenfortab/Setting';


const Drawer = createDrawerNavigator();
export default  function Drawernavigation(){
    return(
        <NavigationContainer>
        <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} 
       options={{
          drawerIcon:({focused})=> 
          (
            
            <Image source={require('../assests/home.png')}  />
               
          ),
      }}
      />
      <Drawer.Screen name="Profile" component={Profile} 
         options={{
            drawerIcon:({focused})=> 
            (
              
              <Image source={require('../assests/profile.jpg')}  style={{width:30,height:30}}/>
                 
            ),
        }}
      />
      <Drawer.Screen name="Setting" component={Setting}
         options={{
            drawerIcon:({focused})=> 
            (
              
              <Image source={require('../assests/Settings.png')}  />
                 
            ),
        }}
      />

    </Drawer.Navigator> 
    </NavigationContainer>
    )
} 
