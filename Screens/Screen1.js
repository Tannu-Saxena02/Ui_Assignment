import React from 'react'
import { View, Text, TouchableOpacity,} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 function Screen1({ navigation }){
  function  handleNavigation(Screenname)
    { 
        navigation.navigate(Screenname)
        console.log(Screenname);
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
       {/* */} 
        <View> 
       <TouchableOpacity   onPress={() => handleNavigation('Screen2')}>
           {/* onPress={()=>handleNavigation("Screen1")} */}
         
           {/* onPress={handleNavigation} */}
           <Text style={{backgroundColor:'lightblue',color:'white',padding:30,marginBottom:20}}>Screen2</Text>
       </TouchableOpacity>
           <TouchableOpacity
             onPress={() => handleNavigation('Screen3')}>
           <Text style={{backgroundColor:'blue',color:'white',padding:30,marginBottom:20}}>Screen3</Text>
           </TouchableOpacity>
       </View> 
    </View>
    )
}
export default  Screen1;