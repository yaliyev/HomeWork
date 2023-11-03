import { getMealsData } from './requests/mealsRequests.js';
import { increaseBasketElementsCount,decreaseBasketElementsCount } from './header.js';
let basketStr = localStorage.getItem("basket");


let basket = [];

if (basket != null) {
    basket = JSON.parse(basketStr);
    console.log(basket);
}


let meals = [];

let basketTableData = document.getElementById('basket-table-data');

let totalBasketPriceDisplayElement = document.getElementById('total-basket-price');

async function insertBasketItemsToTable(afterStart = false) {

    if(afterStart == false){
        meals = await getMealsData();
    }
    
    basketTableData.innerHTML = "";

    for (let i = 0; i < basket.length; i++) {
        let oneOfTheBasketItemsObject = basket[i];

        let meal = meals.find((element) => element.id === oneOfTheBasketItemsObject.id);

        if (meal != undefined) {
            let tr = document.createElement("tr");
            let idTh = document.createElement("th");

            let nameTd = document.createElement("td");

            let imageTd = document.createElement("td");
            let priceTd = document.createElement("td");
            let quantityTd = document.createElement("td");
            let totalPriceTd = document.createElement("td");
            let increaseTd = document.createElement("td");
            let decreaseTd = document.createElement("td");
            let removeTd = document.createElement("td");

            
            let imageElement = document.createElement("img");
            let increaseButton = document.createElement("button");
            let decreaseButton = document.createElement("button");
            let deleteButton = document.createElement("button");

            imageTd.setAttribute("class", "col-2");
            imageElement.style = "width:60%;max-height:120px;object-fit:cover;object-position:0% 20%;";
            imageElement.src = meal.imageLink;
            increaseButton.setAttribute("class","btn btn-success");
            decreaseButton.setAttribute("class","btn btn-danger");
            deleteButton.setAttribute("class", "border border-danger  rounded bg-light text-danger  px-3 py-1 mx-1 delete-btn");

            idTh.innerText = meal.id;
            nameTd.innerText = meal.name;

            imageTd.appendChild(imageElement);
            priceTd.innerText = meal.price;
            quantityTd.innerText = oneOfTheBasketItemsObject.quantity;
            totalPriceTd.innerText = meal.price * oneOfTheBasketItemsObject.quantity;
            increaseTd.appendChild(increaseButton);
            decreaseTd.appendChild(decreaseButton);

            increaseButton.innerText = "+";
            decreaseButton.innerText = "-";
            deleteButton.innerHTML = `<i  class="fa-solid fa-trash"></i>`;

            increaseButton.addEventListener('click',function(){

                basket[i].quantity = basket[i].quantity + 1;
                insertBasketItemsToTable(true); 
                localStorage.setItem("basket",JSON.stringify(basket));
                totalBasketPriceDisplayElement.innerText = "";
                calculateTotalBasketPrice();
                Swal.fire({icon:'success',text:'Item increased'});

            });

            decreaseButton.addEventListener('click',function(){

                if(basket[i].quantity >1){
                    basket[i].quantity = basket[i].quantity - 1;
                    insertBasketItemsToTable(true); 
                    localStorage.setItem("basket",JSON.stringify(basket));
                    totalBasketPriceDisplayElement.innerText = "";
                    calculateTotalBasketPrice();
                    Swal.fire({icon:'success',text:'Item decreased'});
                }else{
                    Swal.fire({icon:'error',text:'Item quantity is one'});
                }

                
            });


            deleteButton.addEventListener('click',function(){

                Swal.fire({
                    title: `Are you sure to delete ${meal.name} from basket?`,
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                  }).then((result)=>{
                    if(result.isConfirmed){
                        Swal.fire(
                            'Deleted!',
                            'Meal has been deleted from basket.',
                            'success'
                          )
                        basket.splice(i,1);
                        localStorage.setItem("basket",JSON.stringify(basket));
                        insertBasketItemsToTable();
                        decreaseBasketElementsCount();
                    }
                  })

            });

            removeTd.appendChild(deleteButton);

            imageTd.appendChild(imageElement);

            tr.appendChild(idTh);
            tr.appendChild(nameTd);
            tr.appendChild(imageTd);
            tr.appendChild(priceTd);
            tr.appendChild(quantityTd);
            tr.appendChild(totalPriceTd);
            tr.appendChild(increaseTd);
            tr.appendChild(decreaseTd);
            tr.appendChild(removeTd);


            basketTableData.appendChild(tr);
        }else{
            favourites.splice(i,1);
            localStorage.setItem("favorites", JSON.stringify(favourites));
        }





    }

    calculateTotalBasketPrice();

}

function calculateTotalBasketPrice(){
   for(let i = 0; i < basket.length; i++){
      let meal = meals.find(element=>{
          return element.id == basket[i].id;
      });

      console.log(Number(meal.price));
      totalBasketPriceDisplayElement.innerText = Number(totalBasketPriceDisplayElement.innerText) + (meal.price * basket[i].quantity) ; 
   }
}

insertBasketItemsToTable();






