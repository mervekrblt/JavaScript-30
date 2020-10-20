const player = document.querySelector('.player')
const video = document.querySelector('.viewer')
const progress = document.querySelector('.progress')
const progressBar = document.querySelector('.progress__filled')
const toggle = document.querySelector('.toggle')
const skipButtons = document.querySelectorAll('[data-skip]')
const ranges = document.querySelectorAll('.player__slider')

const fullScreen = document.querySelector('.fullScreen')

//PLAY - PAUSE FUNCTION
function togglePlay() {
    if (video.paused) {
        video.play()
    } else video.pause() //IT IS NOT VIDEO.PAUSED()
}

toggle.addEventListener('click', togglePlay)
video.addEventListener('click', togglePlay)

//CHANGE ICON FUNCTION
function updateButton() {
    if (video.paused) {
        toggle.textContent = "play"
    } else toggle.textContent = "stop"
}

video.addEventListener('pause', updateButton)
video.addEventListener('play', updateButton)

//SKIP FUNCTION
function skip() {
    console.log(this.dataset.skip)
    video.currentTime += parseFloat(this.dataset.skip)
}

skipButtons.forEach(button => button.addEventListener('click', skip))

//RANGE FUNCTION
function skip() {
    video[this.name] = this.value

}

ranges.forEach(range => range.addEventListener('change', skip))


//FULL SCREEN 
fullScreen.addEventListener('click', function () {
    if (player.requestFullscreen) {
        player.requestFullscreen();
    }
    if (document.exitFullscreen) {
        document.exitFullscreen();
    }

})

// Spent 2 days to solve fullscreen function, my mistake is using else rather than using another if statement