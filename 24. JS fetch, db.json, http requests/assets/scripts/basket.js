let basketStr = localStorage.getItem("basket-books");

let basket = [];

if (basketStr != null) {
    basket = JSON.parse(basketStr);
    basket.sort((a, b) => {
        return a.itemId - b.itemId;
    })
    console.log(basket);
}

function insertBasketItems() {
    let basketItemsTable = document.getElementById('basket-items-table');
    basketItemsTable.innerHTML = "";
    for (let i = 0; i < basket.length; i++) {

        let item = basket[i];

        let tr = document.createElement('tr');

        let idTd = document.createElement('td');
        let imageTd = document.createElement('td');
        let nameTd = document.createElement('td');
        let priceTd = document.createElement('td');
        let totalAmountTd = document.createElement('td');
        let countTd = document.createElement('td');
        let countOperationsTd = document.createElement('td');
        let deleteTd = document.createElement('td');

        idTd.innerText = item.itemId;
        idTd.innerText = item.itemId;

        let image = document.createElement('img');

        image.setAttribute('class', 'item-image');

        image.src = item.book.coverImage;



        imageTd.appendChild(image);

        nameTd.innerText = item.book.name;
        priceTd.innerText = item.book.price;
        totalAmountTd.innerText = item.totalPrice;

        countTd.innerText = item.quantity;

        countOperationsTd.innerHTML += '<button class="plus-button">+</button>'
            + '<button class="minus-button">-</button>';

        deleteTd.innerHTML += ' <button class="delete-button">x</button>';

        tr.appendChild(idTd);
        tr.appendChild(imageTd);
        tr.appendChild(nameTd);
        tr.appendChild(priceTd);
        tr.appendChild(totalAmountTd);
        tr.appendChild(countTd);
        tr.appendChild(countOperationsTd);
        tr.appendChild(deleteTd);



        basketItemsTable.appendChild(tr);

    }
}





function initiate() {
    insertBasketItems();
    let minusButtons = document.querySelectorAll('.minus-button');
    let plusButtons = document.querySelectorAll('.plus-button');
    let deleteButtons = document.querySelectorAll('.delete-button');

    minusButtons.forEach((element) => {

        element.addEventListener('click', function () {
            let elementID = this.parentElement.parentElement.querySelector('td:first-child').innerHTML;
            let basketItemIndex = null;
            let basketElement = basket.find((basketItem, idx) => {
                if (basketItem.itemId == elementID) {
                    basketItemIndex = idx;
                }
            })

            basket[basketItemIndex].quantity = basket[basketItemIndex].quantity - 1;
            basket[basketItemIndex].totalPrice = basket[basketItemIndex].quantity * basket[basketItemIndex].book.price;

            localStorage.setItem("basket-books", JSON.stringify(basket));

            initiate();

        });

    });

    plusButtons.forEach((element) => {

        element.addEventListener('click', function () {
            let elementID = this.parentElement.parentElement.querySelector('td:first-child').innerHTML;
            let basketItemIndex = null;
            let basketElement = basket.find((basketItem, idx) => {
                if (basketItem.itemId == elementID) {
                    basketItemIndex = idx;
                }
            })

            basket[basketItemIndex].quantity = basket[basketItemIndex].quantity + 1;
            basket[basketItemIndex].totalPrice = basket[basketItemIndex].quantity * basket[basketItemIndex].book.price;

            localStorage.setItem("basket-books", JSON.stringify(basket));

            initiate();

        });

    });


    deleteButtons.forEach((element) => {

        element.addEventListener('click', function () {
            let elementID = this.parentElement.parentElement.querySelector('td:first-child').innerHTML;
            let basketItemIndex = null;
            let basketElement = basket.find((basketItem, idx) => {
                if (basketItem.itemId == elementID) {
                    basketItemIndex = idx;
                }
            })

            basket.splice(basketItemIndex, 1);

            localStorage.setItem("basket-books", JSON.stringify(basket));

            initiate();



        });
    });

    let submitOrderButton = document.getElementById('submit-order-button');

    submitOrderButton.addEventListener('click', function () {

        if(basket.length > 0){
            Swal.fire({
                title: 'Əminsiniz?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                cancelButtonText: 'Xeyr',
                confirmButtonText: 'Bəli!'
            }).then((result) => {
                if (result.isConfirmed) {
                    basket = [];
                    localStorage.removeItem('basket-books');
                    initiate();
                    Swal.fire(
                        'Order Confirmed',
                    )
                }
            })
        }

    });

    calculateTotalAmount();

}

function calculateTotalAmount() {
    let totalAmount = 0;

    basket.forEach((element) => {
        totalAmount += element.totalPrice;
    })
    document.getElementById('total-amount').innerText = totalAmount;
}

initiate();