const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.overlay');

btns[1].addEventListener('click', () => {
    // if (!btns[2].classList.contains('red')) {
    //     btns[2].classList.add('red');
    // } else {
    //     btns[2].classList.remove('red');
    // }
    btns[2].classList.toggle('red');

    
});

wrapper.addEventListener('click', (e) => {
    if (e.target && e.target.matches('button.red')) {
        console.log('Hello');
    }
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);
      