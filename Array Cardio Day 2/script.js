const people = [
    {name: 'Merve', year: 1994} ,
    {name: 'Melis', year: 2002} ,
    {name: 'Bektaş', year: 1969} ,
    {name: 'Olcay', year: 1972} ,
]

const comments = [
    {text:'Just' , id:101} ,
    {text:'Believe' , id:102} ,
    {text:'In' , id:103} ,
    {text:'Yourself' , id:104} ,
    {text:'xx' , id:105} ,
]

// some and every methods
// At least one person is 18

const person18 = people.some(person => {
    const currentYear = new Date().getFullYear()
    return currentYear-person.year === 18 
})
console.log({person18})

//everybody is 18

const every18 = people.every(person => {
    const currentYear = new Date().getFullYear()
    return currentYear-person.year === 18 
})
console.log(every18)


//find method

const findId = comments.find(comment => comment.id===102)


//findIndex and splice methods

const findIndex = comments.findIndex(comment => comment.id === 103)

comments.splice(findIndex, 1)

console.table(comments)

const newArray = [
    ...comments.slice(0, findIndex),
    ...comments.slice(findIndex)
]

console.table(newArray)