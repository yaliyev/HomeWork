enum VehicleType{
    Car,
    MotorCycle
}

enum EngineType{
    DOHC,
    SOHC,
    TURBO
}

let Capacity : '30' | '40' | '50' | '70' | '100';

interface IVehicle<T>{
   brandName:string,
   modelName:string,
   year:number,
   fuelCapacity:number,
   currentFuel: T,
   getInfo:()=>void,
   drive:(km:number)=>T
}



