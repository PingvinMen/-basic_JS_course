function addition(a,b){
    return a+b;
}

function subtraction(a,b){
    return a-b;
}

function division(a,b){
    return a*b;
}

function multiplication(a,b){
    return a/b;
}

var firstValue=12, secondValue=3;

alert("Заданиеa 5: \n" + "Результат функции сложеня: " + addition(firstValue,secondValue) + "\n"
    + "Результат функции вычитания: " + subtraction(firstValue,secondValue) + "\n"
    + "Результат функции умножения: " + division(firstValue,secondValue) + "\n"
    + "Результат функции деления: " + multiplication(firstValue,secondValue));