import React, {useState} from "react";
import {getAUser} from "../requests/Read";
import {Text, TextInput, TouchableOpacity, View} from "react-native";


const EditProfile= () => {
    const data = getAUser('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjU1NDA5NjI1LCJleHAiOjE2NTgwMDE2MjV9.4aHhPAsQ5f-AnHDAr7qHeqQ2Dz6GfRD5I5JG2gGKln4');
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