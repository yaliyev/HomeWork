console.log("task1")
for(let i = 10; i <= 99;i++){
    if(i % 10 === 7){ // % 10 sonuncu reqemi tapmaga imkan verir
       console.log(i);  
    }
}
console.log("task2");
for(let i = 10;i <= 99;i++){
    let sonuncuReqem = i % 10;
    let sonuncudanEvvelkiReqem  = ((i/10) - ((i/10) % 1))%10; // 10 a boluruk ki son reqem itsin,lakin kesr alinir.Kesride sonradan tam cevirib % 10 la son reqemini tapiriq
     if( sonuncuReqem ===  sonuncudanEvvelkiReqem ){ // sonuncudanEvvelkiReqem riyazi usulla tapmisam lakin Math.trunc() mumkun olardi.Calisiram maksimum az elave metod istifade edim))
         console.log(i);
     }
}
console.log("task3");
let ededTask3 = Number(prompt("TASK 3: Eded daxil edin"));
let setirCavabTask3 = "";

for(let i = 0;i <ededTask3.toString().length;i ++){
    let setireCevrilmisEded = ededTask3.toString();
    setirCavabTask3 += setireCevrilmisEded[i]+" "; 
}
console.log(setirCavabTask3);

console.log("task4");
let ededTask4 = Number(prompt("TASK 4: Eded daxil edin"));

ededTask4 = Math.trunc(ededTask4);

let maxTask4 = 0;

while(ededTask4!=0){
if(ededTask4 % 10 > maxTask4 ){
    maxTask4 = ededTask4 % 10;
}
   ededTask4 = Math.trunc( ededTask4 / 10);
}
console.log(`En boyuk reqem ${maxTask4}`);

console.log("task5");

let ededTask5 = Number(prompt("TASK 5: Eded daxil edin"));

let cemTask5 = 0;
let hasilTask5 = 1; // 0 yazsaq cavab hemise 0 olar
let edediOrtaTask5 = 0;
let reqemSayiTask5 = 0;

while(ededTask5 != 0){
    let sonuncuReqemTask5 = ededTask5 % 10;
    cemTask5 += sonuncuReqemTask5;
    hasilTask5 *= sonuncuReqemTask5;
    reqemSayiTask5++;

    ededTask5 = Math.trunc(ededTask5 / 10);

}
edediOrtaTask5 = cemTask5 / reqemSayiTask5;
console.log(cemTask5);
console.log(hasilTask5);
console.log(edediOrtaTask5);

console.log("task6");

let ededTask6 = Number(prompt("TASK 6: Eded daxil edin"));

for(let i = 1; i <= ededTask6;i++){
    if(ededTask6 % i === 0){
       console.log(i);
    }
 }


console.log("task7");
let ededTask7 = Number(prompt("TASK 7: Eded daxil edin"));

let bolenSayi = 0;

for(let i = 1; i <= ededTask7;i++){
   if(ededTask7 % i === 0){
    bolenSayi++;
   }
}
console.log(bolenSayi);

console.log("task8");

let arrayTask8 = [1,2,3,4,5,6];

for(let i = 0;i<arrayTask8.length;i++){
    if(arrayTask8[i] % 2 === 1){
        console.log("indeks: "+i);
    }
}

console.log("task9");

let arrayTask9 = [1,2,3,4,5,6];

for(let i = 0;i<arrayTask9.length;i++){
    if(i % 2 === 1){
        console.log(`tek indeksli element: ${arrayTask8[i]}`);
    }
}

console.log("task10");

let arrayTask10 = [4,6,10,3,7];

let maxTask10 = arrayTask10[0];

for(let i = 0;i<arrayTask10.length;i++){
    if(arrayTask10[i]> maxTask10){
        maxTask10 = arrayTask10[i];
    }
}
console.log(maxTask10);

console.log("task11");

let arrayTask11 = [4,5,11,6,7];

let maxTask11 = arrayTask11[0];

for(let i = 0;i<arrayTask11.length;i++){

    if(arrayTask11[i] % 2 == 0){
        if(arrayTask11[i]> maxTask11){
            maxTask11 = arrayTask11[i];
        }
    }
}
console.log(maxTask11);

console.log("task12");

let arrayTask12 = [4,5,11,2,7];
let minTask12 = Number.MAX_VALUE;
let minIndexTask12 = 0;
for(let i = 0; i < arrayTask12.length;i++){
  if(arrayTask12[i] < minTask12){
         minTask12 = arrayTask12[i];
         minIndexTask12 = i;
  }
}
console.log(minIndexTask12);

console.log("task13");
let arrayTask13 = [1,2,3,4,5];

let maxTask13 = arrayTask13[0];
let maxIndexTask13 = 0;

let minTask13 = Number.MAX_VALUE;
let minIndexTask13 = 0;

for(let i = 0; i < arrayTask13.length;i++){
    if(arrayTask13[i] > maxTask13){
        maxTask13 = arrayTask13[i];
        maxIndexTask13 = i;
    }
    if(arrayTask13[i] < minTask13){
        minTask13 = arrayTask13[i];
        minIndexTask13 = i;
    }
}
console.log(`Kohne massiv ${arrayTask13}`);
arrayTask13[minIndexTask13] = maxTask13;
arrayTask13[maxIndexTask13] = minTask13;
console.log(`Yeni massiv ${arrayTask13}`);

console.log("task14");

let arrayTask14 = [1, 2, 3, 4, 5, 6];

let maxTask14 = 0;
let maxIndexTask14 = 0;

let minTask14 = Number.MAX_VALUE; // burda qesdle js de en boyuk eded qeyd olunubki en azindan bir defe olsa bele for daxilinde ilk if ishlesin(min hal)
let minIndexTask14 = 0;

for (let i = 0; i < arrayTask14.length; i++) {
    if (arrayTask14[i] % 2 == 0) {
        if (arrayTask14[i] < minTask14) {
            minTask14 = arrayTask14[i];
            minIndexTask14 = i;
        }
    } else {
        if (arrayTask14[i] > maxTask14) {
            maxTask14 = arrayTask14[i];
            maxIndexTask14 = i;
        }
    }
}
console.log(`Kohne massiv ${arrayTask14}`);
arrayTask14[minIndexTask14] = maxTask14;
arrayTask14[maxIndexTask14] = minTask14;
console.log(`Yeni massiv ${arrayTask14}`);

console.log("task15 usul1");
let daxilOlunanEdedTask15 = Number(prompt("Ededi daxil edin:"));

let arrayTask15 = [1, 2, 3, 4, 5];

let movcuddur = false;

for (let i = 0; i < arrayTask15.length; i++) {
    if (daxilOlunanEdedTask15 === arrayTask15[i]) {
        movcuddur = true;
    }
}
console.log(`Ededin movcudlugu ${movcuddur}`);

console.log("task15 usul2");
let daxilOlunanEdedTask15Part2 = Number(prompt("Ededi daxil edin:"));

let arrayTask15Part2 = [1, 2, 3, 4, 5];

let movcuddur2 = false;

if (arrayTask15Part2.indexOf(daxilOlunanEdedTask15Part2) > -1) {
    movcuddur2 = true;
}
console.log(`Ededin movcudlugu ${movcuddur2}`);

console.log("task16");

let arrayTask16 = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];

let maxTask16 = 0;


let minTask16 = Number.MAX_VALUE;


let cem = 0;

for (let i = 0; i < arrayTask16.length; i++) {
    if (arrayTask16[i] % 2 == 0) {
        if (arrayTask16[i] < minTask16) {
            minTask16 = arrayTask16[i];
        }
    } else {
        if (arrayTask16[i] > maxTask16) {
            maxTask16 = arrayTask16[i];
        }
    }
}
for (let j = 0; j < arrayTask16.length; j++) {
    if ((arrayTask16[j] != maxTask16) && (arrayTask16[j] != minTask16)) {
        cem += arrayTask16[j];
    }
}
console.log(cem);

console.log("task17");

let arrayTask17 = [1, 2, 3, 4, true];

for (let i = 0; i < arrayTask17.length; i++) {
  if(arrayTask17[i] === true || arrayTask17[i] === false){
    if(i === 0 && arrayTask17.length > 1){ // element en bashda olarsa bu o demekdirki yalniz ozunden sonraki onun qonshusudur
        console.log(arrayTask17[i+1]);
    }else if(i === arrayTask17.length - 1 && arrayTask17.length > 1){ // // element en axirda olarsa bu o demekdirki yalniz ozunden evvelki onun qonshusudur
        console.log(arrayTask17[i-1]);
    }else if( i > 0 || i < arrayTask17.length - 1){ // element ortada olarsa
        console.log(arrayTask17[i-1]);
        console.log(arrayTask17[i+1]);
    }
  }
}

console.log("task18");

let arrayTask18 = ["salam dunya","zxcv lmkjkl nmb"];
let maxWordLength = 0;
let counterTask18 = 0;

for(let i = 0; i < arrayTask18.length;i++){
    let element = arrayTask18[i];
    for(let j = 0;j < element.length;j++){
        if(element[j] != ' '){    // bosluq simvolu olmazsa saymaga davam et
           counterTask18++;   
        }else{
            if(counterTask18 > maxWordLength){ // artan sayim maximum uzunluqlu sozu kecdise,yeni maximum reassign edilir
                maxWordLength = counterTask18;
            }
            counterTask18 = 0;
        }
        if(j === element.length - 1){ // umumi olaraq massiv elementinin sonuncu simvoludusa sayim sifirlanmalidir
            counterTask18 = 0;
        }
    }
}
console.log(maxWordLength);

console.log("task19");

let arrayTask19 = ["salam dunya", "zxcv LMKJKL nmb KL mort"];
let lastCheckPoint = 0;
let counter = 0;

for (let i = 0; i < arrayTask19.length; i++) {
    let element = arrayTask19[i];
    for (let j = 0; j < element.length; j++) {
        if (element[j] != ' ') {    
            counter++;
        } else {
            if(element.slice(lastCheckPoint,j).length > 0 && element.slice(lastCheckPoint,j) === element.slice(lastCheckPoint,j).toUpperCase()){
                // yuxaridaki kodun izahi: eger boyuk herfli sozun uzunlugu umumiyyetle olarsa, ifadeden kesinti formasinda alinan sozun butun herfleri boyuk olarsa ile beraberlik muqayisesi 
                console.log(`Butun herfleri boyuk olan soz: ${element.slice(lastCheckPoint,j)}`);
                console.log(`Indeks: ${lastCheckPoint}`); 
            }
            lastCheckPoint = j+1;
            counter = 0;
        }
        if (j === element.length - 1) { 
            counter = 0;
        }
    }
}

console.log("task20");

let arrayTask20 = ["salam dunya", "z LMKJKL","KL mort","mJBUz"];

let boyukHerflerCounter = 0;

for(let i = 0; i < arrayTask20.length;i++){
      let element = arrayTask20[i];

      for(let j = 0; j < element.length;j++){
        if(element[j] === element[j].toUpperCase() && element[j] != ' '){ // elementin herfi oz boyuk reqistrde olan formasina beraberdise ve en esasi herf bosluq deyilse(bosluq uppercase ile eynidi)
            boyukHerflerCounter++;
        }
        if(boyukHerflerCounter > 2){
            console.log(element);
            boyukHerflerCounter = 0;
            break;
        }
      }

}










