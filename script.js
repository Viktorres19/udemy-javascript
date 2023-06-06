/*Math operations*/
/*console.log(3+3)*/
/*console.log(4+3)*/
/*console.log(4*3)*/
/*console.log(12/3)*/
/*console.log(12%3)*/ //0
/*console.log(3**2)*/ //9
/*console.log(3**3)*/ //27
/*console.log(2*(3+5)**2)*/ //128

/*variables*/
/*let marks

marks = 50
console.log(marks)
marks = 100
console.log(marks)

let name

name = "John"
console.log(name)*/

/*Types of variables*/
/*let string = "String" // String
let status = true //Boolean
let number = 28 // number
let Undefined // undefined
console.log(typeof Undefined)
let Null = null //object
console.log(typeof Null)*/

/* Const variable declaration */
/*const price = 100
price = 50 // Uncaught TypeError: Assignment to constant variable.
console.log(price)*/

/*11-12. Math object*/
//console.log(Math) //Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}
// console.log(Math.PI)
// Find perimeter of circle with radius 10
// console.log(2 * Math.PI * 10) //62.8
// console.log(Math.abs(-20)) // 20
// console.log(Math.pow(7,2)) // 49
// To find square root:
// console.log(Math.pow(81,0.5)) // 9
// console.log(Math.round(1.8)) // 2
// console.log(Math.floor(1.9)) // 1
// console.log(Math.ceil(1.1)) // 2
// console.log(Math.random()) // random from zero to 1
//to find max number
// console.log(Math.max(100, 200, 108)) // 200
// console.log(Math.min(2,3))

/*13. String Methods*/
//concatenation
/*let name = "John"
let lastname = "Deer"
console.log(`${name} ${lastname}`)
let nameLastname = `${name} ${lastname}`
console.log(nameLastname)
console.log(nameLastname.length) //9
let nameUpper = name.toUpperCase()
console.log(nameUpper) //JOHN
let nameLower = name.toLowerCase()
console.log(nameLower) //john
let changed = nameLower.replace("j", "r")
console.log(changed)*/

/*14. String Index*/
/* let name = "John"
console.log(name[0]) // J
//to find last character of a string:
console.log(name[name.length-1]) */

/*15. String Index Methods*/
//pick 1st four letters
/* let a = "Computer"
console.log(a.substring(0, 4)) // Comp (start, ammount of letter)
console.log(a.slice(0, 4)) // Comp (start, ammount of letter) the same */
/*let names = "John,Rob,Tim,Newton"
console.log(names.split(","))*/ //made array from string divided comas ['John', 'Rob', 'Tim', 'Newton']

/*16. String Template Literals*/
let a = `Apple`
let name = "John"
let message = `Welcome to our website ${name}`
console.log(message) //Welcome to our website John John
let b = `The total value is ${10+2}`
console.log(b) //12