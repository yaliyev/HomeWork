import { getSingersData } from './requests/singersRequests.js';

let favouritesStr = localStorage.getItem("favorites");



let singers = [];

let currentShownSingers = [];

let favourites = [];

if (favouritesStr != null) {
  favourites = JSON.parse(favouritesStr);
}

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


  
  currentShownSingers = JSON.parse(JSON.stringify(searchArr));

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

    deleteButton.addEventListener('click', function () {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(searchArr);
          deleteSinger(singer.id, i);
          Swal.fire(
            'Deleted!',
            'Your singer has been deleted.',
            'success'
          )
        }
      })

    });

    favouriteButton.addEventListener('click', function () {
      let elementInFavourites = favourites.find((element) => {
        return element.id === singer.id;
      });

      if (elementInFavourites == undefined) {
        // allow to Add


        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `${singer.name} added to favourites`,
          showConfirmButton: false,
          timer: 1500
        });

        favourites.push({ id: singer.id });
        localStorage.setItem("favorites", JSON.stringify(favourites));
        this.children[0].classList.replace("fa-regular", "fa-solid");
      } else {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: `${singer.name} is already in favourites`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    });

    editButton.addEventListener('click', function () {
      Swal.fire({
        title: '<strong>Edit Singer</strong>',
        html: `
        <div class="form-group">
        <label style="width:100%;text-align:left;margin-top:10px;margin-bottom:10px;"><b>Name</b> </label>
        <input type="text" class="form-control" id="edit-name" placeholder="Enter Name">
      </div>
      <div class="form-group">
      <label style="width:100%;text-align:left;margin-top:10px;margin-bottom:10px;"><b>Age</b> </label>
      <input type="age" class="form-control" id="edit-age" placeholder="Enter Age">
    </div>
    <div class="form-group">
    <label style="width:100%;text-align:left;margin-top:10px;margin-bottom:10px;"><b>Nationality</b> </label>
    <input type="text" class="form-control" id="edit-nationality" placeholder="Enter nationality">
    </div>
    <div class="form-group">
    <label style="width:100%;text-align:left;margin-top:10px;margin-bottom:10px;"><b>Genre</b> </label>
    <input type="text" class="form-control" id="edit-genre" placeholder="Enter genre">
    </div>
    <div class="form-group">
    <label style="width:100%;text-align:left;margin-top:10px;margin-bottom:10px;"><b>Image link</b> </label>
    <input type="text" class="form-control" id="edit-image-link" placeholder="Enter Image link">
    </div>
      `,
        focusConfirm: false,
        confirmButtonText:
          'Submit',

        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
      }).then((result) => {
        if (result.isConfirmed) {
          editSinger(singer.id, i);
        }

      });
      showSingerValuesInEdit(i);
    });

    // elements' contents and  adding elements to their parents
    detailButton.innerText = "Detail";
    deleteButton.innerHTML = `<i  class="fa-solid fa-trash"></i>`;
    favouriteButton.innerHTML = `<i class="fa-regular fa-heart"></i>`;
    editButton.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>`;


    let isInFavouritesElement = favourites.find((element) => {
      return element.id === singer.id;
    });

    if (isInFavouritesElement != undefined) {
      favouriteButton.children[0].classList.replace("fa-regular", "fa-solid");
    }

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
  let resultData = singers.filter((singer) => singer.name.toLowerCase().indexOf(this.value.toLowerCase()) > -1);

  if (resultData.length == 0) {
    singerCards.innerHTML = "<div class='col-12' style='text-align:center;color:red;font-size:40px;'>NOT FOUND ANY DATA</div>";
  } else {
    insertSingerCards(true, resultData);
  }


});

addSingerButton.addEventListener('click', () => {
  Swal.fire({
    title: '<strong>Add Singer</strong>',
    html: `    
    <div class="form-group">
    <label style="width:100%;text-align:left;margin-top:10px;margin-bottom:10px;"><b>Name</b> </label>
    <input type="text" class="form-control" id="add-name" placeholder="Enter Name">
  </div>
  <div class="form-group">
  <label style="width:100%;text-align:left;margin-top:10px;margin-bottom:10px;"><b>Age</b> </label>
  <input type="age" class="form-control" id="add-age" placeholder="Enter Age">
</div>
<div class="form-group">
<label style="width:100%;text-align:left;margin-top:10px;margin-bottom:10px;"><b>Nationality</b> </label>
<input type="text" class="form-control" id="add-nationality" placeholder="Enter nationality">
</div>
<div class="form-group">
<label style="width:100%;text-align:left;margin-top:10px;margin-bottom:10px;"><b>Genre</b> </label>
<input type="text" class="form-control" id="add-genre" placeholder="Enter genre">
</div>
<div class="form-group">
<label style="width:100%;text-align:left;margin-top:10px;margin-bottom:10px;"><b>Image link</b> </label>
<input type="text" class="form-control" id="add-image-link" placeholder="Enter Image link">
</div>
  `,
    focusConfirm: false,
    confirmButtonText:
      'Submit',

    cancelButtonText:
      '<i class="fa fa-thumbs-down"></i>',
    cancelButtonAriaLabel: 'Thumbs down'
  }).then((result) => {
    if (result.isConfirmed) {
      addSinger();
    }

  })
});

sortByNameButton.addEventListener('click', () => {

  let resultData = currentShownSingers.sort(function (a, b) {
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


async function addSinger() {


  let name = document.getElementById('add-name').value;
  let age = document.getElementById('add-age').value;
  let nationality = document.getElementById('add-nationality').value;
  let genre = document.getElementById('add-genre').value;
  let imageLink = document.getElementById('add-image-link').value;

  let urlRegex = '(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?';

  if (name.trim().length > 0 && age > 0 && nationality.trim().length > 0 && genre.trim().length > 0 && imageLink.match(urlRegex) != null) {
    let maxId = 0;
    currentShownSingers.forEach((element) => {
      if (element.id > maxId)
        maxId = element.id;
    });
    let singer = {
      id: maxId + 1,
      name: name,
      age: age,
      nationality: nationality,
      genre: genre,
      imageLink: imageLink
    }

    await fetch('http://localhost:3000/singers/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(singer)
    }).then(response => {
      if (response.ok) {
        singers.push(singer);
        currentShownSingers.push(singer);
        insertSingerCards(true, currentShownSingers);
      }
    })
  } else {
    Swal.fire('Add Singer form input data is not valid');
  }



}

async function editSinger(id, index) {


  let editName = document.getElementById('edit-name').value;
  let editAge = document.getElementById('edit-age').value;
  let editNationality = document.getElementById('edit-nationality').value;
  let editGenre = document.getElementById('edit-genre').value;
  let editImageLink = document.getElementById('edit-image-link').value;

  let urlRegex = '(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?';

  if (editName.trim().length > 0 && editAge > 0 && editNationality.trim().length > 0 && editGenre.trim().length > 0 && editImageLink.match(urlRegex) != null) {
    let singer = {
      name: editName,
      age: editAge,
      nationality: editNationality,
      genre: editGenre,
      imageLink: editImageLink
    }

    await fetch(`http://localhost:3000/singers/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(singer)
    }).then(response => {
      if (response.ok) {

        let globalArrayElementIndex = null;
        singers.find((element, idx) => {
          globalArrayElementIndex = idx;
          return element.id === id;
        });

        singers[globalArrayElementIndex].name = editName;
        singers[globalArrayElementIndex].age = editAge;
        singers[globalArrayElementIndex].nationality = editNationality;
        singers[globalArrayElementIndex].genre = editGenre;
        singers[globalArrayElementIndex].imageLink = editImageLink;



        currentShownSingers[index].name = editName;
        currentShownSingers[index].age = editAge;
        currentShownSingers[index].nationality = editNationality;
        currentShownSingers[index].genre = editGenre;
        currentShownSingers[index].imageLink = editImageLink;

        insertSingerCards(true, currentShownSingers);
        console.log(singers);

      }
    })
  } else {
    Swal.fire('Edit Singer form input data is not valid');
  }



}

async function deleteSinger(id, index) {

  await fetch(`http://localhost:3000/singers/${id}`, {
    method: 'DELETE'
  }).then((response) => {
    if (response.ok) {
      let singerIndex = null;
      let singer = currentShownSingers.find((element, index) => {
        singerIndex = index;
        return element.id === id
      });
      console.log(singer);
      let globalArrayElementIndex = null;
      singers.find((element, idx) => {
        globalArrayElementIndex = idx;
        return element.id === id;
      })
      singers.splice(globalArrayElementIndex, 1);
      currentShownSingers.splice(singerIndex, 1);
      insertSingerCards(true, currentShownSingers);
      if (currentShownSingers.length == 0) {
        singerCards.innerHTML = "<div class='col-12' style='text-align:center;color:red;font-size:40px;'>NOT FOUND ANY DATA</div>";
      }
    }
  });



}

function showSingerValuesInEdit(index) {
  let editName = document.getElementById('edit-name');
  let editAge = document.getElementById('edit-age');
  let editNationality = document.getElementById('edit-nationality');
  let editGenre = document.getElementById('edit-genre');
  let editImageLink = document.getElementById('edit-image-link');



  editName.value = currentShownSingers[index].name;
  editAge.value = currentShownSingers[index].age;
  editNationality.value = currentShownSingers[index].nationality;
  editGenre.value = currentShownSingers[index].genre;
  editImageLink.value = currentShownSingers[index].imageLink;


}



insertDataToArray();



