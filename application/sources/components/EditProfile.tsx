import React, {useState} from "react";
import {getAUser} from "../requests/Read";
import {Text, TextInput, TouchableOpacity, View} from "react-native";


const EditProfile= () => {
    const data = getAUser('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNjU1MzYxMzk4LCJleHAiOjE2NTc5NTMzOTh9.EFP9J7Jk-s0Z4R9XbXINTFPA1xRJ1RrzmVSwSB_DkSg');
    const [usernameField, setUsernameField] = useState('');
    const [emailField, setEmailValue] = useState('');
    const [stateTextInput, setStateTextInput] = useState(false)

    data.then(response => {
        setUsernameField(response.username);
        setEmailValue(response.email)
    })
    
    const EnableTextInput = () => {
      setStateTextInput(true);
    }
    return (
        <View>
            <TextInput
                placeholder="New username"
                editable={stateTextInput}
                value={usernameField}
                onChangeText={(usernameField) => setUsernameField(usernameField)}
            />
            <TextInput
                placeholder="New Email"
                editable={stateTextInput}
                value={emailField}
                onChangeText={(emailField) => setEmailValue(emailField)}
            />
            <TouchableOpacity onPress={EnableTextInput}>
                <Text>
                    Editer
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>
                    Confirmer</Text>
            </TouchableOpacity>
        </View>
    )

}

export default EditProfile;