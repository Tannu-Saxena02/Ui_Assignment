import React,{useState} from 'react';
//import React in our code.
import {StyleSheet, View, TouchableOpacity, Text,FlatList} from 'react-native';
//import all the components we are going to use.
import axios from 'axios';

const Axioswithflatlist= () => {
    const [item,setItem]=useState("");

  const getDataUsingSimpleGetCall = () => {
    axios
      .get('https://api.publicapis.org/entries')
      .then(function (response) {
        // handle success
        alert(JSON.stringify(response.data));
        console.log("Json data is"+(JSON.stringify(response.data.entries[0])));
        console.log("data is");
        setItem(response.data.entries);
        // console.log(item.id);
      })
      .catch(function (error) {
        // handle error
        alert(error);
      })
      .finally(function () {
        // always executed
        alert('Finally called');
      });
  };





  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30, textAlign: 'center'}}>
        API Request
      </Text>
      {/*Running GET Request*/}
       <TouchableOpacity 
        style={styles.buttonStyle}
        onPress={getDataUsingSimpleGetCall}>
        <Text style={styles.blue}>Simple Get Call</Text>
      </TouchableOpacity>

  {/* <Text>hello</Text> */}
     <FlatList 
            // horizontal
            // inverted
            data={item} 
            renderItem={({item})=>(
                <View style={{border:2,borderWidth:2}}>
                    <Text style={{fontSize:20,color:'red',flexDirection:'row',justifyContent:'center',alignSelf:'center'}}>{item.API}</Text>
                </View>
            )}/> 
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    padding: 16,
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#6ABCCF',
    padding: 10,
    width: '100%',
    marginTop: 16,
    color:'white'
  },
  blue:{
      color:'white'
  }
});

export default Axioswithflatlist;