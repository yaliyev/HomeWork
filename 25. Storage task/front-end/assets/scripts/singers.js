import {getSingersData} from './requests/singersRequests.js';

let singers  = [];

let singerCards = document.getElementById('singer-cards');

async function insertSingerCards(){
    singerCards.innerHTML = "";

    singers = await getSingersData();

    for(let i = 0;i<singers.length;i++){

        let singer = singers[i];

        // creating elements
        let colThree = document.createElement("div");
        let card = document.createElement("div");
        let zoomBoxHidden = document.createElement("div");
        let cardImage = document.createElement("img");
        let cardBody = document.createElement("div");
        let cardTitle = document.createElement("h5");
        let cardText = document.createElement("p");
        let cardButtonsBox = document.createElement("div");
        let detailButton  = document.createElement("button");
        let deleteButton  = document.createElement("button");
        let favouriteButton  = document.createElement("button");

        // elements' style operations
        colThree.setAttribute('class',"col-3 mt-3");
        card.setAttribute("class","card");
        card.style.width ="85%";
        zoomBoxHidden.setAttribute("class","zoom-box-hidden");
        cardImage.setAttribute("class","card-img-top img-zoom");
        cardImage.src = singer.imageLink;
        cardImage.style.height = "300px";
        cardImage.style.objectFit = "cover";
        cardImage.style.objectPosition = "10% 20%";

        cardBody.setAttribute("class","card-body");
        cardTitle.setAttribute("class","card-title");
        cardText.setAttribute("class","card-text");
        cardButtonsBox.setAttribute("class","d-flex");
        detailButton.setAttribute("class","border border-primary  rounded bg-light text-primary  px-3 py-1 detail-btn");
        deleteButton.setAttribute("class","border border-danger  rounded bg-light text-danger  px-3 py-1 mx-1 delete-btn");
        favouriteButton.setAttribute("class","border border-danger  rounded bg-light text-danger  px-3 py-1 mx-1 favourite-btn");


        // elements' contents and  adding elements to their parents
        detailButton.innerText = "Detail";
        deleteButton.innerHTML = `<i  class="fa-solid fa-trash"></i>`;
        favouriteButton.innerHTML = `<i class="fa-regular fa-heart"></i>`;

        cardTitle.innerText = `${singer.name}`;
        cardText.innerHTML = `${singer.name} is <strong>${singer.nationality}</strong>`;

        cardImage.src = singer.imageLink;


        cardButtonsBox.appendChild(detailButton);
        cardButtonsBox.appendChild(deleteButton);
        cardButtonsBox.appendChild(favouriteButton);

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(cardButtonsBox);

        zoomBoxHidden.appendChild(cardImage);

        card.appendChild(zoomBoxHidden);
        card.appendChild(cardBody);

        colThree.appendChild(card);

        singerCards.appendChild(colThree);
    }
    

    
}

insertSingerCards();

