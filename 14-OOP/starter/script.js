'use strict';
// OOP

// use classes

// each object has a prototype
// objects inherit methods from the prototypes
// objects delegate to the prototype

// constructors start with capitals
// arrow functions dont work here becaue it doesn't have 'this'
const Person = function (first, year) {
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


// -------------------- prototypes -----------------------------
console.log(Person.prototype)

// makes only one copy
Person.prototype.calcAge = function () {
    console.log(2022 - this.year)
}

test.calcAge()