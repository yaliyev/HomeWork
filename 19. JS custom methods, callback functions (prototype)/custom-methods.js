String.prototype.isBlank = function () {
    let result = (this[0] === ' ');
    for (let i = 1; i < this.length; i++) {
        if (this[i] != ' ') {
            result = false;
            break;
        }
    }
    return result;
}

String.prototype.wavy = function () {
    let result = "";
    for (let i = 0; i < this.length; i++) {
        if (i % 2 == 0) {
            result += this[i].toLowerCase();
        } else {
            result += this[i].toUpperCase();
        }
    }
    return result;
}

Array.prototype.min = function () {
    let minElement = Number.MAX_VALUE;

    for (let i = 0; i < this.length; i++) {
        if (minElement > this[i]) {
            minElement = this[i];
        }
    }
    return minElement;
}

Array.prototype.max = function () {
    let maxElement = Number.MIN_VALUE;

    for (let i = 0; i < this.length; i++) {
        if (maxElement < this[i]) {
            maxElement = this[i];
        }
    }
    return maxElement;
}

Array.prototype.numbers = function () {
    let elementCount = 0;
    for (let i = 0; i < this.length; i++) {
        if (typeof this[i] == 'number') {
            elementCount++;
        }
    }
    return elementCount;
}

Array.prototype.myFind = function (value) {
    let exist = false;

    for (let i = 0; i < this.length; i++) {
        if (this[i] === value) {
            exist = true;
            break;
        }
    }
    return exist;
}

Array.prototype.myFindAll = function (value) {
    let exist = false;
    let elementCount = -1;

    for (let i = 0; i < this.length; i++) {
        if (this[i] === value) {
            if (elementCount === -1) {
                elementCount = 0;
                exist = true;
            }
            elementCount++;
        }
    }
    return elementCount;
}

Array.prototype.myFilter = function (min, max) {
    let newArr = [];
    let count = 0;

    if (max > min) { // elave kod(mentiqi olaraq bele olmalidir)

        // elave metodlar qadagan olduguna gore,push istifade etmek evezine count vasitesile indeksleme usulu ile massivi dolduracayiq
        for (let i = min; i < max; i++) {
            newArr[count] = this[i];
            count++;
        }

    }



    return newArr;

}

Array.prototype.myIndexOf = function (value){
    let index = -1;

    for(let i = 0; i < this.length;i++){
        if(this[i] === value ){
            index = i;
            break; // niyede axra kimi davam elesin? Elnur muellim oyredib bu usulu(zamana gore tez bitir for dovru).Best Case prinsiplerinden biridir.
        }
    }
    return index;
} 

Array.prototype.myLastIndexOf = function (value){
    let index = -1;

    for(let i = this.length - 1; i >= 0;i--){
        if(this[i] === value ){
            index = i;
            break; 
        }
    }
    return index;
}


// testing methods

console.log('----task1----');
console.log(''.isBlank());
console.log(' '.isBlank());
console.log('    '.isBlank());
console.log('    z '.isBlank());
console.log('----task2----');
console.log('salam'.wavy());

let numArr = [10, 5, 6, 7, 2, 20];

let arr = [1, "salam", 2, 7, true, 12, false];

console.log('----task3----');
console.log(numArr.min());
console.log(numArr.max());
console.log('----task4----');
console.log(arr.numbers());
console.log('----task5----');
console.log(arr.myFind("salam"));
console.log('----task6----');
console.log([5, 10, 20, 10].myFindAll(10));
console.log('----task7----');
console.log([10, 20, 30, 40, 50].myFilter(1, 3)); // burada 2 element qayidacaq,taskin shertlerinde arr.myFilter(3,8) -> 4 elementli massiv qaytarirdi.Bu sebebden min elementi daxildir,max daxil deyil(max qeder nezere alinir)
console.log('----task8----');
console.log([10,20,30,40].myIndexOf(20));
console.log('----task9----');
console.log([10,20,30,20,30,40].myLastIndexOf(20));
