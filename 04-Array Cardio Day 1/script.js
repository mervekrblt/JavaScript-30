const inventors = [{
    first: 'Albert',
    last: 'Einstein',
    year: 1879,
    passed: 1955
  },
  {
    first: 'Isaac',
    last: 'Newton',
    year: 1643,
    passed: 1727
  },
  {
    first: 'Galileo',
    last: 'Galilei',
    year: 1564,
    passed: 1642
  },
  {
    first: 'Marie',
    last: 'Curie',
    year: 1867,
    passed: 1934
  },
  {
    first: 'Johannes',
    last: 'Kepler',
    year: 1571,
    passed: 1630
  },
  {
    first: 'Nicolaus',
    last: 'Copernicus',
    year: 1473,
    passed: 1543
  },
  {
    first: 'Max',
    last: 'Planck',
    year: 1858,
    passed: 1947
  },
  {
    first: 'Katherine',
    last: 'Blodgett',
    year: 1898,
    passed: 1979
  },
  {
    first: 'Ada',
    last: 'Lovelace',
    year: 1815,
    passed: 1852
  },
  {
    first: 'Sarah E.',
    last: 'Goode',
    year: 1855,
    passed: 1905
  },
  {
    first: 'Lise',
    last: 'Meitner',
    year: 1878,
    passed: 1968
  },
  {
    first: 'Hanna',
    last: 'Hammarström',
    year: 1829,
    passed: 1909
  },
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// FILTER


// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
console.table(fifteen)

//MAP

// Array.prototype.map()
// 2. Give us an array of the inventor first and last names

//not with arrow function
/* const names = inventors.map(function (x) {
  return `${x.first} ${x.last}`
})
console.log(names) */

const names = inventors.map(inventor => `${inventor.first} ${inventor.last}`)
console.table(names)

//SORT

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const oldestToYoungest = inventors.sort((a,b) => a.year> b.year ? 1 : -1) 
console.table(oldestToYoungest)

//REDUCE

// Array.prototype.reduce()
// 4. How many years did all the inventors live?

const totalYears = inventors.reduce((total ,inventor) => {
  return total + (inventor.passed - inventor.year)}, 0
 )

 console.log(totalYears)
/*  
THIS IS ANOTHER REDUCE EXERCISE ABOUT FINDING MAX VALUE IN ARRAY AND YOU CAN SEE HOW REDUCE WORKS BY CONSOLE.LOG(A,B)
  

console.log(totalYears)

  let vals = [1 , 2, 3 ,90, 100, 0]

  let biggest = vals.reduce((a, b) =>  
  {console.table(a, b)
  return  b>a ? b: a}, 0
  )
console.log(biggest) */

// ANOTHER SORT EXERCISE

// 5. Sort the inventors by years lived

const oldest = inventors.sort((a,b) => {
 const lastGuy = a.passed - a.year
 const firstGuy = b.passed - b.year
 return lastGuy>firstGuy ? -1 :1} 
)

console.table(oldest)

// ANITHER SORT EXERCISE WITH SPLIT

// 7. sort Exercise
// Sort the people alphabetically by last name

const byLast = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst ] = lastOne.split(', ')
  const [bLast, bFirst ] = nextOne.split(', ')
  /*console.log(aLast,aFirst) 
  console.log(bLast,bFirst) */
  return aLast > bLast ? 1 : -1
})

console.table(byLast)

//ANOTHER REDUCE EXERCISE

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck']

const howMany = data.reduce(function(a,b){
  if(!a[b]){
   a[b] = 0
  }
  a[b] ++
  return a
  
},{})

console.log(howMany)
  