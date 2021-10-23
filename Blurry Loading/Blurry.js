const bg = document.querySelector(".bg");
const loading = document.querySelector(".loading");


let load = 0;

let inte = setInterval(blurring, 20);

function blurring(){

    load++;

    if(load > 99 ){
        clearInterval(inte);
      //  loading.style.opacity = 0;
    }

    loading.innerText = `${load}%`;
    loading.style.opacity = scale(load,0,100,1, 0);
    bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`
}


function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
