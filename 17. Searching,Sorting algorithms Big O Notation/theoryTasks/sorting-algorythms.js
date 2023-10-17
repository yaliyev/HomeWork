console.log('------SORTING ALGORYTHMS----');

let nums2 = [10, 50, 60, 40, 20, 80, 30];

// my Custom Sort algorythm
//(Muellim dersde bu kodu deyirdim,hemise istifade edirem.Ishe qebul olanda interview bunu sorusmusdular menden,tapmisdim)


// ishleme mentiqi
// [10, 50, 60, 40, 20, 80, 30]
// array[i] = 10 da START  50(pass) 60(pass) 40(pass) 20(pass) 80(pass) 30(pass)
// [10, 50, 60, 40, 20, 80, 30]
// array[i] = 50 da START 60(pass) 40 dan boyukdur(YERDEYISME)
// [10,40,60,50] yerlerini deyishdik
// array[i] = 40 de START (60,50.. pass) 20 den boyukdur(YERDEYISME)
// [10,20,60,50,40...] (bu formada yerdeyismeler tam siralanana qeder davam edir,eger j nin boyuk olacagi eded yoxdusa yerdeyisme olmadan i+1 edir)


function customSortByYaqub(array) {

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let saver = array[i]; // eger saver saxlamasaq array[i] deyeri itecek.Bu sebebden reassign evvel saver saxlayiriq    
                array[i] = array[j];

                array[j] = saver;
            }
        }
    }

    return array;
}

console.log(customSortByYaqub(nums2));