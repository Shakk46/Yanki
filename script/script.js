let doc = document


let swipeLeft = doc.querySelector('.swipe-left')
let swipeRight = doc.querySelector('.swipe-right')
let cards = doc.querySelector('.cards')
let timesClicked = 0;



let menu = doc.querySelector('.menu')
let span = menu.firstElementChild
let close = doc.querySelector('.close')
let menuFull = doc.querySelector('.menu-full')
console.log(menuFull)
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
