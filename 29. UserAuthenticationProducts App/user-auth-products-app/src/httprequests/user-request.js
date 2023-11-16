import axios from 'axios';

let BASE_URL = 'https://65568c4884b36e3a431fe33c.mockapi.io/users/';

export async function login(userParam){
    let users = await axios.get(BASE_URL).then((response)=>response.data);
    return users.find((user)=>user.name === userParam.name && user.password === userParam.password );
}
export async function register(user){
    axios.post(BASE_URL,user);
}