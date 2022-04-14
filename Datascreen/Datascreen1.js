// In App.js in a new project

import  React,{useState} from 'react';
import { View, Text ,TextInput,Dimensions,TouchableOpacity} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
// import style from 'react-native-datepicker/style';


// import { TextInput } from 'react-native-gesture-handler';
// import stylenav from '../style/stylenav';
// const screen = Dimensions.get("screen");
const Stack = createNativeStackNavigator();

function Datascreen1({ navigation }) {
    
    const [name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[isvaliduser,setisvaliduser]=useState(false);
    
    // isvaliduser=true;
    const handleSubmit=()=>{
        console.log("heloo");
        if(name==""||password==""||email=="")
        alert("Please enter information")
        else{
        navigation.navigate("Datascreen2",{
            userName:name,
            userEmail:email,
            userPassword:password
            
        });
    }
    };
    // isvaliduser=true;
    function edit(name){
        console.log(name);
        
        console.log(isvaliduser);
        let regex=/^[A-Za-z]+$/;
        // if(name!='/^[A-Za-z]+$/')
        if(!regex.test(name))
       {setisvaliduser(true);

        console.log(isvaliduser);
       }
       else
       setisvaliduser(false);

    }
    // function forEmail(email){
    //     console.log(email);
    // }
    // console.log(isvaliduser);

  return (
    <View style={{flex:1}}>
        <Text style={{textAlign:'center',marginBottom:40,marginTop:100,fontSize:20}}>Enter Your Information</Text>
      
    <View  style={stylenav.textbox}>  
   <TextInput placeholder="Enter your Name" value={name} onChangeText={(text)=>setName(text)}     onEndEditing={(e)=>edit(e.nativeEvent.text)}/>
   </View>
  
    {isvaliduser?
   <Text style={stylenav.valid}>Please enter valid userName</Text>
   :null
}
    <View  style={stylenav.textbox}>  
   <TextInput placeholder="Enter your Password"keyboardType='numeric'maxLength={4} secureTextEntry={true} value={password} onChangeText={(text)=>setPassword(text)}/>
   </View>
   <View  style={stylenav.textbox}>  
   <TextInput placeholder="Enter your Email" onChangeText={(text)=>setEmail(text)} value={email} />
   </View>
   {/* { validemail?null:
   <Text style={stylenav.valid}>Please enter valid email Address</Text>
} */}
   {/* <View  style={stylenav.textbox}>  
   <TextInput placeholder="Enter your Email" value={email}/>
   </View>  */}
    <TouchableOpacity style={stylenav.submit} onPress={()=>handleSubmit()}>
    <Text style={{textAlign:'center',marginLeft:'40%',fontSize:16}}>Submit</Text>
    </TouchableOpacity>
   </View>
 
  )
}
const {width} = Dimensions.get('screen');

export default Datascreen1;
const stylenav=StyleSheet.create({
    textbox:{
    borderWidth:2,
    marginTop:'4%',
    padding:2,
    width:width-20,
    /* border:2px solid green; */
    flexDirection:'row',
    alignSelf:'center',
    borderradius:4,
    height:50,
    color:'white',
    // borderColor:'lightblue'
    },
    submit:{
      width:width-40,
      backgroundColor:'lightblue',
      padding:20,
      flexDirection:'row',
      alignSelf:'center',
      marginTop:'5%',
      borderRadius:40,
      // marginleft:'4%'
    },
    valid:{
        color:'red',
        fontSize:13,
        marginLeft:10,
        marginBottom:30
    }

})