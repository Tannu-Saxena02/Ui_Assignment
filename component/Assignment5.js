import React from 'react'
import { View, Text, StyleSheet, Image,ScrollView } from 'react-native'
import style5 from '../style/style5';
const Assignment5 = () => {
    return (
        <View style={{ height:'100%',backgroundColor: '#f0ffff' }}>
         <Image source={require('../assests/Banner.png')} style={{ height: 100, width: '100%',  }} />
         <ScrollView>
        <Text style={style5.greenTxt}>Locations</Text>
        <View style={style5.forFlex}>
            <View style={{flexDirection:'column',marginTop:'2%'}}>
        <Text style={[style5.greenTxtBelow,style5.formargins]}>Verifications Locations</Text>
        </View>
        <View style={{flexDirection:'column',marginTop:'3%'}}>
        <Image source={require('../assests/minus.png')} style={{}}/>
        </View>
        </View>
        <Text style={style5.greenTxtBelow}>Prize Payment Center</Text>
        <Text style={style5.smalltxt}>1St Floor,Sagicor center 28-48</Text>
        <Text style={style5.smalltxt}>Barbados Avenue,Kingston 5</Text>
        <Text style={style5.smalltxt}>1-876-454-6526</Text>
        <Text style={[style5.greenTxtBelow,style5.marginUp]}>Half WayTree</Text>
        <Text style={style5.smalltxt}>15 H Half Way Tree Road,</Text>
        <Text style={style5.smalltxt}>State Mail,Kingston 5</Text>
        <Text style={style5.smalltxt}>1-876-906-8719</Text>
        <Text style={[style5.greenTxtBelow,style5.marginUp]}>Portmore</Text>
        <Text style={style5.smalltxt}>shop #6,2nd Floor</Text>
        <Text style={style5.smalltxt}>McMaster's Center</Text>
        <Text style={style5.smalltxt}>Lot18 Portmore Town Center</Text>
        <Text style={style5.smalltxt}>1-876-454-6526</Text>
        <Text style={[style5.greenTxtBelow,style5.marginUp]}>Spanish Town</Text>
        <Text style={style5.smalltxt}>37,Young Street Spanish Town</Text>
        <Text style={style5.smalltxt}>St.Catherine</Text>
        <Text style={style5.smalltxt}>1-876-454-6526</Text>
        <Text style={[style5.greenTxtBelow,style5.marginUp]}>Savanna La-mar</Text>
        <Text style={style5.smalltxt}>Shop #16 A,Hendon Mail</Text>
        <Text style={style5.smalltxt}>Savanna-La-Mar,Westmoreland</Text>
        <Text style={style5.smalltxt}>1-876-454-6526</Text>
        <Text style={[style5.greenTxtBelow,style5.marginUp]}>Montego Bay</Text>
        <Text style={style5.smalltxt}>25 St.James Street</Text>
        <Text style={style5.smalltxt}>Shop # 40</Text>
        <Text style={style5.smalltxt}>1-876-454-6526</Text>
        <Text style={[style5.greenTxtBelow,style5.marginUp]}>Ocho Rios</Text>
        <Text style={style5.smalltxt}>Shop Gf #5</Text>
        <Text style={style5.smalltxt}>Island Shopping Plaza</Text>
        <Text style={style5.smalltxt}>1-876-454-6526</Text>
        <Text style={[style5.greenTxtBelow,style5.marginUp]}>Lotto Superstore</Text>
        <Text style={style5.smalltxt}>Shop #12</Text>
        <Text style={style5.smalltxt}>Clock Tower Plaza</Text>
        {/* <Text style={style5.greenTxtBelow}>Top Up Locations</Text> */}
        <View style={[style5.forFlex,style5.margin]}>
            <View style={{flexDirection:'column',marginTop:'2%'}}>
        <Text style={[style5.greenTxtBelow,style5.formargins]}>Top Up Locations</Text>
        </View>
        <View style={{flexDirection:'column',marginTop:'3%'}}>
        <Image source={require('../assests/minus.png')} style={{}}/>
        </View>
        </View>
        <Text style={[style5.greenTxtBelow,style5.greenTxtBelowLarge]}>Kingston and St. Andrew</Text>
        <Text style={[style5.smalltxt,style5.greenTxtBelow]}>Circles Bar and Gaming</Text>
        <Text style={style5.smalltxt}>143 Old Hope Road</Text>
        <Text style={style5.smalltxt}>Liguanea</Text>
        <Text style={[style5.greenTxtBelow,style5.marginUp]}>Bar and Games Limites</Text>
        <Text style={style5.smalltxt}>72 King Street</Text>
        <Text style={style5.smalltxt}>Downtown,Kingston</Text>
        <Text style={[style5.greenTxtBelow,style5.marginUp]}>Suspect Services</Text>
        <Text style={style5.smalltxt}>B Gordon Town Road</Text>
        <Text style={style5.smalltxt}>Papine</Text>
        <Text style={[style5.greenTxtBelow,style5.marginUp]}>Jabra Marketing Engineering</Text>
        <Text style={style5.smalltxt}>shop 35 DermassonPlaza</Text>
        <Text style={style5.smalltxt}>Barnard Lodge</Text>
      
        <Text style={[style5.greenTxtBelow,style5.greenTxtBelowLarge]}>Kingston and St.Andrew</Text>
      
        <Text style={style5.greenTxtBelow}>Clocktower lotto SuperStore</Text>
        <Text style={style5.smalltxt}>Clock Tower Plaza</Text>
        <Text style={style5.smalltxt}>Half Way</Text>
        <Text style={[style5.greenTxtBelow,style5.marginUp]}>Bar and Games Limited</Text>
        <Text style={style5.smalltxt}>8 main Street</Text>
        <Text style={style5.smalltxt}>Stony Hills</Text>
        <Text style={[style5.greenTxtBelow,style5.marginUp]}>M & M Wholesale</Text>
        <Text style={style5.smalltxt}>48 A Red Hills Road</Text>
        <Text style={style5.smalltxt}>Red Hills Garden</Text>
        <Text style={[style5.greenTxtBelow,style5.marginUp]}>Jenpow's Cosmetics</Text>
        <Text style={style5.smalltxt}>Shop 35,20 Marlie</Text>
        <Text style={style5.smalltxt}>Mount St.Old Harbour</Text>
        </ScrollView>
 </View>
        )
    }
    
    export default Assignment5;