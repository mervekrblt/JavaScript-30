const canvas = document.querySelector('#draw')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.strokeStyle = '#BADA55'
ctx.lineJoin = 'join'
ctx.lineCap = 'join'

let isDrawing = false
let lastX = 0
let lastY = 0

function draw(e){
    if(!isDrawing) return
    
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