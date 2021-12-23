'use strict'

// Data needed for a later exercise
const flights =
	'_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30'

// // Data needed for first part of the section

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

const openingHours = {
	[weekdays[3]]: {
		// can pull a value from an array and set it as the key
		open: 12,
		close: 22
	},
	fri: {
		open: 11,
		close: 23
	},
	sat: {
		// [`day-${2 + 4}`]: {
		// can compute values and set as keys
		open: 0, // Open 24 hours
		close: 24
	}
}

const restaurant = {
	name: 'Classico Italiano',
	location: 'Via Angelo Tavanti 23, Firenze, Italy',
	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
	starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
	mainMenu: ['Pizza', 'Pasta', 'Risotto'],

	openingHours,
	// es6 assignment to match this with the other object with the same name

	order: function (starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
	},
	order(starterIndex, mainIndex) {
		// a different way to write the function
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
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
		address
	}) {
		// can use the same default values as with arrays, will fill in if function is called
		console.log(
			`${this.starterMenu[starterIndex]} + ${this.mainMenu[mainIndex]} to ${address} at ${time}`
		)
	},

	orderPasta: function (ing1, ing2, ing3) {
		console.log(`${ing1}, ${ing2}, ${ing3}`)
	},

	orderPizza: function (main, ...other) {
		console.log(main)
		console.log(other)
	}
}

// ---------------- map iteration ---------------------------

const question = new Map([
	['question', 'this is a question'],
	[1, 'c'],
	[2, 'js'],
	[3, 'pi'],
	['correct', 3],
	[true, 'correct'],
	[false, 'try again']
])

console.log(question)

console.log(Object.entries(openingHours)) // returns an array or arrays, the same as above, 1st ele is key, 2nd is value

// convert object to map
const hoursMap = new Map(Object.entries(openingHours))
console.log(hoursMap)

//----iteration-----

for (const [key, value] of question) {
	if (typeof key === 'number') console.log(`${key}, ${value}`)
}
// ----------------- MAPPING -----------------------------------

// const rest = new Map() // best to have an empty map to start
// rest.set('name', 'title')
// rest.set(1, 'place')
// console.log(rest.set(2, ' other place')) // set will also return at the same time

// rest.set(3, 'lul').set(4, 'a').set(5, 'b')
// // sets can be chained together

// rest.set(true, 'open').set(false, 'closed').set('open', 11).set('close', 23)

// console.log(rest.get('name'))
// console.log(rest.get(true)) // data type matters here, needs to match original or will return undefined
// console.log(rest.get(1))

// const time = 15
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')))
// // the > and < are being used to compare the boolean values from above, and then open/ close are also being compared to get the time

// console.log(rest.has(3))

// rest.delete(4)
// console.log(rest)

// console.log(rest.size)

// rest.clear()

// rest.set([1, 2], 'test')
// console.log(rest)

// rest.set(document.querySelector('h1', 'Heading'))
// can also grab dom elements with this
// --------------------- SETS ----------------------------------
// can hold multiple data types
// are itterables
// order is irrilevant
// no way to get values out of a set
// main use is to remove duplicates
//best to use arrays to start

// const orderSet = new Set(['jeff', 'steve', 'alan', 'jeff', 'steve', 'alan']);
// console.log(orderSet);
// // will not show duplicates

// console.log(new Set('Chris'));

// console.log(orderSet.size); // size not length like arrays
// console.log(orderSet.has('jeff'));
// console.log(orderSet.has('JEEEEEFFFF'));

// orderSet.add('Garlic Bread'); // if you added 2 of the same things it would still only show 1 because it doesnt show duplicates
// console.log(orderSet);

// orderSet.delete('jeff');
// console.log(orderSet);

// // orderSet.clear();
// // console.log(orderSet);

// //can still loop with them
// for (const order of orderSet) console.log(order);

// const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
// const staffNum = new Set(staff);
// console.log(staffNum);

// const staffNum1 = [...new Set(staff)]; // can spread it to put the results into an array
// console.log(staffNum1);

// console.log(new Set(['1', '2', '3', '4', '5']).size); // use .size to check length
// console.log(new Set('ChristopherGeorgeWagg').size); // use .size to check how many unique items there are

// --------------------- loop over objects ---------------------

// // loop keys
// const prop = Object.keys(openingHours);

// let text = `open ${prop.length} days: `;

// for (const day of prop) {
//   text += `${day}, `;
// }

// // console.log(text);

// // loop values

// const value = Object.values(openingHours);
// // console.log(value);

// // entire object

// const entry = Object.entries(openingHours);
// // console.log(entry);

// for (const x of entry) {
//   console.log(x);
// }

// for (const [day, { open, close }] of entry) {
//   // can destructure right here
//   console.log(`open on ${day} at ${open} and close at ${close}`);
// }

// --------------- optional chaining -----------------------

// without optional chaining
// console.log(restaurant.openingHours.mon.open); // errors because ti doesnt exist

// with optional chaining
// console.log(restaurant.openingHours.mon?.open); // mon is optional
// console.log(restaurant.openingHours?.mon?.open); // is openingHours doesn't exist, will not read mon etc...
// // only if prop before ? exists, will it read what i then after it, if not, then will return undefined. Will still be able to read nullish values

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed'; // need to use null operator here to make sure it returns as 0 instead of undefined
//   console.log(`on ${day}, open ${open}`);
// }

// ---- methods ----
// console.log(restaurant.order?.(0, 1) ?? 'nope'); // checking if a method exists
// console.log(restaurant.orderJeff?.(0, 1) ?? 'nope');

// // ----- arrays -----

// const users = [
//   {
//     name: 'jeff',
//     test: 'works',
//   },
// ];

// console.log(users[0]?.name ?? 'empty');

// -------------- for/of loop --------------------------------

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);
// for (const item of restaurant.starterMenu) console.log(item);

// // loops over and accesses each item. Will then log every item in said array one by one. item variable will the current item od each iteration of the loop.

// for (const item of menu.entries()) {
//   // gives the array with the index and the item eg: [4, "Pizza"]
//   console.log(item);
// }

// console.log([...menu.entries()]); // will return an array of arrays)

// for (const [i, e] of menu.entries()) {
//   // can destructure here to grab each part of the array
//   console.log(i + 1, e);
// }

// ---------------------------------------------------------
// const rest1 = {
//   name: 'name1',
//   // numGuests: 20,
//   numGuests: 0, // falsey so dowsnt work with ||
// };
// const rest2 = {
//   name: 'name2',
//   owner: 'Jeff',
// };

// --------- OR assignment operator ||=  ---------------

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10; // this will return undefined so will default to 10

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// console.log(rest1);
// console.log(rest2);

// ---------------- null assignment operator ??= -------------

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// console.log(rest1);
// console.log(rest2);

// ---------- and assignment operator &&=  -----------------

// rest1.owner = rest1.owner && '<jeff>'; // short circuts because first value os falsey
// rest2.owner = rest2.owner && '<jeff>';

// rest1.owner &&= '<jeff>'; // this was falsey so nothing happened
// rest2.owner &&= '<jeff>'; // this was truethy so the owner string was replaced

// console.log(rest1);
// console.log(rest2);

// -------------- Null opirator ?? -------------------------------

// restaurant.numGuest = 0;
// const guest = restaurant.numGuest || 10; // doesn't work with 0 because it's falsey so will end up returning 10
// const guest1 = restaurant.numGuest ?? 10; // this will work with 0 because nullish values = null / undefined. makes things like 0 or '' truethy insead for that evaluation
// console.log(guest);
// console.log(guest1);

// // ------------- logical operators ------------------------
// // can use and return any data type, will short circut (will return the first truthy value it comes across)
// console.log('--------- OR || ----------------');
// console.log(3 || 'string'); //3
// console.log('' || 'string'); //string
// console.log(true || 0); //true
// console.log(undefined || null); //null
// console.log(undefined || 0 || '' || 'string' || 27 || null); // string (first truthy value)

// restaurant.numGuest = 23; // doesn't work with 0 because it's falsey so will end up returning 10
// const guest = restaurant.numGuest ? restaurant.numGuest : 10;
// console.log(guest);

// const guest1 = restaurant.numGuest || 10; // removes the need for the turnery operator
// console.log(guest1);

// console.log('--------------- AND &&------------------');
// // && operator works opposite,short circuts and will return on first falsey value
// console.log(3 && 'string'); //string
// console.log('' && 'string'); //''
// console.log(true && 0); //0
// console.log(undefined && null); //undefined
// console.log(0 && '' && 'string' && 27 && null); // 0 (first falsey value)

// // example (checking if a property exists on an object)
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('ham', 'sauce');
// } // if the method exists, then execute it. If it doesn't exist then it will short circut and not evaulate what's next

// restaurant.orderPizza && restaurant.orderPizza('ham', 'pineapple');
// //----------------------------------- Rest operator/ condences ---------------------------------

// // spread because it's on the rigth side of the =
// const arr = [1, 2, ...[3, 4]];

// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);
// // will look like: 1 2 [3,4,5]
// // takes what is not assigned from the destrcuturing and puts them in a new array on their own

// const [jeff, , alan, ...other] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(jeff, alan, other);

// // rest nees to be the last thing in the assignment. can only do it once per array/object

// //---obect-----

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// //----functions------

// //rest params
// const add = function (...numbers) {
//   console.log(numbers);
// };

// add(2, 3);
// add(1, 2, 3, 4, 5);

// const x = [1, 2, 3];
// add(...x); // spread the array assigned to x to then pass to the rest params of the function

// restaurant.orderPizza('mushroom', 'two', 'three', 'four', 'five');

// ---------------------------- spread operator/ unpack -------------------------------
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const badArr = [1, 2, arr[0], arr[1], arr[2]];
// // console.log(badArr);

// const goodArr = [1, 2, ...arr];
// // console.log(goodArr);

// // console.log(...goodArr);

// const newMenu = [...restaurant.mainMenu, 'jeff'];
// // console.log(newMenu);

// // array copy

// const menuCopy = [...restaurant.mainMenu];
// // console.log(menuCopy);

// // join arrays

// const joinArray = [...restaurant.mainMenu, ...restaurant.starterMenu];
// // console.log(joinArray);

// // spead works on all iterables: arrays, strings, maps, sets, even objects even thought they aren't iterables

// const test = 'test';
// const letters = [...test, ' ', 's'];
// // console.log(letters);
// // breaks up the string into individual items

// // const ingre = [prompt(`1`), prompt(`2`), prompt(`3`)];

// // console.log(ingre);

// // restaurant.orderPasta(...ingre);

// // ------------- spreading objects

// const newObj = { ...restaurant, founder: 'alan', foundedIn: '6969' }; // spreads new object and adds to it
// console.log(newObj);

// const restCopy = { ...restaurant };
// restCopy.name = 'fffffffff';
// console.log(restCopy);

// ------------------- object ------------------------

// // passing an object to a function
// restaurant.orderDelivery({
//   time: '11:00',
//   address: 'jeff',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'alan',
//   starterIndex: 2,
// });

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
