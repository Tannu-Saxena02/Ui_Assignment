import {StyleSheet} from 'react-native'
const {width} = Dimensions.get("screen");
const screen = Dimensions.get("screen");

const stylenav=StyleSheet.create({
    textbox:{
    
    //   borderRadius:2,
    //   borderwidth:10,
    //   borderColor:'black',
    //     width:100,
    //     backgroundColor:'pink'
    borderWidth:0.5,

        width:Width-20,
        /* border:2px solid green; */
        flexDirection:'row',
        // justifyContent:'center',
        alignSelf:'center',
        borderradius: 5,
        // alignitems: 'center',
        height:45,
    }
})
export default stylenav;