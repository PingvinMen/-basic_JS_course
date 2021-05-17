var basket = [
    {
        title: "товар 1",
        price: 100,
        quantity: 2
        //итог 200
    },
    {
        title: "товар 2",
        price: 50,
        quantity: 3
        //итог 150
    },
    {
        title: "товар 3",
        price: 300,
        quantity: 1
        //итог 300
    },
    {
        title: "товар 4",
        price: 200,
        quantity: 4
        //итог 800
    },
    //общтй итог 1450
];

function sumBasket(){
    var fistElements = 0, endElements = basket.length-1, priceForAll = 0;//первый элемент массива, крайний элемент массива, объявляем переменную для итога
    while(fistElements <= endElements){
        priceForAll += basket[fistElements].price * basket[fistElements].quantity;//умножаем сумму товаро на его колличество и присваиваем с прибавлением к перемеенной для итога
        fistElements++;
    }
    return priceForAll;// после всего цикла возвращаем результатт вычесления
}

alert("Урок 3\nЗадание 2:\nСумма всего что находится в корзине:\n" + sumBasket());