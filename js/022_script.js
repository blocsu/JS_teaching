let a = 5,
    b = a;
b = b + a;
console.log(a);//5
console.log(b);//10

const obj = {
    a: 5,
    b: 1
};
const copy = obj; //это не копия, а ссылка на оригинальный obj
copy.a = 10; //по ссылке модифицируется оригинальный obj
console.log(copy);//{ a: 10, b: 1 }
console.log(obj); //{ a: 10, b: 1 }
//--------------------------------

//Делаем поверхностную копию объекта
function objCopy(mainObj) {
    const copy = {};
    for (let key in mainObj) {
        copy[key] = mainObj[key];
    }
    return copy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = objCopy(numbers);
newNumbers.a = 9; //не модифицирует оригинал
newNumbers.c.x = 3; //модифицирует оригинал

console.log(newNumbers);//{ a: 9, b: 5, c: { x: 3, y: 4 }}
console.log(numbers);  // { a: 2, b: 5, c: { x: 3, y: 4 }}

const add = {
    d: 17,
    e: 20
};
//----------------------------------------

//Независимая поверхностная копия объектов
console.log(Object.assign(numbers, add)); //{a: 2, b: 5, c: { x: 3, y: 4 }, d: 17, e: 20}

const clone = Object.assign({}, add);
clone.d = 35;

console.log(add);  //{d: 17, e: 20}
console.log(clone);//{d: 35, e: 20}


//Копия массива
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
newArray[1] = 'xzv';

console.log(newArray);//['a', 'xzv', 'c']
console.log(oldArray); //['a', 'b', 'c']
//-------------------------------------

//Копия с пом-ю Spread оператора
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);/*['youtube',
                        'vimeo',
                        'rutube',
                        'wordpress',
                        'livejournal',
                        'blogger',
                        'vk',
                        'facebook']*/
//---------------------------------

//Применяем Spread оператор
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 5, 7];

log(...num);//2 5 7
//-----------------------

const array = ["a", "b"];
const NewArray = [...array];
//-----------------------
const q = {
    one: 1,
    two: 2
};
const newObj = {...q};
newObj.one = 3;
console.log(newObj);//{one: 3, two: 2}
console.log(q); //{one: 1, two: 2}