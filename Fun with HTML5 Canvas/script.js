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
    ctx.moveTo(lastX, lastY)
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke()
}

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mousedown', () => isDrawing=true)
canvas.addEventListener('mouseup', () => isDrawing=false)
canvas.addEventListener('mouseout', () => isDrawing= false)