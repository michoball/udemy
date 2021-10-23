const container = document.getElementById('container');
const colors = [ 'yellow', 'red', 'green', 'blue', 'purple', 'orange', 'pink', 'white'];

const SQUARES = 500;


for(let i = 0; i < SQUARES; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    

    square.addEventListener('mouseover',()=> setColor(square));
    square.addEventListener('mouseout',()=> removeColor(square));
    container.appendChild(square);
}


function setColor(element){
    const color = getRanColor();

    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}`

}

function removeColor(element){
    element.style.background = '#1d1d1d';
    element.style.boxShadow = `0 0 2px black`
}

function getRanColor(){
    return colors[Math.floor(Math.random()* colors.length)]
}