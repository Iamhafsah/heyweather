const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const cities = document.querySelector('.cities');
let carouselWidth = document.querySelector('.top-container-inner').offsetWidth;
let index = 0;

next.addEventListener('click', ()=>{
    index ++;
    prev.classList.add('prev-show');
    cities.style.transform = `translateX(-${index * carouselWidth}px)`;
    if(cities.offsetWidth - (index * carouselWidth) < carouselWidth){
        next.classList.add('next-hide');
    }
})
prev.addEventListener('click', ()=>{
    index --;
    next.classList.remove('next-hide');
    if(index == 0){
        prev.classList.remove('prev-show')
    }
    cities.style.transform = `translateX(-${index * carouselWidth}px)`;
})
window.addEventListener('resize',()=>{
    carouselWidth = document.querySelector('.top-container-inner').offsetWidth;
})


