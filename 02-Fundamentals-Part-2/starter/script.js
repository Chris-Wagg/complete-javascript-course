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

const array = [1, 2, 3, 4, 5]
const length = array.push('Jeff') // adds to end
console.log(array)
console.log(length)

array.unshift('jeff')
console.log(array)

array.pop()
console.log(array)

const popped = array.pop()
console.log(popped)
// reutrns the popped element

array.shift()
console.log(array)

console.log(array.indexOf(3))

array.push('jeff')
console.log(array)
console.log(array.includes('jeff'))
