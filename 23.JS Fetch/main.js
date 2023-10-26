let api = "https://jsonplaceholder.typicode.com/users";
let userData = [];

function fetchTable() {
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      userData = data;
      let tableBody = document.getElementById("table-body");
      tableBody.innerHTML = "";

      data.forEach((user, index) => {
        let row = `
          <tr>
            <th scope="row">${user.id}</th>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.address.city}</td>
            <td><a href="${user.website}" target="_blank">${user.website}</a></td>
            <td>
              <button class="btn btn-info" onclick="showInfo(${user.id})">Show Info</button>
            </td>
          </tr>
        `;
        tableBody.insertAdjacentHTML("beforeend", row);
      });
    });
}

function showInfo(userId , ) {
    alert("UserId : "+userId)
  }

function updateTable() {
  let tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";

  userData.forEach((user, index) => {
    let row = `
      <tr>
        <th scope="row">${user.id}</th>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.address.city}</td>
        <td><a href="${user.website}" target="_blank">${user.website}</a></td>
        <td>
          <button class="btn btn-info" onclick="showInfo(${user.id})">Show Info</button>
        </td>
      </tr>
    `;
    tableBody.insertAdjacentHTML("beforeend", row);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  let getDataButton = document.getElementById("getDataButton");
  let sortByUsernameButton = document.getElementById("sortByUsernameButton");
  let sortByIdButton = document.getElementById("sortByIdButton");
  let clearTableButton = document.getElementById("clearTableButton");

  function sortByUsername() {
    userData.sort((a, b) => {
      return a.username.localeCompare(b.username);
    });

    updateTable();
  }

  function sortById() {
    userData.sort((a, b) => b.id - a.id);
    updateTable();
  }

  function clearTable() {
    const confirmation = confirm("Are You Sure Delete Table?");
    
    if (confirmation) {
        userData = [];
        let tableBody = document.getElementById("table-body");
        tableBody.innerHTML = "";
        getDataButton.disabled = false;
    }
}

  sortByUsernameButton.addEventListener("click", function () {
    sortByUsername();
  });

  sortByIdButton.addEventListener("click", function () {
    sortById();
  });

  clearTableButton.addEventListener("click", function () {
    clearTable();
  });

  getDataButton.addEventListener("click", function () {
    fetchTable();
    getDataButton.disabled = true;
  });
});



