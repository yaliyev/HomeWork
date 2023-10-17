
let nums = [10, 50, 60, 40, 20, 80, 30];

let sortedNums = Object.create(nums);

sortedNums = sortedNums.sort();

// search algorythms

// ozumden custom linear search funksiyasi hazirladim
function customLinearSearch(num, arr) {
    let index = null;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        if (element === num) {
            index = i;
            break;
        }

    }
    return index;
}
//console.log(customLinearSearch(40,nums)); // 3 indeks qaytarilir


// ozumden binary search qurmaq mohtesem idea idi.if lerle sonunda neticeye gedib cixmaq olur.Asagida qurulan funksiya staticdir.Saat yarim vaxtim getsede bu funksiyani beyinde fikirlesmek cox qabaga apardi meni.Tesekkurler
function customBinarySearchStatic(num, arr) {
    arr = arr.sort(); // binary Search mutleq siralamq lazimdi

    //[10,20,30,40,50,60,80]
    let yoxlanilanIndeks = Math.round(arr.length / 2) - 1;
    // console.log("yariya bolunme emeliyyati ilk merhele"+yoxlanilanIndeks);
    if (num > arr[yoxlanilanIndeks]) {
        yoxlanilanIndeks = yoxlanilanIndeks + Math.round((arr.length - (yoxlanilanIndeks + 1)) / 2);
        // console.log("yariya bolunme emeliyyati ikinci merhele ust qat"+yoxlanilanIndeks);
        if (num > arr[yoxlanilanIndeks]) {
            console.log(yoxlanilanIndeks + 1);
        }else if(num == arr[yoxlanilanIndeks]){
            console.log(yoxlanilanIndeks);
        } else {
            console.log(yoxlanilanIndeks - 1);
        }
    }else if(num == arr[yoxlanilanIndeks]){
        console.log(yoxlanilanIndeks);
    } 
    else {
        yoxlanilanIndeks = Math.round(yoxlanilanIndeks / 2) - 1;
        // console.log(yoxlanilanIndeks);
        if (num > arr[yoxlanilanIndeks]) {
            // eger evvelki indeksle indiki arasinda ferq 2 dise qonsu ededdir
            console.log(yoxlanilanIndeks + 1);
        } else if (num == arr[yoxlanilanIndeks]) {
            console.log(yoxlanilanIndeks);
        }
        else {
            console.log(yoxlanilanIndeks - 1);
        }
    }

};
customBinarySearchStatic(10,nums); // 0
customBinarySearchStatic(20,nums); // 1 
customBinarySearchStatic(30,nums); // 2
customBinarySearchStatic(40,nums); // 3
customBinarySearchStatic(50,nums); // 4
customBinarySearchStatic(60,nums); // 5 
customBinarySearchStatic(80,nums); // 6
