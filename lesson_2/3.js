var a, b;

a = +prompt("Урок 2\n" + "Задания 3: \n" + "Введите произвольное значение для \"a\":");
b = +prompt("Урок 2\n" + "Задания 3: \n" + "Введите произвольное значение для \"b\":");

if(a>-1 & b>-1){
    alert(a - b);
}else if(a<=-1 && b<=-1){
    alert(a * b);
}else{
    alert(a + b);
}