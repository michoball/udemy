const sliderContainer = document.querySelector(".slider-container");
const sliderLeft = document.querySelector(".left-slide");
const sliderRight = document.querySelector(".right-slide");
const downBtn = document.querySelector(".down-button");
const upBtn = document.querySelector(".up-button");
const slidesLength = sliderRight.querySelectorAll('div').length;


let activeSlideIndex = 0;

sliderRight.style.top= `-${(slidesLength-1) * 100 }vh `;


downBtn.addEventListener('click',()=> changSlide('down'));
upBtn.addEventListener('click',()=> changSlide('up'));


function changSlide(direction){
    const screenHeight = sliderContainer.clientHeight;

    if(direction === 'down'){
        activeSlideIndex--;
        if(activeSlideIndex < 0){
            activeSlideIndex = slidesLength - 1;
        }
    }else if(direction === 'up'){
        activeSlideIndex++;
        if(activeSlideIndex >slidesLength - 1 ){
            activeSlideIndex = 0;
        }
    }
    sliderLeft.style.transform= `translateY(-${screenHeight * activeSlideIndex }px) `;
    sliderRight.style.transform= `translateY(${screenHeight * activeSlideIndex }px) `;


}