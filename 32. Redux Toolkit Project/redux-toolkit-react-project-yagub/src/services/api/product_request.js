import axios from "axios"

const API_URL = "https://656ccfb7e1e03bfd572ec256.mockapi.io/users/"

async function getProducts(){
    return await axios.get(API_URL).then(response=>response.data);
}

export {getProducts}