import React ,{ useState }from 'react'
import { View, Text, StyleSheet, Image, ScrollView,TouchableOpacity} from 'react-native'
import { RadioButton } from 'react-native-paper';
// import { useState } from 'react/cjs/react.production.min';

import style6 from '../style/style6';

const Press=()=>{
       SetSubmitted(!submit);
}
const Assignment6 = () => {
       let variable=false;
       const changeColor=()=>{
              let color;
              variable=!variable;
              variable?color='blue':color='green';
              Setinitialcolor(color);

       }
       const [initialcolor,Setinitialcolor]=useState('green')

       const [value, setValue] = React.useState('');
       return (

              <View style={{flex:1}}>
                     {/* <View>    */}
                     <View style={[style6.forFlex, style6.shadow]}>
                            <View style={style6.img1}>
                                   <Image source={require('../assests/arrow.png')} />
                            </View>
                            <View style={style6.img2}>
                                   <Image source={require('../assests/group.png')} />
                            </View>
                            <View style={style6.img3}>
                                   <Image source={require('../assests/logocopy.png')} />
                                   {/* </View> */}
                            </View>

                     </View>
                     {/* </View>  */}
                     <ScrollView >
                            <View style={{ height: '100%', backgroundColor: '#F5FDFF' }}>
                                   <Text style={style6.blueTxt}>Current Health Condition</Text>
                                   <Text style={[style6.textBelow, style6.marginUp]}>Do you have any of the Following</Text>
                                   <Text style={style6.textBelow}>life-threatening symptoms?</Text>
                                   <View   style={[style6.box]}>
                                          <View style={{ flexDirection: 'row' }}>
                                                 <View style={style6.container} >
                                                 <TouchableOpacity>
                                                        <Text  style={style6.text} >Not experiencing any life thratening</Text>
                                                        </TouchableOpacity>
                                                        <Text style={[style6.text]}  >Sympptoms</Text>
                                                 </View>

                                                 <View style={style6.radio}>
                                                        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                                                               <View>
                                                                      <RadioButton value="first" style={{ alignSelf: 'flex-end' }} onPress={changeColor}
                                                                      />
                                                               </View>
                                                        </RadioButton.Group>
                                                 </View>
                                          </View>
                                   </View>
                                   <View style={style6.box}>
                                          <View style={{ flexDirection: 'row' }}>
                                                 <View style={style6.container}>
                                                        <Text style={style6.text}>Grasping for air or cannot talk without</Text>
                                                        <Text style={style6.text}>catching your breadth(extremely</Text>
                                                        <Text style={style6.text}>difficult breathing)</Text>
                                                 </View>

                                                 <View style={style6.radio}>
                                                        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value} >
                                                               <View>
                                                                      <RadioButton value="second" style={{ alignSelf: 'flex-end' }} />
                                                               </View>
                                                        </RadioButton.Group>
                                                 </View>
                                          </View>
                                   </View>
                                   <View style={style6.box}>
                                          <View style={{ flexDirection: 'row' }}>
                                                 <View style={style6.container}>
                                                        <Text style={style6.text}>Severe and constant pain or pressure</Text>
                                                        <Text style={style6.text}>in the chest</Text>
                                                 </View>

                                                 <View style={style6.radio}>
                                                        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value} >
                                                               <View>
                                                                      <RadioButton value="third" style={{ alignSelf: 'flex-end' }} />
                                                               </View>
                                                        </RadioButton.Group>
                                                 </View>
                                          </View>
                                   </View>
                                   <View style={style6.box}>
                                          <View style={{ flexDirection: 'row' }}>
                                                 <View style={style6.container}>
                                                        <Text style={style6.text}>Severe and constant dizziness or</Text>
                                                        <Text style={style6.text}>Light-headnedess</Text>
                                                 </View>

                                                 <View style={style6.radio}>
                                                        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value} >
                                                               <View>
                                                                      <RadioButton value="forth" style={{ alignSelf: 'flex-end' }} />
                                                               </View>
                                                        </RadioButton.Group>
                                                 </View>
                                          </View>
                                   </View>
                                   <View style={style6.box}>
                                          <View style={{ flexDirection: 'row' }}>
                                                 <View style={style6.container}>
                                                        <Text style={style6.text}>Acting confused (new or worsening)</Text>

                                                 </View>

                                                 <View style={style6.radio}>
                                                        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value} >
                                                               <View>
                                                                      <RadioButton value="fifth" style={{ alignSelf: 'flex-end' }} />
                                                               </View>
                                                        </RadioButton.Group>
                                                 </View>
                                          </View>
                                   </View>
                                   <View style={style6.box}>
                                          <View style={{ flexDirection: 'row' }}>
                                                 <View style={style6.container}>
                                                        <Text style={style6.text}>Unconscious or very difficult to wake</Text>
                                                        <Text style={style6.text}>up</Text>
                                                 </View>

                                                 <View style={style6.radio}>
                                                        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value} >
                                                               <View>
                                                                      <RadioButton value="six" style={{ alignSelf: 'flex-end' }} />
                                                               </View>
                                                        </RadioButton.Group>
                                                 </View>
                                          </View>
                                   </View>
                                   <View style={style6.box}>
                                          <View style={{ flexDirection: 'row' }}>
                                                 <View style={style6.container}>
                                                        <Text style={style6.text}>Slurred speech(new or worsening)</Text>

                                                 </View>

                                                 <View style={style6.radio}>
                                                        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value} >
                                                               <View>
                                                                      <RadioButton value="seven" style={{ alignSelf: 'flex-end' }} />
                                                               </View>
                                                        </RadioButton.Group>
                                                 </View>
                                          </View>
                                   </View>
                                   <View style={style6.box}>
                                          <View style={{ flexDirection: 'row' }}>
                                                 <View style={style6.container}>
                                                        <Text style={style6.text}>New seizure or seizures that won't</Text>
                                                        <Text style={style6.text}>stop</Text>


                                                 </View>

                                                 <View style={style6.radio}>
                                                        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value} >
                                                               <View>
                                                                      <RadioButton value="eight" style={{ alignSelf: 'flex-end' }} />
                                                               </View>
                                                        </RadioButton.Group>
                                                 </View>
                                          </View>
                                   </View>









                                   {/* <View style={style6.btn}></View> */}
                                   <View style={style6.forflexbtn}>
                                          <View style={style6.btn1}><Text style={style6.txt}>Cancel</Text></View>
                                          <View style={style6.btn2}><Text style={style6.txt}>Save </Text></View>
                                   </View>
                                   <View style={style6.btn3}><Text style={style6.txtbtn}>Reset</Text></View>
                                   <View style={{ flexDirection: 'row', backgroundColor: 'white', paddingTop: '4%', paddingBottom: '4%', marginTop: '5%' }}>
                                          <Image source={require('../assests/home.png')} style={{ marginRight: '1%', marginLeft: '6%' }} />
                                          <Text style={{ marginRight: '8%' }}>Home</Text>
                                          <View style={style6.verticleLine}></View>
                                          <Image source={require('../assests/email.png')} style={{ marginRight: '1%' }} />
                                          <Text style={{ marginRight: '8%' }}>Messages</Text>
                                          <View style={style6.verticleLine}></View>
                                          <Image source={require('../assests/Settings.png')} style={{ marginRight: '1%' }} />
                                          <Text style={{ marginRight: '8%' }}>Settings</Text>


                                   </View>



                            </View>
                     </ScrollView>

              </View>
       )
}
export default Assignment6;
