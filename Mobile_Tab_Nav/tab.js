const contents = document.querySelectorAll('.content');
const listItems = document.querySelectorAll('nav ul li');

listItems.forEach((item,idx) => {
    item.addEventListener('click', () => {
    hideContentImg();
    hideItem();

    item.classList.add('active');
    contents[idx].classList.add('show');})
}
)


function hideContentImg() {
    contents.forEach(content => content.classList.remove('show'))
}

function hideItem() {
    listItems.forEach(item => item.classList.remove('active'))
}

