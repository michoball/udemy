const textEl = document.getElementById('text');
const input = document.getElementById('speed');


const text = 'We love programming';

let idx  = 1;
let speed = 300/ input.value;



writeText();

function writeText(){
    
    textEl.innerText = text.slice(0,idx)
    idx++;

    if(idx > text.length){
        idx = 1;
    }

    setTimeout(writeText, speed);
}

input.addEventListener('input',(e)=> speed = 300/ (e.target.value))