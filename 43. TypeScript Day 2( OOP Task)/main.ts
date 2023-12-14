enum VehicleType{
    Car,
    MotorCycle
}

enum EngineType{
    DOHC,
    SOHC,
    TURBO
}

let Capacity : 30 | 40 | 50 | 70 | 100;

interface IVehicle<T>{
   brandName:string;
   modelName:string;
   year:number;
   fuelCapacity:number;
   currentFuel: T;
   milage:number;
   fuelFor1KM:number;
   engine: EngineType;
   vehicleType: VehicleType;

   getInfo:()=>void;
   drive:(km:number)=>T
}

class Car implements IVehicle<number>{ 
    public brandName: string;
    private _modelName: string;
    private _year: number;
    private _fuelCapacity: number;
    private _currentFuel:number;
    private _milage:number;
    private _fuelFor1KM:number;
    
    vehicleType: VehicleType = VehicleType.Car; // onsuzda hemishe car dusecek,default deyerdi

    engine: EngineType;
    
    constructor(brandname:string,modelname:string,year:number,fuelCapacity:number,currentFuel:number,milage:number,fuelFor1KM:number,engine:EngineType){
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
    
    get year(){
        return this._year;
    }

    get fuelCapacity(){
        return this._fuelCapacity;
    }

    get currentFuel(){
        return this._currentFuel;
    }

    get milage(){
        return this._milage;
    }

    get fuelFor1KM(){
        return this._fuelFor1KM;
    }
    
    getInfo():void{
      console.log(this.brandName);
      console.log(this._modelName);
      console.log(this._year);
      console.log(this._fuelCapacity);
      console.log(this._currentFuel);
    }

    drive(km: number): number{
        this._milage += km;
        this._currentFuel -= km;

        return this._currentFuel;
    }

    
}

class MotorCycle implements IVehicle<number>{
    public brandName: string;
    private _modelName: string;
    private _year: number;
    private _fuelCapacity: number;
    private _currentFuel:number;
    private _milage:number;
    private _fuelFor1KM:number;

    vehicleType: VehicleType = VehicleType.MotorCycle;

    engine: EngineType;
    
    constructor(brandname:string,modelname:string,year:number,fuelCapacity:number,currentFuel:number,milage:number,fuelFor1KM:number,engine:EngineType){
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
    
    get year(){
        return this._year;
    }

    get fuelCapacity(){
        return this._fuelCapacity;
    }

    get currentFuel(){
        return this._currentFuel;
    }

    get milage(){
        return this._milage;
    }

    get fuelFor1KM(){
        return this._fuelFor1KM;
    }
    
    getInfo():void{
      console.log(this.brandName);
      console.log(this._modelName);
      console.log(this._year);
      console.log(this._fuelCapacity);
      console.log(this._currentFuel);
    }

    drive(km: number): number{
        this._milage += km;
        this._currentFuel -= km;

        return this._currentFuel;
    }

    startEngine():void{
        console.log(`Honda CBR600R's engine is now running`);
    }
}

let car = new Car('BMW',"M5",2019,100,60,10000,10,EngineType.DOHC);

let motor = new MotorCycle('Harley Davidson','LV9',2008,70,50,5000,6,EngineType.SOHC);

let carHeadingElement = document.querySelector<HTMLHeadingElement>("#car-name")!;

let motorHeadingElement = document.querySelector<HTMLHeadingElement>("#motor-name")!;





carHeadingElement.textContent = car.brandName + ' ' + car.modelName;

motorHeadingElement.textContent = motor.brandName + ' ' + motor.modelName;





