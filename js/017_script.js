"use strict";

const str = "text";

console.log(str.length);//длина строки
console.log(str[2] = 'd');//ОШИБКА-не изменит строку
console.log(str);//text

const fruit = "Some fruit";
//индекс искомых символов, если нет то -1
console.log(fruit.indexOf("f"));//5

const logg = "Hello World";
//указывается с какого до какого символа вывести срез. Если указать оду цифру срез будет с неё и до конца. Поддерживает отрицательные значения
console.log(logg.slice(6, 11));//World
//Альтернатива slice - указывается с какого до какого символа вывести срез. Но НЕ Поддерживает отрицательные значения
console.log(logg.substring(6, 11));//World
//с какого симфола и сколько срезать
console.log(logg.substr(6, 5));//World

const num = 12.2;
//Округляет до ближайшего целого 
console.log(Math.round(num));//12

const test = "12.2px";
//метод извлекающий только число
console.log(parseInt(test));//12
//тоже самое только с плавающей точкой
console.log(parseFloat(test));//12,2

