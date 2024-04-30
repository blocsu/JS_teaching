function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback(); //вызовется после действий выше
}

function done() {
    console.log('Я прошел этот урок');
}

learnJS('Java Script', done);//Я учу: Java Script; Я прошел этот урок

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
// const {border, bg} = options.color;
// console.log(border, bg);
// options.makeTest();
// console.log(Object.keys(options).length);

// const arr = [1,2,3,4,5,6,7,8];

// arr.pop();
// arr.push(10);
// console.log(arr);

// for (let value of arr) {
//     console.log(value);
// }
// const arr = [1,2,3,4,5,6,7,8];
// // arr[99] = 0;
// // console.log(arr.length);
// // console.log(arr);

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} элементы массиа ${arr}`);
// });

// const q = {
//     one: 1,
//     two: 2
// };
// const newObj = {...q};
// newObj.one = 3;
// console.log(newObj);
// console.log(q);

const soldier = {
    halth: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};

//Object.setPrototypeOf(john, soldier);
const john = Object.create(soldier);
john.sayHello();