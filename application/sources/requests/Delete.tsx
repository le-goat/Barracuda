import axios from "axios";

export const deleteAUser = (id:string, token:String) => {
    return axios
        .delete('http://192.168.208.25:1337/api/users/' + id, {
            headers:
                {
                    Authorization:`Bearer ${token}`,
                }
        })
        .catch((error => {
            console.log('An error occured:', error.response);
        }));
}