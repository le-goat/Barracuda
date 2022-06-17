import React, {FunctionComponent, useState} from "react";
import {getAUser} from "../requests/Read";
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {NavigationProp} from "@react-navigation/native";
import {RootStackParamList} from "../../RootStackParamList";

type Props = {
    navigation: NavigationProp<RootStackParamList>;

}


const EditProfile : FunctionComponent<Props> = ({navigation}) => {
    const data = getAUser('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjU1NDA5NjI1LCJleHAiOjE2NTgwMDE2MjV9.4aHhPAsQ5f-AnHDAr7qHeqQ2Dz6GfRD5I5JG2gGKln4');
    const [usernameField, setUsernameField] = useState('');
    const [emailField, setEmailValue] = useState('');
    const [stateTextInput, setStateTextInput] = useState(false)

    // data.then(response => {
    //     setUsernameField(response.username);
    //     setEmailValue(response.email)
    // })

    const EnableTextInput = () => {
        setStateTextInput(true);
    }
    return (
        <View
            style={styles.container}>
            <TouchableOpacity onPress={EnableTextInput}
                              style={styles.touchableopacity1}>
                <Text>
                    Editer
                </Text>
            </TouchableOpacity>
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

            <TouchableOpacity
                style={styles.touchableopacity2}
                onPress={() =>
                navigation.navigate('HomePage')

            }>
                <Text>
                    Confirmer</Text>
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