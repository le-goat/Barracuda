import axios from "axios";

export const updateAUser = (newUsername:string, newEmail:string, token:string, id:string) => {
    return axios
        .put('http://192.168.43.205:1337/api/users/' + id, {
            headers: {
                Authorization:`Bearer ${token}`,
            },
                username: newUsername,
                email: newEmail,

        })
        .then(response => (console.log(response)))
        .catch((error) => {
            console.log('An error occurred:', error.response);
        })
}
