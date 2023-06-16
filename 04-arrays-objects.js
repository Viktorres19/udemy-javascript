/*48. Arrays In JavaScript - Theory*/

/*49. Creating Arrays*/
/*let fruits = ['Apple', 'Mango', 'Banana']
console.log(fruits[2]) //Banana
fruits[0] = 'Peach'
console.log(fruits) //['Peach', 'Mango', 'Banana']
let score = [2, 5, 3, 65, 89]*/

/*50. Using Spread Operator To Create Array*/
/*let fruits = ['Apple', 'Mango', 'Banana']
let allFruits = ['Pineapple', ...fruits, 'Guava']
console.log(allFruits) //['Pineapple', 'Apple', 'Mango', 'Banana', 'Guava']*/

/*51. For Of Loop*/
/*let fruits = ['Apple', 'Mango', 'Banana', 'Peach']
for(let fruit of fruits) {
	console.log(fruit) //console each fruit from array
}*/

/*52. Push, Pop, Shift, Un-shift*/
/*let fruits = ['Apple', 'Mango', 'Banana', 'Peach']
fruits.push('Pineapple', 'Watermelon')
console.log(fruits) //['Apple', 'Mango', 'Banana', 'Peach', 'Pineapple', 'Watermelon']
let poppedFruit = fruits.pop()
console.log(fruits) //['Apple', 'Mango', 'Banana', 'Peach', 'Pineapple']
console.log(poppedFruit) //Watermelon
//shift cuts 1st element from array
fruits.shift()
console.log(fruits) //['Mango', 'Banana', 'Peach', 'Pineapple']
//unshift add element to the start of the array
fruits.unshift('Star')
console.log(fruits) //['Star', 'Mango', 'Banana', 'Peach', 'Pineapple']*/

/*53. Indexof & Splice*/
/*let fruits = ['Apple', 'Mango', 'Banana', 'Peach']
console.log(fruits.indexOf('Apple')) //0
fruits.splice(1, 1) //start - number of elements
console.log(fruits) //['Apple', 'Banana', 'Peach']
fruits.splice(fruits.indexOf('Banana'), 1) //delete 1 element starting from 'Banana'
console.log(fruits) //['Apple', 'Peach']*/

/*54. Concat Arrays*/
/*let fruits = ['Apple', 'Mango', 'Banana', 'Peach']
let foodPrices = [1, 2, 3, 4, 5]
let suppliesPrices = [6, 7, 8, 9]

let allPrice = foodPrices.concat(suppliesPrices)
console.log(allPrice) //[1, 2, 3, 4, 5, 6, 7, 8, 9]
let something = allPrice.concat(fruits)
console.log(something) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 'Apple', 'Mango', 'Banana', 'Peach']*/

/*55. Reverse, Join & Split*/
/*let names = ['John',  'Tom', 'Rob']
names.reverse() //['Rob', 'Tom', 'John']
console.log(names)
names = names.join(' , ') //['Rob', 'Tom', 'John']
console.log(names)*/

/*let name = 'John'
name = name.split('')
console.log(name)// new array ['J', 'o', 'h', 'n']
name = name.reverse().join('') // nhoJ
console.log(name)*/

/*56. Introduction To Objects*/
/*57. Creating Objects Using Object Literals*/
/*let student = {
	name: 'John',
	score: 89,
	contact: '9999999999',
}
console.log(student.name) //John*/

/*58. Nesting Objects*/
/*let petrolEngine = {
	capacity: 2000,
	bhp: 299,
	torque: 450
}
let car = {
	name: 'ABC',
	price: 40000,
	engine: petrolEngine
}
console.log(car)*/
/*{name: 'ABC', price: 40000, engine: {…}}
engine : {capacity: 2000, bhp: 299, torque: 450}
name : "ABC"
price : 40000*/
/*console.log(car.engine.torque)*/ //450

/*59. Changing Properties*/
/*const student = {
	name: 'John',
	score: 89,
	contact: '9999999'
}

student.name = 'Lox'
student['score'] = 99
console.log(student) // {name: 'Lox', score: 99, contact: '9999999'}*/

/*60. Avoiding Property Access Errors*/
/*const student = {
	name: 'John',
	contact: '9999999'
}
if (student.score) {
	console.log(student.score)
} else {
	console.log('Property does not exist!')
}*/

/*61. Deleting Properties*/
/*const student = {
	name: 'John',
	score: 89,
	contact: '9999999'
}

delete student.score // in console.log it will return true
if (student.score) {
	console.log(student.score)
} else {
	console.log('Property does not exist!')
} //{name: 'John', contact: '9999999'}*/

/*62. Serialising Objects*/
const student = {
	name: 'John',
	score: 89,
	contact: '9999999'
}
let studentString = JSON.stringify(student)
console.log(studentString) // {"name":"John","score":89,"contact":"9999999"} String
console.log(student)
let parsedString = JSON.parse(studentString)
console.log(parsedString) // {name: 'John', score: 89, contact: '9999999'} here will be an object again
