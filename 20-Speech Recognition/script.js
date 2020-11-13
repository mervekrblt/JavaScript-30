window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

const recognition = new SpeechRecognition()

recognition.interimResults = true

let p = document.createElement('p')
const container = document.querySelector('.container')
container.appendChild(p)

recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')

    p.textContent = transcript

    if (e.results[0].isFinal) {
        p = document.createElement('p')
        container.appendChild(p)
    }

    if (transcript.includes('Merve')) {
        p.innerHTML = 'Helo Stranger, thanks for saying Merve'
    }
})

const DeleteAll = () => {
    container.innerHTML = ''
    container.appendChild(p)
}

recognition.addEventListener('end', recognition.start)
recognition.start()