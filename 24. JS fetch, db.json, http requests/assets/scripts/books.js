let books = [];

let bookCards = document.getElementById('book-cards');

async function getData() {
    let spinner = document.getElementById('spinner-loading');
    spinner.style.animationName = 'spin';
    spinner.style.display = 'block';

    let data = await fetch('../assets/test.json')
        .then(response => {
            return response.json()
        })
        .then((data) => {
            spinner.style.animationName = '';
            spinner.style.display = 'none';
            books = data.books;

            createBookCards();
        })
}

function createBookCards() {

    for (let i = 0; i < books.length; i++) {

        let colThree = document.createElement('div');
        colThree.setAttribute('class', 'col-3');

        let card = document.createElement('div');

        card.setAttribute('class', 'card');

        let cardImageBox = document.createElement('div');


        cardImageBox.setAttribute('class', 'card-image-box');

        let cardImage = document.createElement('img');

        cardImage.setAttribute('class', 'card-image');

        cardImage.src = books[i].coverImage;

        let cardTitle = document.createElement('h3');




        cardTitle.innerText = books[i].name;

        cardTitle.setAttribute('class', 'card-title');





        let cardEditButton = ' <button class="card-button card-edit-button">Edit Button</button>';




        let cardDeleteButton = '<button type="button" class="card-button card-delete-button">Delete Button</button>';





        cardImageBox.appendChild(cardImage);

        card.appendChild(cardImageBox);





        card.appendChild(cardTitle);

        card.innerHTML += cardEditButton;

        card.innerHTML += cardDeleteButton;


        colThree.appendChild(card);

        bookCards.appendChild(colThree);



        document.querySelectorAll(".card .card-title").forEach((element, index) => {
            element.addEventListener('click', function () {
                Swal.fire({

                    title: this.innerText,
                    html: `<b>Genre</b>: ${books[index].genre} <br> <b>PageCount</b>: ${books[index].pageCount} <br> `
                        + `<b>Author</b>: ${books[index].author} <br>`
                        + `<b>Year</b>: ${books[index].year} <br>`
                        + `<b>Description</b>: ${books[index].description}`
                })
            })
        });
    }

    let deleteButtons = document.querySelectorAll('.card-button.card-delete-button');

    deleteButtons.forEach((element, index) => {

        element.addEventListener('click', (event) => {
            Swal.fire({
                title: 'Do you want to delete?',
                showDenyButton: true,

                confirmButtonText: 'Delete',
                denyButtonText: `Don't delete`,
            }).then((result) => {
                if (result.isConfirmed) {
                    event.preventDefault();

                    fetch('http://localhost:3000/books/' + books[index].id, {
                        method: 'DELETE'
                    });
                    Swal.fire('Deleted!', '', 'success')

                }
            })




        })

    });





}






getData();