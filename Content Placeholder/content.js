const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile-img');
const names = document.getElementById('name');
const date = document.getElementById('date');


const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bgs_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData,2500)

function getData(){
    header.innerHTML = `<img src="../Split Landing Page/image/xbox series x.jpg" alt=""/>`
    title.innerText = `Lorem ipsum dolor sit amet.`;
    excerpt.innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, quod?';
    profile_img.innerHTML = ` <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">`;
    names.innerText = 'John Doe';
    date.innerText= 'Oct 08, 2020';

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
    animated_bgs_texts.forEach(bg => bg.classList.remove('animated-bg-text'));
}