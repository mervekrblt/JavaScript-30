const addItems = document.querySelector('.add-items') 
const itemsList = document.querySelector('.plates')
const items = []

function addItem(e){
    e.preventDefault()
    const text = (this.querySelector("[name=item]")).value
    const item = {
        text :text,
        done:false
    }
    items.push(item)

    populateList(items, itemsList)
    this.reset()
}

function populateList(plates=[], platesList){ // first var take an array, second var is where plates to put into 

    platesList.innerHTML = plates.map((plate,i) => {
        return `
        <li>
        <input type="checkbox" name="" id="">
        <label for="" name="item">${plate.text}</label>
        </li>
        `
    }).join('')
}

addItems.addEventListener('submit', addItem)