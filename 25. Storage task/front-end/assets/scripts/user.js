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
            userBalance.innerText = user.balance;
    
    
        }
    }else{
        window.location.href = './meals.html';
    }

    

   




}