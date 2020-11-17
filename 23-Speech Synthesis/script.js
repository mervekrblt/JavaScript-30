const msg = new SpeechSynthesisUtterance

let voices = []
const voicesDropdown = document.querySelector('[name="voice"]')
const options = document.querySelectorAll('[type="range"], [name="text"]')
const speakButton = document.querySelector('#speak')
const stopButton = document.querySelector('#stop')

// reach text value and assign to msg.text
msg.text = document.querySelector('[name="text"]').value

//create populateVoices function

function populateVoices(e) {
    voices = this.getVoices() //add voices into array. This refers to speechSynthesis
    console.log(voices)

    const languageOptions = voices
        .map(voice => `<option value="${voice.name}">${voice.name}</option>`)
        .join('');

    voicesDropdown.innerHTML = languageOptions
}

speechSynthesis.addEventListener('voiceschanged', populateVoices)