import axios from "axios";
let API_URL = "https://655cc76225b76d9884fdef8e.mockapi.io/games/";

export async function getGames(){
    return axios.get(API_URL).then(response=>response.data);
}