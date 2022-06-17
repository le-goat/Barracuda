import React, {FunctionComponent, useEffect, useState} from "react";
import {getAUser, getValueFor, save} from "../requests/Read";
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {NavigationProp} from "@react-navigation/native";
import {RootStackParamList} from "../../RootStackParamList";
import {updateAUser} from "../requests/Update";
import {deleteAUser} from "../requests/Delete";

type Props = {
    navigation: NavigationProp<RootStackParamList>;

}


const EditProfile : FunctionComponent<Props> = ({navigation}) => {
    const [usernameField, setUsernameField] = useState('');
    const [emailField, setEmailValue] = useState('');
    const [userId, setUserId] = useState('');
    const [stateTextInput, setStateTextInput] = useState(false)

    useEffect( () => {
            getValueFor('token')
                .then(response => {
                    if(response){
                        getAUser(response)
                            .then(response => {
                                setUsernameField(response.username);
                                setEmailValue(response.email);
                                setUserId(response.id);
                            })
                    }
                    })
        }, []
    )


    const EnableTextInput = () => {
        setStateTextInput(true);
    }

    const Confirm = () => {
        getValueFor('token')
            .then(response => {
                if (response) {
                    updateAUser(usernameField, emailField, userId, response)
                    alert('Votre compte a bien été  modifié')
                    navigation.navigate('HomePage')
                }
            })
    }

    const Delete = () => {
        getValueFor('token')
            .then(response => {
                if(response){
                    deleteAUser(userId, response)
                    alert('Votre compte a bien été supprimé')
                    save('token', 'No Token')
                    navigation.navigate('Login')
                }
            })
    }

    return (
        <View
            style={styles.container}
        >

            <TextInput
                style={styles.textinput}
                placeholder="New username"
                editable={stateTextInput}
                value={usernameField}
                onChangeText={(usernameField) => setUsernameField(usernameField)}
            />
            <TextInput
                style={styles.textinput}
                placeholder="New Email"
                editable={stateTextInput}
                value={emailField}
                onChangeText={(emailField) => setEmailValue(emailField)}
            />

            <TouchableOpacity onPress={EnableTextInput}
                              style={styles.touchableopacity1}>
                <Text>
                    Editer
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.touchableopacity2}
                onPress={Confirm}
            >
                <Text>
                    Confirmer
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.touchableopacity2}
                onPress={Delete}
            >
                <Text>Supprimer le compte</Text>
            </TouchableOpacity>

        </View>
    )

}

export default EditProfile;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    textinput: {
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 2,
        borderColor: "#eeeb55",
        borderRadius: 6,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        width: 300,
    },
    touchableopacity1: {
        marginTop: 30,
        borderWidth: 2,
        backgroundColor: '#eeeb55',
        paddingVertical: 8,
        width: 300,
        textAlign: "center",
        borderColor: "#FFFFFF",
        borderRadius: 6,
    },
    touchableopacity2: {
        marginTop: 16,
        borderWidth: 2,
        backgroundColor: '#eeeb55',
        paddingVertical: 8,
        width: 300,
        textAlign: "center",
        borderColor: "#FFFFFF",
        borderRadius: 6,
    },
})