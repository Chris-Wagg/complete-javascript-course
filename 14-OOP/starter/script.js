'use strict';
// OOP

// use classes

// each object has a prototype
// objects inherit methods from the prototypes
// objects delegate to the prototype

// constructors start with capitals
// arrow functions dont work here becaue it doesn't have 'this'
const Person = function (first, year) { // this is the constructor
    this.first = first,
        this.year = year

    // don't put methds in constructor functions
    // this.calcAge = function () {
    //     console.log(2022 - this.year)
    // }
}

const test = new Person('Jeff', 1994)
const testOne = new Person('steve', 1996)
// these are only instances of the person object

console.log(test)
console.log(testOne)

//new operator

// new {} is made
//function is called, this(keyword) = {empty object}
// {} is linked to prototype
// funtion automatically returns {}


// -------------------- prototypes ----------------------------- watch this back
console.log(Person.prototype)

// makes only one copy
Person.prototype.calcAge = function () { // protoype of objects created by person
    console.log(2022 - this.year)
}

test.calcAge()

// set properties on the prototype

Person.prototype.species = 'walking person'
console.log(test.species)

//check for properties
console.log(test.hasOwnProperty('first')) // true because it's on the object
console.log(test.hasOwnProperty('species')) // false because it's not on the object, just has access through the prototype

// the newly created object is linked to the constructor functions prototype property


// --------------- inheritence -----------------

console.log(test.__proto__)
console.dir(Person.prototype.constructor)

const arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]
console.log(arr.__proto__)

console.log(arr.__proto__ === Array.prototype)

// prototype property of the constructor is the prototype of all the objects created by that constructor


// can add a new method to the prototype, all arrays will then inherit this method
// not really a good idea though 
Array.prototype.unique = function () {
    return [...new Set(this)]
}

console.log(arr.unique())



const h1 = document.querySelector('h1')

console.dir(h1) // prototype is an html element with a big prototype chain

// can call methods on functions because they are just objects with prototypes