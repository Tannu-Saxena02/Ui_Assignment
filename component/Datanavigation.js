// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Datascreen1 from '../Datascreen/Datascreen1';
import Datascreen2 from '../Datascreen/Datascreen2';
import { NavigationContainer } from '@react-navigation/native';




const Stack = createNativeStackNavigator();

function Datanavigation() {
 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Datascreen1" component={Datascreen1}  />
        <Stack.Screen name="Datascreen2" component={Datascreen2}  />
       
        {/* <Stack.Screen name="Datascreen3" component={Datascreen3}  />  */}
        

      </Stack.Navigator>
      </NavigationContainer>
  
  )
}

export default Datanavigation;
