const screens = document.querySelectorAll('.screen');
const start_btn = document.getElementById('start-btn');

const choose_insect_btns = document.querySelectorAll('.choose-insect-btn');

const game_container = document.getElementById('game-container');

const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const message = document.getElementById('message');


let second = 0;
let selected_insect = {};
let score = 0;


start_btn.addEventListener('click', ()=> {
    screens[0].classList.add('up');
})


choose_insect_btns.forEach(btn => {
    btn.addEventListener('click', ()=>{
        screens[1].classList.add('up');
        const img = btn.querySelector('img');
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt');
        selected_insect = {src, alt};
        setTimeout(createInsect, 1000);
        gameStart()
    
    })
})


function gameStart() {
    setInterval(increaseTime,1000)
}

function increaseTime(){
    const m = Math.floor(second / 6);
    const s = second % 60;

    timeEl.innerText = `Time ${m < 10 ? `0${m}` : m } : ${ s < 10 ? `0${s}` : s}`;

    second++
}


function createInsect(){
    const insect = document.createElement('div');
    insect.classList.add('insect');

    const {x, y} = getRandomLocation();
    insect.innerHTML = `  <img
    src="${selected_insect.src}"
    alt="${selected_insect.alt} " 
    />`;
    insect.style.top = `${y}px`;
    insect.style.left = `${x}px`;
    insect.style.trasnform = `rotate(${Math.random() *  360}deg)`

    insect.addEventListener('click',catchInsect)

    game_container.appendChild(insect);
}

function getRandomLocation(){
    const top = window.innerHeight;
    const left = window.innerWidth;

    const x = Math.random() * (left - 200) + 100 ;
    const y = Math.random() * (top - 200) + 100 ;

    return {x, y}
}

function catchInsect(){
    this.classList.add('caught');
    increaseScore();
    setTimeout(()=> this.remove(), 2000);
    addInsects();
}


function addInsects(){
    setTimeout(createInsect, 1000);
    setTimeout(createInsect, 1500);
}

function increaseScore(){
    score++;

    scoreEl.innerText = `Score : ${score}`;

    if(score > 19){
        message.classList.add('visible');
    }
}