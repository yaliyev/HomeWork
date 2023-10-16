let products = [];

let product1 = new Product("Laptop1", 1200, 1000, 4, 2);
let product2 = new Product("Laptop2", 2500, 2000, 4, 0);
let product3 = new Product("Laptop3", 2000, 1750, 4, 3);
let product4 = new Product("Laptop4", 5000, 4200, 1, 0);


products.push(product1);
products.push(product2);
products.push(product3);
products.push(product4);


function Product(name, salePrice, costPrice, stockQuantity, soldQuantity = 0, isDiscounted = false, discountPercentage = 0) {
    if (!(salePrice > costPrice)) {
        alert("Satış qiyməti həmişə dəyər qiymətindən böyük olmalıdır");
    } else {
        this.name = name;
        this.salePrice = salePrice;
        this.costPrice = costPrice;
        this.stockQuantity = stockQuantity;
        this.soldQuantity = soldQuantity;
        this.isDiscounted = isDiscounted;
        this.discountPercentage = discountPercentage;

        // 1.1
        this.findProfit = function () {
            return ((this.salePrice - this.costPrice) * this.soldQuantity); // umumi profit elde edilmesi(satilanlardan)
        }
        // 1.2
        this.sell = function (sellQuantity) {
            if (sellQuantity < stockQuantity) {
                this.soldQuantity += sellQuantity;
                this.stockQuantity -= sellQuantity;
            }
        }
    }
}

// 1.4
function generalMarketProductsProfit() {
    let generalProfit = 0;

    for (let i = 0; i < products.length; i++) {
        generalProfit += products[i].stockQuantity * products[i].salePrice; // ne qeder umumi mehsul varsa * onlarin satis qiymeti(maksimum elde edile bilecek mebleg)
    }
    return generalProfit;
}
// 1.5.1
// tapsirigin shertinde tam basa dusmedim,konkret mehsulun endirimle olan qiymeti sorusulur ya umumiyyetle mehsullarda endirimlerin ne qeder mebleg olacagi sorusulur
// Bu sebebdende her iki funksiyani hazirlayacam
function findProductTotalPriceWithDiscount(product) { // her hansisa product daxil olunmalidir,burada hansisa mehsulun qiymeti endirimle birge tapilir
    return product.salePrice * ((100 - product.discountPercentage) / 100);
}
// 1.5.2
function findProductsTotalDiscountPrice() { // mehsullarda endirimler umumi ne qeder mebleg olacagini tapan funksiya
    let totalDiscountPrice = 0;

    for (let i = 0; i < products.length; i++) {
        totalDiscountPrice += (products[i].salePrice * ((products[i].discountPercentage)/100) );
    }
    return totalDiscountPrice;
}

// 1.6
function sortProductsWhichDoesNotHaveDiscount(products){

    let sortedArray = [];

    for(let i = 0;i< products.length;i++){
        if(products[i].isDiscounted == false){
          sortedArray.push(products[i]); // endirim olmayan mehsullari array elave edirik
        }
    }
    sortedArray.sort(function (a, b) {
        return b.salePrice - a.salePrice;
    });
    return sortedArray;
}




