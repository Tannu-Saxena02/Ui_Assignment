import React from 'react'
import { View, Text, StyleSheet, Image,ScrollView } from 'react-native'
import Unorderedlist from 'react-native-unordered-list';
// import { Card } from 'react-native-paper';
import style3 from '../style/style3';
const Assignment3 = () => {
    return (
        <>
            <View style={{ flex: 1, backgroundColor: '#EDF7EE' }}>
                <Image source={require('../assests/Banner.png')} style={{ height: 100, width: '100%', marginTop: '0%' }} />
                <ScrollView>
                <Text style={style3.green}>Account Levels</Text>
                <Text style={style3.greenbtm}>Original Document required at verification</Text>
                <View style={{ borderColor: 'orange', width: 310, height: 410, borderWidth: 1, justifyContent: 'center', alignItems: 'center', marginTop: '8%', marginLeft: '13%', marginRight: '13%', borderRadius: 5, backgroundColor: '#FFFFFF' }}>
                   <Text style={style3.level}>Level 2</Text>
                   <Text style={style3.textBelow}>Monthly Cash in limit</Text>
                   <View style={style3.forFlex}>
                   <Image source={require('../assests/Coin.png')} style={{marginTop:'2%',marginRight:'5%'}}/>
                   <Text style={style3.level}>200,000</Text>
                   </View>
                   <Text style={style3.textBelow}>Daily Wager limit:$100,000</Text>
                   <View style={{flexDirection:'row',marginRight:'9%'}}>
                   <View style={{flexDirection:'column'}}>
                   <Image source={require('../assests/tick1.png')} style={{marginTop:'20%',marginLeft:'5%'}}/>
                   <Image source={require('../assests/tick1.png')} style={{marginTop:'20%',marginLeft:'5%'}}/>
                   <Image source={require('../assests/tick1.png')} style={{marginTop:'20%',marginLeft:'5%'}}/>
                     <Image source={require('../assests/tick1.png')} style={{marginTop:'20%',marginLeft:'5%'}}/>
                     <Image source={require('../assests/tick1.png')} style={{marginTop:'20%',marginLeft:'5%'}}/>
                   {/* <Image source={require('../assests/tick1.png')} style={{marginTop:'20%',marginLeft:'5%'}}/> */}

                       </View>
                    <View style={{flexDirection:'column'}}>
                    <Text style={{marginTop:'3%'}}>Name</Text> 
                    <Text   style={{marginTop:'3%'}} >Gender</Text>
                    <Text style={{marginTop:'3%'}}>Nationality</Text>
                    <Text style={{marginTop:'3%'}}>Date of Birth</Text>
                    <Text style={{marginTop:'3%'}}>Address</Text>

                    {/* <Text style={{marginTop:'3%'}}>Date of Birth</Text> */}
                    
                    
                    </View>
                   </View>
                   <View style={{flexDirection:'row'}}>
                   <View style={{flexDirection:'column'}}>
                   <Image source={require('../assests/star.png')} style={{marginTop:'20%',marginLeft:'4%'}}/>
                   <Image source={require('../assests/star.png')} style={{marginTop:'20%',marginLeft:'7%'}}/>
                   <Image source={require('../assests/star.png')} style={{marginTop:'20%',marginLeft:'7%'}}/>
                    
                   </View>
                   <View style={{flexDirection:'column'}}>
                    <Text style={{marginTop:'3%'}}>TRN</Text> 
                    <Text   style={{marginTop:'3%'}} >Photo ID</Text>
                    <Text style={{marginTop:'3%'}}>Proof Of Income</Text>
                    </View>
                   </View>
                  
       
                </View>
                <View style={{ borderColor: 'lightgrey', width: 310, height: 440, borderWidth: 1, justifyContent: 'center', alignItems: 'center', marginTop: '8%', marginLeft: '13%', marginRight: '13%', borderRadius: 5, backgroundColor: '#FFFFFF' }}>
                    <Text style={style3.greentext}>List of approved documents</Text>
                    <Text style={[style3.smalltxt,style3.marginup]}>If you have privacy concerns around uploading</Text>
                    <Text style={style3.smalltxt}> your proof of address or proof of income.you</Text>
                    <Text style={style3.smalltxt}>may upload a blank picture.If you do that</Text>
                    <Text style={style3.smalltxt}>however.you willbe assigned to a LEVEL 1</Text>
                    <Text style={style3.smalltxt}>Account</Text>
                    <Text style={style3.blacktxt}>The approved Proof of address are:</Text>
                    <Unorderedlist style={style3.unorderText}><Text style={style3.fontText}>Current Utility Bill </Text></Unorderedlist>
                    <Unorderedlist style={style3.unorderText}><Text style={style3.fontText}>Bank Statemen</Text></Unorderedlist>
                    <Unorderedlist style={style3.unorderText}><Text style={style3.fontText}>Postmarked Envelope </Text></Unorderedlist>
                    <Unorderedlist style={style3.unorderText}><Text style={style3.fontText}>stamped JP Letter </Text></Unorderedlist>
                    
                    <Text style={style3.blacktxt}>The approved Proof of Income are:</Text>
                    <Unorderedlist style={style3.unorderText}><Text style={style3.fontText}>Pay Slip </Text></Unorderedlist>
                    <Unorderedlist style={style3.unorderText}><Text style={style3.fontText}> Job Letter</Text></Unorderedlist>
                    <Unorderedlist style={style3.unorderText}><Text style={style3.fontText}>Bank Statement </Text></Unorderedlist>
                    <Unorderedlist style={style3.unorderText}><Text style={style3.fontText}>Remittance </Text></Unorderedlist>
                    <Unorderedlist style={style3.unorderText}><Text style={style3.fontText}>Pension </Text></Unorderedlist>
                    





                    
                </View>
                </ScrollView>
            </View>
        </>
    )
}
export default Assignment3;