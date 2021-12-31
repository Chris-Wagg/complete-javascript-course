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


const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
checkIn(flight, jonas); 