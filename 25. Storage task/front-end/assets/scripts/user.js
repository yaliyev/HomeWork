import { getUsersData } from './requests/usersRequests.js';

let users = [];

let usersTableData = document.getElementById('users-table-data');


 
(async()=>{
    users = await getUsersData();
    loadUserData();
})();

function loadUserData(){

    let userStrSession = sessionStorage.getItem('user');
    let userStrLocal = localStorage.getItem('user');

    let allow = false;
    let currentLoginedID;

    if(userStrSession != null && userStrSession != 'null'){
        allow = true;
        currentLoginedID = JSON.parse(userStrSession).userID;
        console.log(currentLoginedID);
    }else if(userStrLocal != null && userStrLocal != 'null'){
        allow = true;
        currentLoginedID = JSON.parse(userStrLocal).userID;
        console.log(currentLoginedID);
    }else{
        allow = false;
    }
    let parameters = new URLSearchParams(document.location.search);
    let id = Number(parameters.get("id"));

    if(allow && Number(currentLoginedID) === id){
        
        
    
        let user = users.find(element=>{return Number(element.id) === id});
        if(user != undefined){
            let userUsername = document.getElementById('user-username');
            let userEmail = document.getElementById('user-email');
            let userPassword = document.getElementById('user-password');
            let userBalance  = document.getElementById('user-balance');
        
            userUsername.innerText = user.username;
            userEmail.innerText = user.email;
            userPassword.innerText = user.password;
            userBalance.innerText = Number(user.balance).toFixed(2);

            let orders = user.orders;

            for(let i = 0; i < orders.length;i++){

                let order = orders[i];

                let tr = document.createElement("tr");
                let idTh = document.createElement('th');
                let totalPriceTd = document.createElement('td');
                let orderDateTd = document.createElement('td');

                idTh.innerText = order.id;
                totalPriceTd.innerText = order.totalPrice;
                orderDateTd.innerText = order.orderDate;

                tr.appendChild(idTh);
                tr.appendChild(totalPriceTd);
                tr.appendChild(orderDateTd);

                usersTableData.appendChild(tr);
            }
    
    
        }
    }else{
        window.location.href = './meals.html';
    }

    

   




}