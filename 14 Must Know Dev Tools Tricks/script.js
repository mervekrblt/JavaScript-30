const dogs =[
    {name: 'Snickers' , age: 2},
    {name: 'Hugo' , age: 8},
]

const p = document.querySelector('h1')

function change(){
    p.style.color = 'red'
    p.innerHTML = 'I am just kidding'
    p.style.fontSize= '100px'
}

p.addEventListener('click', change)

console.log('Hi I am a %s string', 'shit')

//styled

console.log('%c I will be a developer', 'font-size:100px; background-color:pink')

//warning

console.warn('I said that dont click the fucking text...')

//error
console.error('Hello Darkness my old friend')

//viewing Dom

console.dir(p)

//grouping together

dogs.forEach(dog =>{
    console.groupCollapsed(`${dog.name}`)
    console.log(`This is ${dog.name}`)
    console.log(`This is ${dog.age}`)
    console.groupEnd(`${dog.name}`)
})