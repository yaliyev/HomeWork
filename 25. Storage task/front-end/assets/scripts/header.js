import { getUsersData } from './requests/usersRequests.js';
let favouritesStr = localStorage.getItem("favorites");

let users = [];

(async () => {
  users = await getUsersData();
})();


let favourites = [];

if (favouritesStr != null) {
  favourites = JSON.parse(favouritesStr);
}

let basketStr = localStorage.getItem("basket");


let basket = [];

if (basketStr != null) {
  basket = JSON.parse(basketStr);
}


let wishListCountElement = document.getElementById('wishlist-count');

let basketCountElement = document.getElementById('basket-count');

let loginButton = document.getElementById('user-login-button');

let registerButton = document.getElementById('user-register-button');



document.querySelector(".nav-logo-box").addEventListener('click', function () {
  window.location.href = "/front-end/templates/main.html";
});

loginButton.addEventListener('click', function () {
  Swal.fire({
    title: '<strong>User Login</strong>',
    html: `
    <div class="form-group">
    <label style="width:100%;text-align:left;margin-top:10px;margin-bottom:10px;"><b>Username</b> </label>
    <input  type="text" class="form-control" id="login-username" placeholder="Enter Username">
<div class="form-group">
<label style="width:100%;text-align:left;margin-top:10px;margin-bottom:10px;"><b>Password</b> </label>
<input type="password" class="form-control" id="login-password" placeholder="Enter Password">
</div>
<div class="form-check">
    <input id='remember-checkbox' type="checkbox" class="form-check-input mt-2">
    <label style="width:100%;text-align:left;margin-top:5px;" class="form-check-label" for="exampleCheck1">Remember Me</label>
  </div>
  `,
    focusConfirm: false,
    confirmButtonText:
      'Login',
    showCancelButton: true,
    cancelButtonText:
      'Close'
  }).then((result) => {
    if (result.isConfirmed) {
      let loginUsername = document.getElementById('login-username').value;
      let loginPassword = document.getElementById('login-password').value;

      let user = users.find((user)=>{
        if(user.username == loginUsername && user.password == loginPassword){
          return user;
        }
      });

      if(user == undefined){
        Swal.fire({ icon: 'error', text: 'Username and Password are wrong' });
      }else{
        if(document.getElementById('remember-checkbox').checked){
          localStorage.setItem("user",JSON.stringify({"isLogged":true,"userID":user.id}));
        }else{
          sessionStorage.setItem("user",JSON.stringify({"isLogged":true,"userID":user.id}));
        }
        
        Swal.fire({ icon: 'success', text: 'Logged in'});
      }

    }
  });
});


registerButton.addEventListener('click', function () {
  let validationElements = [];
  let inputElements = [];
  Swal.fire({
    title: '<strong>User Register</strong>',
    html: `
    <div class="form-group">
    <label style="width:100%;text-align:left;margin-top:10px;margin-bottom:10px;"><b>Username</b> </label>
    <input  type="text" class="form-control" id="register-username" placeholder="Enter Username">
  <div id='username-validation-result' class='my-2 text-danger'></div>
  </div>
  <div class="form-group">
  <label style="width:100%;text-align:left;margin-top:10px;margin-bottom:10px;"><b>Email</b> </label>
  <input type="email" class="form-control" id="register-email" placeholder="Enter Email">
  <div id='email-validation-result' class='my-2 text-danger'></div>
</div>
<div class="form-group">
<label style="width:100%;text-align:left;margin-top:10px;margin-bottom:10px;"><b>Password</b> </label>
<input type="password" class="form-control" id="register-password" placeholder="Enter Password">
<div id='password-validation-result' class='my-2 text-danger'></div>
</div>
<div class="form-group">
<label style="width:100%;text-align:left;margin-top:10px;margin-bottom:10px;"><b>Confirm Password</b> </label>
<input type="password" class="form-control" id="register-confirm-password" placeholder="Enter Password">
<div id='confirm-password-validation-result' class='my-2 text-danger'></div>
</div>
<div class="form-group">
  <label style="width:100%;text-align:left;margin-top:10px;margin-bottom:10px;"><b>Balance</b> </label>
  <input type="number" class="form-control" id="register-balance" placeholder="Enter Balance">
  <div id='balance-validation-result' class='text-danger'></div>
</div>

  `,
    focusConfirm: false,
    confirmButtonText:
      'Register',
    showCancelButton: true,
    cancelButtonText:
      'Close'
  }).then((result) => {

    if (result.isConfirmed) {
      let result = validationElements.every((element) => {
        return element.innerText === ''
      });
      if (result) {
        let user = {};

        let maxId = 0;
        users.forEach((element) => {
          if (element.id > maxId)
            maxId = element.id;
        });

        user.id = (Number(maxId) + 1).toString();
        user.email = inputElements[1].value;
        user.username = inputElements[0].value;
        user.password = inputElements[2].value;
        user.balance = inputElements[4].value;

        users.push(user);

        fetch(`http://localhost:3000/users/`, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user)
        });
        Swal.fire({ icon: 'success', text: 'User has been added' });
      }
    }

  });

  let container = Swal.getHtmlContainer();
  Array.from(container.querySelectorAll('[id*="validation"]')).forEach(function (element) {
    validationElements.push(element);
  });
  Array.from(container.querySelectorAll('[id|="register"]')).forEach(function (element) {
    inputElements.push(element);
  })
  container.querySelector('#register-username').addEventListener('keyup', function () {

    let user = users.find((element) => {
      if (element.username.toLowerCase() === this.value.toLowerCase()) {
        document.querySelector('#username-validation-result').innerText = 'username is already exists';
        return element;
      }
    });





    if (user == undefined) {
      document.querySelector('#username-validation-result').innerText = '';
      if (this.value.match('^[A-Za-z0-9]{3,}$') == null) {

        document.querySelector('#username-validation-result').innerText = 'username must be minimum 3 characters';
      }
      if (this.value.trim().length == 0) {

        document.querySelector('#username-validation-result').innerText = 'username is required';
      }

    }

  });

  container.querySelector('#register-email').addEventListener('keyup', function () {
    let user = users.find((element) => {
      if (element.email.toLowerCase() === this.value.toLowerCase()) {

        document.querySelector('#email-validation-result').innerText = 'email is already exists';
        return element;
      }
    });

    if (user == undefined) {
      document.querySelector('#email-validation-result').innerText = '';
      if (this.value.match('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$') == null) {

        document.querySelector('#email-validation-result').innerText = 'email format is incorrect';
      }

    }

  });

  container.querySelector('#register-password').addEventListener('keyup', function () {

    document.querySelector('#password-validation-result').innerText = '';
    if (this.value.match('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{5,}') == null) {

      document.querySelector('#password-validation-result').innerText = 'password must be minimum 5 characters[aA9]';
    }
    if (this.value.trim().length == 0) {

      document.querySelector('#password-validation-result').innerText = 'password is required';
    }




  });

  container.querySelector('#register-confirm-password').addEventListener('keyup', function () {

    document.querySelector('#confirm-password-validation-result').innerText = '';
    if (this.value != container.querySelector('#register-password').value) {

      document.querySelector('#confirm-password-validation-result').innerText = 'confirm password & password are not the same';
    }
    if (this.value.trim().length == 0) {

      document.querySelector('#confirm-password-validation-result').innerText = 'confirm password is required';
    }
  });

  container.querySelector('#register-balance').addEventListener('keyup', function () {

    document.querySelector('#balance-validation-result').innerText = '';
    if (Number(this.value) < 0) {

      document.querySelector('#balance-validation-result').innerText = 'balance must be positive';
    }
    if (this.value.trim().length == 0) {

      document.querySelector('#balance-validation-result').innerText = 'balance is required';
    }
  });

});




function countWishListElements() {

  wishListCountElement.innerText = favourites.length;
}

function countBasketElements() {

  basketCountElement.innerText = basket.length;
}

countWishListElements();
countBasketElements();



export function increaseWishListElementsCount() {
  wishListCountElement.innerText = Number(wishListCountElement.innerText) + 1;
}
export function decreaseWishListElementsCount() {
  wishListCountElement.innerText = Number(wishListCountElement.innerText) - 1;
}
export function increaseBasketElementsCount() {
  basketCountElement.innerText = Number(basketCountElement.innerText) + 1;
}
export function decreaseBasketElementsCount() {
  basketCountElement.innerText = Number(basketCountElement.innerText) - 1;
}
