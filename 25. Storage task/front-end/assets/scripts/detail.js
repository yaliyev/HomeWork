import {getSingersData} from './requests/singersRequests.js';
import { getMealsData } from './requests/mealsRequests.js';

let detailCardRow = document.getElementById('detail-card-row');


function clarifyParameters(){

   let parameters = new URLSearchParams(document.location.search);
   let id = parameters.get("id");
   let object = parameters.get("object"); 
   if(object === 'singer'){
      insertSingerDetailCard(id);
   }else if(object === 'meal'){
      insertMealDetailCard(id);
   }
  
}

async function insertSingerDetailCard(id){
  


   let singers = await getSingersData();
   let specificSinger = singers.find(singer=>singer.id == id);
   
   let colFive = document.createElement("div");
   let card = document.createElement("div");
   let zoomBoxHidden = document.createElement("div");
   let cardImage = document.createElement("img");
   let cardBody = document.createElement("div");
   let cardTitle = document.createElement("h5");
   let cardNationalityText = document.createElement("p");
   let cardAgeText = document.createElement("p");
   let cardGenreText = document.createElement("p");
   let homeButton  = document.createElement("button");

   colFive.setAttribute("class","col-5");
   card.setAttribute("class","card");
   zoomBoxHidden.setAttribute("class","zoom-box-hidden");
   cardImage.setAttribute("class","card-img-top img-zoom");
   cardImage.style.height = "600px";
   cardImage.style.objectFit = "cover";
   cardImage.style.objectPosition = "10% 20%";

   cardImage.src = specificSinger.imageLink;

   cardBody.setAttribute("class","card-body");
   cardTitle.setAttribute("class","card-title");
   cardNationalityText.setAttribute("class","card-text");
   cardAgeText.setAttribute("class","card-text");
   cardGenreText.setAttribute("class","card-text");
   homeButton.setAttribute("class","border border-primary  rounded bg-light text-primary  px-3 py-1 detail-btn");

   homeButton.addEventListener('click',function(){
    window.location.href = "/front-end/templates/main.html";
   });

   cardTitle.innerText = specificSinger.name;
   cardNationalityText.innerHTML = `${specificSinger.name} is <strong>${specificSinger.nationality}</strong>`;
   cardAgeText.innerText = `AGE: ${specificSinger.age}`;
   cardGenreText.innerText = `GENRE: ${specificSinger.genre}`;

   homeButton.innerText = "Home";

   cardBody.appendChild(cardTitle);
   cardBody.appendChild(cardNationalityText);
   cardBody.appendChild(cardAgeText);
   cardBody.appendChild(cardGenreText);
   cardBody.appendChild(homeButton);

   zoomBoxHidden.appendChild(cardImage);

   card.appendChild(zoomBoxHidden);
   card.appendChild(cardBody);

   colFive.appendChild(card);

   detailCardRow.appendChild(colFive);
}
async function insertMealDetailCard(id){
   let meals = await getMealsData();
   let specificMeal = meals.find(meal=>meal.id == id);

   
   let colFive = document.createElement("div");
   let card = document.createElement("div");
   let zoomBoxHidden = document.createElement("div");
   let cardImage = document.createElement("img");
   let cardBody = document.createElement("div");
   let cardTitle = document.createElement("h5");
   let cardPrice = document.createElement("div");
   let cardIngredients = document.createElement("ul");
   let homeButton  = document.createElement("button");

   colFive.setAttribute("class","col-5");
   card.setAttribute("class","card");
   zoomBoxHidden.setAttribute("class","zoom-box-hidden");
   cardImage.setAttribute("class","card-img-top img-zoom");
   cardImage.style.height = "600px";
   cardImage.style.objectFit = "cover";
   cardImage.style.objectPosition = "10% 20%";
   cardTitle.style.textAlign = "center";
   cardPrice.style.textAlign = "center";
   cardImage.src = specificMeal.imageLink;

   cardBody.setAttribute("class","card-body");
   cardTitle.setAttribute("class","card-title");
   cardPrice.setAttribute("class","card-text");
   cardIngredients.setAttribute("class","list-group my-3");
   homeButton.setAttribute("class"," w-100 border border-primary  rounded bg-light text-primary  px-3 py-1 detail-btn");

   homeButton.addEventListener('click',function(){
    window.location.href = "/front-end/templates/meals.html";
   });

   cardTitle.innerText = specificMeal.name;
   cardPrice.innerText = `PRICE: ${specificMeal.price}$`;
   specificMeal.ingredients.forEach((ingredient =>{
      let listItem = document.createElement("li");
      listItem.setAttribute("class","list-group-item");
      listItem.innerText = ingredient;
      cardIngredients.appendChild(listItem);
   }))
   homeButton.innerText = "Get Back";

   cardBody.appendChild(cardTitle);
   cardBody.appendChild(cardPrice);
   cardBody.innerHTML += "<p style='margin-left:1px;'>Ingredients</p>";
   cardBody.appendChild(cardIngredients);
   cardBody.appendChild(homeButton);

   zoomBoxHidden.appendChild(cardImage);

   card.appendChild(zoomBoxHidden);
   card.appendChild(cardBody);

   colFive.appendChild(card);

   detailCardRow.appendChild(colFive);
}
clarifyParameters();

