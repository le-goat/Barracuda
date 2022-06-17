import axios from "axios";

export const updateAUser = (newUsername:string, newEmail:string, id:string, token:string) => {
    return axios
        .put('http://192.168.208.25:1337/api/users/' + id, {
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
