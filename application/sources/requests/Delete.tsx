
// DeleteFavoris(user_id, bar_id) -> Suppression d'un favoris

// DeleteUser(user_id) -> L'utilisateur supprime sont profil / informations

// DeleteBar(bar_id) -> Supression d'un bar
import axios from "axios";

export const deleteAUser = (id:number, token:string) => {
    return axios
        .delete('http://localhost:1337/api/users/' + id, {
            headers:
                {
                    Authorization:`Bearer ${token}`,
                }
        })
        .then(response => console.log(response))
        .catch((error => {
            console.log('An error occured:', error.response);
        }));
}