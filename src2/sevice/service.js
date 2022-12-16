import axios from "axios";
import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';



export const LoginService=(email,password,navigation)=>{
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
        storeToken(token_pass);
        navigation.navigate('List')
    })
    .catch((err) => {
        console.log('error', err)
    })
}

export const ListService=(token,setActivity,setFilterData,setVehiclesOne)=>{
    axios
    .get(`https://staging-api.tracknerd.io/v1/vehicle-groups/vehicles`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      setActivity(false)
      console.log(res.data.data)
      setVehiclesOne(res.data.data[0].vehicles);
      setFilterData(res.data.data[0].vehicles);
    })
    .catch((err) => {
      console.log('error', err)
    })
}

const storeToken = async (token) => {
    console.log('async me', token)
    try {
        await AsyncStorage.setItem("token", token);
    } catch (error) {
        console.log(error);
    }
};


