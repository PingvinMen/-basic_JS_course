function power(val, pow){
   
    if(pow == 1){
        return val;
    }

    if(pow == 0){
        return 1;
    }

    var resoult = val;//для циклов while и for

    /*циклом while
    pow -= 1;

    while (pow) {
        resoult *= val;
        pow--;
    }

    return resoult;
*/

/*циклом for
    for (let i = 1; i < pow; i++) {
        resoult *= val;
    }

    return resoult;
*/
    return val * power(val, pow-1);//Рекурсия и стек

}

alert(power(2,5));  //32