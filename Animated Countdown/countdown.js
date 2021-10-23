const counter = document.querySelector('.counter');
const final = document.querySelector('.final');

const nums = document.querySelectorAll('.nums span');
const replay = document.querySelector('#replay');


runAnimation();


function restDom(){
    final.classList.remove('show');
    counter.classList.remove('hide');

    nums.forEach(num=>{
        num.className = ''; 
    })
    nums[0].classList.add('in');
}


function runAnimation(){
    nums.forEach((num,idx) => {
        const nextToLast = nums.length - 1;

        num.addEventListener('animationend', (e)=>{
            if(e.animationName === 'goIn' && idx !== nextToLast){
                num.classList.remove('in')
                num.classList.add('out')
            } else if(e.animationName === 'goOut' && num.nextElementSibling){
                num.nextElementSibling.classList.add('in')
            }else{
                counter.classList.add('hide');
                final.classList.add('show');
            }
        })
    })
}



replay.addEventListener('click',()=>{
    restDom();
    runAnimation();
})