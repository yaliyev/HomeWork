import axios from 'axios';

let BASE_URL = 'https://6555d25e84b36e3a431e68b6.mockapi.io/products/';

export async function addProduct(product){
    await axios.post(BASE_URL,product);
}
export async function editProduct(id,product){
    await axios.patch(BASE_URL+id,product);
}
