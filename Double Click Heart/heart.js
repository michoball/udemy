const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

let clickTime = 0;
let clickCount = 0;

loveMe.addEventListener('click',(e)=>{
    if(clickTime === 0){
        clickTime = new Date().getTime()
    }else{
        if((new Date().getTime() - clickTime)< 500 ){
             createHeart(e);
            clickTime = 0;
        }else{
            clickTime = new Date().getTime();
        }
    }
   
})

function createHeart(e){
    const heart = document.createElement('i');

    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    const x = e.clientX;
    const y = e.clientY;

    const LeftOffSet = e.target.offsetLeft;
    const TopOffSet = e.target.offsetTop;

    const xInside = x-LeftOffSet
    const yInside = y-TopOffSet;

    heart.style.left = `${xInside}px`;
    heart.style.top = `${yInside}px`;

    times.innerText= ++clickCount;
    loveMe.append(heart);

    setTimeout(()=>{
        heart.remove()
    },2000)
}