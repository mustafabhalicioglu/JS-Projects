// In this challenge, we gone use the "operator" function which is one of the HIGHER ORDER FUNCTIONS

function add(num1, num2){
    return num1 + num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function divide(num1, num2){
    return num1 / num2;
}
 function kalan (num1, num2){
    return num1 % num2;
 }

// Şimdi bunların hepsi için bir fonksiyon oluşturalım
function calculator (num1, num2, operator){
    return operator (num1, num2);
}

alert(calculator(5, 3, kalan))

// NOt: operator function kendisine kadar tanımlanan işlemleri tek bir komutla yapmanıza olanak tanıyor.