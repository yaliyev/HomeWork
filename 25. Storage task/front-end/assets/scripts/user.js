import { getUsersData, patchUser } from './requests/usersRequests.js';

let users = [];

let usersTableData = document.getElementById('users-table-data');

let userEditButton = document.getElementById('edit-user-button');
let userEditPasswordButton = document.getElementById('edit-password-button');


(async () => {
    users = await getUsersData();
    loadUserData();
})();

function loadUserData() {

    let userStrSession = sessionStorage.getItem('user');
    let userStrLocal = localStorage.getItem('user');

    let allow = false;
    let currentLoginedID;

    if (userStrSession != null && userStrSession != 'null') {
        allow = true;
        currentLoginedID = JSON.parse(userStrSession).userID;
        console.log(currentLoginedID);
    } else if (userStrLocal != null && userStrLocal != 'null') {
        allow = true;
        currentLoginedID = JSON.parse(userStrLocal).userID;
        console.log(currentLoginedID);
    } else {
        allow = false;
    }
    let parameters = new URLSearchParams(document.location.search);
    let id = Number(parameters.get("id"));

    if (allow && Number(currentLoginedID) === id) {



        let user = users.find(element => { return Number(element.id) === id });
        if (user != undefined) {
            let userUsername = document.getElementById('user-username');
            let userEmail = document.getElementById('user-email');
            let userPassword = document.getElementById('user-password');
            let userBalance = document.getElementById('user-balance');

            userUsername.innerText = user.username;
            userEmail.innerText = user.email;
            userPassword.innerText = user.password;
            userBalance.innerText = Number(user.balance).toFixed(2);

            let orders = user.orders;

            for (let i = 0; i < orders.length; i++) {

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
    } else {
        window.location.href = './meals.html';
    }

}
userEditButton.addEventListener('click', function () {
    let parameters = new URLSearchParams(document.location.search);
    let id = Number(parameters.get("id"));

    let userIndex = null;
    let user = users.find((element, index) => {
        userIndex = index;
        return Number(element.id) == id;
    });
    let validationElements = [];
    let inputElements = [];
    Swal.fire({
        title: '<strong>Edit User</strong>',
        html: `
        <div class="form-group">
        <label style="width:100%;text-align:left;margin-top:10px;margin-bottom:10px;"><b>Username</b> </label>
        <input  type="text" class="form-control" id="edit-username" placeholder="Enter Username">
      <div id='username-validation-result' class='my-2 text-danger'></div>
      </div>
      <div class="form-group">
      <label style="width:100%;text-align:left;margin-top:10px;margin-bottom:10px;"><b>Email</b> </label>
      <input type="email" class="form-control" id="edit-email" placeholder="Enter Email">
      <div id='email-validation-result' class='my-2 text-danger'></div>
    </div>
    
    <div class="form-group">
      <label style="width:100%;text-align:left;margin-top:10px;margin-bottom:10px;"><b>Balance</b> </label>
      <input type="number" class="form-control" id="edit-balance" placeholder="Enter Balance">
      <div id='balance-validation-result' class='text-danger'></div>
    </div>
    
      `,
        focusConfirm: false,
        confirmButtonText:
            'Edit',
        showCancelButton: true,
        cancelButtonText:
            'Close'
    }).then((result) => {
        if (result.isConfirmed) {
            let result = validationElements.every((element) => {
                return element.innerText === ''
            });
            if (result) {

                if (inputElements[0].value === user.username && inputElements[1].value === user.email && inputElements[2].value === Number(user.balance).toFixed(2)) {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: `You wrote same user data :-)`,
                        showConfirmButton: false,
                        timer: 2500
                    });
                } else {
                    user.username = inputElements[0].value
                    user.email = inputElements[1].value;
                    user.balance = inputElements[2].value;
                    patchUser(user.id, user);
                    users[userIndex] = user;
                    loadUserData();


                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `User edited`,
                        showConfirmButton: false,
                        timer: 2500
                    });
                }

            } else {

                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: `Form data format is invalid`,
                    showConfirmButton: false,
                    timer: 2500
                });
            }
        }
    })
    let container = Swal.getHtmlContainer();
    Array.from(container.querySelectorAll('[id*="validation"]')).forEach(function (element) {
        validationElements.push(element);
    });
    Array.from(container.querySelectorAll('[id|="edit"]')).forEach(function (element) {
        inputElements.push(element);
    })


    container.querySelector('#edit-username').value = user.username;
    container.querySelector('#edit-email').value = user.email;
    container.querySelector('#edit-balance').value = Number(user.balance).toFixed(2);





    container.querySelector('#edit-username').addEventListener('keyup', function () {

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

    container.querySelector('#edit-email').addEventListener('keyup', function () {
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

    container.querySelector('#edit-balance').addEventListener('keyup', function () {

        document.querySelector('#balance-validation-result').innerText = '';
        if (Number(this.value) < 0) {

            document.querySelector('#balance-validation-result').innerText = 'balance must be positive';
        }
        if (this.value.trim().length == 0) {

            document.querySelector('#balance-validation-result').innerText = 'balance is required';
        }
    });




});

userEditPasswordButton.addEventListener('click', function () {
    let parameters = new URLSearchParams(document.location.search);
    let id = Number(parameters.get("id"));

    let userIndex = null;
    let user = users.find((element, index) => {
        userIndex = index;
        return Number(element.id) == id;
    });
    let validationElements = [];
    let inputElements = [];
    Swal.fire({
        title: '<strong>Edit User Password</strong>',
        html: `
        <div class="form-group">
        <label style="width:100%;text-align:left;margin-top:10px;margin-bottom:10px;"><b>Current Password</b> </label>
        <input  type="password" class="form-control" id="edit-current-password" placeholder="Enter Current Password">
      <div id='current-password-validation-result' class='my-2 text-danger'></div>
      </div>
      <div class="form-group">
      <label style="width:100%;text-align:left;margin-top:10px;margin-bottom:10px;"><b>New Password</b> </label>
      <input type="password" class="form-control" id="edit-new-password" placeholder="Enter a new password">
      <div id='new-password-validation-result' class='my-2 text-danger'></div>
    </div>
    
    <div class="form-group">
      <label style="width:100%;text-align:left;margin-top:10px;margin-bottom:10px;"><b>Confirm Password</b> </label>
      <input type="password" class="form-control" id="edit-confirm-new-password" placeholder="Confirm a new password">
      <div id='confirm-new-password-validation-result' class='my-2 text-danger'></div>
    </div>
    
    
      `,
        focusConfirm: false,
        confirmButtonText:
            'Edit',
        showCancelButton: true,
        cancelButtonText:
            'Close'
    }).then((result)=>{
        if(result.isConfirmed){
            let result = validationElements.every((element) => {
                return element.innerText === ''
            });
            if(result){

                if (inputElements[0].value === inputElements[1].value) {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: `You repeated same password :-)`,
                        showConfirmButton: false,
                        timer: 2500
                    });
                }else{
                    user.password = inputElements[1].value;
                    patchUser(user.id, user);
                    users[userIndex] = user;
                    loadUserData();


                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `User password edited`,
                        showConfirmButton: false,
                        timer: 2500
                    });

                }
                
            }
        }
    })
    let container = Swal.getHtmlContainer();
    Array.from(container.querySelectorAll('[id*="validation"]')).forEach(function (element) {
        validationElements.push(element);
    });
    Array.from(container.querySelectorAll('[id|="edit"]')).forEach(function (element) {
        inputElements.push(element);
    })

    container.querySelector('#edit-current-password').addEventListener('keyup', function () {
        document.querySelector('#current-password-validation-result').innerText = '';
        if (this.value != user.password) {
            document.querySelector('#current-password-validation-result').innerText = 'This is not your current password.';
        }



    });

    container.querySelector('#edit-new-password').addEventListener('keyup', function () {

        document.querySelector('#new-password-validation-result').innerText = '';
        if (this.value.match('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{5,}') == null) {

            document.querySelector('#new-password-validation-result').innerText = 'password must be minimum 5 characters[aA9]';
        }
        if (this.value.trim().length == 0) {

            document.querySelector('#new-password-validation-result').innerText = 'password is required';
        }
    });
    container.querySelector('#edit-confirm-new-password').addEventListener('keyup', function () {

        document.querySelector('#confirm-new-password-validation-result').innerText = '';
        if (container.querySelector('#edit-new-password').value != this.value) {


            document.querySelector('#confirm-new-password-validation-result').innerText = 'New password field values are not same';
        }
        
    });
});