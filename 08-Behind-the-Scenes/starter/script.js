'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   console.log(firstName);
//   // scope looks up to find it on the next level. firstName is global
//   return age;
// }

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     const output = `${firstName} you are ${age}, born in ${birthYear}`;
//     // age/birthYear is found by looking up in the scope levels
//     console.log(output);

//     if (birthYear => 1981 && birthYear <= 1996) {
//       var millenial = true; // this is function scoped
//       const str = `oh you're a millanial, ${firstName}`; // this is block scoped
//       console.log(str);

//       function add (a, b) // this can only be used in this block scope
//       return a + b
//     }
//     // console.log(str); // this won't work because block scope
//     console.log(millenial); // this will work because function scope
//     console.log(add(1,2)) // wont work with strict mode on because block scoped
//   }
//   printAge();
//   return age;
// }

// //age would not be found because it's only scoped to the function, same with printAge
// const firstName = 'Jeff'; // this will be found in the printAge function because it's global
// calcAge(1991);

// //HOISTING---------------------------
// console.log(me); // returns undefined
// console.log(job); // errors out
// console.log(year); // errors out

// var me = 'jeff';
// let job = 'jeffer';
// const year = 2121;

// console.log(addDec(1, 2));
// console.log(addexp(1, 2)); // errors out
// console.log(addArrow(1, 2)); // errors out

// function addDec(a, b) {
//   return a + b;
// }

// let addexp = function (a, b) {
//   return a + b;
// };

// const addArror = (a, b) => a + b;

// // var also affects the global window object

// ----------- THIS KEYWORD-------------------

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   // uses this from parent function
//   console.log(2037 - birthYear);
//   console.log(this); // this points to window(glocal scope)
// };
// calcAgeArrow(1991);

// const jeff = {
//   year: 2001,
//   calcAge: function () {
//     console.log(this); // this is only pointing to the parent object becuase of like 85 using the parent to call the method itself
//     console.log(2037 - this.year);
//   },
// };
// jeff.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jeff.calcAge;
// // this is methdod borrowing
// matilda.calcAge(); // (this) keyword from the method is being called by the matilda object so this will point to that parent object

// const f = jeff.calcAge;
// f(); // ths is a regular function call so it has no parent object so *this can't point to anything so won't work

var firstName = 'steve';

const jeff = {
  year: 2001,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // const self = this;
    // const a = function () {
    //   console.log(self.year >= 2981 && self.year <= 1996);
    //   //this does not work in regular function, it undefined, needs to be used with an object, can pass it down with variables, eg self

    const a = () => {
      // this works because it uses parent scope info, so this.year will be 2001
      console.log(this);
      console.log(this.year >= 2981 && this.year <= 1996);
    };
    a();
  },

  greet: () => console.log(`hey ${this.firstName}`), // parent scope of this is the global scope, which is he wondow object. *this will be undefined. need to define firstName as a global variable (var) for access it (line 98). need a function method instead of an arrow
};

jeff.greet();

//* this does not work in regular function, it undefined, needs to be used with an object, can pass it down with variables

const add = function (a, b) {
  console.log(arguments); // this will make an array of the passed arguments to the function
  return a + b;
};

add(1, 2);
add(1, 2, 3, 4, 5, 6, 7, 8, 9);

const addArrow = (a, b) => {
  console.log(arguments); // this doesn't work with arrow functions
  return a + b;
};

addArrow(1, 2);
