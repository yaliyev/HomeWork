import {getSingersData} from './requests/singersRequests.js';
import { getMealsData } from './requests/mealsRequests.js';

let detailCardRow = document.getElementById('detail-card-row');

function clarifyId(){

   let parameters = new URLSearchParams(document.location.search);
   let id = parameters.get("id");

   return id;
}

async function insertSingerDetailCard(){
   let id = clarifyId();
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
insertSingerDetailCard();