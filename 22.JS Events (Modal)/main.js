let form = document.getElementById("myForm");
let nameError = document.getElementById("name-error");
let ageError = document.getElementById("age-error");

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

  if (parseInt(age.value) < 18 ) {
    ageError.textContent = "Age should be at least 18.";
    return;
  }

  let newCard = document.createElement("div");
  newCard.classList.add("card");

  newCard.innerHTML = `
    <img src="${image.value}" alt="Image Preview">
    <p>Name: <span>${name.value}</span></p>
    <p>Age: <span>${age.value}</span></p>
  `;

  document.body.appendChild(newCard);

  document.querySelector(".card-container").appendChild(newCard);

  newCard.style.display = "block";
});
