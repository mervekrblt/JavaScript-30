const canvas = document.querySelector('#draw')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

//add from stack overflow
var color = "rgb(255,0,0)";

function change(){
    color = this.value;
}

document.getElementById("color").onchange = change;
//add from stack overflow

ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = 5

let isDrawing = false
let lastX = 0
let lastY = 0

function draw(e){
    if(!isDrawing) return
    ctx.strokeStyle = color //add from stack overflow
    ctx.beginPath()
    //start from
    ctx.moveTo(lastX, lastY)
    //go to
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke()
    lastX = e.offsetX
    lastY = e.offsetY
}

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mousedown', (e) => {
    isDrawing=true
    lastX = e.offsetX
    lastY = e.offsetY
})
canvas.addEventListener('mouseup', () => isDrawing=false)
canvas.addEventListener('mouseout', () => isDrawing= false)

const erase = document.querySelector('#erase')

erase.addEventListener('click', function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})