// task 1
let str1 = "HELLO_WORLD_TODAY_IS_A_GOOD_DAY";
str1 = str1.replaceAll("_", "-");

console.log(str1);

// task 2
let toLowerCaseArrow = (str) => {
    return str.toLowerCase();
}

console.log(toLowerCaseArrow(str1));

// task 3
((str) => {
    str = str.trim();
    console.log(str.split(""));
    return str.split("")
})("      AF103 is the best group ever.     ");


// task 4
let splitAndThenJoin = (str) => {
    str = str.toLowerCase();
    let arr = str.split(" ");
    return arr.join("-");
}
console.log(splitAndThenJoin("Robin Singh from USA"));

// task 5
function capitalizeString(str) {
    return str[0].toUpperCase() + str.slice(1);
}
console.log(capitalizeString("js string exercises"));


// task 6
((str) => {
    let bigLetterCounter = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase() && str[i] != ' ') {
            bigLetterCounter++;
        }
    }
    console.log(bigLetterCounter);
    return bigLetterCounter;
})("Hello World");

// task 7
let foundTextElements = (soz, cumle) => {
    let obj = {};
    let isFound = false;
    let index = -1;
    if (cumle.indexOf(soz) > -1) {
        isFound = true;
        index = cumle.indexOf(soz);
    }
    obj.isFound = isFound;
    obj.index = index;

    return obj;
}

console.log(foundTextElements("JavaScript", "HTML,CSS and JavaScript are Front end's components"));

// task 8
function Human(name, surname, birthYear, birthCity) {

    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
    this.birthCity = birthCity;

    this.getFullName = function () {
        return this.name + " " + this.surname;
    }
}

let human1 = new Human("name1", "surname1", 2000, "Baku");
let human2 = new Human("name2", "surname2", 2001, "Berlin");
let human3 = new Human("name3", "surname3", 2002, "Pyongyang");
let human4 = new Human("name4", "surname4", 2003, "Moscow");

let people = [human1, human2, human3, human4];

console.log("Bu massiv task8 global massividir.Asagidaki massivden istifade olunacaq");
console.log(people);

let searchHuman = (arr=people,search = "") => {
    search = prompt("Ad və ya soyad və ya tam olaraq Ad Soyad  daxil edin");
    let human = {};
    

    for (let i = 0; i < arr.length; i++) {
        let iterationHuman = arr[i];

        if(iterationHuman.name.indexOf(search) > -1 || iterationHuman.surname.indexOf(search) > -1 || iterationHuman.getFullName().indexOf(search) > -1) {
             human = iterationHuman;
        }
    }

    return human;

}
// bu funksiyada elaveler olacaq.Fikrimce sonuncu taskin sherti deqiq deyil. istenilen: searchByFullName() de  obyektleri massive sal,lakin searchHuman bir obyekt qayidir.Buna gorede ne qeder adam axtardigini elave edecem.Mentiqce fikirleshsek tekce say catishmir
// Burada men search by full name neche adam axtarmaq istediyini sorusacam ve o qeder searchHuman() icra olunub,obyektler massive salinib qaytarilacaq
let searchByFullName = () =>{ 
     let people = [];
     
     let howManyHumanDoYouWantToSearch = Number(prompt("Nece nefer axtarilacaq?"));

     if(howManyHumanDoYouWantToSearch != NaN && howManyHumanDoYouWantToSearch > -1){

        for(let i = 0; i < howManyHumanDoYouWantToSearch;i++){
            let human = searchHuman();
            people.push(human);
        }
        return people;

     }else{
        alert("Duzgun deyer daxil edin")
     }

    
}
console.log(searchHuman(people));  // ekrana cixacag prompt1
console.log(searchByFullName());   // ekrana cixacag prompt2