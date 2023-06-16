/*63. Introduction To Functions*/
/*64. Implementing Functions*/
//define function
/*function welcomeUser() {
	let name = "John"
	console.log(`Hello ${name}, welcome to our website`)
}
//call function
welcomeUser()*/

/*65. Passing Arguments To Functions*/
/*function welcomeUser(name, number) {
	console.log(`Hello ${name}, welcome to our website ${number}`)
}
//call function
welcomeUser('John', 1)
welcomeUser('Lennon', 2)*/

/*66. Area Of A Circle Using Functions*/
/*function areaOfCircle(radius) {
	let area = Math.PI * radius * radius
	console.log(area)
}
areaOfCircle(10)
areaOfCircle(20)*/

/*67. Making A Function Return A Value*/
/*function totalMarks(phy, chem, math) {
	let total = phy + chem + math
	return total
}

let result = totalMarks(150, 140, 190)
console.log(`The result is ${result}`)*/
/*68. Making A Function Return A Value Part 2*/
/*function totalMarks(phy, chem, math) {
	let total = phy + chem + math
	return total
}
function percentage(total) {
	let per = total / 600 * 100
	return per
}*/
/*let result = totalMarks(150, 140, 190)
let result2 = percentage(result)
console.log(result2)*/
/*let result = percentage(totalMarks(150, 140, 190))
console.log(result)*/

/*69. Function Expressions*/
//function definition
/*function helloWorld() {
	console.log('Hello world')
}
//function expression
let heyThere = function() {
	console.log('Hey there')
}
const sum = function(a, b) {
	return a + b
}
let result = sum(10, 20)
console.log(result)*/

/*70. Arrow Functions*/
/*const hi = () => {
	return 'Hi there'
}
console.log(hi())*/

/*const hi = () => 'Hi there'
console.log(hi())*/

/*const add = (a, b) => {
	return a + b
}
console.log(add(10, 20))*/

/*const area = r => 3.14 * r * r
console.log(area(10))*/

/*71. Nested Functions*/
/*function calcAvg(a, b, c) {
	function calculateTotal(a, b, c) {
		return a + b + c
	}
	return calculateTotal(a, b, c) / 3
}
let result = calcAvg(2, 3, 4)
console.log(result)*/

/*72. Comparing Methods & Functions*/
/*let student = {
	name: 'John',
	marks: 90,
	sayHi: function() {
		console.log('Hi there')
	}
}

student.sayHi() //Hi there*/

/*73. this Keyword In Object*/
/*let student = {
	name: 'John',
	marks: 90,
	sayHi: function() {
		console.log('Hi there ' + this.name) //Hi there John
	}
}

student.sayHi()*/

/*74. Hoisting*/
/*displayName()
function displayName() {
	console.log('John') //John
}*/
/*cat = 10
console.log(cat) //10
var cat*/
//Doesn't work with function expression
/*sayHi() //Uncaught ReferenceError: Cannot access 'sayHi' before initialization
let sayHi = function () {
	console.log('Hi')
}*/

/*75. Functions As Value*/
/*function sayHi() {
	console.log('Hi') //Hi
}
let hello = sayHi
hello()*/

/*function sum(a, b) {
	console.log(a + b) // 30
}
let math = {
	add: sum,
}

math.add(10, 20)*/

/*76. Default Parameters*/
/*function sum(a = 2, b = 10) { //to prevent errors - default values
	console.log(a + b) //40
}
sum(30)*/

/*77. Function Scope*/
/*function product() {
	let price = 100
	// console.log(price)
}
console.log(price) //Uncaught ReferenceError: price is not defined - because price is in the scope of the function
product()*/

/*function product() {
	let price = 100
	console.log(price) //2. 100
}
function item() {
	let price = 300
	console.log('Price outside the function ' + price) //Price outside the function 300
}

let price = 200
console.log(price) //1. 200
product()
item()*/

/*78. Lexical Scope*/
/*function one() {
	let a = 98
	function two() {
		// let a = 100
		console.log(a) //98
	}
	two()
}
one()*/

/*79. Introduction To Callbacks*/
/*function hello() {
	console.log('hello') //twice
}

function twice(f) {
	f()
	f()
}
twice(hello)*/


/*Coding Challenge Part 7: Creating & Calling A Function*/
/*Write a function that calculate the BMI/ Body Mass Index*/
/*function calculateBMI(weight, height) {
	let BMI = weight / (height*height)
	return BMI
}
let result = calculateBMI(75,2)
console.log(result)*/

/*const calculateBMI = (weight, height) => weight / (height*height)
console.log(calculateBMI(75,2.56))*/


/*Coding Challenge Part 8: CallbacksCoding Challenge Part 8: Callbacks*/
/*1st function: Write a function that calculates tax, this function should accept tax percentage and salary and calculate the tax on given salary as per the percentage.*/
/*let calculateTax = (rate, salary) => salary * rate / 100
/!*2nd function: Write a function to calculate salary, it accepts three parameters.*!/
let calculateSalary = (hoursWorked, hourlyRate, taxFunction) => {
	let salary = hoursWorked * hourlyRate
	let taxPaid = taxFunction(30, salary)
	let salaryAfterTax = salary - taxPaid
	console.log(`Salary calculated as per hourly rate: ${salary}`)
	console.log(`Tax paid on earned salary is ${taxPaid}`)
	console.log(`Salary in hand ${salaryAfterTax}`)
}
/!*Parameter 1: hours worked.  / Parameter 2: hourly rate. / Parameter 3: A callback function that calculates tax on salary.*!/
/!*Firstly, calculate the salary earned by multiplying hours worked with hourly rate. Then pass this salary to the callback function along with the tax percentage to calculate tax to be paid on earned salary. Also calculate the salary in hand after paying taxes.*!/
/!*Program should display the following output: Salary earned. Tax calculated on earned salary. Salary in hand after paying taxes.*!/
calculateSalary(40, 100, calculateTax)*/


/*
Coding Challenge Part 9: Global Variables & Functions*/
/*Global variables & functions
Design a banking system to emulate withdrawal and deposit of money into a person’s account.
	Create variables to hold account balance and account number.
	Create a function deposit which accepts the amount to be deposited and adds it up to the account balance.
	Upon deposit, it also displays a message about the amount deposited and the updated balance.
	Create another function called withdraw, which accepts an amount to be withdrawn and deducts that amount form the main balance.
	Upon deducting the amount, it also displays a message about the amount deducted as well as the updated balance.
	This function also checks if sufficient funds are available before making a transaction.
	If the withdrawal amount exceeds the balance amount, the function should display an error message.*/
let balance = 1000
let accountNumber = 12345

let deposit = (amount) => {
	balance += amount
	console.log(`Amount ${amount} has been deposited in your account number ${accountNumber}, updated balance is ${balance}`)
}

let withdraw = (amount) => {
	if(balance>amount) {
		balance -= amount
		console.log(`Amount ${amount} has been withdrawn from your account number ${accountNumber}, updated balance is ${balance}`)
	} else {
		console.log('Insufficient funds in account to complete the transaction')
	}
}
withdraw(1200)
