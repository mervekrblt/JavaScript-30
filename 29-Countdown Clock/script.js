let countdown; //secLeft goes to negative numbers. WE used global variable to set setınterval and we can check if secLeft equals to negaitve then stop
const timerDisplay = document.querySelector('.display__time-left')
const endDisplay = document.querySelector('.display__end-time')
const buttons = document.querySelectorAll('.timer__button')
const input = document.querySelector('.input')
const setButton = document.querySelector('.setButton')
let then;

function timer(seconds) {
    clearInterval(countdown) //clear the countdown when function is called


    const now = Date.now() // it gives milisec
    const then = now + seconds * 1000 // Add sec which is setted by user into now variable
    displayEndTime(then)

    //Function order is really important, I wrote displayTimeLeft first, then displayEndTend. But this is wrong....

    displayTimeLeft(seconds) // set immediately
    //set countdown to setınterval
    countdown = setInterval(function () {
        const secondsLeft = Math.round((then - Date.now()) / 1000) //created own variable to count sec. Divided by 1000 otherwise it gives milisec

        //If negative then stop
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft)

    }, 1000)
}


function displayTimeLeft(seconds) {
    const min = Math.floor(seconds / 60)
    const sec = seconds % 60
    timerDisplay.innerHTML = `${min} : ${sec <10 ? '0' : ''}${sec}` // I said waow for this line. To display 09 instead of 09

}

function displayEndTime(timestamp) { // use this function to write after how many min, my timer is being 0 
    const end = new Date(timestamp) //convert milisec to day month year so on...
    const hour = end.getHours() //get hour
    const min = end.getMinutes()
    endDisplay.innerHTML = `${hour} : ${min <10 ? '0' : ''}${min}`
}

//Button's functionality
function setTime() {
    const data = this.dataset.time
    timer(data)
}

buttons.forEach(button => button.addEventListener('click', setTime))

//Input functionality. Add input value by button
function setInput() {
    const sec = input.value //second 
    timer(sec * 60)
    input.value = ''
    input.placeholder = 'Enter Minutes'
}

setButton.addEventListener('click', setInput)