import axios from "axios";

export const deleteAUser = (id:string, token:string) => {
    return axios
        .delete('http://192.168.43.205:1337/api/users/' + id, {
            headers:
                {
                    Authorization:`Bearer ${token}`,
                }
        })
        .catch((error => {
            console.log('An error occured:', error.response);
        }));
}