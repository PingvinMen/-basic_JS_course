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
    if(b==0){
        return ("На ноль делить нельзя");
    }else{
        return a/b;
    }
}

var firstValue, secondValue;

firstValue = +prompt("Урок 2\n" + "Задания 5: \n" + "Введите произвольное значение для \"a\":");
secondValue = +prompt("Урок 2\n" + "Задания 5: \n" + "Введите произвольное значение для \"b\":");

alert("Урок 2\n" + "Заданиеa 5: \n" + "Результат функции сложеня: " + addition(firstValue,secondValue) + "\n"
    + "Результат функции вычитания: " + subtraction(firstValue,secondValue) + "\n"
    + "Результат функции умножения: " + division(firstValue,secondValue) + "\n"
    + "Результат функции деления: " + multiplication(firstValue,secondValue));