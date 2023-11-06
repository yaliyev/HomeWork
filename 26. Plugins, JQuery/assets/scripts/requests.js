export function get(){
    return axios.get('https://654961f8dd8ebcd4ab24898a.mockapi.io/sliders').then(response=>response.data);
}
export function getByID(id){
    return axios.get(`https://654961f8dd8ebcd4ab24898a.mockapi.io/sliders/`+id).then(response=>response.data);
}
export function deleteByID(id){
    return axios.delete(`https://654961f8dd8ebcd4ab24898a.mockapi.io/sliders/`+id);
}
export function post(){
    return axios.post(`https://654961f8dd8ebcd4ab24898a.mockapi.io/sliders/`);
}
export function put(id){
    return axios.put(`https://654961f8dd8ebcd4ab24898a.mockapi.io/sliders/`+id);
}
export function patch(id){
    return axios.patch(`https://654961f8dd8ebcd4ab24898a.mockapi.io/sliders/`+id);
}
