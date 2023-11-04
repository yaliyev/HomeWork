import { getUsersData,patchOrder } from './requests/usersRequests.js';
import { getMealsData} from './requests/mealsRequests.js';
import { increaseBasketElementsCount,decreaseBasketElementsCount } from './header.js';
let basketStr = localStorage.getItem("basket");


let basket = [];

if (basketStr != null) {
    basket = JSON.parse(basketStr);
    console.log(basket);
}


let meals = [];

let basketTableData = document.getElementById('basket-table-data');

let totalBasketPriceDisplayElement = document.getElementById('total-basket-price');

let orderButton = document.getElementById('order-button');

async function insertBasketItemsToTable(afterStart = false) {

    if(afterStart == false){
        meals = await getMealsData();
    }
    
    basketTableData.innerHTML = "";
    totalBasketPriceDisplayElement.innerText = "";

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

orderButton.addEventListener('click',async function(){
    let userStrSession = sessionStorage.getItem('user');
    let userStrLocal = localStorage.getItem('user');

    let users = await getUsersData();
    if(userStrSession != null && userStrSession != 'null'){
        console.log(`session: ${userStrSession}`);
         let user = users.find((element)=>{
            if(element.id === JSON.parse(userStrSession).userID){
                return element;
            }
         })
        let orders = user.orders;
        let order = {};

        let maxId = 0;
        orders.forEach((element) => {
          if (element.id > maxId)
            maxId = element.id;
        });
        order.id = (Number(maxId)+1).toString();
        order.totalPrice = totalBasketPriceDisplayElement.innerText;
        order.orderDate = moment(new Date()).format('MMMM Do YYYY, h:mm a');

        if(Number(user.balance)>=order.totalPrice){
            user.balance -= order.totalPrice;

            orders.push(order);

            user.orders = orders;
            
    
            patchOrder(JSON.parse(userStrSession).userID,user);
    
            basket = [];
            localStorage.setItem('basket',JSON.stringify(basket));
            insertBasketItemsToTable(true);
            calculateTotalBasketPrice();
            document.getElementById('basket-count').innerText = 0;
            
        }else{
            Swal.fire({ icon: 'error', text: 'Balance is not enough for submitting order' });
        }

        

    }else if(userStrLocal != null && userStrLocal != 'null'){
        console.log(`local: ${userStrLocal}`);
        let user = users.find((element)=>{
            if(element.id === JSON.parse(userStrLocal).userID){
                return element;
            }
         })
        let orders = user.orders;
        let order = {};

        let maxId = 0;
        orders.forEach((element) => {
          if (element.id > maxId)
            maxId = element.id;
        });
        order.id = (Number(maxId)+1).toString();
        order.totalPrice = totalBasketPriceDisplayElement.innerText;
        order.orderDate = moment(new Date()).format('MMMM Do YYYY, h:mm a');

        if(Number(user.balance)>=order.totalPrice){
            user.balance -= order.totalPrice;

            orders.push(order);

            user.orders = orders;
            
    
            patchOrder(JSON.parse(userStrLocal).userID,user);
    
            basket = [];
            localStorage.setItem('basket',JSON.stringify(basket));
            insertBasketItemsToTable(true);
            calculateTotalBasketPrice();
            document.getElementById('basket-count').innerText = 0;
            
        }else{
            Swal.fire({ icon: 'error', text: 'Balance is not enough for submitting order' });
        }
        
    }else{
        Swal.fire({icon:'error',text:'You have to login first'});
    }

});

function calculateTotalBasketPrice(){
    if(basket.length == 0){
        totalBasketPriceDisplayElement.innerText = "";
    }
   for(let i = 0; i < basket.length; i++){
      let meal = meals.find(element=>{
          return element.id == basket[i].id;
      });

      console.log(Number(meal.price));
      totalBasketPriceDisplayElement.innerText = Number(totalBasketPriceDisplayElement.innerText) + (meal.price * basket[i].quantity) ; 
   }
}

insertBasketItemsToTable();






