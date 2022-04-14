// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from '../Screens/Screen1';
import Screen2 from '../Screens/Screen2';
import Screen3 from '../Screens/Screen3';
import { NavigationContainer } from '@react-navigation/native';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

function Stacknavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen1" component={Screen1}  />
         <Stack.Screen name="Screen2" component={Screen2}  /> 
        <Stack.Screen name="Screen3" component={Screen3}  /> 
        

      </Stack.Navigator>
      </NavigationContainer>
  
  )
}

export default Stacknavigation;
