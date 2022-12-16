import React, { useEffect } from "react";
import { View, Text, Button, TouchableOpacity, TextInput, StyleSheet, Image, ImageBackground, Alert } from 'react-native';
import axios from "axios";
import { widthPercentageToDP, heightPercentageToDP, proportionedPixel } from "../../helpers/Style";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "./LoginStyle";

function Login({ navigation }) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [token, setToken] = React.useState('');
    const [secureText, setSecureText] = React.useState(true);

    const storeToken = async (token) => {
        console.log('async me', token)
        try {
            await AsyncStorage.setItem("token", token);
        } catch (error) {
            console.log(error);
        }
    };


    const proceed = () => {
        console.log('clicked')

        axios
            .post('https://staging-api.tracknerd.io/v1/auth/login', {
                username: email,
                password: password
            })
            .then((res) => {
                console.log('response', res.data)
                console.log('token', res.data.token)
                let token_pass = res.data.token;
                console.log('finaltoken', token_pass)
                setToken(token_pass);
                storeToken(token_pass);
                navigation.navigate('List')
            })
            .catch((err) => {
                console.log('error', err)
            })

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