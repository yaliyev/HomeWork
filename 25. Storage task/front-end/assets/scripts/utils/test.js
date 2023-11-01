import {getMealsData} from '../requests/mealsRequests.js';
import {getUsersData} from '../requests/usersRequests.js';
import {getSingersData} from '../requests/singersRequests.js';

(async()=>{
   let meals = await getMealsData();
   let users = await getUsersData();
   let singers = await getSingersData();
   console.log(meals);
   console.log(users);
   console.log(singers);
})();