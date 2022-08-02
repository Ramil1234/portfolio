let block = document.querySelector('.main_ul-mobile')

block.addEventListener('click', () => {
    block.classList.toggle('main_ul-mobile__active')
})
let blockN2 = document.querySelector('.container__main_ul__mobile')
block.addEventListener('click', () => {
    blockN2.classList.toggle('container__main_ul__active')
})