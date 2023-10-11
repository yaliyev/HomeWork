// task 1
let eded = Number(prompt("Eded daxil edin:"));

if (eded > 0) {
    if (eded % 2 == 0) {
        alert("positiv even");
    } else {
        alert("positive odd");
    }
} else {
    alert("negative number");
}
// task 2
let ayEdedi = Number(prompt("Ayin reqemini daxil edin:"));

switch (ayEdedi) {
    case 1:
        alert("January");
        break;
    case 2:
        alert("February");
        break;
    case 3:
        alert("March");
        break;
    case 4:
        alert("April");
        break;
    case 5:
        alert("May");
        break;

    case 6:
        alert("June");
        break;
    case 7:
        alert("July");
        break;
    case 8:
        alert("August");
        break;

    case 9:
        alert("September");
        break;
    case 10:
        alert("October");
        break;
    case 11:
        alert("November");
        break;
    case 12:
        alert("December");
        break;

    default:
        alert("invalid input");
}
//  task 3
let ayEdedi2 = Number(prompt("Ayin reqemini daxil edin:"));

switch (ayEdedi2) {
    case 1:
        alert("Winter");
        break;
    case 2:
        alert("Winter");
        break;
    case 3:
        alert("Spring");
        break;
    case 4:
        alert("Spring");
        break;
    case 5:
        alert("Spring");
        break;

    case 6:
        alert("Summer");
        break;
    case 7:
        alert("Summer");
        break;
    case 8:
        alert("Summer");
        break;

    case 9:
        alert("Autumn");
        break;
    case 10:
        alert("Autumn");
        break;
    case 11:
        alert("Autumn");
        break;
    case 12:
        alert("Winter");
        break;

    default:
        alert("invalid input");
}
//  task 4
let num1 = Number(prompt("1-ci reqemi daxil edin:"));
let num2 = Number(prompt("2-ci reqemi daxil edin:"));
let num3 = Number(prompt("3-cu reqemi daxil edin:"));

if(num1 === num2 && num2 === num3){
    alert("equals");
} else if(num1 > num2 && num1 > num3){
    alert(num1);
}
else if(num2 > num1 && num2 > num1){
    alert(num2);
}
else if(num3 > num1 && num3 > num2){
    alert(num3);
}

