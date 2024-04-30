const btns = document.querySelectorAll('button'),
      btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay');

//Устаревший вариант
// btn.onclick = function() {
//     alert('Clic');
// };

//let i = 0;
const deleteElement = (e) => {
    console.log(e.target);//e.currentTarget - показывает всплытие событий из самого вложенного по цепочке наверх
    console.log(e.type);
    // i++;
    // if(i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});


const link = document.querySelector('a');
link.addEventListener('click', (e) => {
    e.preventDefault();

    console.log(e.target);
});
