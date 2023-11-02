import { getSingersData } from './requests/singersRequests.js';

let singers = [];

let singerCards = document.getElementById('singer-cards');

let searchInput = document.getElementById('search-singer');

let sortByNameButton = document.getElementById('sort-by-name');

let addSingerButton = document.getElementById('add-singer');


async function insertDataToArray() {
  singers = await getSingersData();
  insertSingerCards();
}

function insertSingerCards(searchMode = false, searchArr) {
  singerCards.innerHTML = "";

  if (searchMode == false) {
    searchArr = singers;
  }




  for (let i = 0; i < searchArr.length; i++) {

    let singer = searchArr[i];

    // creating elements
    let colThree = document.createElement("div");
    let card = document.createElement("div");
    let zoomBoxHidden = document.createElement("div");
    let cardImage = document.createElement("img");
    let cardBody = document.createElement("div");
    let cardTitle = document.createElement("h5");
    let cardText = document.createElement("p");
    let cardButtonsBox = document.createElement("div");
    let detailButton = document.createElement("button");
    let deleteButton = document.createElement("button");
    let favouriteButton = document.createElement("button");
    let editButton = document.createElement("button");

    // elements' style operations
    colThree.setAttribute('class', "col-3 mt-3");
    card.setAttribute("class", "card");
    card.style.width = "85%";
    zoomBoxHidden.setAttribute("class", "zoom-box-hidden");
    cardImage.setAttribute("class", "card-img-top img-zoom");
    cardImage.src = singer.imageLink;
    cardImage.style.height = "300px";
    cardImage.style.objectFit = "cover";
    cardImage.style.objectPosition = "10% 20%";

    cardBody.setAttribute("class", "card-body");
    cardTitle.setAttribute("class", "card-title");
    cardText.setAttribute("class", "card-text");
    cardButtonsBox.setAttribute("class", "d-flex");
    detailButton.setAttribute("class", "border border-primary  rounded bg-light text-primary  px-3 py-1 detail-btn");
    deleteButton.setAttribute("class", "border border-danger  rounded bg-light text-danger  px-3 py-1 mx-1 delete-btn");
    favouriteButton.setAttribute("class", "border border-danger  rounded bg-light text-danger  px-3 py-1 mx-1 favourite-btn");
    editButton.setAttribute("class", "border border-warning  rounded bg-light text-warning  px-3 py-1 mx-1 edit-btn");

    // elements event listeners
    detailButton.addEventListener('click', function () {
      window.location.href = `detail.html?id=${singer.id}`;
    });

    editButton.addEventListener('click',function(){
      Swal.fire({
        title: '<strong>Edit Singer</strong>',
        html: `
        <div class="form-group">
        <label style="width:100%;text-align:left;margin-top:10px;margin-bottom:10px;"><b>Name</b> </label>
        <input type="text" class="form-control" id="" placeholder="Enter Name">
      </div>
      <div class="form-group">
      <label style="width:100%;text-align:left;margin-top:10px;margin-bottom:10px;"><b>Age</b> </label>
      <input type="text" class="form-control" id="" placeholder="Enter Age">
    </div>
    <div class="form-group">
    <label style="width:100%;text-align:left;margin-top:10px;margin-bottom:10px;"><b>Nationality</b> </label>
    <input type="text" class="form-control" id="" placeholder="Enter nationality">
    </div>
    <div class="form-group">
    <label style="width:100%;text-align:left;margin-top:10px;margin-bottom:10px;"><b>Genre</b> </label>
    <input type="text" class="form-control" id="" placeholder="Enter genre">
    </div>
    <div class="form-group">
    <label style="width:100%;text-align:left;margin-top:10px;margin-bottom:10px;"><b>Image link</b> </label>
    <input type="text" class="form-control" id="" placeholder="Enter Image link">
    </div>
      `,
        focusConfirm: false,
        confirmButtonText:
          'Submit',
      
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
      })
    });

    // elements' contents and  adding elements to their parents
    detailButton.innerText = "Detail";
    deleteButton.innerHTML = `<i  class="fa-solid fa-trash"></i>`;
    favouriteButton.innerHTML = `<i class="fa-regular fa-heart"></i>`;
    editButton.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>`;

    cardTitle.innerText = `${singer.name}`;
    cardText.innerHTML = `${singer.name} is <strong>${singer.nationality}</strong>`;

    cardImage.src = singer.imageLink;


    cardButtonsBox.appendChild(detailButton);
    cardButtonsBox.appendChild(deleteButton);
    cardButtonsBox.appendChild(favouriteButton);
    cardButtonsBox.appendChild(editButton);

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

searchInput.addEventListener('keyup', function () {

  let resultData = singers.filter((singer) => singer.name.toLowerCase().indexOf(this.value) > -1);

  insertSingerCards(true, resultData);


});

addSingerButton.addEventListener('click', () => {
  Swal.fire({
    title: '<strong>Add Singer</strong>',
    html: `
    <div class="form-group">
    <label style="width:100%;text-align:left;margin-top:10px;margin-bottom:10px;"><b>Name</b> </label>
    <input type="text" class="form-control" id="" placeholder="Enter Name">
  </div>
  <div class="form-group">
  <label style="width:100%;text-align:left;margin-top:10px;margin-bottom:10px;"><b>Age</b> </label>
  <input type="text" class="form-control" id="" placeholder="Enter Age">
</div>
<div class="form-group">
<label style="width:100%;text-align:left;margin-top:10px;margin-bottom:10px;"><b>Nationality</b> </label>
<input type="text" class="form-control" id="" placeholder="Enter nationality">
</div>
<div class="form-group">
<label style="width:100%;text-align:left;margin-top:10px;margin-bottom:10px;"><b>Genre</b> </label>
<input type="text" class="form-control" id="" placeholder="Enter genre">
</div>
<div class="form-group">
<label style="width:100%;text-align:left;margin-top:10px;margin-bottom:10px;"><b>Image link</b> </label>
<input type="text" class="form-control" id="" placeholder="Enter Image link">
</div>
  `,
    focusConfirm: false,
    confirmButtonText:
      'Submit',
  
    cancelButtonText:
      '<i class="fa fa-thumbs-down"></i>',
    cancelButtonAriaLabel: 'Thumbs down'
  })
});

sortByNameButton.addEventListener('click', () => {

  let resultData = singers.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  insertSingerCards(true, resultData);

})





insertDataToArray();



