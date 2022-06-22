import axios from "axios";

export const createAUser = (username:string, email:string, password:string) => {
    return axios
        .post('http://192.168.43.205:1337/api/auth/local/register', {
        username: username,
            email: email,
            password: password,
        })
        .catch(error => {
            console.log('An error occurred:', error.response);
        });
}
