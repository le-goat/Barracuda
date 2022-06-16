
// CreateUser(user_name, user_mail, user_psw) -> Au moment de l'inscription

// CreateBar(bar_name, bar_description, bar_image, bar_price, bar_tags) ??
import axios from "axios";

export const createAUser = (username:string, email:string, password:string) => {
    return axios
        .post('http://localhost:1337/api/auth/local/register', {
                username: username,
                email: email,
                password: password,

        })
        .then(response => {
            console.log('User profile', response.data.user);
            console.log('User token', response.data.jwt);
        })
        .catch(error => {
            console.log('An error occurred:', error.response);
        });
}
