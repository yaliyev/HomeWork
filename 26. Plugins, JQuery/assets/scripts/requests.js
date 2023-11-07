export function get(){
    return axios.get('https://654961f8dd8ebcd4ab24898a.mockapi.io/sliders').then(response=>response.data);
}
export function getByID(id){
    return axios.get(`https://654961f8dd8ebcd4ab24898a.mockapi.io/sliders/`+id).then(response=>response.data);
}
export function deleteByID(id){
    return axios.delete(`https://654961f8dd8ebcd4ab24898a.mockapi.io/sliders/`+id);
}
export function post(player){
    return axios.post(`https://654961f8dd8ebcd4ab24898a.mockapi.io/sliders/`,player);
}
export function put(id,player){
    return axios.put(`https://654961f8dd8ebcd4ab24898a.mockapi.io/sliders/`+id,player);
}

