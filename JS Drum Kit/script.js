function playSound(e) {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`) //choose audio element which is corresponding to button which I press

    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    console.log(audio)

    if (!audio) return; //stop function and return, if I dont add this code, stop running when I press the button that dont have audio

    audio.currentTime = 0; //returns the current position (in seconds) of the audio playback

    audio.play();

    key.classList.add('playing') //dont write .playing, you write classlist already
}

function clickSound() {
    
    const audio = document.querySelector(`audio[data-key="${this.dataset.key}"]`);

    if (!audio) return;

    audio.currentTime = 0;
    audio.play();

    this.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform')
        this.classList.remove('playing')
    return
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
keys.forEach((key) => key.addEventListener('click', clickSound));

window.addEventListener('keydown', playSound)
window.addEventListener('click', playSound)




