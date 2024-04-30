
"use strict";

const options = {
    name: 'test',
    wedth: 500,
    height: 1024,
    color: {
        border: 'red',
        bg: 'black'
    },
    makeTest: function () {
        console.log('Test');
    }
};

for(let key in options) {
    if(typeof(options[key]) == 'object') {
        for(let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    }else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }    
}

//Деструктуризация объектов
const {border, bg} = options.color;
console.log(border, bg);//red black

options.makeTest();

//перебор объекта с помощью метода
console.log(Object.keys(options).length);//5

