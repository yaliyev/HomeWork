import axios from "axios";

const API_URL = "https://656ccfb7e1e03bfd572ec256.mockapi.io/users/"

async function register(user){
   return  await axios.post(API_URL,user);
}

async function login(user){
    let data = await axios.get(API_URL).then(response=>response.data);
    let resultUser = data.find((userIterated)=>userIterated.username == user.username && userIterated.password == user.password);

    if(resultUser == undefined){
        return false;
    }else{
        return true;
    }
}

async function isExist(user){
    let data = await axios.get(API_URL).then(response=>response.data);
    let resultUser = data.find((userIterated)=>userIterated.username == user.username);

    if(resultUser == undefined){
        return false;
    }else{
        return true;
    }
}

export {register,login,isExist}
