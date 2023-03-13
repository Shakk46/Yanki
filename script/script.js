let doc = document



let menu = doc.querySelector('.menu')
let span = menu.firstElementChild
let close = doc.querySelector('.close')
let menuFull = doc.querySelector('.menu-full')

menu.addEventListener('click', () => {
    menuFull.style = 'transform:translateX(0)'
})
close.addEventListener('click', () => {
    menuFull.style = 'transform:translateX(-150deg)'
})


let blocks = doc.querySelectorAll('.block')
for(let block of blocks){
    let onclick = ()=>{
        block.lastElementChild.classList.toggle('ul_activ')
    }
    block.addEventListener('click', onclick)
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        100:{
            slidesPerView:1,
        },
        440: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
  });


let header = doc.querySelector('.header')
let nav = doc.querySelector('.nav')
let changeColor = doc.querySelectorAll('.change')
let windCoord;
let ad = doc.querySelector('.ad')
document.addEventListener('scroll', () => {
    windCoord = window.scrollY
    if(header.clientHeight - 100 < windCoord) {
        nav.style = 'background:white;'
        for(let elem of changeColor) {
            elem.style = 'color:pink; font-weight:bold;'
        }
        ad.style.transform = 'translateX(0%)'
        setTimeout(function closeAd () {
            ad.style.display = 'none'
        }, 3000)
    }else {
        for(let elem of changeColor) {
            elem.style = 'color:white; font-weight:400;'
        }
        nav.style = 'background:none;'
    }
})


let headerLink = doc.querySelector('#headerLink')
let sliderLink = doc.querySelector('#sliderLink')
let formLink = doc.querySelector('#formLink')

let slider = doc.querySelector('#slider')
let form = doc.querySelector('#form')


// Это можно было сделать через css
headerLink.addEventListener('click',(event) => {
    event.preventDefault()
    window.scrollTo({top: 0, behavior: 'smooth'})   
})
sliderLink.addEventListener('click',(event) => {
    event.preventDefault()
    window.scrollTo({top: slider.offsetTop - 77, behavior: 'smooth'})   
})
formLink.addEventListener('click',(event) => {
    event.preventDefault()
    window.scrollTo({top: form.offsetTop - 77, behavior: 'smooth'})   
})


let adClose = doc.querySelector('.ad__close')
function closeAd () {
    ad.style.transform = 'translateX(150%)'
    setTimeout(() => {
        ad.style.display = 'none'
    }, 301)
    
}
adClose.addEventListener('click', closeAd)