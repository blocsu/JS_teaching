'use strict';

const box = document.getElementById("box");
//console.log(box);

const btns = document.getElementsByTagName("button");
//console.log(btns[0]);

const circles = document.getElementsByClassName("circle");
//console.log(circles);
const wrapper = document.querySelector('.wrapper');


const hearts = wrapper.querySelectorAll('.heart');
// hearts.forEach(item => {
//     console.log(item);
// });

const oneHeart = wrapper.querySelector('.heart');
//console.log(oneHeart);


// box.style.backgroundColor = 'blue';
// box.style.width = '500px';
box.style.cssText = `background-color: green; width: 400px`;
btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
//};

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('Сдесь был я');
div.classList.add('black');
wrapper.append(div);
// wrapper.prepend(div);
// hearts[0].before(div);
// hearts[0].after(div);
// circles[0].remove();
// hearts[0].replaceWith(circles[0]);
div.innerHTML = "<h1>Hello World!</h1>";
// div.textContent = "<h1>Hello World!</h1>";
div.insertAdjacentHTML("afterend", '<h2>Hello</h2>');


