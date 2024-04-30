'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');
      
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';
box.style.cssText = 'background-color: blue; width: 500px';
btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for(let i=0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'green';
});

const div = document.createElement('div');
const text = document.createTextNode('Тут был я');

div.classList.add('black');
div.style.cssText = 'width: 500px; height: 200px';
wrapper.append(div);
// wrapper.appendChild(div); //устаревший метод

// wrapper.prepend(div);
// hearts[0].before(div);
// hearts[0].after(div);
// wrapper.insertBefore(div, hearts[1]); //устаревший метод

// circles[0].remove();
// wrapper.removeChild(hearts[1]); //устаревший метод

hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]); //устаревший метод

div.innerHTML = '<h1>Hello World!</h1>';
// div.textContent = 'Hello World!';
div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>');

