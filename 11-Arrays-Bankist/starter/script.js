'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////




// ------------- array methods -----------------------

// let arr = [1, 2, 3, 4, 5, 6, 7, 8]

// // slice -----

// const a = arr.slice(2) // returns new array, first arg is the starting place of the slice (will include that index)
// const b = arr.slice(2, 4) // second arg is the end of the slice. It will only slice as many as the second arg - first arg, so 4-2 = 2 etc

// console.log(arr)
// console.log(a)
// console.log(b)

// console.log(arr.slice(-1)) // this works from the end instead
// console.log(arr.slice(1, -1)) // this works sfrom both sides at the same time


// console.log(arr.slice()) // this just makes a shallow copy, the same as ...spread


// // ----- splice ------

// // will change the original array

// console.log(arr.splice(2)) // will only leave the first 2 elements, arr will then have the rest removed
// console.log(arr)

// arr = [1, 2, 3, 4, 5, 6, 7, 8]

// console.log(arr.splice(-1)) // works from the end
// console.log(arr)

// console.log(arr.splice(1, 2)) // same as slice etc


// // -------- reverse ---------
// // will also change the original array

// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// console.log(arr.reverse())
// console.log(arr)


// // ---------- concat ----------
// // this will not mutate the original array

// let arr2 = ['a', 'b', 'c', 'd', 'e', 'f']

// const nums = arr.concat(arr2) // first array is what the method is being called on, the second is what's being passed to the method to join onto the end
// console.log(nums)
// console.log(...arr, ...arr2) // this does the same thing



// // -------- join ---------

// console.log(nums.join(' = ')) // the spaces within the single quotes matter




// --------- AT method --------------------


// const arr = [1, 2, 3]

// console.log(arr[0])
// console.log(arr.at(0))
// // these do the same thing


// // gettign the last element
// // old methods
// console.log(arr[arr.length - 1])
// console.log(arr.slice(-1)[0])

// //using at
// console.log(arr.at(-1))

// // at method also works on strings
// console.log('jefff'.at(0))
// console.log('jefff'.at(-1))




// ---------------- for of/each -------------------------

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


// for (const move of movements) {
for (const [i, move] of movements.entries()) { // this gives us a counter. First param is the index and the second is the current element, other way round than forEach
  if (move > 0) {
    console.log(`${i + 1} jeff ${move}`)
  } else {
    console.log(`${i + 1} steve ${move}`)
  }
}

console.log('--------------forEach ---------------')
//break and continue will not work with forEach, if you want to break a loop you need to use for of

// for each will run the function for each element of the array
movements.forEach(function (move, index, array) { // requires a callback as arg 1. with forEach, first param is the current element and the second is the index
  if (move > 0) {
    console.log(`${index + 1} jeff ${move}`)
  } else {
    console.log(`${index + 1} steve ${move}`)
  }
})