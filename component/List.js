import React,{useState} from 'react'
import { View, Text, StyleSheet, Image,ScrollView,TouchableOpacity,FlatList } from 'react-native'
// import styleu from '../style/styleu';
 
const List = () => {
    const [Item,setItem]=useState([
       {name:'anil',email:'anil02@gmail.com'},
       {name:'peter',email:'anil02@gmail.com'},
       {name:'sam',email:'anil02@gmail.com'},
       {name:'kelly',email:'anil02@gmail.com'},
       {name:'aanily',email:'anil02@gmail.com'},
       {name:'tannu',email:'anil02@gmail.com'},
       {name:'unnat',email:'anil02@gmail.com'},
       {name:'unber',email:'anil02@gmail.com'},
       {name:'unber',email:'anil02@gmail.com'},
       {name:'unber',email:'anil02@gmail.com'},
       {name:'unber',email:'anil02@gmail.com'},
       {name:'unber',email:'anil02@gmail.com'},
       {name:'unber',email:'anil02@gmail.com'},
       {name:'unber',email:'anil02@gmail.com'},
    {
        "name": "Peter",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        "name": "Peterson",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        "name": "Hulman",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
       {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      },    {
        "name": "Famnin",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },


    ]);
    return (
       
        <View style={{flex:1,backgroundColor:'pink'}}>
           
            <FlatList 
            // horizontal
            // inverted
            data={Item} 
            renderItem={({item})=>(
                <View style={{border:2,borderWidth:2}}>
                    <Text style={{fontSize:70,color:'red',flexDirection:'row',justifyContent:'center',alignSelf:'center'}}>{item.name}</Text>
                </View>
            )}/>
        </View>
        )
    }
    export default List;