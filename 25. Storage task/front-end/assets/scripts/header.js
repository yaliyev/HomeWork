
let favouritesStr = localStorage.getItem("favorites");


let favourites = [];

if (favouritesStr != null) {
    favourites = JSON.parse(favouritesStr);
}

let wishListCountElement = document.getElementById('wishlist-count');

document.querySelector(".nav-logo-box").addEventListener('click',function(){
  window.location.href = "/front-end/templates/main.html";
});

function countWishListElements(){
  
  wishListCountElement.innerText = favourites.length;
}
// function increaseWishListElementsCount(){
//   wishListCountElement.innerText = Number(wishListCountElement.innerText)+1;
// }
// function decreaseWishListElementsCount(){
//   wishListCountElement.innerText = Number(wishListCountElement.innerText)+1;
// }
countWishListElements();

export  function increaseWishListElementsCount(){
  wishListCountElement.innerText = Number(wishListCountElement.innerText)+1;
}
export  function decreaseWishListElementsCount(){
  wishListCountElement.innerText = Number(wishListCountElement.innerText) - 1;
}
