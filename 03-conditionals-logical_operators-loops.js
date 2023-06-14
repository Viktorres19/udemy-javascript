/*28. Implementing If Conditional Statement*/
/*let age = 18

if (age >= 18) {
	console.log("You are an adult and can apply for the licence.")
} else {
	console.log("You are so young.")
}*/

/*29. If conditional with strings*/
/*let username = 'john'

if (username == 'admin') {
	console.log("Admin access aloud.")
} else {
	console.log("Admin access not allowed.")
}*/

/*30. If Conditional With Boolean*/
/*let loggedIn = false

if (loggedIn) {
	console.log("Welcome to our website")
} else {
	console.log("Please log in to continue")
}*/

/*31-32. Else If*/
/*age = 18
if (age >= 18) {
	console.log('Can apply for driver\'s licence')
} else if (age >= 16) {
	console.log('Can apply for learner\'s licence')
} else {
	console.log('Go walking, youngster!')
}*/

/*33. Nested If Statement*/
/*let age = 20
let percentage = 80

if (age > 18) {
	if (percentage > 70) {
		console.log('You are qualified')
	} else {
		console.log('You are above 18, but your percentage is below 70')
	}
} else {
	console.log('You are not qualified, your age is < 18')
}*/

/*34. Switch Case*/
let day = 2
/*if (day == 1) {
	console.log('Monday')
} else if (day == 2) {
	console.log('Tuesday')
}*/
/*switch(day) {
	case 1: console.log('Monday')
		break
	case 2: console.log('Tuesday')
		break
	case 3: console.log('Wednesday')
		break
	case 4: console.log('Thursday')
		break
	case 5: console.log('Friday')
		break
	case 6: console.log('Saturday')
		break
	case 7: console.log('Sunday')
		break
}*/

/*35. Logical AND*/
/*let age = 10
let percentage = 60

if (age > 18 && percentage > 70) {
	console.log('You are qualified')
} else {
	console.log('You are not qualified')
}*/

/*36. Logical OR*/
/*let age = 20
let percentage = 68

if (age > 19 || percentage > 70) {
	console.log('You are qualified')
} else {
	console.log('You are not qualified')
}*/

/*37. While loop*/
/*let counter = 0
while(counter < 5) {
	console.log(`Hello world ${counter}`)
	counter++
}*/

/*37. Do While loop*/
/*let counter = 5
do {
	console.log(`Hello world ${counter}`)
	counter--
} while(counter > 0)*/

/*38. For loop*/
/*for (let c = 0; c < 5; c++) {
	console.log(`Hello world ${c}`)
}*/

/*40-41 Code Challenge Part 3: IF Else*/
/*let height = 180
if (height>=175) {
	console.log('You are qualified to apply')
} else {
	console.log('You are not qualified to apply')
}*/

/*42-43 Coding Challenge Part 4: Nested If*/
/*let age = 18
let schoolMarks = 100
let aviationMarks = 100

if (schoolMarks >= 50) {
	if (aviationMarks >= 70) {
		if (age>=18) {
			console.log('Qualified for commercial pilot license')
		} else if (age>=17) {
			console.log('Qualified for private pilot license')
		} else if (age>=16) {
			console.log('Qualified for student pilot license')
		} else {
			console.log('Not qualified due to age, you are less than 16')
		}
	} else {
		console.log('Not qualified! You have scored less than 70% in the aviation exam')
	}
} else {
	console.log('Not qualified! You have scored less than 50% in high school')
}*/

/*44. Coding Challenge Part 5: Multiplication Loops*/
/*let count = 1*/
/*while(count<=10) {
	console.log(count*3)
	count = count + 1
}*/
/*do {
	console.log(count*7)
	count = count + 1
} while (count <= 10)*/
/*for (let count =1; count <= 10; count++) {
	console.log(count*9)
}*/

/*46. Coding Challenge Part 6: Detect Odd Numbers*/
/*let randomNumbers = [10,20,30,40,50,60,70,80,90,100,101,107,903]
for(let i = 0; i < randomNumbers.length; i++) {
	if(randomNumbers[i]%2===1) {
		console.log(randomNumbers[i]) //show only odd numbers
	}
}*/
