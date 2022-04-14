import React from 'react'
import { View, Text,Dimensions} from 'react-native'
import {StyleSheet} from 'react-native'
export default function Datascreen2({ route, navigation }){
    console.log(route.params);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View>
            <Text style={stylenav2.text}>Name:{route.params.userName}</Text>
            <Text style={stylenav2.text}>Password:{route.params.userPassword}</Text>
            <Text style={stylenav2.text}>Email:{route.params.userEmail}</Text>
            
        </View>
    </View>
    )
}
const {width} = Dimensions.get('screen');
const stylenav2=StyleSheet.create({
text:{
    fontSize:20,
    marginBottom:20,
    // color:'white',

},


})