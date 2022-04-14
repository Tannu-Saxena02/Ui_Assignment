import React from 'react'
import { View, Text, StyleSheet, Image,ScrollView ,Dimensions} from 'react-native'
const{height,width} = Dimensions.get('window');
import styled  from '../style/styled';
const Dimension = () => {
    return (
        <>
        <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'yellow'}}>
            {/* <View style={{backgroundColor:'red',height:'50%',width:'100%'}}>
            <Image source={require('../assests/logocopy.png')} style={{width:width/5,height:100}}/>
            </View> */}
            
        </View>
          <View style={{backgroundColor:'red',height:'50%',width:'100%'}}>
          <Image source={require('../assests/logocopy.png')} style={{width:width/5,height:100}}/>
          </View>
          <View>
              <Text style={styled.helo}>hekki</Text> 
              </View>
          </>
    )}
    export default Dimension;