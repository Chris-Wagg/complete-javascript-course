'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // orderDelivery: function (object) {
  //   console.log(object);
  // },

  // orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
  // can destructure right here instead if we know what's being passed, needs to the the same names. The order doesn't need to be the same though
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = ' 12:00',
    address,
  }) {
    // can use the same default values as with arrays, will fill in if function is called
    console.log(
      `${this.starterMenu[starterIndex]} + ${this.mainMenu[mainIndex]} to ${address} at ${time}`
    );
  },
};

// passing an object to a function
restaurant.orderDelivery({
  time: '11:00',
  address: 'jeff',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'alan',
  starterIndex: 2,
});

// ----------------- object destructuring -------------------------------

// const { name, openingHours, categories } = restaurant;
// console.log(name);
// console.log(openingHours);
// console.log(categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);
// // assigning new names to keys

// // can use empty arrays to create defaults, eg menu will return an empty array because it doesn't have anything assigned to it
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // ---------------- mutating variables ------------------------------

// let a = 111;
// let b = 222;
// const obj = {
//   a: 23,
//   b: 7,
//   c: 42,
// };

// //this wont work because js expects a code block with {}
// // {a,b} = obj

// ({ a, b } = obj); // need to wrap it in brackets to make it work
// console.log(a, b);

// // --------------------------- nested objects -------------------------

// const { fri } = openingHours;
// console.log(fri);
// // returns: {open: 11, close: 23}

// const {
//   fri: { open, close }, // get specific next level down keys
// } = openingHours;
// console.log(open, close);

// const {
//   fri: { open: o, close: c }, // reassign the keys to new names
// } = openingHours;
// console.log(o, c);

// ------------------ array destructuring --------------------------------

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// // destructuring
// const [x, y, z] = arr;

// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main]; // can do this to switch variables in the array
// console.log(main, secondary);

// restaurant.order(2, 0);

// // destructuring from whats above and making 2 variables from that
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // nester destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

// const [f, , [g, h]] = nested;
// console.log(f, g, h);

// const [p, q, r] = [8, 9];
// console.log(p, q, r);
// // r will return undefined because it has no value
// // can give them default values like below to fix this, whatever is in the destructuring will rewrite the value at the similar position
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
