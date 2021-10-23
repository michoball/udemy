const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const color = document.getElementById('color');

const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');
const size = document.getElementById('size');

const clear = document.getElementById('clear');

const CANVAS_SIZE= 500;

let drawing = false;
let penSize = 10;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.lineWidth = penSize;


clear.addEventListener('click', ()=> ctx.clearRect(0,0,CANVAS_SIZE,CANVAS_SIZE))

if(canvas){
    canvas.addEventListener('mousedown', (e)=>{ 
        if(e.button === 0){drawing = true}})
    canvas.addEventListener('mouseup',()=> drawing = false)
    canvas.addEventListener('mousemove',drawingCanvas)
    canvas.addEventListener('contextmenu',(e)=> e.preventDefault())
}

function drawingCanvas(e){
    const x = e.offsetX;
    const y = e.offsetY;

    if(!drawing){
        ctx.beginPath()
        ctx.moveTo(x,y)
    }else{
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}


color.addEventListener('change', (e)=> ctx.strokeStyle = e.target.value)


decrease.addEventListener('click', ()=>{
    penSize --;
    ctx.lineWidth = penSize;
    changeSize(penSize);

    if(penSize < 2){
        penSize = 1;
    }
})

increase.addEventListener('click', ()=>{
    penSize ++;
    ctx.lineWidth = penSize;
    changeSize(penSize);

    if(penSize > 19){
        penSize = 19;
    }
})

function changeSize(num){
    size.innerText = num;
}