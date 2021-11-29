// const js = 'amazing'
// if (js === 'amazing') alert('jeff')

// console.log('jeff')

// const firstName = 'Jeff'
// console.log(firstName)

// true
// const jsbool = true
// console.log(jsbool)

// console.log(typeof true)

// let variable = true
// variable = 'jeff'
// console.log(typeof variable)

// const markBMIOne = 78 / 1.69 ** 2
// // console.log(markBMIOne)

// const markBMITwo = 95 / 1.88 ** 2
// // console.log(markBMITwo)

// const johnBMIOne = 92 / 1.95 ** 2
// // console.log(johnBMIOne)

// const johnBMITwo = 85 / 1.76 ** 2
// // console.log(johnBMITwo)

// if (markBMIOne > johnBMIOne) {
// 	console.log(
// 		`Marks first BMI is ${markBMIOne} which is higher than Johns ${johnBMIOne}`
// 	)
// } else {
// 	console.log(
// 		`Johns first bmi is ${johnBMIOne} which is higher than Marks ${markBMIOne}`
// 	)
// }

// if (markBMITwo > johnBMITwo) {
// 	console.log(
// 		`Marks second BMI is ${markBMITwo} which is higher than Johns ${johnBMITwo}`
// 	)
// } else {
// 	console.log(
// 		`Johns second bmi is ${johnBMITwo} which is higher than Marks ${markBMITwo}`
// 	)
// }

// const jeff = 'Jeff'
// const age = 69
// const job = 'jeffer'

// const test = `I'm ${jeff}, a ${age} year old ${job}!`

// console.log(test)

// console.log(`test
// string
// on
// many
// lines`)

// const driveage = 14
// const legal = driveage >= 18

// if (legal) {
// 	console.log(`you can drive 🚗🚗🚗`)
// } else {
// 	console.log(`you can't drive noob, you have ${18 - driveage} years left`)
// }

// const birthYear = 1994

// let century
// if (birthYear <= 2000) {
// 	century = 20
// } else {
// 	century = 21
// }

// console.log(century)

// console.log(Number('18'))
// console.log(typeof NaN)
// console.log(String(23), 23)

// const money = 0
// //0 is a falsey value
// if (money) {
// 	console.log(true)
// } else {
// 	console.log(false)
// }

// const moneyTwo = NaN
// //numbers are truthy values
// if (moneyTwo) {
// 	console.log(true)
// } else if (moneyTwo === false) {
// 	console.log(false)
// } else {
// 	console.log(`jeff`)
// }

// == will type convert

// == vs ===
// != vs !==

//&&
// ||

// if (a && b), if (a || b)
// if ( a && b && !c)

// const scoreOne = Math.floor((96 + 108 + 89) / 3)
// const scoreTwo = Math.floor((88 + 91 + 110) / 3)

// console.log(`scoreOne is ${scoreOne}`)
// console.log(`scoreTwo is ${scoreTwo}`)

// if (scoreOne === scoreTwo) {
// 	console.log(`it's a tie with ${scoreOne} points each`)
// } else if (scoreOne > scoreTwo) {
// 	console.log(`scoreOne wins with ${scoreOne} points`)
// } else {
// 	console.log(`scoreTwo wins with ${scoreTwo} points`)
// }

// const scoreOneBonus = Math.floor((97 + 112 + 101) / 3)
// const scoreTwoBonus = Math.floor((109 + 95 + 123) / 3)

// console.log(`scoreOneBonus is ${scoreOneBonus}`)
// console.log(`scoreTwoBonus is ${scoreTwoBonus}`)

// if (scoreOneBonus === scoreTwoBonus) {
// 	console.log(`it's a tie with ${scoreOneBonus} points each`)
// } else if (scoreOneBonus > scoreTwoBonus && scoreOneBonus >= 100) {
// 	console.log(`scoreOneBonus wins with ${scoreOneBonus} points`)
// } else if (scoreTwoBonus >= 100) {
// 	console.log(`scoreTwoBonus wins with ${scoreTwoBonus} points`)
// } else {
// 	console.log(`no one wins`)
// }

// const bonusDataTwoD = Math.floor((97 + 112 + 101) / 3)
// const bonusDataTwoK = Math.floor((109 + 95 + 106) / 3)

// console.log(`bonusDataTwoD is ${bonusDataTwoD}`)
// console.log(`bonusDataTwoK is ${bonusDataTwoK}`)

// if (
// 	bonusDataTwoD === bonusDataTwoK &&
// 	bonusDataTwoD >= 100 &&
// 	bonusDataTwoK >= 100
// ) {
// 	console.log(`it's a tie with ${bonusDataTwoD} points each`)
// } else if (bonusDataTwoD > bonusDataTwoK && bonusDataTwoD >= 100) {
// 	console.log(`bonusDataTwoD wins with ${bonusDataTwoD} points`)
// } else if (bonusDataTwoK >= 100) {
// 	console.log(`scoreTwoBonus wins with ${bonusDataTwoK} points`)
// } else {
// 	console.log(`no one wins`)
// }

//SWITCH STATEMENTS

// const day = `wednesday`

// switch (day) {
// 	case `monday`: // day === monday (designed for equality testing)
// 		console.log(`monday`)
// 		break
// 	case `tuesday`:
// 		console.log(`tuesday`)
// 		break
// 	case `wednesday`:
// 	case `thursday`:
// 		console.log(`wednesday and thursday`)
// 		break
// 	case `friday`:
// 		console.log(`friday`)
// 		break
// 	default:
// 		console.log(`default`)
// }

// const age = 69
// age >= 18 ? console.log(`jeff`) : console.log(`not jeff`)

// (a ? b : c)
// (if ? than : else)

// const bill = 430

// const tipTwenty = bill * 0.2
// const tipFifteen = bill * 0.15

// bill >= 50 && bill <= 300
// 	? console.log(
// 			`bill = ${bill}, tip = ${tipFifteen} total = ${bill + tipFifteen}`
// 	  )
// 	: console.log(
// 			`bill = ${bill}, tip = ${tipTwenty} total = ${bill + tipTwenty}`
// 	  )
