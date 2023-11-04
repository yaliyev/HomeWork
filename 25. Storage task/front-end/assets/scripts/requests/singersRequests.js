export async function getSingersData(){
    let singers = [];
    await axios.get('http://localhost:3000/singers').then(function(response){
        singers = response.data;
    })
    return singers;
};

