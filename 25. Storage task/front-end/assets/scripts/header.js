
let favouritesStr = localStorage.getItem("favorites");


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

document.querySelector(".nav-logo-box").addEventListener('click',function(){
  window.location.href = "/front-end/templates/main.html";
});

function countWishListElements(){
  
  wishListCountElement.innerText = favourites.length;
}

function countBasketElements(){
  
  basketCountElement.innerText = basket.length;
}

countWishListElements();
countBasketElements();

export  function increaseWishListElementsCount(){
  wishListCountElement.innerText = Number(wishListCountElement.innerText)+1;
}
export  function decreaseWishListElementsCount(){
  wishListCountElement.innerText = Number(wishListCountElement.innerText) - 1;
}
export  function increaseBasketElementsCount(){
  basketCountElement.innerText = Number(basketCountElement.innerText)+1;
}
export  function decreaseBasketElementsCount(){
  basketCountElement.innerText = Number(basketCountElement.innerText) - 1;
}
