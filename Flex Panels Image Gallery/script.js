const panels = document.querySelectorAll('.panel')

function toggleOpen(){
    this.classList.toggle('open') //dont write .open
    this.classList.toggle('open-active')  // I dont understand that why he write another function for this ?????
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen))