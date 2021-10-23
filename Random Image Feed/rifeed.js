const container = document.querySelector('.container');
const randomImgURL = `https://source.unsplash.com/random/`

const row = 10;

for(let i=0; i < row * 3; i++){
    const img = document.createElement('img');

    img.src = `${randomImgURL}${getRandomSize()}`;
    container.appendChild(img);
}

function getRandomSize(){
    return `${getRandomNum()}x${getRandomNum()}`
}


function getRandomNum(){
    return Math.floor(Math.random() * 10) +300;
}