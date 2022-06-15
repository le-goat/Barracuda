// Un formulaire qui envoie la requête pour créer un utilisateur

import React, {useState} from "react";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {createAUser} from "../requests/Create";

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onPress = () => createAUser(username,email,password)


    return(
        <View>
            <TextInput
            placeholder="username"
            onChangeText={(username) => setUsername(username)}
            />
            <TextInput
            placeholder="email"
            onChangeText={(email) => setEmail(email)}
            />
            <TextInput
            placeholder="password"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
            />
            <TouchableOpacity onPress={onPress}>
                <Text>Valider</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Retourner à la page de connexion</Text>
            </TouchableOpacity>

        </View>

    )

}

export default Register;