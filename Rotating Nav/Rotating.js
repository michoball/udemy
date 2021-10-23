const close = document.getElementById('close');
const bar = document.getElementById('open');
const container = document.querySelector('.container');

bar.addEventListener('click',()=>container.classList.add('show-nav'));


close.addEventListener('click',()=>container.classList.remove('show-nav'));
