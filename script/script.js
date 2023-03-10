let doc = document


let swipeLeft = doc.querySelector('.swipe-left')
let swipeRight = doc.querySelector('.swipe-right')
let cards = doc.querySelector('.cards')
let timesClicked = 0;

if(timesClicked == 0) {
    swipeLeft.style.display = 'none'
}

swipeRight.addEventListener('click', () => {
    timesClicked++
    cards.style = `transform:translateX(-${timesClicked * 274}px)`

    if(timesClicked == 0) {
        swipeLeft.style.display = 'none'
    }else {
        swipeLeft.style.display = 'grid'
    }
    if(timesClicked == 2) {
        swipeRight.style.display = 'none'
    }else {
        swipeRight.style.display = 'grid'
    }
})
swipeLeft.addEventListener('click', () => {
    timesClicked--
    cards.style = `transform:translateX(-${timesClicked * 274}px)`
    

    if(timesClicked == 0) {
        swipeLeft.style.display = 'none'
    }else {
        swipeLeft.style.display = 'grid'
    }

    if(timesClicked == 2) {
        swipeRight.style.display = 'none'
    }else {
        swipeRight.style.display = 'grid'
    }
})

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
