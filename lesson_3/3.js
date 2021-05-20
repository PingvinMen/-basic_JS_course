var basket = [
    {
        id: 392384,
        title: "товар 1",
        price: 100,
        quantity: 2
    },
    {
        id: 674893,
        title: "товар 2",
        price: 50,
        quantity: 3
    },
    {
        id: 767586,
        title: "товар 3",
        price: 300,
        quantity: 1
    },
    {
        id: 149203,
        title: "товар 4",
        price: 200,
        quantity: 4
    },
    //общтй итог 1450
];

function countBasketPrice(){//Здесь тоже самое что и во 2-ом задании, только название функции изменено
    var fistElements = 0, endElements = basket.length-1, priceForAll = 0;
    while(fistElements <= endElements){
        priceForAll += basket[fistElements].price * basket[fistElements].quantity;
        fistElements++;
    }
    return priceForAll;
}

alert("Урок 3\nЗадание 3:\nЯ может что то не понимаю, но это задание похоже на 2.\nПоэтому я добавил id товара.\nСумма всего что находится в корзине:\n" + countBasketPrice());