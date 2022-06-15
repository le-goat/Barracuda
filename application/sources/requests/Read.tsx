
// GetBar(bar_id) -> Pour le chargement de la page BarInfos

// GetBars(tags_list, localisation_list, price_list, list_note) -> Retourne une liste de bars qui correspondent à une recherche.

// GetFavoris(user_id) -> Montrer à l'utilisateur ces favoris

// GetUserInfos(user_id) -> Montrer à l'utilisateur ces informations personnelles

// GetTags() -> Pour proposer les tags lors de la recherche ou lors de la création d'un bar

// LogIn(username, psw) sous forme de Json
import axios from  'axios';

export const loginUser = (user: string, password:string) => {
    return axios
        .post('http://localhost:1337/api/auth/local', {
            identifier: user,
            password: password
        })
        .then((response) => {
                console.log(response.data.user)
            }
        )
        .catch((error) => {
            console.log('An error occurred:', error.response);
        });
};