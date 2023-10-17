console.log('------STRING METHODS PRACTICE----');

let str = "Hello World";

console.log(str.length); // uzunluq
console.log(str.charAt(1)); // e simvolu(istenilen char deyerini tapir) alternativ = stringin massiv indeksi ile herf axtarisi
console.log(str.charCodeAt(1)); // e simvolunun unicode deyeri
console.log(str.concat(" and Bye World")); // stringleri birlesdirerek yeni string qaytarir
console.log(str.endsWith("ld")); // boolean tipinde deyeri qaytarib,sonu hemin stringle biteceyini mueyyenlesdirir
console.log(String.fromCharCode(115,97,108,97,109)); // unicode deyerini daxil etmekle string aliriq
console.log(str.includes("W")); // her hansisa deyer varmi stringde(boolean)
console.log(str.indexOf("o")); // daxil olunan string hissesinin ilk herfinin umumi stringde necenci indeksde oldugunu qaytarir.  "salam".indexOf('m') --> 4
console.log(str.indexOf("o")); // eyni ile yuxaridaki yazi sadece elave olaraq sonuncu emeliyyatdan qayidan indeksi nezere alir,ilk gorduyunu yox
console.log(str.match("[A-z]+")); // regular expression vasitesile stringin qeyd olunan formata uygun olub olmamasi(boolean)
console.log(str.matchAll("[A-z]+")); // yuxaridaki metod bir oxsarliqla boolean cavabini tapirdisa,burada butun regex oxsarliqlari nezere alinacaq
console.log(str.repeat(2)); // tekrarlanma sayina gore join edib stringleri ve yeni string qaytarir
console.log(str.replace("Hello","Bye")); // mueyyen string kesiyini taparaq onun yerine qeyd olunani salir ve yeni string qaytarir
console.log(str.replaceAll("o","LETTERCUT")); // yuxaridaki metod sadece burada replace emeliyyati butun string hisselerine uygun icra edilir,1 defe yox
console.log(str.search("o")); // eyni ile indexOf() metodu lakin regular expressions burada ishletmek mumkundur
console.log(str.slice(0,5)); // stringi hisseye ayirmaq ucun istifade edilir
console.log(str.split(" ")); // her hansisa string hissesine gore stringi bir nece parcalara ayirib,massive push edib,massivi qaytarir
console.log(str.startsWith("Hell")); // string bu hisse ile baslayirmi?(boolean)
console.log(str.toLowerCase()); // butun stringi kicik reqistrde(kicik herfler) edir
console.log(str.toUpperCase()); // butun stringi boyuk reqistrde(boyuk herfler) edir
console.log(str.trim()); // kenar bosluqlari silir ve yeni string qaytarir(sol ve sag bosluqlar)
console.log(str.trimStart()); // yalniz sol bosluqlari silir
console.log(str.trimEnd()); // yalniz sag bosluqlari silir
console.log(str.padStart(15,"1")); // uzunlugu mueyyen hedde catdirmaq ucun stringin evveline elave oluna bilecek simvollar  
console.log(str.padEnd(15,"1")); // yuxaridaki metod sadece stringin sonuna elave edir
console.log(str.localeCompare("Hello")); // dil settingslerine gore stringlerin muqayisesi(-1,0,1) cavablari alir.Geride,eyni,ondedir
console.log(str.normalize("NFD")); // Unicode text formasinda formatlandirir,yeni string qaytarir
console.log(str.valueOf()); // obyekti bir basa string primitiv tipine cevirmeye imkan verir
console.log(String.raw`Hello \n World`); // escape characterleri nezere almadan stringi geri qaytarir
console.log("Hello \n World"); // burada Hello ve yeni setirde World yazisi olmali idi