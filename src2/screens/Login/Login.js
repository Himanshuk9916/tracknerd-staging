import React, { useEffect } from "react";
import { View, Text, Button, TouchableOpacity, TextInput, StyleSheet, Image, ImageBackground, Alert } from 'react-native';
import axios from "axios";
import { widthPercentageToDP, heightPercentageToDP, proportionedPixel } from "../../helpers/Style";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "./LoginStyle";
import { LoginService } from "../../sevice/service";

function Login({ navigation }) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [token, setToken] = React.useState('');
    const [secureText, setSecureText] = React.useState(true);


    const proceed = () => {
        console.log('clicked')
            LoginService(email,password,navigation)

    }

    const validation = (email, password) => {
        console.log('password andar', password)
        if (email != '' && password != '') {
            var pass = password;
            var email = email;
            console.log('pass', pass)
            var passRegex = /^([a-z]{9}[@]{1}[0-9]{3})$/
            var emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            if (emailRegex.test(email) && passRegex.test(pass)) {
                proceed();
            } else {
                alert('Check your credentials')
            }
        } else {
            Alert.alert('Enter the fields')
        }
    }

    return (
        <View style={styles.view}>
            <ImageBackground source={require('../../assests/background1.jpeg')} imageStyle={{ opacity: 0.2 }}>
                <View style={styles.loginText}>
                    <Text style={{ fontWeight: '800', fontSize: 30, color: 'black' }}>LOGIN</Text>
                </View>
                <View style={styles.textIpStyleBar}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.text}>Username</Text>
                    </View>
                    <View style={styles.textInputView}>
                        <Image source={require('../../assests/user.png')} style={styles.icons} />
                        <TextInput placeholder="" value={email} onChangeText={(text) => setEmail(text)} style={styles.textIp} placeholderTextColor="black" />
                    </View>
                </View>
                <View style={styles.textIpStyleBar}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.text}>Password</Text>
                    </View>
                    <View style={styles.textInputView}>
                        <Image source={require('../../assests/lock2.png')} style={styles.lockIcon} resizeMode="contain" />
                        <TextInput placeholder="" secureTextEntry={secureText} value={password} onChangeText={(text) => setPassword(text)} style={styles.textIp} placeholderTextColor="black" />
                        <TouchableOpacity onPress={() => setSecureText(!secureText)}>
                            <Image source={require('../../assests/password.png')} style={styles.icons} />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.submitButton}
                    onPress={() => validation(email, password)}>
                    <Text style={styles.submitText}>Submit</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}



export default Login;