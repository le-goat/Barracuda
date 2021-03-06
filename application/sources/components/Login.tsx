import {StyleSheet, Text, TextInput, TouchableOpacity, View, Image} from "react-native";
import {FunctionComponent, useState} from "react";
import React from "react";
import {getValueFor, loginUser} from "../requests/Read";
import {NavigationProp} from "@react-navigation/native";
import {RootStackParamList} from "../../RootStackParamList";




type Props = {
    navigation: NavigationProp<RootStackParamList>;

}

const Login : FunctionComponent<Props> = ({navigation}) => {
    const [emailField, setEmailValue] = useState('');
    const [passwordField, setPasswordValue] = useState('');

    const onPress = () => {
        loginUser(emailField,passwordField)
        getValueFor('token')
            .then(response => {
                if(response == 'No Token')
                {
                    alert('Mot de passe ou nom d\'utilisateur erroné');
                }
                else{
                     navigation.navigate('HomePage');
                }
            })
            }

    return (
        <View
            style={styles.container}>
            <Image
            source={require('./../../assets/logo.png')}
            style={styles.image}
            />
            <TextInput
                style={styles.textinput}
                placeholder="username or email"
                onChangeText={(emailField) => setEmailValue(emailField)}
            />
            <TextInput
                style={styles.textinput}
                placeholder="password"
                secureTextEntry={true}
                onChangeText={(passwordField) => setPasswordValue(passwordField)}
            />
            <TouchableOpacity onPress={onPress}
                              style={styles.touchableopacity1}>
                <Text
                    style={styles.touchabletext}>
                    Connexion</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('Register')

                }
                style={styles.touchableopacity2}>
                <Text
                    style={styles.touchabletext}>
                    Se créer un compte</Text>
            </TouchableOpacity>
        </View>
    )

}

export default Login;

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