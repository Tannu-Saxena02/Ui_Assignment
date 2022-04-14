import React from 'react'
import { View, Text, StyleSheet, Image,ScrollView } from 'react-native'
import style4 from '../style/style4';
import { TextInput } from 'react-native-paper';
const Assignment4 = () => {
    return (
        
        <View style={{ height:'100%',backgroundColor: '#EDF7EE' }}>
            
                <Image source={require('../assests/Banner.png')} style={{ height: 150, width: '100%',  }} />
                 <Text style={style4.contact}>Contact Us</Text>
                 <Text style={style4.contactbelow}>We  are here to help You</Text>
              
                <TextInput
            mode="outlined"
            label="Name"
            style={style4.textboxs}
            theme={{
              colors: {
                     bordercolor:'white',
                        //  borderWidth:0,
                     underlineColor: 'transparent', 
                         
                 }
           }} />
                <TextInput
            mode="outlined"
            label="Email Address"
            style={style4.textboxs}
            theme={{
              colors: {
                     bordercolor:'white',
                        //  borderWidth:0,
                     underlineColor: 'transparent', 
                         
                 }
           }} />
                <TextInput
            mode="outlined"
            label="Subject"
            style={style4.textboxs}
            theme={{
              colors: {
                     bordercolor:'white',
                        //  borderWidth:0,
                     underlineColor: 'transparent', 
                         
                 }
           }} />
                <TextInput
            mode="outlined"
            label="Message"
            style={style4.msgtextboxs}
            theme={{
              colors: {
                     bordercolor:'white',
                        //  borderWidth:0,
                     underlineColor: 'transparent', 
                         
                 }
           }} />
           <View style={style4.btn1}><Text style={style4.txt}>Send Email</Text></View>
         </View>
    
        )
    }
    export default Assignment4;