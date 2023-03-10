let doc = document
let blocks = doc.querySelectorAll('.block')



for(let block of blocks){
    let onclick = ()=>{

        block.lastElementChild.classList.toggle('ul_activ')

    
    }
    block.addEventListener('click', onclick)
}
