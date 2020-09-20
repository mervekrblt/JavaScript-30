const panels = document.querySelectorAll('.panel')

function toggleOpen(){
    this.classList.toggle('open') //dont write .open
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen))