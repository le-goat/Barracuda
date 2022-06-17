import {Bar, BarList} from "../types/bar";
import axios from  'axios';
import * as SecureStore from "expo-secure-store";

export async function save(name:string, value:string){
    await SecureStore.setItemAsync(name,value);
}
export async function getValueFor(name:string) {
    let result = await SecureStore.getItemAsync(name)
    if(result != null){
        return result
    }
    else{
        console.log("Il n'a pas de valeur")
    }
}



export const loginUser = (user: string, password:string) => {
    return axios
        .post('http://192.168.43.205:1337/api/auth/local', {
            identifier: user,
            password: password
        })
        .then((response) => {
                 save('token', response.data.jwt);
            }
        )
        .catch((error) => {
            save('token', 'No Token')
            console.log('An error occurred:', error.response);
        });
};

export const getAUser = (token: string) => {
    return axios
        .get('http://192.168.43.205:1337/api/users/me',{
            headers: {
                Authorization: `Bearer ${token} `,
            },
        })
        .then((response) => {
            return  response.data;
        })
        .catch((error) => {
            console.log('An error occured', error.response);
        })
}

export const getBar = (bar_id: number): Promise<Bar> => {
    return axios
        .get("http://192.168.43.205:1337/api/bars/" + bar_id)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log('An error occurred:', error.response);
        })
}

export const getBars = (): Promise<BarList> => {
    return axios
        .get("http://192.168.43.205:1337/api/bars")
        .then((response) => {
            // console.log(response.data.attributes);
            return response.data;
        }).catch((error) => {
            console.log(error.response)
        })
}