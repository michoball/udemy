const openBtn = document.querySelector('.btn-open');
const closeBtn = document.querySelector('.btn-close');

const navs = document.querySelectorAll('.nav');


openBtn.addEventListener('click', ()=> {
    navs.forEach(nav=> nav.classList.add('visible'))
})


closeBtn.addEventListener('click', ()=> {
    navs.forEach(nav=> nav.classList.remove('visible'))
})