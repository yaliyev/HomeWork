let books = [];

let bookCards = document.getElementById('book-cards');

let search = document.getElementById('search-box-input');

async function getData() {
    let spinner = document.getElementById('spinner-loading');
    spinner.style.animationName = 'spin';
    spinner.style.display = 'block';

    let data = await fetch('../assets/db.json')
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

function createBookCards(parametrBooks = books) {

    bookCards.innerHTML = "";

    for (let i = 0; i < parametrBooks.length; i++) {

        let colThree = document.createElement('div');
        colThree.setAttribute('class', 'col-3');

        let card = document.createElement('div');

        card.setAttribute('class', 'card');

        let cardImageBox = document.createElement('div');


        cardImageBox.setAttribute('class', 'card-image-box');

        let cardImage = document.createElement('img');

        cardImage.setAttribute('class', 'card-image');

        cardImage.src = parametrBooks[i].coverImage;

        let cardTitle = document.createElement('h3');




        cardTitle.innerText = parametrBooks[i].name;

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
                    html: `<b>Genre</b>: ${parametrBooks[index].genre} <br> <b>PageCount</b>: ${books[index].pageCount} <br> `
                        + `<b>Author</b>: ${parametrBooks[index].author} <br>`
                        + `<b>Year</b>: ${parametrBooks[index].year} <br>`
                        + `<b>Description</b>: ${parametrBooks[index].description}`
                })
            })
        });
    }

    let editButtons = document.querySelectorAll('.card-button.card-edit-button');

    editButtons.forEach((element,index)=>{

        element.addEventListener('click',function(){
            Swal.fire({
                title: '<strong>Edit</strong>',
                html:
                 `<input id='editname' style='margin:10px;' value='${parametrBooks[index].name}'>  <br> `+
                 `<input id='editgenre' style='margin:10px;' value='${parametrBooks[index].genre}'>  <br> `+
                 `<input id='editpagecount' style='margin:10px;' value='${parametrBooks[index].pageCount}'>  <br> `+
                 `<input id='editcoverimage' style='margin:10px;' value='${parametrBooks[index].coverImage}'>  <br> `+
                 `<input id='editauthor' style='margin:10px;' value='${parametrBooks[index].author}'>  <br> `+
                 `<input id='edityear' style='margin:10px;' value='${parametrBooks[index].year}'>  <br> `+
                 `<input id='editdescription' style='margin:10px;' value='${parametrBooks[index].description}'>  <br> `
                 ,
                showCloseButton: true,
                focusConfirm: false,
                confirmButtonText:
                'Edit',
                confirmButtonAriaLabel: 'Edited',
              }).then(result=>{
               if(result.isConfirmed === true){

                let book = {
                    id: parametrBooks[index].id,
                    name: document.getElementById('editname').value,
                    genre: document.getElementById('editgenre').value,
                    pageCount: document.getElementById('editpagecount').value,
                    coverImage: document.getElementById('editcoverimage').value,
                    author: document.getElementById('editauthor').value,
                    year: document.getElementById('edityear').value,
                    description: document.getElementById('editdescription').value
                }
                
               let response = fetch('http://localhost:3000/books/' + parametrBooks[index].id, {
                    method: 'PATCH',
                    headers: {
                        "Content-Type": "application/json",
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: JSON.stringify(book)
                }).then((result)=>{
                });
                

               }
              })

        });

    });

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

                    fetch('http://localhost:3000/books/' + parametrBooks[index].id, {
                        method: 'DELETE'
                    });
                    Swal.fire('Deleted!', '', 'success')

                }
            })




        })

    });





}


search.addEventListener('keyup',function(){

    

    let resultBooks = books.filter((book)=>{
        let searchTxt = search.value.toLowerCase(); 
         
        if(book.name.toLowerCase().indexOf(searchTxt) > -1
        || book.genre.toLowerCase().indexOf(searchTxt) > -1 
        ||book.pageCount.toString().toLowerCase().indexOf(searchTxt) > -1 
        ||book.author.toLowerCase().indexOf(searchTxt) > -1 
        ||book.year.toString().toLowerCase().indexOf(searchTxt) > -1 
        ||book.description.toLowerCase().indexOf(searchTxt) > -1     
        
        ){
            return book;
        }
    })
   createBookCards(resultBooks);

});



getData();