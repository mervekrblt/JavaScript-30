const boxes = document.querySelectorAll('div')
const button = document.querySelector('button')
const h3 = document.querySelector('h3')
const h2 = document.querySelector('h2')
let clicked = 0
let clicked1 = 0

function printBox(e){
    console.log(this.classList.value)
    //stop bubbling
    //e.stopPropagation()
}

//gives third, second, first
//default is false
boxes.forEach(box => box.addEventListener('click',printBox, {capture:false}))

//gives first, second, third
boxes.forEach(box => box.addEventListener('click',printBox, {capture:true}))

button.addEventListener('click', function(){
    clicked++
    h3.innerText = `You clicked ${clicked} times`
})

button.addEventListener('click', function(){
    clicked1++
    h2.innerText = `You clicked ${clicked1} times, because of once:true`
}, {once:true})
