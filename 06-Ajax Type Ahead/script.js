const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// find matches --- findMatches
//display matches on screen --- displayMatches

const cities = []

fetch(endpoint)
.then(prom => prom.json())
.then(data => cities.push(...data))

function findMatches(wordToMatch, cities){
    return cities.filter(place => {
        //We need RegExp
        const regex = new RegExp(wordToMatch, 'gi') // g for global, i for insensitive
        return place.city.match(regex) || place.state.match(regex) //need a variable in (), because it is changed by user
    })
}

const search = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')
search.addEventListener('click', displayMatches)
search.addEventListener('keyup', displayMatches)

function displayMatches(){
 const matchArray = findMatches(this.value, cities)
 const html = matchArray.map(place =>{

    const regex = new RegExp(this.value, 'gi') // for highlight

    const cityName = place.city.replace(regex, `<span class="h1">${this.value}</span>`) //for highlight
    const stateName = place.state.replace(regex, `<span class="h1">${this.value}</span>`) //for highlight

     return`<li>${cityName}, ${stateName}, ${numberWithCommas(place.population)}</li>`
 }).join('') // this helped me to delete commas between each place !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
   suggestions.innerHTML = html
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}