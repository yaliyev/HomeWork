
function detailedSumAnswer(func) {

    let response = "";

    let onlyForSumFunctionArguments = [];

    for (let i = 1; i < arguments.length; i++) {
        onlyForSumFunctionArguments.push(arguments[i]);
    }

    let sum = func(onlyForSumFunctionArguments);

    for (let i = 1; i < arguments.length; i++) {
        if (i != arguments.length - 1) {
            response += (arguments[i] + " + ");
        } else {
            response += (arguments[i] + " = ");
        }
    }
    response += sum;

    return response;
}

function sum(argumentsArr) {
    let sumResult = 0;
    for (let i = 0; i < argumentsArr.length; i++) {
        sumResult += argumentsArr[i];
    }
    return sumResult;
}

function objectConverter(func, funcArgument) {

    let doWhatYouWantIWillConvert = { "value": func(funcArgument) };
    return doWhatYouWantIWillConvert;
}
function objectConverterWithMultipleArguments(func, funcArguments = { "arguments": [] }) {
    let doWhatYouWantIWillConvert = { "value": func(funcArguments.arguments) };

    return doWhatYouWantIWillConvert;
}

function sayIt(func,whatToSay){
    console.log(func(whatToSay));
}
function nameByLetterSpaced(name){
    let result = name.split("").join(" ").toString();

    return result;
}


console.log(detailedSumAnswer(sum, 10, 20, 40));
console.log(objectConverter(Math.round, 10.6));
console.log(objectConverterWithMultipleArguments(function (arr) {
     return arr.filter((element) => {
         if (element > 65) {
             return element; 
            } 
        }) 
    }, { "arguments": [50, 80, 60, 70] }));

sayIt(nameByLetterSpaced,'YAGUB') ;

