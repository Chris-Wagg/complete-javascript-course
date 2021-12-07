'use strict'

// function call() {
// 	console.log(`jeff`)
// }

// call()

// //a,b are arguments that can be passed in
// function test(a, b) {
// 	const foo = `jeff with ${a} and jeff with ${b}` // a and b are taken from where the function is called
// 	return foo
// }

// const bar = test(1, 2) // this captures the return value of the function
// console.log(bar)

// this is a named function. this can be called before it's defined because of hoisting

// function add1(num) {
// 	return 2021 - num
// }

// const findNumber = add1(27)
// console.log(findNumber)

// // this is a anonymous function

// const findDate = function (num) {
// 	return 2021 - num
// }

// const date = findDate(28)
// console.log(date)

// functions are just values that can be stored in varaibles

// //arrow function =>

// const calcAge3 = (birthYear) => 2037 - birthYear
// const age3 = calcAge3(1991)
// console.log(age3)

// const years = (birthyear, firstName) => {
// 	const age = 2037 - birthyear
// 	const retirement = 65 - age
// 	return `${retirement}, ${firstName}`
// }

// console.log(years(1991, 'jeff'))

// const cut = function (fruit) {
// 	return fruit * 364
// }

// const process = function (a, b) {
// 	const aPiece = cut(a)
// 	const bPiece = cut(b)

// 	const total = `jeff with ${aPiece} and ${bPiece}`
// 	return total
// }

// console.log(process(1, 2))

// const dPointsOne = 44 + 23 + 71
// const dPointsTwo = 85 + 54 + 41

// const kPointsOne = 65 + 54 + 49
// const kPointsTwo = 23 + 34 + 27

// const calcAverage = (scores) => scores / 3

// function checkWinner(avgD, avgK) {
// 	const averageD = calcAverage(avgD)
// 	const averageK = calcAverage(avgK)
// 	console.log(averageD, averageK)
// 	if (averageD >= 2 * averageK) {
// 		console.log(`D wins with ${averageD} points`)
// 	} else if (averageK >= 2 * averageD) {
// 		console.log(`K wins with ${averageK} points`)
// 	} else {
// 		console.log(`no one wins`)
// 	}
// }

// checkWinner(dPointsOne, kPointsOne)
// checkWinner(dPointsTwo, kPointsTwo)

// const array = [1, 2, 3, 4, 5]

// console.log(array[2])
// console.log(array.length)

// console.log(array[array.length - 1])

// array[2] = 'jeff'
// console.log(array)

// const numbers = [1 + 2, 2 + 3, 3 + 4]
// console.log(numbers)

// const arrayNest = [1, 2, 3, array]
// console.log(arrayNest)

// const array = [1, 2, 3, 4, 5]
// const length = array.push('Jeff') // adds to end
// console.log(array)
// console.log(length)

// array.unshift('jeff')
// console.log(array)

// array.pop()
// console.log(array)

// const popped = array.pop()
// console.log(popped)
// // reutrns the popped element

// array.shift()
// console.log(array)

// console.log(array.indexOf(3))

// array.push('jeff')
// console.log(array)
// console.log(array.includes('jeff'))

// const calcTip = function (bill) {
// 	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
// }

// const bills = [125, 555, 44]
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
// this is placing the values from bills/ tips and adding the expressions together

// console.log(bills)
// console.log(tips)
// console.log(totals)

// const obj = {
// 	firstName: 'jeff',
// 	lastName: 'Jeffjeff',
// 	age: 21,
// 	job: 'jeffer',
// 	friends: ['alan', 'steve', 'jo'],
//   isCool: true
// }

// console.log(obj.age)
// console.log(obj['friends'])

// const nameKey = 'Name'
// console.log(obj['first' + nameKey]) // concatinates the string to make the key ('first' + 'Name')

// const search = prompt('search a key here')
// console.log(obj[search])
// // this will take the value from the prompt and match it to an existing key in the object.
// // dot notation won't work here because the prompt will return a string. To match using strings you need to use [notation]

// if (obj[search]) {
// 	console.log('this works')
// } else {
// 	console.log('not working')
// }

// obj.location = 'NZ'
// obj['twitter'] = '@jeff'

// console.log(obj)

// console.log(
// 	`${obj.firstName} has ${obj.friends.length} friends and the best friend is ${obj.friends[0]}`
// )

// const obj = {
// 	firstName: 'jeff',
// 	lastName: 'Jeffjeff',
// 	birthYear: 1994,
// 	job: 'jeffer',
// 	friends: ['alan', 'steve', 'jo'],
// 	isCool: true,
// 	// showNum: function (num) {
// 	// 	return 2037 - num

// 	// showNum: function () {
// 	// 	return 2037 - this.birthYear

// 	showNum: function () {
// 		this.age = 2037 - this.birthYear
// 		return this.age
// 	},

// 	getSummary: function () {
// 		return `${this.firstName} is a ${this.showNum()}-year old ${
// 			this.job
// 		} and he is ${this.isCool ? 'really' : 'definitely a not'} cool jeff`
// 	}
// }

// // can have methods within objects

// // console.log(obj.showNum(1991))
// // console.log(obj['showNum'](1991))
// // console.log(obj.showNum(obj.birthYear))

// console.log(obj.showNum())
// // the this. keyword from the method is pointing to the object itself so when called will look in the object for where it is pointing to
// // eg this.birthyear is pointing back to the object so will not need  param because it already knows to look there
// // using this. is better if you need to change const names because it's one less thing to change and reduce chance of bugs

// console.log(obj.showNum())
// console.log(obj.age)
// // not obj.age() because it's not a function call

// console.log(obj.getSummary())

// BMI = mass(weight) / (height * 2)

// const mark = {
// 	firstName: 'Mark',
// 	lastName: 'Jeff',
// 	mass: 78,
// 	height: 1.69,
// 	calcBMI: function () {
// 		this.bmi = this.mass / this.height ** 2
// 		return this.bmi
// 	}
// }
// const john = {
// 	firstName: 'John',
// 	lastName: 'Jeff',
// 	mass: 92,
// 	height: 1.95,
// 	calcBMI: function () {
// 		this.bmi = this.mass / this.height ** 2
// 		return this.bmi
// 	}
// }

// console.log(mark.calcBMI())
// console.log(john.calcBMI())

// console.log(
// 	`${john.firstName} ${john.lastName}'s' BMI ${john.calcBMI()} is lower than ${
// 		mark.firstName
// 	} ${mark.lastName}'s' BMI ${mark.calcBMI()}`
// )

// 		return `${this.firstName} is a ${this.showNum()}-year old ${
// 			this.job
// 		} and he is ${this.isCool ? 'really' : 'definitely a not'} cool jeff`

// LOOPS ---------------------------------------------------------------------
