import { getSingersData } from './requests/singersRequests.js';
import { increaseWishListElementsCount,decreaseWishListElementsCount } from './header.js';

let favouritesStr = localStorage.getItem("favorites");


let favourites = [];

if (favouritesStr != null) {
    favourites = JSON.parse(favouritesStr);
}


let singers = [];

let favouritesTableData = document.getElementById('favourites-table-data');

async function insertFavouritesToTable(afterStart = false) {

    if(afterStart == false){
        singers = await getSingersData();
    }
    
    favouritesTableData.innerHTML = "";

    for (let i = 0; i < favourites.length; i++) {
        let oneOfThefavouriteSingersIdObject = favourites[i];

        let singer = singers.find((element) => element.id === oneOfThefavouriteSingersIdObject.id);

        if (singer != undefined) {
            let tr = document.createElement("tr");
            let idTh = document.createElement("th");

            let nameTd = document.createElement("td");

            let imageTd = document.createElement("td");
            let ageTd = document.createElement("td");
            let genreTd = document.createElement("td");
            let actionTd = document.createElement("td");

            let imageElement = document.createElement("img");
            let deleteButton = document.createElement("button");

            imageTd.setAttribute("class", "col-2");
            imageElement.style = "width:60%;max-height:120px;object-fit:cover;object-position:0% 20%;";
            imageElement.src = singer.imageLink;
            deleteButton.setAttribute("class", "border border-danger  rounded bg-light text-danger  px-3 py-1 mx-1 delete-btn");

            idTh.innerText = singer.id;
            nameTd.innerText = singer.name;

            imageTd.appendChild(imageElement);

            ageTd.innerText = singer.age;
            genreTd.innerText = singer.genre;
            deleteButton.innerHTML = `<i  class="fa-solid fa-trash"></i>`;


            deleteButton.addEventListener('click',function(){

                Swal.fire({
                    title: `Are you sure to delete ${singer.name} from favorites?`,
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
                            'Singer has been deleted from adorable musicians list.',
                            'success'
                          )
                        favourites.splice(i,1);
                        localStorage.setItem("favorites",JSON.stringify(favourites));
                        insertFavouritesToTable(true);
                        decreaseWishListElementsCount();
                    }
                  })

            });

            actionTd.appendChild(deleteButton);

            imageTd.appendChild(imageElement);

            tr.appendChild(idTh);
            tr.appendChild(nameTd);
            tr.appendChild(imageTd);
            tr.appendChild(ageTd);
            tr.appendChild(genreTd);
            tr.appendChild(actionTd);


            favouritesTableData.appendChild(tr);
        }else{
            favourites.splice(i,1);
            localStorage.setItem("favorites", JSON.stringify(favourites));
        }





    }

}

insertFavouritesToTable();
