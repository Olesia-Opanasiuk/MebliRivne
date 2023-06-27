"use strict"
let btnTop = document.querySelector('.arrow');
btnTop.addEventListener('click', topFunction);
window.addEventListener('scroll', scrollFunction);
window.addEventListener('scroll', e => {
    let phoneLink = document.getElementById('topPhoneLink').classList;
    let active_class = "scrolled";
    if (scrollY > 115) {
        phoneLink.add(active_class);
    }
    else {
        phoneLink.remove(active_class);
    }
})

function topFunction() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(topFunction, 0);
    }
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnTop.style.display = 'block';
    }
    else {
        btnTop.style.display = 'none';
    }
}


const showMore = document.querySelector('.showMore');
const reviewsLenght = document.querySelectorAll('.question').length;
const array = Array.from(document.querySelectorAll('.question'));
console.log(array);
let items = 6;


showMore.addEventListener('click', () => {
    items += 6;
    let visibleItems = array.slice(0, items);
    visibleItems.forEach(el => el.classList.add('is-visible'));
    if (visibleItems.length === reviewsLenght) {
        showMore.classList.add('hidden');
    }

});












