// Qeyd stockCount = hazirdaki stockda mehsul sayi,saleCount = satilmis mehsul sayi   stockCount + saleCount = ne qeder mehsul satisa cixarilib ededi
class Device {
    brand;
    model;
    screenSize;
    batteryLevel;
    #price = 10;
    salePrice = 10;
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

    DisplayDetails(){
        let deviceDetails = {};

        deviceDetails.brand = this.brand;
        deviceDetails.model = this.model;
        deviceDetails.screenSize = this.screenSize;

        return deviceDetails;
    }


}

let device1 = new Device("brand1", "model1", "1920 * 1080", 92, 80, 100, 0, 10, 10);

console.log(device1.calculateProfit());
console.log(device1.DisplayBatteryLevel());
device1.SellProduct(2);
console.log(device1.DisplayDetails());


