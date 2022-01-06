'use strict';


// // ------- default params --------

// const bookings = []

// // set defauls where the params are defined eg = 1 etc
// const book = function(flightNum, passNum = 1, price = 20 * passNum) {
//   const booking ={
//     flightNum,
//     passNum,
//     price
//   }
//   console.log(booking)
//   bookings.push(booking)
// }

// book('LH123')
// book('LK123', 2, 800)
// book('LK123', 5) // price auto calculated from the params

// // you cant skip params/ args
// book('LK123', undefined, 700) // this solves skipping args


// -------------------------- value vs reference arguments ---------------------------


// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 24739479284,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 24739479284) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// // checkIn(flight, jonas);
// // console.log(flight);
// // console.log(jonas);

// // Is the same as doing...
// // const flightNum = flight;
// // const passenger = jonas;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000000);
// };

// newPassport(jonas);
// // the jonas object is being malipulated by both functions, which can cause wacky stuff to happen, be careful of this and try to avoid doing it
// checkIn(flight, jonas); 


// // js only has passing by value
// // in js references are just values



// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase()
// }

// const upWord = function (str) {
//   const [first, ...others] = str.split(' ')
//   return [first.toUpperCase(), ...others].join(' ')
// }

// // higher order function because it takes another function as an argument 
// const transformer = function (str, fn) {
//   console.log(`original string: ${str}`)
//   console.log(`transform string: ${fn(str)}`)

//   console.log(`transformed by: ${fn.name}`) //function method to get the name property
// }

// transformer('jeff Jeff jeff', upWord)
// transformer('jeff Jeff jeff', oneWord)

// addEventLitener is also a higer order fcuntion and similar things because they can take other function as arguments

// .forEach can also be higher order to do callbacks

// higher order functions allow more abstraction which is good. could write code directly into functions, or can break code off into small code blocks and use callbacks to abstract (functional programming, single responsibility)

// note: addEventListener takes 2 argument, the trigger, and then the called function



// ------------ functions returnign functions ---------------------------


// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`)
//   }
// }

// const greetCall = greet('hello')
// // hello passed to greeting

// greetCall('Jeff') // these names are passed to the unnamed function (name) within the greet function because greet is already ready beg passed 'hello'
// greetCall('Steve')

// greet('hi')('Alan') // hi is passed to greeting and alan is passed to name


// // arrow function
// const greetArr = greeting => name => console.log(`${greeting} ${name}`)
// greetArr('jeff')('jeff')


// -------- call and apply methods ------------------


const air = {
  airline: 'AirNZ',
  iataCode: 'ANZ',
  bookings: [],

  //this is a mathod with enhance literal syntax 
  book(flightNum, name) {
    console.log(`${name} ${this.airline} ${this.iataCode} ${flightNum}`)

    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name })
  }
}

air.book(239, 'Jeff')
console.log(air)


const newAir = {
  airline: 'new Airline',
  iataCode: 'NA',
  bookings: []
}

const book = air.book

// book(23, 'alan')
// this will error because boo kis now jsut a normal function, not the moethod from thr air object. (this.) will notwork because it will point to undefined because it doesn't have a parent object to look at  





// --------------------call method---------------------
// following fixes the this keyword error

book.call(newAir, 23, 'jeff jefferson')
// use the call method on book to allow the this keyword to work. the first arg of call method is where you want the this keyword to point. Following args are just the normal functiong args. call can be used to manually manipulate the this keyword. 

book.call(air, 45, 'Jeffe')

console.log(newAir)
console.log(air)

// -----------------apply method----------------

// apply takes an array for the arguments, takes the elements and passes that to the function.

const flightData = [123, 'alan']

book.apply(air, flightData)
console.log(air)
// this method is not relly used all that much anymore

// ----- call spread --------
// much easier way to deal with arrays
book.call(air, ...flightData)
console.log(air)




// -------------- bind method --------------------