// Un formulaire qui envoie la requête pour créer un utilisateur

import React, {FunctionComponent, useState} from "react";
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {createAUser} from "../requests/Create";
import {NavigationProp} from "@react-navigation/native";
import {RootStackParamList} from "../../RootStackParamList";


type Props = {
    navigation: NavigationProp<RootStackParamList>;

}


const Register : FunctionComponent<Props> = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onPress = () => createAUser(username, email, password)


    return (
        <View
            style={styles.container}>
            <Image
                source={require('./../../assets/logo.png')}
                style={styles.image}
            />
            <TextInput
                placeholder="username"
                style={styles.textinput}
                onChangeText={(username) => setUsername(username)}
            />
            <TextInput
                placeholder="email"
                style={styles.textinput}
                onChangeText={(email) => setEmail(email)}
            />
            <TextInput
                placeholder="password"
                style={styles.textinput}
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
            />
            <TouchableOpacity
                style={styles.touchableopacity1}
                onPress={onPress}>
                <Text
                    style={styles.touchabletext}
                >Valider</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.touchableopacity2}
                onPress={() =>
                navigation.navigate('Login')

            }>
                <Text
                    style={styles.touchabletext}
                >← Retourner à la page de connexion ←</Text>
            </TouchableOpacity>

        </View>

    )

}

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    image: {
        width: '70%',
        height: '40%',
    },
    textinput: {
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 2,
        borderColor: "#21B70F",
        borderRadius: 6,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        width: 300,
    },
    touchableopacity1: {
        marginTop: 30,
        borderWidth: 2,
        backgroundColor: '#21B70F',
        paddingVertical: 8,
        width: 300,
        textAlign: "center",
        borderColor: "#FFFFFF",
        borderRadius: 6,
    },
    touchableopacity2: {
        marginTop: 16,
        borderWidth: 2,
        backgroundColor: '#21B70F',
        paddingVertical: 8,
        width: 300,
        textAlign: "center",
        borderColor: "#FFFFFF",
        borderRadius: 6,
    },
    touchabletext: {
        color: '#FFFFFF',
        textAlign: "center",
        fontWeight: 'bold',
    },

});