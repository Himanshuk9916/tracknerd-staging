import axios from "axios";
import React from "react";

export const LoginService=()=>{
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


