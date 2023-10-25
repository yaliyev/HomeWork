let form = document.getElementById("myForm");
let nameError = document.getElementById("name-error");
let ageError = document.getElementById("age-error");
let imageError = document.getElementById("image-error");
let modal = document.querySelector(".modal");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.getElementById("name");
  let age = document.getElementById("age");
  let image = document.getElementById("image");

  nameError.textContent = "";
  ageError.textContent = "";

  if (name.value.length < 5 && parseInt(age.value) < 18) {
    nameError.textContent = "Name should be at least 5 characters long.";
    ageError.textContent = "Age should be at least 18.";
    return;
  }
  if (name.value.length < 5) {
    nameError.textContent = "Name should be at least 5 characters long.";
    return;
  }

  if (parseInt(age.value) < 18) {
    ageError.textContent = "Age should be at least 18.";
    return;
  }

  let newCard = document.createElement("div");
  newCard.classList.add("card");

  newCard.innerHTML = `
    <img src="${image.value}" alt="Image Preview">
    <p>Name: <span class="full-name">${name.value}</span></p>
    <p>Age: <span class="age">${age.value}</span></p>
    <button class="open-modal">Open Modal</button>
  `;

  document.querySelector(".card-container").appendChild(newCard);
  name.value = "";
  age.value = "";
  image.value = "";

  newCard.querySelector(".open-modal").addEventListener("click", function () {
    let cardName = newCard.querySelector(".full-name").textContent;
    let cardAge = newCard.querySelector(".age").textContent;

    modal.querySelector(".full-name").textContent = cardName;
    modal.querySelector(".age").textContent = cardAge;
    modal.querySelector(".img").src = newCard.querySelector("img").src;
    modal.style.display = "block";
  });
});

document.querySelector(".close-modal").addEventListener("click", function () {
  modal.style.display = "none";
});
