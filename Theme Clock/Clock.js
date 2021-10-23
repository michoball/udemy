const hourEl = document.querySelector('.hour');
const minEl = document.querySelector('.minute');
const secEl = document.querySelector('.second');
const dateEl = document.querySelector('.date');
const timeEl = document.querySelector('.time');
const toggle = document.querySelector('.toggle');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months= ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug","Sep", "Oct", "Nov", "Dec"];


toggle.addEventListener('click', (e)=>{
    const html = document.querySelector('html');

    if(html.classList.contains('dark')){
        html.classList.remove('dark')
        e.target.innerText= 'Dark mode'
    }else{
        html.classList.add('dark')
        e.target.innerText= 'Light mode'
    }
})


function setTime(){
    const time = new Date();
    const hours = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();
    const hoursForClock = hours % 12;
    const ampm = hours > 12 ? 'PM' : 'AM';

    const mon = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();

    hourEl.style.transform =  `translate(-50%, -100%) rotate(${hoursForClock * 30}deg)`;
    minEl.style.transform =  `translate(-50%, -100%) rotate(${min * 6}deg)`;
    secEl.style.transform =  `translate(-50%, -100%) rotate(${sec * 6}deg)`;

    timeEl.innerText = `${hoursForClock }:${min < 10 ? `0${min}` : min} ${ampm}`;
    dateEl.innerHTML = `${days[day]},  ${months[mon]} <span class="circle">${date}</span>`
}

setTime();

setInterval(setTime,1000);