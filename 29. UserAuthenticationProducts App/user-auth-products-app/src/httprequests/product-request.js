import axios from 'axios';

let BASE_URL = 'https://65568c4884b36e3a431fe33c.mockapi.io/products/';

export async function getProducts(){
    return axios.get(BASE_URL).then((response)=>response.data);
}

export async function addProduct(product){
    await axios.post(BASE_URL,product);
}
export async function editProduct(id,product){
    await axios.patch(BASE_URL+id,product);
}
