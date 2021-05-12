function mathOperation(arg1, arg2, operation){
    switch(operation){
        case "+":
            return arg1 + arg2;
        case "-":
            return arg1 - arg2;
        case "*":
            return arg1 * arg2;
        case "/":
            if(arg2==0){
                return "Ошибка!\n На 0 делить нельзя.";
            }else{
                return arg1 / arg2;
            }
    }
}

var firstValue, secondValue, mathematicalSymbol;

firstValue = +prompt("Урок 2\n" + "Задания 6: \n" + "Введите произвольное значение для \"a\":");
mathematicalSymbol = prompt("Урок 2\n" + "Задания 6: \n" + "Введите математический символ(\"+\", \"-\", \"*\" или \"/\"):");
secondValue = +prompt("Урок 2\n" + "Задания 6: \n" + "Введите произвольное значение для \"b\":");

alert("Урок 2\n" + "Задания 6: \n" + firstValue + mathematicalSymbol + secondValue + "=" + mathOperation(firstValue, secondValue, mathematicalSymbol));