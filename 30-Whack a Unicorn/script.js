const rainbows = document.querySelectorAll('.rainbow')
const scoreBoard = document. querySelector('.score')
const unicorns = document.querySelectorAll('.unicorn')
let lastRainbow;
let timeUp = false
let score = 0

//gives random miliseconds between min, max
function randSec(min,max){
    return Math.round((Math.random()*(max-min)+ min))
}

//select random rainbows
function randRainbow(rainbows){
    const idx = Math.floor(Math.random()* rainbows.length)
    const rainbow = rainbows[idx]
    return rainbow
}

//pop up unicorns
function peep(){
    const time = randSec(200, 1000)
    const rainbow = randRainbow(rainbows)
    rainbow.classList.add('up') //unicorn pops

    setTimeout(() =>{ //unicorn stay on the screnn during "time" sec
        rainbow.classList.remove('up')
        if(!timeUp){
            peep() //keep continue popping
        }
    }, time)
}

//start game button
function startGame(){
    scoreBoard.textContent = 0
    timeUp = false
    score = 0
    peep()

    setTimeout(() => {timeUp=true},15000) //After 15 sec game is finished
}

//when click the unicorn get point
function bonk(e){
    if(!(e.isTrusted)) {return} 
    score++
    if(e.isTrusted){
        this.classList.remove('up');
    }
    scoreBoard.textContent = score
}

unicorns.forEach(unicorn => unicorn.addEventListener('click', bonk))