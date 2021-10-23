const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');


fill.addEventListener('dragstart',dragStart);
fill.addEventListener('dragend', dragEnd);

empties.forEach(empty => {
    empty.addEventListener('dragenter',dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('drop', dragDrop)
})

function dragStart(){
    this.className += ' hold';
    setTimeout(()=> this.className = 'invisible',0)
}

function dragEnd(){
    this.className = 'fill'
}

function dragEnter(){
    this.className += ' hover';
}

function dragLeave(){
    this.className = 'empty';
}

function dragOver(e){
    e.preventDefault();
}

function dragDrop(e){
    e.preventDefault();
    this.className = 'empty';
    this.append(fill);
}

