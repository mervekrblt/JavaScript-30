const slider = document.querySelector(".items")

let isDown = false //it is a flag variable
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true
    slider.classList.add('active')
    startX = e.pageX //where is my cursor x
    scrollLeft = slider.scrollLeft // is the page scrolled ?
})

slider.addEventListener('mouseleave', () => {
    isDown = false
    slider.classList.remove('active')
})

slider.addEventListener('mouseup', () => {
    isDown = false
    slider.classList.remove('active')
})

slider.addEventListener('mousemove', (e) => {
    if (!isDown === true) return
    e.preventDefault();
    const x = e.pageX
    const walk = (x - startX) * 2 //gives how many pixel left or right , *2 for fast
    slider.scrollLeft =  scrollLeft - walk
})