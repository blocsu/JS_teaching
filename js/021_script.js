"use strict";

const arr = [1,32,3,24,5,69,17,8];
arr.sort();
console.log(arr);//[1, 17, 24, 3, 32, 5, 69, 8]
arr.sort(compareNum);
console.log(arr);//[1, 3, 5, 8, 17, 24, 32, 69]
//функция настройки метода sort
function compareNum(a, b) {
    return a - b;
}

arr.pop();
arr.push(10);
console.log(arr);

for (let value of arr) {
    console.log(value);
}

arr[99] = 0;
console.log(arr.length);
console.log(arr);

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} элементы массива ${arr}`);
});
