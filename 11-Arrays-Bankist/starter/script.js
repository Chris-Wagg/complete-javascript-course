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





// better to pass data into a function to work with it
const displayMovements = function (movements) {
  containerMovements.innerHTML = '' // this will empty the container before populating it. innerHTML will return all the html, not just textcontent
  movements.forEach(function (mov, i) { // value and index

    const type = mov > 0 ? 'deposit' : 'withdrawal'

    const html = `
        <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type} </div>
        <div class="movements__value">${mov}</div>
      </div>`

    containerMovements.insertAdjacentHTML('afterbegin', html)

  })
}

displayMovements(account1.movements)

const calcBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0)
  labelBalance.textContent = `${balance} EUR`
}
calcBalance(account1.movements)


// console.log(containerMovements.innerHTML)


// ----- compute usernames -----

// const user = 'Steven Thomas Williams'
// const name = user.toLowerCase().split(' ').map(function (word) {
//   return word[0]
// }).join('')

// // or with arrow function
// const user = 'Steven Thomas Williams'
// const name = user.toLowerCase()
//   .split(' ')
//   .map(word => word[0])
//   .join('')



// // in a function
// const userName = function (user) {
//   const username = user
//     .toLowerCase()
//     .split(' ')
//     .map(name => name[0])
//     .join('')
//   return username
// }
// console.log(userName('Steven Thomas Williams'))

// const calcBalance = function (movements) {
//   const balance = movements.reduce((acc, mov) => acc + mov, 0)
//   labelBalance.textContent = `${balance} EUR`
// }
// calcBalance(account1.movements)




// // getting all the usernames
// const userName = function (accs) {
//   accs.forEach(function (acc) {
//     acc.username = acc.owner // is adding a username key for each owner found, usingthe owner value to then make the username
//       .toLowerCase()
//       .split(' ')
//       .map(name => name[0])
//       .join('')
//   })
// }
// userName(accounts) // from the accounts array
// console.log(accounts)













/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

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

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


// // for (const move of movements) {
// for (const [i, move] of movements.entries()) { // this gives us a counter. First param is the index and the second is the current element, other way round than forEach
//   if (move > 0) {
//     console.log(`${i + 1} jeff ${move}`)
//   } else {
//     console.log(`${i + 1} steve ${move}`)
//   }
// }

// console.log('--------------forEach ---------------')
// //break and continue will not work with forEach, if you want to break a loop you need to use for of

// // for each will run the function for each element of the array
// movements.forEach(function (move, index, array) { // requires a callback as arg 1. with forEach, first param is the current element and the second is the index
//   if (move > 0) {
//     console.log(`${index + 1} jeff ${move}`)
//   } else {
//     console.log(`${index + 1} steve ${move}`)
//   }
// })



// ------ forEach with maps and sets --------------------


// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);


// currencies.forEach(function (currentValue, key, loopedMap) {
//   console.log(`${key}: ${currentValue}`)
// })


// // ---- set ----

// const currSet = new Set(['usd', 'gbp', 'usd', 'eur', 'eur'])
// console.log(currSet)
// currSet.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`)
//   // for a set, the value and the key are the same, can just re-write key to something else to make sure it's just a throw away.

// })


// ------------------- data transforming with map/ filter/ reduce ---------------------


// map is similar to forEach but makes a new array
// builds new array with the restult of the operation applied to the original array

// filter will loook for elements that pass the specified test to make a new array with

// reduce will try to make one value out of many in an array



// ----- map ------

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

// const etu = 1.1

// const ex = movements.map(function (arrValue) {
//   return arrValue * etu
// })
// // this is more like functional programming which is the meta


// //arrow function
// // const ex = movements.map(arrValue => arrValue * etu
// // )

// console.log(movements)
// console.log(ex)

// // map has access to the current element, index and the whole array (same as forEach)


// const jeff = movements.map((mov, i, arr) => {
//   if (mov > 0) {
//     return `move ${i + 1} deposit ${mov}`
//   } else {
//     return `move ${i + 1} withdraw ${Math.abs(mov)}`
//   }
// }
// )
// console.log(jeff)



// // can rewrite as
// const jeff2 = movements.map((mov, i) =>
//   `move ${i + 1}: you ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
// )
// console.log(jeff2)


// ------------- filter method -------------------

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

// // the slightly better method to use to maintain functional programming. Also better to use bcause you can chain methods which you could not do with just a for loop
// const deposits = movements.filter(function (mov) {
//   return mov > 0
// })

// console.log(movements)
// console.log(deposits)


// const withdrawals = movements.filter(function (mov) {
//   return mov < 0
// })
// console.log(movements)
// console.log(withdrawals)





// ---------------- reduce method -------------------------
//the first argument for the reduce callback is actually the accumulator


// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

// const balance = movements.reduce(function (accumulator, currentElement, index, array) {
//   console.log(`iteration ${index} : ${accumulator}`)
//   return accumulator + currentElement // acculator is what is being added to. Each call, the accum will be the current sum which is returned to then be used on the next itteration
// }, 0) // this second value is the initial number that the accumulator will start as


// //max value

// const max = movements.reduce((acc, mov) => {
//   if (acc > mov)
//     return acc
//   else
//     return mov
// }, movements[0]) // better to use the first array value to avoid weird things happening if you just used 0 instead

// console.log(max)




// ----------------- chaining methods ---------------------


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

const convert = movements.filter(mov => mov > 0) // will return new array
  .map((mov, i, arr) => mov * 1.1) // will return an array. Can use the arr param to then check what the current state of the array is if we need to debug
  .reduce((acc, mov) => acc + mov, 0) // will return a value

console.log(convert)
















// ----------- coding challenge 1 ---------

// const checkDogs = function (dogJ, dogK) {

//   const dogJcor = dogJ.slice()
//   dogJcor.splice(0, 1)
//   dogJcor.splice(-2)
//   // console.log(dogJcor)

//   const dogs = dogJcor.concat(dogK)
//   console.log(dogs)

//   dogs.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log(`dog num ${i + 1} and ${dog} years old`)
//     } else {
//       console.log(`dog num ${i + 1} is pup`)
//     }
//   })
// }

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 6, 3])

// ----- challange 2 ----------


// const calcAge = function (ages) {
//   const humAge = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4)
//   // console.log(humAge)
//   const adult = humAge.filter(age => age >= 18)
//   console.log(humAge)
//   console.log(adult)

//   const average = adult.reduce((acc, age) => acc + age, 0) / adult.length

//   return average
// }

// const avg1 = calcAge([5, 2, 4, 1, 15, 8, 3])
// console.log(avg1)