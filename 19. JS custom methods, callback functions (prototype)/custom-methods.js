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
