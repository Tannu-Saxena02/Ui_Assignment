import React from 'react'
import { View, Text,TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function Screen2({ navigation }){
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text>Screen2</Text> 
       <TouchableOpacity
             onPress={() => navigation.goBack()}>
           <Text style={{backgroundColor:'blue',color:'white',padding:30,marginBottom:20}}>Go Back</Text>
           </TouchableOpacity>
    </View>
    )
}
