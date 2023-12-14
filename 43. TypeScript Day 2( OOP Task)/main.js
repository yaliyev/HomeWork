"use strict";
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["Car"] = 0] = "Car";
    VehicleType[VehicleType["MotorCycle"] = 1] = "MotorCycle";
})(VehicleType || (VehicleType = {}));
var EngineType;
(function (EngineType) {
    EngineType[EngineType["DOHC"] = 0] = "DOHC";
    EngineType[EngineType["SOHC"] = 1] = "SOHC";
    EngineType[EngineType["TURBO"] = 2] = "TURBO";
})(EngineType || (EngineType = {}));
let Capacity;
class Car {
    constructor(brandname, modelname, year, fuelCapacity, currentFuel, milage, fuelFor1KM, engine) {
        this.vehicleType = VehicleType.Car; // onsuzda hemishe car dusecek,default deyerdi
        this.brandName = brandname;
        this._modelName = modelname;
        this._year = year;
        this._fuelCapacity = fuelCapacity;
        this._currentFuel = currentFuel;
        this._milage = milage;
        this._fuelFor1KM = fuelFor1KM;
        this.engine = engine;
    }
    get modelName() {
        return this._modelName;
    }
    get year() {
        return this._year;
    }
    get fuelCapacity() {
        return this._fuelCapacity;
    }
    get currentFuel() {
        return this._currentFuel;
    }
    get milage() {
        return this._milage;
    }
    get fuelFor1KM() {
        return this._fuelFor1KM;
    }
    getInfo() {
        console.log(this.brandName);
        console.log(this._modelName);
        console.log(this._year);
        console.log(this._fuelCapacity);
        console.log(this._currentFuel);
    }
    drive(km) {
        this._milage += km;
        this._currentFuel -= km;
        return this._currentFuel;
    }
}
class MotorCycle {
    constructor(brandname, modelname, year, fuelCapacity, currentFuel, milage, fuelFor1KM, engine) {
        this.vehicleType = VehicleType.MotorCycle;
        this.brandName = brandname;
        this._modelName = modelname;
        this._year = year;
        this._fuelCapacity = fuelCapacity;
        this._currentFuel = currentFuel;
        this._milage = milage;
        this._fuelFor1KM = fuelFor1KM;
        this.engine = engine;
    }
    get modelName() {
        return this._modelName;
    }
    get year() {
        return this._year;
    }
    get fuelCapacity() {
        return this._fuelCapacity;
    }
    get currentFuel() {
        return this._currentFuel;
    }
    get milage() {
        return this._milage;
    }
    get fuelFor1KM() {
        return this._fuelFor1KM;
    }
    getInfo() {
        console.log(this.brandName);
        console.log(this._modelName);
        console.log(this._year);
        console.log(this._fuelCapacity);
        console.log(this._currentFuel);
    }
    drive(km) {
        this._milage += km;
        this._currentFuel -= km;
        return this._currentFuel;
    }
    startEngine() {
        console.log(`Honda CBR600R's engine is now running`);
    }
}
let car = new Car('BMW', "M5", 2019, 100, 60, 10000, 10, EngineType.DOHC);
let motor = new MotorCycle('Harley Davidson', 'LV9', 2008, 70, 50, 5000, 6, EngineType.SOHC);
let carHeadingElement = document.querySelector("#car-name");
let motorHeadingElement = document.querySelector("#motor-name");
carHeadingElement.textContent = car.brandName + ' ' + car.modelName;
motorHeadingElement.textContent = motor.brandName + ' ' + motor.modelName;
