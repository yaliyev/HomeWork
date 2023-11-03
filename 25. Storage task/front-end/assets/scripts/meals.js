import { getMealsData } from './requests/mealsRequests.js';

let meals = [];

let currentShownMeals = [];

let mealCards = document.getElementById('meal-cards');

let searchInput = document.getElementById("search-meal");

let sortByPriceButton = document.getElementById("sort-by-price");

let addMealButton = document.getElementById('add-meal');

async function insertDataToArray() {
    meals = await getMealsData();
    insertMealCards();
}

function insertMealCards(searchMode = false, searchArr) {
    mealCards.innerHTML = "";

    if (searchMode == false) {
        searchArr = meals;
    }



    currentShownMeals = JSON.parse(JSON.stringify(searchArr));

    for (let i = 0; i < searchArr.length; i++) {

        let meal = searchArr[i];

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
        let editButton = document.createElement("button");
        let shoppingButton = document.createElement("shopping");


        // elements' style operations
        colThree.setAttribute('class', "col-3 mt-3");
        card.setAttribute("class", "card");
        card.style.width = "85%";
        zoomBoxHidden.setAttribute("class", "zoom-box-hidden");
        cardImage.setAttribute("class", "card-img-top img-zoom");
        cardImage.src = meal.imageLink;
        cardImage.style.height = "300px";
        cardImage.style.objectFit = "cover";
        cardImage.style.objectPosition = "10% 20%";

        cardBody.setAttribute("class", "card-body");
        cardTitle.setAttribute("class", "card-title");
        cardText.setAttribute("class", "card-text");
        cardButtonsBox.setAttribute("class", "d-flex");
        detailButton.setAttribute("class", "border border-primary  rounded bg-light text-primary  px-3 py-1 detail-btn");
        deleteButton.setAttribute("class", "border border-danger  rounded bg-light text-danger  px-3 py-1 mx-1 delete-btn");
        editButton.setAttribute("class", "border border-warning  rounded bg-light text-warning  px-3 py-1 mx-1 edit-btn");
        shoppingButton.setAttribute("class","border border-primary  rounded bg-light text-primary  px-3 py-1 mx-1 detail-btn");


        // elements event listeners
        detailButton.addEventListener('click', function () {
            window.location.href = `detail.html?id=${meal.id}&object=meal`;
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
                    deleteMeal(meal.id, i);
                    Swal.fire(
                        'Deleted!',
                        'Meal has been deleted.',
                        'success'
                    )
                }
            })

        });

     

        editButton.addEventListener('click', function () {
            Swal.fire({
                title: '<strong>Edit Meal</strong>',
                html: `
          <div class="form-group">
          <label style="width:100%;text-align:left;margin-top:10px;margin-bottom:10px;"><b>Name</b> </label>
          <input type="text" class="form-control" id="edit-name" placeholder="Enter Name">
        </div>
        <div class="form-group">
        <label style="width:100%;text-align:left;margin-top:10px;margin-bottom:10px;"><b>Price</b> </label>
        <input type="age" class="form-control" id="edit-price" placeholder="Enter Price">
      </div>
      <div class="form-group">
      <label style="width:100%;text-align:left;margin-top:10px;margin-bottom:10px;"><b>Ingredients</b> </label>
      <input type="text" class="form-control" id="edit-ingredients" placeholder="Enter ingredients">
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
                    editMeal(meal.id, i);
                }

            });
            showMealValuesInEdit(i);
        });

        // elements' contents and  adding elements to their parents
        detailButton.innerText = "Detail";
        deleteButton.innerHTML = `<i  class="fa-solid fa-trash"></i>`;
        editButton.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>`;
        shoppingButton.innerHTML = '<i class="fa-solid fa-basket-shopping"></i>';


        cardTitle.innerText = `${meal.name}`;
        cardText.innerHTML = `Price:<strong> ${meal.price}$</strong> `;

        cardImage.src = meal.imageLink;


        cardButtonsBox.appendChild(detailButton);
        cardButtonsBox.appendChild(deleteButton);
        cardButtonsBox.appendChild(shoppingButton);
        cardButtonsBox.appendChild(editButton);
        

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(cardButtonsBox);

        zoomBoxHidden.appendChild(cardImage);

        card.appendChild(zoomBoxHidden);
        card.appendChild(cardBody);

        colThree.appendChild(card);

        mealCards.appendChild(colThree);
    }



}

searchInput.addEventListener('keyup', function () {
    let resultData = meals.filter((meal) => meal.name.toLowerCase().indexOf(this.value.toLowerCase()) > -1);
  
    if (resultData.length == 0) {
      mealCards.innerHTML = "<div class='col-12' style='text-align:center;color:red;font-size:40px;'>NOT FOUND ANY DATA</div>";
    } else {
      insertMealCards(true, resultData);
    }
  
  
  });

  sortByPriceButton.addEventListener('click', () => {

    let resultData = currentShownMeals.sort(function (a, b) {
      return a.price - b.price;
    });
  
    insertMealCards(true, resultData);
  
  });

  async function deleteMeal(id, index) {

    await fetch(`http://localhost:3000/meals/${id}`, {
      method: 'DELETE'
    }).then((response) => {
      if (response.ok) {
        let mealIndex = null;
        let meal = currentShownMeals.find((element, index) => {
          mealIndex = index;
          return element.id === id
        });
        let globalArrayElementIndex = null;
        meals.find((element, idx) => {
          globalArrayElementIndex = idx;
          return element.id === id;
        })
        meals.splice(globalArrayElementIndex, 1);
        currentShownMeals.splice(mealIndex, 1);
        insertMealCards(true, currentShownMeals);
        if (currentShownMeals.length == 0) {
          mealCards.innerHTML = "<div class='col-12' style='text-align:center;color:red;font-size:40px;'>NOT FOUND ANY DATA</div>";
        }
      }
    });
  
  
  
  }
  

  function showMealValuesInEdit(index) {
    let editName = document.getElementById('edit-name');
    let editPrice = document.getElementById('edit-price');
    let editIngredients = document.getElementById('edit-ingredients');
    let editImageLink = document.getElementById('edit-image-link');
  
  
  
    editName.value = currentShownMeals[index].name;
    editPrice.value = currentShownMeals[index].price;
    editIngredients.value = currentShownMeals[index].ingredients.toString();
    editImageLink.value = currentShownMeals[index].imageLink;
  
  
  }

  async function addMeal() {


    let name = document.getElementById('add-name').value;
    let price = document.getElementById('add-price').value;
    let ingredients = document.getElementById('add-ingredients').value
    let imageLink = document.getElementById('add-image-link').value;
  
    let urlRegex = '(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?';
  
    if (name.trim().length > 0 && price > 0 && ingredients.length > 0 && imageLink.match(urlRegex) != null) {
      
      let maxId = 0;
      currentShownMeals.forEach((element) => {
        if (element.id > maxId)
          maxId = element.id;
      });

      let meal = {
        id: maxId + 1,
        name: name,
        price: price,
        ingredients: ingredients.split(','),
        imageLink: imageLink
      }
  
      await fetch('http://localhost:3000/meals/', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(meal)
      }).then(response => {
        if (response.ok) {
          meals.push(meal);
          currentShownMeals.push(meal);
          insertMealCards(true, currentShownMeals);
        }
      })
    } else {
      Swal.fire('Add Meal form input data is not valid');
    }
  
  
  
  }

  async function editMeal(id, index) {


    let editName = document.getElementById('edit-name').value;
    let editPrice = document.getElementById('edit-price').value;
    let editIngredients = document.getElementById('edit-ingredients').value;
    let editImageLink = document.getElementById('edit-image-link').value;
  
    let urlRegex = '(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?';
  
    if (editName.trim().length > 0 && editPrice > 0 && editIngredients.length > 0 && editImageLink.match(urlRegex) != null) {
      let meal = {
        name: editName,
        price: editPrice,
        ingredients: editIngredients.split(','),
        imageLink: editImageLink
      }
  
      await fetch(`http://localhost:3000/meals/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(meal)
      }).then(response => {
        if (response.ok) {
  
          let globalArrayElementIndex = null;
          meals.find((element, idx) => {
            globalArrayElementIndex = idx;
            return element.id === id;
          });
  
          meals[globalArrayElementIndex].name = editName;
          meals[globalArrayElementIndex].price = editPrice;
          meals[globalArrayElementIndex].ingredients = editIngredients;
          meals[globalArrayElementIndex].imageLink = editImageLink;
  
  
  
          currentShownMeals[index].name = editName;
          currentShownMeals[index].price = editPrice;
          currentShownMeals[index].ingredients = editIngredients;
          currentShownMeals[index].imageLink = editImageLink;
  
          insertMealCards(true, currentShownMeals);
  
        }
      })
    } else {
      Swal.fire('Edit Meal form input data is not valid');
    }
  
  
  
  }

  addMealButton.addEventListener('click', () => {
    Swal.fire({
      title: '<strong>Add Meal</strong>',
      html: `
          <div class="form-group">
          <label style="width:100%;text-align:left;margin-top:10px;margin-bottom:10px;"><b>Name</b> </label>
          <input type="text" class="form-control" id="add-name" placeholder="Enter Name">
        </div>
        <div class="form-group">
        <label style="width:100%;text-align:left;margin-top:10px;margin-bottom:10px;"><b>Price</b> </label>
        <input type="age" class="form-control" id="add-price" placeholder="Enter Price">
      </div>
      <div class="form-group">
      <label style="width:100%;text-align:left;margin-top:10px;margin-bottom:10px;"><b>Ingredients</b> </label>
      <input type="text" class="form-control" id="add-ingredients" placeholder="Enter ingredients">
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
        addMeal();
      }
  
    })
  });
  

insertDataToArray();