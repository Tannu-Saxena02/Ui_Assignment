import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Card } from 'react-native-paper';
import style2 from '../style/style2';
const Assignment2 = () => {
    return (

        <View style={{ flex: 1, backgroundColor: '#EDF7EE' }}>

            <View style={style2.box}>
                 <View style={{ borderColor: 'green', width: 310, height: 640, borderWidth: 2, justifyContent: 'center', alignItems: 'center', marginTop: '8%', marginLeft: '13%', marginRight: '13%', borderRadius: 5, backgroundColor: '#FFFFFF' }}>

                    <Image source={require('../assests/Logo.png')} style={{
                        width: 40, height: 25, position: 'absolute',
                        right: 5,
                        top: 5,
                    }} />
                    <View style={style2.container}>
                        <Image
                            style={style2.logo}
                            source={require('../assests/thank.png')}
                        />
                    </View>

                    <Text style={style2.green}>Hi Dorthy</Text>
                    <Text style={style2.txt}>Your top up transaction of amount $ 7350.00</Text>
                    <Text style={style2.txt}>is <Text style={style2.green2}>SUCCESSFUL</Text>. Your current balance is</Text>
                    <Text style={style2.txt}>$ 7400.00 Please find the transaction details</Text>
                    <Text style={style2.txt}>below</Text>
                    <View style={{ borderColor: 'lightgrey', width: 250, height: 120, borderWidth: 1, justifyContent: 'center', alignItems: 'center', marginLeft: '13%', marginRight: '13%', borderRadius: 2, padding: '0%' }}>
                        <Text style={style2.uppertext}>Payment details</Text>
                        <View style={style2.text}>
                            <Text style={style2.texts}>Card Number</Text>
                            <Text style={style2.texts}>512345XXXXXXX2346</Text>
                        </View>

                        <View style={style2.text}>
                            <Text style={style2.texts}>order Date</Text>
                            <Text style={style2.texts}>12-06-2020 12:30PM</Text>
                        </View>
                        <View style={style2.text}>
                            <Text style={[style2.texts, style2.formargin]}>Order Date</Text>
                            <Text style={style2.texts}>5347856</Text>
                        </View>
                        <View style={style2.text}>
                            <Text style={[style2.texts, style2.formargin]}>Order Amount</Text>
                            <Text style={style2.texts}>$7350.00</Text>
                        </View>
                        <View style={style2.text}>
                            <Text style={[style2.texts, style2.formargin]}>Status</Text>
                            <Text style={style2.texts}>Successful</Text>
                        </View>
                        <View style={style2.text}>
                            <Text style={[style2.texts, style2.formargin]}>Method</Text>
                            <Text style={style2.texts}>Master Card</Text>
                        </View>
                    </View>
                    <View style={{ borderColor: 'lightgrey', width: 250, height: 100, borderWidth: 1, justifyContent: 'center', alignItems: 'center', marginLeft: '13%', marginRight: '13%', borderRadius: 2, padding: '0%', marginTop: '3%' }}>
                        <Text style={style2.uppertexts}>PERSONAL DETAILS</Text>
                        <View style={style2.text}>
                            <Text style={[style2.texts, style2.formargin]}>First Name</Text>
                            <Text style={style2.texts}>Dorthy</Text>
                        </View>

                        <View style={style2.text}>
                            <Text style={[style2.texts, style2.formargin]}>Middle Name</Text>
                            <Text style={style2.texts}>Johns</Text>
                        </View>
                        <View style={style2.text}>
                            <Text style={[style2.texts, style2.formargin]}>Last Name</Text>
                            <Text style={style2.texts}>Williams</Text>
                        </View>
                        <View style={style2.text}>
                            <Text style={[style2.texts, style2.formargin]}>Mobile Number</Text>
                            <Text style={style2.texts}>(876)525-2525</Text>
                        </View>
                    </View>
                    <Text style={[style2.righttxt, style2.margin]}>Kind Regards</Text>
                    <Text style={[style2.righttxt, style2.greentext]}>Supreme Game Tours</Text>
                </View>
                <View style={style2.flex}>
                    <Image source={require('../assests/Logo.png')} style={{ width: 40, height: 20, marginTop: '5%', marginLeft: '10%' }} />
                    <Text style={style2.supreme}>Supreme Games</Text>
                </View>
                <Text style={style2.supremetxt}>for further details please contact us at</Text>
                <View style={style2.flex}>
                    <Text style={style2.supremetxt}>info@supremegames.com</Text>
                    <Text style={style2.supremetxt}>1876754-6526</Text>
                </View>


                <View style={style2.flex}>
                    <Image source={require('../assests/Facebook.png')} style={{ width: 20, height: 20, marginTop: '3%' }} />
                    <Image source={require('../assests/Instagram.png')} style={{ width: 20, height: 20, marginTop: '3%', marginLeft: '10%' }} />
                    <Image source={require('../assests/Twitter.png')} style={{ width: 20, height: 20, marginTop: '3%', marginLeft: '10%' }} />
                </View>
                <Text style={style2.supremetxts}>supremeventures.com</Text>
            </View>
        </View>

    )
}
export default Assignment2;