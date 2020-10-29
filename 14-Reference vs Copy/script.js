let age = 100
let age2 = age

console.log(age, age2) // 100, 100

age = 200

console.log(age, age2) // 200, 100

// Array

const numbers = [1, 2, 3, 4, 5]

const numbers2 = numbers // REFERENCE

numbers2[0]= 100

console.log(numbers, numbers2)

const players = ["A", "B", "C", "D"]

const players1 = players.slice() //COPY
const players2 = [...players] //COPY
const players3 = Array.from(players) //COPY
const players4= [].concat(players) //COPY

players1[0]="AA"
players2[1]= "BB"
players3[2]="CC"
players4[3]="DD"

console.log(players, players1, players2, players3, players4)

// Object

const person = {
    name: "Merve",
    surname: "Karabulut"
}

const merve = person // REFERENCFE
merve.age = 26

console.log(person, merve) // BOTH HAVE AGE PROPERTY

const person2 = {
    name : "Melis",
    surname : "Karabulut"
}

const melis = Object.assign({}, person, {age:18})

console.log(person2, melis)

const melis2 = {...melis}
