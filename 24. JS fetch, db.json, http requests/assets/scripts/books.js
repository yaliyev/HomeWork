let basketStr = localStorage.getItem("basket-books");

let basket = [];

if(basketStr != null){
   basket = JSON.parse(basketStr);
//    console.log(basket);
}

let books = [];

let bookCards = document.getElementById('book-cards');

let search = document.getElementById('search-box-input');

let sortByYearButton = document.getElementById('sort-by-year');

let filterByGenreSelect  = document.getElementById('filter-by-genre');

async function getData() {
    let spinner = document.getElementById('spinner-loading');
    spinner.style.animationName = 'spin';
    spinner.style.display = 'block';

    let data = await fetch('http://localhost:3000/books')
        .then(response => {
            return response.json()
        })
        .then((data) => {
            spinner.style.animationName = '';
            spinner.style.display = 'none';
            books = data;
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



        let cardAddToBasketButton = '<button type="button" class="card-button card-add-to-basket-button">Add to Basket</button>'; 



        cardImageBox.appendChild(cardImage);

        card.appendChild(cardImageBox);





        card.appendChild(cardTitle);

        card.innerHTML += cardEditButton;

        card.innerHTML += cardDeleteButton;

        card.innerHTML += cardAddToBasketButton;


        colThree.appendChild(card);

        bookCards.appendChild(colThree);
    }

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


    let addToBasketButtons = document.querySelectorAll('.card-button.card-add-to-basket-button');

    addToBasketButtons.forEach((element,index)=>{
        element.addEventListener('click',function(){
            
            let basketItemId = null;
            

            let findingElement = basket.find((book,idx)=>{
                // console.log(book.itemId);
                // console.log(books[index].id);
                if(book.itemId === books[index].id){
                    basketItemId = idx;
                    return book;
                }
            });
            // console.log(findingElement);

            if(findingElement == undefined){
                let basketItem = {
                    itemId: books[index].id,
                    book: books[index],
                    quantity: 1,
                    totalPrice: books[index].price
                }

                

                basket.push(basketItem);

                localStorage.setItem("basket-books",JSON.stringify(basket));
            }else{
                 basket[basketItemId].quantity = basket[basketItemId].quantity + 1; 
                 basket[basketItemId].totalPrice = basket[basketItemId].quantity * basket[basketItemId].book.price;

                //  console.log(basket);
                 
                 localStorage.setItem("basket-books",JSON.stringify(basket));
            }
            

            

        })
    })


}


search.addEventListener('keyup',function(){
    document.getElementById('alert').innerText = "";
    

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
    if(resultBooks.length == 0){
        document.getElementById('alert').innerText = "No such data";
    }
   createBookCards(resultBooks);

});

sortByYearButton.addEventListener('click',function(){

    let sortedBooks = books.map((book)=>book);

    sortedBooks.sort((a,b)=>{
        return b.year - a.year;
    })
    console.log(sortedBooks);
    createBookCards(sortedBooks);

});

filterByGenreSelect.addEventListener('change',function(){
    if(this.value != ""){
        let resultBooks = books.filter(book=>book.genre === this.value);
        createBookCards(resultBooks);
    }else{
        createBookCards();
    }
    
})



getData();