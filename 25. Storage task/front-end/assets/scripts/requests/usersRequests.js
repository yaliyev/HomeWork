
export async function getUsersData(){
    let users = [];
    await axios.get('http://localhost:3000/users').then(function(response){
        users = response.data;
    })
    return users;
};
export async function patchOrder(id,order){
    await axios.patch(`http://localhost:3000/users/${id}`,order);
}
    
