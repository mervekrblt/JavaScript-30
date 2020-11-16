const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');

highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink(){
    const linkCoords = this.getBoundingClientRect();
    console.log(linkCoords);

    highlight.style.width =`${linkCoords.width}px`
    highlight.style.height =`${linkCoords.height}px`

    highlight.style.transform =`translate(${linkCoords.left}px, ${linkCoords.top + window.scrollY}px)` //scrollX doesnt change. Because of this, I just sum y coordinate into top 
}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));