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
