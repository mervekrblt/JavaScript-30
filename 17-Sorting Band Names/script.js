const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const band = document.querySelector('#band')

const strip = (bandName) =>{
    return bandName.replace(/^a |the |an /i, '').trim()
}

const sortedBand = bands.sort((x,y) =>  (strip(x))>(strip(y))? 1 : -1)

band.innerHTML = sortedBand.map(band => `<li>${band}</li>`).join("")