const boxes = document.querySelectorAll('.box');

window.addEventListener("scroll", ShowBoxes);

ShowBoxes();

function ShowBoxes(){

    const triggerLine = (window.innerHeight/5) * 4;
    
    boxes.forEach(box => {

        const boxesTop = box.getBoundingClientRect().top;
        const boxesBottom = box.getBoundingClientRect().bottom ;


        if(boxesTop < triggerLine){
            box.classList.add("show");
        }else {
            box.classList.remove("show");
        }

    })

}