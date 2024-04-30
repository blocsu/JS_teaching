'use strict';
//toString
//Способы преобразования в строковый тип
//1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

//2)
console.log(typeof(5 + ''));

const num = 5;
console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';


//toNumber
//1)
console.log(typeof(Number('4')));

//2)
console.log(typeof(+'5'));

//3)
console.log(typeof(parseInt('15px', 10)));
let answ = +prompt("Hello", "");


//toBoolean
//false - 0, '', null, undefined, NaN
//1)
let swicher = null;
if(swicher) {
    console.log('Working...');
}
swicher = 1;
if(swicher) {
    console.log('Working...2');
}

//2)
console.log(typeof(Boolean('4')));

//3)
console.log(typeof(!!'44444'));



