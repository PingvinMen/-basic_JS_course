alert("Урок 4\nЗадание 1:\nРезультат в консоли.");

function Num(num){
    num = String(num);
    arrNum = num.split('').reverse();


for(var i=0; i <= 2; i++){
    if (arrNum[i] === undefined){
        arrNum[i] = 0
    };
};
    this.unit = arrNum[0];
    this.dozen = arrNum[1];
    this.hundred = arrNum[2];

    this.show = function(){
        console.log(num + " - " + this.unit + " единиц(а/ы), " + this.dozen + " десят(ок/ка/ов): " + this.hundred + " сот(ня/ни/ин)");
    };
};

var num = Array();
for(var i = 1; i <= 999; i++){
    num.push(new Num(i));
};

for(var item of num){
    item.show();
};