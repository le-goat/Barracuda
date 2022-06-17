import {Bar, BarList} from "../types/bar";

// GetBar(bar_id) -> Pour le chargement de la page BarInfos

// GetBars(tags_list, localisation_list, price_list, list_note) -> Retourne une liste de bars qui correspondent à une recherche.

// GetFavoris(user_id) -> Montrer à l'utilisateur ces favoris

// GetUserInfos(user_id) -> Montrer à l'utilisateur ces informations personnelles

// GetTags() -> Pour proposer les tags lors de la recherche ou lors de la création d'un bar

// LogIn(username, psw) sous forme de Json
import axios from  'axios';
import {Tag} from "../types/tag";


export const loginUser = (user: string, password:string) => {
    return axios
        .post('http://localhost:1337/api/auth/local', {
            identifier: user,
            password: password
        })
        .then((response) => {
                return response.data.jwt;
            }
        )
        .catch((error) => {
            console.log('An error occurred:', error.response);
        });
};

export const getAUser = (token: string) => {
    return axios
        .get('http://localhost:1337/api/users/me',{
            headers: {
                Authorization:`Bearer ${token}`,
            },
        })
        .then((response) => {
            console.log(JSON.stringify(response.data))
            return response.data;
        })
        .catch((error) => {
            console.log('An error occured', error.response);
        })
}


export const getBar = (bar_id: number) => {
    return axios
        .get("http://localhost:1337/api/bars/" + bar_id)
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            console.log('An error occurred:', error.response);
        })
}

export const getBars = (): Promise<BarList> => {
    return axios
        .get("http://localhost:1337/api/bars")
        .then((response) => {
            // console.log(response.data.attributes);
            return response.data;
        }).catch((error) => {
            console.log(error.response)
        })
}