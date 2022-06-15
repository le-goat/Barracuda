// TextInput, Button

// Le formulaire de connexion -> vers la homepage

import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import React from "react";
import {loginUser} from "../requests/Read";

const Login = () => {
    const [emailField, setEmailValue] = useState('');
    const [passwordField, setPasswordValue] = useState('');
    const onPress = () => loginUser(emailField, passwordField)

    return (
        <View
            style={{}}>
            <TextInput
                placeholder="username or email"
                onChangeText={(emailField) => setEmailValue(emailField)}
            />
            <TextInput
                placeholder="password"
                secureTextEntry={true}
                onChangeText={(passwordField) => setPasswordValue(passwordField)}
            />
            <TouchableOpacity onPress={onPress}>
                <Text>Connexion</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Se créer un compte</Text>
            </TouchableOpacity>
        </View>
    )

}

export default Login;