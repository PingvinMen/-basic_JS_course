console.log( null > 0 );    // false
console.log( null < 0 );    // false
console.log( null == 0 );   // false
console.log( null === 0 );  // false
console.log( null != 0 );   // true
console.log( null !== 0 );  // true
console.log( null >= 0 );   // true
console.log( null <= 0 );   // true

alert("Урок 2\n" + "Задания 6: \n" + "В алгоритмах JS, во всех сравнениях приведенных примерах происходит сравнение конкретных объектов(), а именно \"ничего\" и \"0\". Интересный результат получается с 7 и 8 строкой. Он объясняется алгоритмом JS, где сказано: \n\"Если null < 0 принимает значение false, то null >= 0 принимает значение true\" \n ");