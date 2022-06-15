// TextInput, Button

// Le formulaire de connexion -> vers la homepage

import {View} from "react-native";
import {useState} from "react";
import React from "react";
import {loginUser} from "../requests/Read";

const Login = () => {
    const [emailField, setEmailValue] = useState('');
    const [passwordField, setPasswordValue] = useState('');

    const handleEmailField = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailValue(e.target.value);
    };

    const handlePasswordField = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(e.target.value);
    };

    function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
        event.preventDefault();
        loginUser(emailField, passwordField)
    }
    return (
        <View
            style={{

            }}
        >
            <div id="form_login">
                <form onSubmit={handleSubmit}>
                    <h2>Connexion</h2>
                    <input type="text"
                           placeholder="Email"
                           onChange={handleEmailField}
                    />
                    <br/>
                    <input type="password"
                           placeholder="Password"
                           onChange={handlePasswordField}
                    />
                    <div>
                        <button id="button_form_login">Connexion</button>
                    </div>

                </form>
            </div>
        </View>
    )
}

export default Login;