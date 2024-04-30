"use strict";

let num = 20; 
//DICLARATION-создается до начала выполнения скрипта, можновызвать перед объявлением
function ShowFirstMessage(text) {
    console.log(text);
    console.log(num);  
}

ShowFirstMessage('Hallo World!');
console.log(num);

function calc(a, b) {
    return a + b;//возвращет результат и выходит из функции
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

function ret() {
    let num = 50;//локальная переменная внутри функции, глобальная НЕ изменяется

    //...

    return num;
}

//FUNCTION EXPRETION-создается только тогда, когда доходит поток кода, можно вызвать только после объявления
const anotheNumber = ret();
console.log(anotheNumber);
console.log(num);

const logger = function() {
    console.log('Hello');
};

logger();//Hello

// СТРЕЛОЧНАЯ ФУНКЦИЯ-не имеет своего контекста this
const calcul = (a, b) => {
    console.log('1');
    return a + b;
};
//упрощенная форма записи  если одна сторочка const calcul = (a, b) => a + b;