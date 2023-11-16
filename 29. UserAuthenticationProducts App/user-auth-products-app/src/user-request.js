import axios from 'axios';

let BASE_URL = 'https://6555d25e84b36e3a431e68b6.mockapi.io/users/';

export async function login(userParam){
    let users = await axios.get(BASE_URL).then((response)=>response.data);
    return users.find((user)=>user.username === userParam.username && user.password === userParam.password );
}
export async function register(user){
    axios.post(BASE_URL,user);
}