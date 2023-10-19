let currentDate = new Date(); // hal hazirki tarix

let currentYear = currentDate.getFullYear(); // il
let currentMonth =  currentDate.getMonth(); // ay(index 0 dan baslayir)
let currentDay = currentDate.getDay(); // gun index 0 dan baslayir(bazar gunu ilk gun)
let currentHour = currentDate.getHours(); // saat
let currentMinute = currentDate.getMinutes(); // deqiqe
let currentSecond = currentDate.getSeconds(); // saniye

let currentTime = currentDate.getTime();  // millisaniyeler(1970-ci ilden hesablayaraq)

console.log(`Il: ${currentYear}`);
console.log(`Ay: ${currentMonth}`);
console.log(`Heftenin gunu: ${currentDay}`);
console.log(`Saat: ${currentHour}`);
console.log(`Deqiqe: ${currentMinute}`);
console.log(`Saniye: ${currentSecond}`);

// moment.js

let testDate = moment(currentDate).format('MMMM Do YYYY, h:mm:ss a');

console.log(testDate);
console.log(`AF103 started its journey with 2 magnificent instructors ${moment("20230925", "YYYYMMDD").fromNow()} `); 
console.log(` ${moment().add(9, 'days').calendar()} is my IELTS exam`);
console.log(`${moment().calendar()} Instructor is checking my homework.`);