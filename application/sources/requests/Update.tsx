
// UpdateFavoris(user_id, bar_id) -> Quand l'utilisateur ajoute un favoris

// UpdateNote(bar_id, note) -> Quand l'utilisateur donne une note
import axios from "axios";

export const updateAUser = (newUsername:string, newEmail:string, token:string) => {
    return axios
        .put('http://localhost:1337/api/users/1', {
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
