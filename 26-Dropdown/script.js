const triggers = document.querySelectorAll('.cool > li')
const background = document.querySelector('.dropdownBackground')
const nav = document.querySelector('.top')

//If I define dropdown out of handleEnter function, and use querySelector... It gives just first dropdown
//const dropdown = document.querySelector('.dropdown')

//When mouse enter the link
function handleEnter(){
    this.classList.add('trigger-enter')
    setTimeout(()=> this.classList.add('trigger-enter-active'),150)

    //add background
    background.classList.add('open')

    //select the link which has mouseenter
    const dropdown = this.querySelector('.dropdown') 
    // get coordinates of dropdown
    const dropdownCoords = dropdown.getBoundingClientRect()
    // I dont use nav coordinates, I defined div which has background class outside of nav

    background.style.setProperty('height', `${dropdownCoords.height}px`)
    background.style.setProperty('width', `${dropdownCoords.width}px`)
    background.style.setProperty('left', `${dropdownCoords.left}px`)
    background.style.setProperty('top', `${dropdownCoords.top}px`)
    
}

//When mouse leave the link
function handleLeave(){
    this.classList.remove('trigger-enter', 'trigger-enter-active')
    background.classList.remove('open')
}

//add listener to triggers
triggers.forEach(i => i.addEventListener('click', handleEnter))
triggers.forEach(i => i.addEventListener('mouseleave', handleLeave))