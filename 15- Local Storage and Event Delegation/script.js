const addItems = document.querySelector('.add-items') 
const itemsList = document.querySelector('.plates')
const items = JSON.parse(localStorage.getItem('items')) || []

function addItem(e){
    e.preventDefault()
    const text = (this.querySelector("[name=item]")).value
    const item = {
        text :text,
        done:false
    }
    items.push(item)

    populateList(items, itemsList)
    localStorage.setItem('items', JSON.stringify(items))
    this.reset()
}

function populateList(plates=[], platesList){ // first var take an array, second var is where plates to put into 

    platesList.innerHTML = plates.map((plate,i) => {
        return `
        <li>
        <input type="checkbox" data-index='${i}' id="item${i}" ${plate.done ? 'checked' : ''}>
        <label for="item${i}" name="item">${plate.text}</label>
        </li>
        `
    }).join('')
}

addItems.addEventListener('submit', addItem)

populateList(items, itemsList)