// Un formulaire qui envoie la requête pour créer un utilisateur

import React, {useState} from "react";
import {View} from "react-native";
import {createAUser} from "../requests/Create";

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleUsername = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handleEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    const handleSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        createAUser(username, email, password)
    }
    return(
        <View>
            <div id="form_register">
                <form onSubmit={handleSubmit}>
                    <h2>Inscription</h2>
                    <input type="text"
                           placeholder="username"
                           onChange={handleUsername}
                           value={username}
                    />
                    <br/>
                    <input type="text"
                           placeholder="email"
                           onChange={handleEmail}
                           value={email}
                    />
                    <br/>
                    <input type="password"
                           placeholder="Password"
                           onChange={handlePassword}
                           value={password}
                    />
                    <br/>
                    <div>
                    <button id="button_form_register" className="button_submit" type="submit">Confirmer</button>
                    </div>
                    <button id="back_login" className="button_submit" type="submit">Retourner sur l'écran de connexion</button>
                </form>
            </div>
        </View>

    )

}

export default Register;