import {StyleSheet} from 'react-native'
import {Dimensions} from 'react-native'
const{height,width} = Dimensions.get('window');
const styled=StyleSheet.create({
    helo:{
        color:'pink',
        height:height,
        backgroundColor:'blue'
    }
})
export default styled;