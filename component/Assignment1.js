import {useState} from 'react';
import * as React from 'react';
// import { TextInput } from 'react-native-paper';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import DateTimePickerModal from "react-native-modal-datetime-picker";
import {Picker} from '@react-native-picker/picker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { TextInput } from 'react-native-paper';


import { View, Text, StyleSheet ,Image,Button,ScrollView} from 'react-native';
import style1 from '../style/style1';
const Assignment1 = () => {
 
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  // const [date,setdate]=useState("2016-05-15");
    const [selectedLanguage, setSelectedLanguage] = useState();
  
   

    return (
      <ScrollView>
        <View style={{ flex: 1, backgroundColor: '#EDF7EE' }}>
       
        <Text style={style1.regis}>Registration</Text>
        <Image source={require('../assests/signup-4.png')} style={{width:510,height:37,justifyContent:'center',marginLeft:30,marginTop:'5%'}}/>
        
        {/* </View> */}
        {/* </Text> */}
        <Text style={style1.regis1}>Physical Address And Identification</Text>
     
        <TextInput
            mode="outlined"
            label="Street Address"
            style={style1.textboxs}
            theme={{
              colors: {
                         bordercolor:'white',
                        //  borderWidth:0,
                         underlineColor: 'transparent', 
                         
                 }
           }} />
        <Text style={style1.resi}>* Residential only, No PO Box</Text>
        <TextInput
            mode="outlined"
            label="Appartment/Suite"
            style={style1.textboxs}
            theme={{
              colors: {
                         bordercolor:'white',
                        //  borderWidth:0,
                         underlineColor: 'transparent', 
                         
                 }
           }} />
        
        
     
         <View
  style={style1.textbox}>
        <Picker style={style1.picker}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
        setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="City/Town" value="City/Town" style={style1.item}/>
        <Picker.Item label="Jamaica" value="Jamaica" style={style1.item}/>
        <Picker.Item label="Parish" value="Parish" style={style1.item}/>

        </Picker>
        
        </View> 
      
         <View
  style={style1.textbox}>
        <Picker style={style1.picker}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
        setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Parish" value="Parish" style={style1.item}/>
        <Picker.Item label="New York" value="New York" style={style1.item}/>
        <Picker.Item label="Jamaica" value="Jamaica" style={style1.item}/>
        </Picker>
        </View> 
        <TextInput
            mode="outlined"
            label="Email Address"
            style={style1.textboxs}
            theme={{
              colors: {
                         bordercolor:'white',
                        //  borderWidth:0,
                         underlineColor: 'transparent', 
                         
                 }
             }}/>
             <TextInput
            mode="outlined"
            label="TRN Number"
            style={style1.textboxs}
            theme={{
              colors: {
                         bordercolor:'white',
                        //  borderWidth:0,
                         underlineColor: 'transparent', 
                         
                 }
             }}/>
              <View style={style1.textbox}>
        <Picker style={style1.picker}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
        setSelectedLanguage(itemValue)
        }>
          <Picker.Item label="Card" value="Card" style={style1.item}/>
        <Picker.Item label="Driver License" value="Driver License" style={style1.item}/>
        <Picker.Item label="Passport" value="Passport" style={style1.item}/>
        </Picker>
        </View>
        <TextInput
            mode="outlined"
            label="ID Number"
            style={style1.textboxs}
            theme={{
              colors: {
                         bordercolor:'white',
                        //  borderWidth:0,
                         underlineColor: 'transparent', 
                         
                 }
             }}/>
             <View style={style1.textboxborder1}>
               <View style={{flexDirection:'row'}}>
               <Text  onPress={showDatePicker} style={{marginTop:'2%',fontSize:17}}>ID Expiration Date</Text>
               <Image source={require('../assests/Calendar.png')} style={{flexDirection:'row',alignSelf: 'flex-end',marginRight:'2%',marginBottom:'2%',marginLeft:'48%'}} onPress={showDatePicker}/>
               </View>
             <View>
      {/* <Button title="Show Date Picker" onPress={showDatePicker} /> */}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
             </View>
               <View style={style1.textboxborder}>
                 <View style={{flexDirection:'row'}}>
               <Image source={require('../assests/img.png')} style={{height:45}}/>
                 <Text style={style1.txtinside}>Choose Image</Text></View>
                 </View>
         
          <Text style={[style1.text,style1.formargin]}>Please make sure the document is fully legible</Text>
        <Text style={[style1.text,style1.forbottom]}>and entirely on the picture</Text>
        {/* <Button title="Back" style={style1.btn1}/> */}
        <View style={style1.forflex}>
        <View style={style1.btn1}><Text style={style1.txt}>Back</Text></View>
        <View style={style1.btn2}><Text style={style1.txt}>Save and Continue</Text></View>
        </View>
        {/* </ScrollView> */}
        </View>
        </ScrollView>
     
       
        )
    }
    export default Assignment1;