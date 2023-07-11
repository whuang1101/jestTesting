const { off } = require("process");

function capitalize(phrase){
    let newPhrase = "";
    for(let i = 0; i < phrase.length; i++){
        if(i === 0 ){
            newPhrase += phrase[i].toUpperCase();
        }
        else{
            newPhrase += phrase[i];
        }
    }
    return newPhrase
}
function reverseString(phrase){
    let newPhrase = "";
    for(let i = phrase.length-1; i >-1; i--){
        newPhrase += phrase[i];
    }
    return newPhrase
}
class Calculator{
    constructor(){

    }
    add(number1,number2){
        return number1 + number2;
    }
    subtract(number1,number2){
        return number1 - number2;
    }
    multiply(number1,number2){
        return number1 * number2;
    }
    divide(number1,number2){
        return number1 / number2
    }
}
function caesarCipher(string,offset){
    let crypticText = "";
    for(let i = 0; i < string.length; i ++){
        const originalCharCode = string.charCodeAt(i);
        let shiftedCharCode = originalCharCode + offset;
        if(((originalCharCode>= 65) && (originalCharCode <= 90)) || ((originalCharCode>= 97) && (originalCharCode <= 122))){
            if((originalCharCode>= 65) && (originalCharCode <= 90)){
                if(shiftedCharCode> 90){
                    shiftedCharCode = shiftedCharCode - 91+ 65;
                    crypticText += String.fromCharCode(shiftedCharCode);
                }
                else if(shiftedCharCode< 65){
                    shiftedCharCode = shiftedCharCode + 91 - 65;
                    crypticText += String.fromCharCode(shiftedCharCode);
                }
                else{
                    crypticText += String.fromCharCode(shiftedCharCode);
                }
            }
            if((originalCharCode>= 97) && (originalCharCode <= 122)){
                if(shiftedCharCode> 122){
                    shiftedCharCode = shiftedCharCode - 123+ 97;
                    crypticText += String.fromCharCode(shiftedCharCode);
                }
                else if(shiftedCharCode< 97){
                    shiftedCharCode = shiftedCharCode + 123 - 97;
                    crypticText += String.fromCharCode(shiftedCharCode);
                }
                else{
                    crypticText += String.fromCharCode(shiftedCharCode);
                }
            }
        }
        else{

            crypticText += string[i];
        }
    }
    return crypticText

}
function analyzeArray(array) {
    const arrayStats = {
        average: 0,
        min: Infinity,
        max: -Infinity,
        length: 0
    }

    for(let i = 0; i < array.length; i ++){
        arrayStats.length += 1;
        if(array[i] < arrayStats.min){
            arrayStats.min = array[i];
        }
        if(array[i] > arrayStats.max){
            arrayStats.max = array[i];
        }
        arrayStats.average += array[i];
    }
    arrayStats.average = arrayStats.average/array.length;
    return arrayStats;
}
module.exports = {
    capitalize,
    reverseString,
    Calculator,
    caesarCipher,
    analyzeArray
}