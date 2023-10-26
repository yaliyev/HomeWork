const api = 'https://jsonplaceholder.typicode.com/users';

      function fetchTable() {
        fetch(api)
          .then((response) => response.json())
          .then((data) => {
            const tableBody = document.getElementById('table-body');

            data.forEach((user, index) => {
              const row = `
                <tr>
                  <th scope="row">${index + 1}</th>
                  <td>${user.name}</td>
                  <td>${user.username}</td>
                  <td>${user.email}</td>
                  <td>${user.address.city}</td>
                  <td><a href="${user.website}" target="_blank">${user.website}</a></td>
                  <td>
                    <button class="btn btn-primary" onclick="showInfo(${user.id})">Show Info</button>
                  </td>
                </tr>
              `;
              tableBody.insertAdjacentHTML('beforeend', row);  // bunun vasitesile datani herdefe table a doldururuq
            });
          });
      }

      window.addEventListener('load', fetchTable);

      function showInfo(userId) {
        
      }