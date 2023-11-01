
export async function getMealsData(){
    let meals = [];
    await axios.get('http://localhost:3000/meals').then(function(response){
        meals = response.data;
    })
    return meals;
    
};

    
