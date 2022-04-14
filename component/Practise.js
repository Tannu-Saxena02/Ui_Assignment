import React,{useState} from 'react'
import { View, Text, StyleSheet, Image,ScrollView,TouchableOpacity } from 'react-native'
import styleu from '../style/styleu';
import style from '../style/styleu';
const Practise = () => {
    const [randomcolor,Setrandomcolor]=useState("green")
    let variable=false;
    const backgroundColor=()=>{
        
        variable=!variable;
        variable?color='yellow':color='green';
        // let color='yellow'
        Setrandomcolor(color);

    }
    return (
      <TouchableOpacity style={[styleu.view1,{backgroundColor:randomcolor}]} onPress={backgroundColor}>
            <View >
                <Text style={styleu.txt}>Hello</Text>
            </View>
            </TouchableOpacity>
      
        )
    }
    export default Practise;