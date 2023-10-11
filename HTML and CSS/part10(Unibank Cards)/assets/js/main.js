
console.log(a); // undefined 

var a = 10;
let b = 7;

{
    console.log(a);// var deyiseni qlobaldir(blok tesir etmir)    
    console.log(b); // let local olsada ozu,burada blokdan kenar verilib isleyecek 
}



console.log(a); // gorur

var c = 14;
var c = 20; // redeclare

c = 25; // reassign

let d = 40;

let d = 50; // redeclare qadagandir

d = 60; // reassign mumkundur

const z = 60;  // z-ni deyisdirmek artiq alinmayacaq

const z = 40; // redeclare qadagandir


z = 50; // let-den ferqli olaraq reassign da qadagandir



let e = 10;

e = e + 2 // 12(longhand)

e += 2 // 14(shorthand)

e = 4 // 4(assign)









