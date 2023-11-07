import { get, post, put } from './requests.js';

let footballers = [];

let footballerCards = document.getElementById('footballer-cards');


let addPlayerButton = document.getElementById('add-player-button');



addPlayerButton.addEventListener('click', function () {

    Swal.fire({
        title: "<strong>Add player</strong>",
        html: `
          <div class='form-group'>
          <label style="width:100%;text-align:left;margin-top:10px;margin-bottom:10px;"><b>Title</b> </label>
          <input  type="text" class="form-control" id="player-title" placeholder="Enter Title">
          </div>
          <div class='form-group'>
          <label style="width:100%;text-align:left;margin-top:10px;margin-bottom:10px;"><b>Image Url</b> </label>
          <input  type="text" class="form-control" id="player-image-url" placeholder="Enter Image url">
          </div>
        `,
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText: `
          <i class="fa fa-thumbs-up"></i> Submit
        `,
    }).then((result) => {
        if (result.isConfirmed) {
            let playerTitle = document.getElementById('player-title');
            let playerImageURL = document.getElementById('player-image-url');

            if (!playerTitle.value.trim().match('^[a-z A-Z]{3,}$') || playerImageURL.value.length < 10) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Invalid form data(Player title should be 3 symbol minimum and only letters,Player image url must be at least 10 symbols)",

                });
            } else {
                let player = { title: playerTitle.value, imageURL: playerImageURL.value };

                post(player);

                toastr.options = {
                    closeButton: true,
                    debug: false,
                    newestOnTop: false,
                    progressBar: true,
                    positionClass: "toast-bottom-right",
                    preventDuplicates: false,
                    onclick: null,
                    showDuration: "300",
                    hideDuration: "1000",
                    timeOut: "5000",
                    extendedTimeOut: "1000",
                    showEasing: "swing",
                    hideEasing: "linear",
                    showMethod: "fadeIn",
                    hideMethod: "fadeOut",
                };
                toastr.success(
                    "", "Slider Added", { "iconClass": 'text-info' }
                );
            }


        }
    });

});

async function loadFootballerCards(notFetch = false) {

    footballerCards.innerHTML  ="";

    if(!notFetch){
       footballers = await get();
    }

    for (let i = 0; i < footballers.length; i++) {
        let footballer = footballers[i];


        var col = document.createElement("div");
        col.classList.add("col-lg-4", "col-md-6", "col-sm-12", "mt-3");


        var cardDiv = document.createElement("div");
        cardDiv.classList.add("card");


        var lightboxImage = document.createElement("a");
        lightboxImage.src = footballer.imageURL;
        lightboxImage.setAttribute("data-lightbox", "roadtrip");


        var image = document.createElement("img");
        image.src = footballer.imageURL;
        image.classList.add("card-img-top");
        image.setAttribute("alt", "...");


        var cardBodyDiv = document.createElement("div");
        cardBodyDiv.classList.add("card-body");


        var cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title", "text-center");
        cardTitle.innerHTML = footballer.title;


        var btnBoxDiv = document.createElement("div");
        btnBoxDiv.classList.add("btn-box", "d-flex", "justify-content-between");


        var editButton = document.createElement("button");
        editButton.classList.add("btn", "btn-warning");
        editButton.innerHTML = "Edit";

        editButton.addEventListener('click', function () {
            Swal.fire({
                title: "<strong>Edit player</strong>",
                html: `
                  <div class='form-group'>
                  <label style="width:100%;text-align:left;margin-top:10px;margin-bottom:10px;"><b>Edit Title</b> </label>
                  <input  type="text" class="form-control" id="edit-player-title" placeholder="Enter Title">
                  </div>
                  <div class='form-group'>
                  <label style="width:100%;text-align:left;margin-top:10px;margin-bottom:10px;"><b>Edit Image Url</b> </label>
                  <input  type="text" class="form-control" id="edit-player-image-url" placeholder="Enter Image url">
                  </div>
                `,
                showCloseButton: true,
                focusConfirm: false,
                confirmButtonText: `
                  <i class="fa fa-thumbs-up"></i> Submit
                `,
            }).then(result => {
                if (result.isConfirmed) {
                    let playerTitle = document.getElementById('edit-player-title');
                    let playerImageURL = document.getElementById('edit-player-image-url');
                    console.log(playerTitle.value);
                    console.log(playerImageURL.value);
                    if (!playerTitle.value.trim().match('^[a-z A-Z]{3,}$') || playerImageURL.value.length < 10) {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Invalid form data(Player title should be 3 symbol minimum and only letters,Player image url must be at least 10 symbols)",

                        });
                    } else {
                        let player = { title: playerTitle.value, imageURL: playerImageURL.value };

                        put(footballer.id, player);

                        footballers[i] = player;
                        loadFootballerCards(true);
                        toastr.options = {
                            closeButton: true,
                            debug: false,
                            newestOnTop: false,
                            progressBar: true,
                            positionClass: "toast-bottom-right",
                            preventDuplicates: false,
                            onclick: null,
                            showDuration: "300",
                            hideDuration: "1000",
                            timeOut: "5000",
                            extendedTimeOut: "1000",
                            showEasing: "swing",
                            hideEasing: "linear",
                            showMethod: "fadeIn",
                            hideMethod: "fadeOut",
                        };
                        toastr.success(
                            "", "Slider edited", { "iconClass": 'text-info' }
                        );
                       
                    }
                }
            })
            let container = swal.getContainer();
            container.querySelector('#edit-player-title').value = footballer.title;
            container.querySelector('#edit-player-image-url').value = footballer.imageURL;
        });


        var deleteButton = document.createElement("button");
        deleteButton.classList.add("btn", "btn-danger");
        deleteButton.innerHTML = "Delete";

        deleteButton.addEventListener('click',()=>{
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                    delete(footballer.id);
                    footballers.splice(i,1);
                    loadFootballerCards(true);
                  Swal.fire({
                    title: "Deleted!",
                    text: "Slider has been deleted",
                    icon: "success"
                  });
                }
              });
        })


        btnBoxDiv.appendChild(editButton);
        btnBoxDiv.appendChild(deleteButton);

        cardBodyDiv.appendChild(cardTitle);
        cardBodyDiv.appendChild(btnBoxDiv);

        lightboxImage.appendChild(image);

        cardDiv.appendChild(lightboxImage);
        cardDiv.appendChild(cardBodyDiv);

        col.appendChild(cardDiv);

        footballerCards.appendChild(col);


    }




}



(() => {
    loadFootballerCards();
})();