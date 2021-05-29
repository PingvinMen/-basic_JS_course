var sumPrice = 0, number = 0;

function addProduct(elem){
    //Получаем ID товара
    elem = elem.split('products').join('');
    //Получаем наименование товара по полученному выше ID
    var elementName = "productsName" + elem;
    elementName = document.getElementById(elementName);
    //Получаем цену товара по полученному выше ID
    var elementPrce = "productsPrice" + elem;
    elementPrce = document.getElementById(elementPrce);
    number++;//это для № по списку
    sumPrice += Number(elementPrce.innerText);//Увеличиваем сумму
    //запускаем функцию добавления с полученными выше данными
    newItemInCart(elementName.innerText, elementPrce.innerText);
};

function newItemInCart(name, price){
    //Добавляем товар в карзину
    var productInCart = document.createElement("li");
    productInCart.innerText = number + " - " + name + " - " + price;
    document.getElementById("basketProduct").appendChild(productInCart);
    //меняем значение 
    var totalCart = document.getElementById("sumMoney");
    totalCart.innerText = sumPrice;
};