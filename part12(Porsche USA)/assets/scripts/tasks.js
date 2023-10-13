//task 1
let a = Number(prompt("TASK1:Eded daxil edin"));

if(a % 7 == 0){
    alert("7 ye bolunur")
}else{
    if(a % 7 > 3){
        a += 7 - (a % 7);
        alert(a);
    }else{
        a -= a % 7;
        alert(a);
    }
}
// task 2
let b = Number(prompt("TASK2:Eded daxil edin"));

let ededSayi = 0;

if(b < 50){
   for(let i=1;i<b;i++){ // diqqet: o edede qeder(hemin eded daxil deyil) Meselen: 12 (3,6,9) 
      if(i % 3 == 0){
        ededSayi++;
      }
   }
}else if(b >= 50 && b <= 100){
    for(let i=1;i<b;i++){
        if(i % 5 == 0){
            ededSayi++;
        }
     }
}else if(b > 100){
    for(let i=1;i<b;i++){
        if(i % 8 == 0){
            ededSayi++;
        }
     }
}

alert(`Eded sayi: ${ededSayi}`);

// task 3
let numbers = [1,4,2,6,8,1,7];

let maxEded = 0;

for(let i =0;i<numbers.length;i++){
    if(numbers[i] > maxEded){
        maxEded = numbers[i];
    }
}
alert(`TASK 3:En boyuk eded ${maxEded}`);

// task 4
let numbers2 = [1,4,2,6,8,2,1,7,7];

let dovrEdedler = [];


let tekrarlananEdedSayi = 0;
for(let i = 0; i < numbers2.length;i++){
    let hazirkiEded =numbers2[i];
    for(let j = 0;j<dovrEdedler.length;j++){  // eslinde bu emeliyyat rahatliqla indexOf la tapila biler
      let dovrEdedlerMassivindeElement =  dovrEdedler[j];  //(sadece elave metodlar qadagandir deyene bu yoldan istifade olunacaq)
      if(hazirkiEded == dovrEdedlerMassivindeElement){

          tekrarlananEdedSayi++;
      }
    } 

    dovrEdedler[i] = hazirkiEded;
}
alert(`TASK3: ${tekrarlananEdedSayi}`); 

// task 5

let numbers3 = [1, 4, 2, 6, 8, 2, 1, 7, 7];

let cem = 0;
let edediOrta = 0;

for (let i = 0; i < numbers3.length; i++) {
    cem += numbers3[i];
}
edediOrta = cem / numbers3.length;
alert(`Task 5: Ededi Orta = ${edediOrta}`);

// task 6

let names = ["Ali", "Vali", "Ahmad", "Muhammed", "Yusif"];

let uzunluquDorddenBoyukOlanElementSayi = 0;

for (let i = 0; i < names.length; i++) {
    if (names[i].length > 4) {
        uzunluquDorddenBoyukOlanElementSayi++;
    }
}
alert(`Task 6: uzunluquDorddenBoyukOlanElementSayi = ${uzunluquDorddenBoyukOlanElementSayi}`);

// task 7

let taskYeddinciEded = Number(prompt("TASK 7:Ededi daxil edin"));

let bolenSayi = 0;

for(let i = 1;i <= taskYeddinciEded;i++){
    if(taskYeddinciEded % i == 0){
        bolenSayi++;
    }
}
if(bolenSayi > 2){
    alert("Eded murekkebdir");
}else{
    alert("Eded sadedir");
}


