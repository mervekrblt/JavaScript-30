const secondHand = document.querySelector('.sec')
const minHand = document.querySelector('.min')
const hourHand = document.querySelector('.hour')

function setDate(){
    const now = new Date()
    const sec = now.getSeconds()
    const secDegree = (((sec/60)*360)+ 90)  //default in CSS it is written 90deg
    secondHand.style.transform = `rotate(${secDegree}deg)`


    const min = now.getMinutes()
    const minDegree = (((min/60)*360) +90)
    minHand.style.transform = `rotate(${minDegree}deg)`

    const hour = now.getHours()
    const hourDegree = (hour*30)+90
    hourHand.style.transform = `rotate(${hourDegree}deg)`
    console.log(hourDegree)
}

setInterval(setDate, 1000)