// Qeyd: stockCount = hazirdaki stockda mehsul sayi,saleCount = satilmis mehsul sayi   stockCount + saleCount = ne qeder mehsul satisa cixarilib ededi
class Device {
    brand;
    model;
    screenSize;
    batteryLevel;
    #price;
    salePrice;
    discountPercentage;
    constructor(brand, model, screenSize, batteryLevel, price, salePrice, discountPercentage, saleCount = 0, stockCount) {
        if (salePrice > price) {
            this.brand = brand;
            this.model = model;
            this.screenSize = screenSize;
            this.batteryLevel = batteryLevel;
            this.#price = price;
            this.salePrice = salePrice - ((discountPercentage * salePrice) / 100);
            this.discountPercentage = discountPercentage;
            this.saleCount = saleCount;
            this.stockCount = stockCount;
        } else {
            alert("Satış qiyməti maya qiymətindən böyük olmalıdır");
        }

    }

    // sadece satisin mayadan ferqli olaraq ustunluk gelirini hesablayan metod(hazirki satis sayina gore)
    get profit() {
        return ((this.salePrice - this.#price) * this.saleCount);
    }




    // xeyiri ve ziyani hesablayan metod
    calculateProfit() { // burada umumi budce ferqini hesablayiriq. Meselen 20 dene 80 azn aldi(maya deyeri) -> 1600 . 10 nu 100den satib(1000)  -600 hele ziyandadi
        return (this.salePrice * this.saleCount) - (this.#price * (this.stockCount + this.saleCount)); // this.stockCount+this.saleCount = umumi satisa cixma sayi
    }

    DisplayBatteryLevel() {
        return this.batteryLevel;
    }

    SellProduct(howManyProductsDoYouIntendToSell = 0) {
        if (howManyProductsDoYouIntendToSell == 0) {
            alert("Nece mehsul satilacagini duzgun qeyd edin");
        } else {
            if (this.stockCount >= howManyProductsDoYouIntendToSell) {
                this.stockCount -= howManyProductsDoYouIntendToSell;
                this.saleCount += howManyProductsDoYouIntendToSell;

                console.log(`Hazirda stockda mehsullarin sayi ${this.stockCount}`);
                console.log(`Hazirda satilmis mehsullarin sayi ${this.saleCount}`);
            } else {
                alert("Qeyd etdiyiniz qeder mehsul stockda yoxdur");
            }
        }

    }

    DisplayDetails() {
        let deviceDetails = {};

        deviceDetails.brand = this.brand;
        deviceDetails.model = this.model;
        deviceDetails.screenSize = this.screenSize;

        return deviceDetails;
    }


}

class Phone extends Device {
    isSmart;
    ring;

    constructor(brand, model, screenSize, batteryLevel, price, salePrice, discountPercentage, saleCount = 0, stockCount,isSmart = false, ring = "ring ring") {
        super(brand, model, screenSize, batteryLevel, price, salePrice, discountPercentage, saleCount, stockCount);
        this.isSmart = isSmart;
        this.ring = ring;
    }

    DisplayDetails() {
        let deviceDetails = super.DisplayDetails(); // miras aldigi classdaki displayDetails metodu ishlenilir ve asagidaki kod isleyecek
        deviceDetails.isSmart = this.isSmart;

        return deviceDetails;
    }

    Ring(){
        console.log(this.ring);
    }
}

class Laptop extends Device{
    isRGBKeyboard;
    OperatingSystem;

    constructor(brand, model, screenSize, batteryLevel, price, salePrice, discountPercentage, saleCount = 0, stockCount,isRGBKeyboard,OperatingSystem) {
        super(brand, model, screenSize, batteryLevel, price, salePrice, discountPercentage, saleCount, stockCount);
        this.isRGBKeyboard = isRGBKeyboard;
        this.OperatingSystem = OperatingSystem;
    }

    DisplayDetails() {
        let deviceDetails = super.DisplayDetails(); 
        deviceDetails.isRGBKeyboard = this.isRGBKeyboard;

        return deviceDetails;
    }


}

// global functions(additional tasks related to oop)

let filterByPrice = (array,price) =>{
    return array.filter( (product) =>product.salePrice > price);
}

let filterByName = (array,name) =>{
    return array.filter( (product) => product.brand === name ).length;
}

let GetTotalProfit = (array) =>{
    let totalProfit = 0;
    array.forEach( (product) => totalProfit += product.profit );

    return totalProfit;
}

let filterByOperatingSystem = (operatingSystem,sourceArr) => {
     return sourceArr.filter( (product)=> (Object.getPrototypeOf(product) === Object.getPrototypeOf(laptop1))&&(product.OperatingSystem === operatingSystem)); // eger obyektin prototipi bundan evvel qurulan laptop obyektinin prototipi ile eynidirse(yeni laptopdursa umumilikde)
     //  ve laptop emeliyyat sistemi parametrde qeyd olunan emeliyyat sistemi ile eynidirse onu arr salib qaytaracaq
}

let device1 = new Device("brand1", "model1", "1920 * 1080", 92, 80, 100, 0, 10, 10);

console.log(device1.calculateProfit());
console.log(device1.DisplayBatteryLevel());
device1.SellProduct(2);
console.log(device1.DisplayDetails());

let phone1 = new Phone("Apple", "Iphone 12", "394 * 844", 90, 1400, 1700, 0, 10, 10,true);
let phone2 = new Phone("Samsung", "S20 Ultra", "412 * 915", 90, 1500, 1850, 0, 10, 10,true);
phone1.Ring();
let laptop1 = new Laptop("Acer", "Aspire", "1920 * 1080", 55, 1200, 1400, 0, 10, 10,true,"Windows 10");

console.log(phone1.DisplayDetails());

console.log(laptop1.DisplayDetails());


let products = [phone1,phone2,laptop1];

console.log(filterByPrice(products,1500)); // products 3 product olsada,bu filter funksiyasindan ikisi kecdi
console.log(filterByName(products,"Samsung")); // Samsung name 1 productda olduguna gore cavab 1 olacaq
console.log(GetTotalProfit(products)); // her productun profiti deyishene elave olunur ve sonda deyishen qaytarilir
console.log(filterByOperatingSystem("Windows 10",products)); // laptop emeliyyat sistemi parametrde qeyd olunan emeliyyat sistemi ile eynidirse onu arr salib qaytaracaq









