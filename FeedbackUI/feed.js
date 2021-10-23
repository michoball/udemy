//use event bubbling

const ratingContainer = document.querySelector('.ratings-container');
const send = document.getElementById('send');
const ratings = document.querySelectorAll('.rating');
const panel = document.getElementById('panel');

let selectedRating = '';


ratingContainer.addEventListener('click',(e)=>{
    if(e.target.parentNode.classList.contains('rating')){
        removeActive();
        e.target.parentNode.classList.add('active');
        selectedRating = e.target.parentNode.innerText;
    }
})


send.addEventListener('click', ()=>{
    panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use yout feedback to improve our customer support</p>

    `
})


function removeActive() {
    for(let i = 0; i< ratings.length; i++){
        ratings[i].classList.remove('active')
    }
}