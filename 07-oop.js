/*119. Writing Code The Functional Way*/
/*let studentId = 1
let studentName = 'John'
let studentMarks = 89

let teacherName = 'Jane'
let teacherId = 2
let teacherExp = 5

const displayStudent = () => {
	console.log(`Id is ${studentId}`)
	console.log(`Name is ${studentName}`)
	console.log(`Marks are ${studentMarks}`)
}

const displayTeacher = () => {
	console.log(`Id is ${teacherId}`)
	console.log(`Name is ${teacherName}`)
	console.log(`Experience is ${teacherExp}`)
}

displayStudent()
displayTeacher()*/

/*120. Writing Code The OOP Way*/
/*const student = {
	id: 1,
	name: 'John',
	marks: 89,
	display() {
		console.log(`Id is ${this.id}`)
		console.log(`Name is ${this.name}`)
		console.log(`Marks are ${this.marks}`)
	}
}

student.display()

let teacher = {
	id: 2,
	name: 'Jane',
	exp: 5,
	display() {
		console.log(`Id is ${this.id}`)
		console.log(`Name is ${this.name}`)
		console.log(`Years of experience ${this.exp}`)
	}
}

teacher.display()*/


/*121. Using Classes*/
/*class Student {
	constructor(id, name, marks) {
		this.id = id
		this.name = name
		this.marks = marks
	}
}
const studentOne = new Student(1, 'John', 98)
const studentTwo = new Student(2, 'Jake', 65)
console.log(studentOne)
console.log(studentTwo)*/

/*122. Adding Methods To A Class*/
/*class Student {
	constructor(id, name, marks) {
		this.id = id
		this.name = name
		this.marks = marks
	}
	display() {
		console.log(`Id is ${this.id}`)
		console.log(`Name is ${this.name}`)
		console.log(`Years of experience ${this.marks}`)
	}
}
const studentOne = new Student(1, 'John', 98)
const studentTwo = new Student(2, 'Jake', 65)

studentOne.display()
studentTwo.display()*/

/*123. Inheritance*/
// class Parent {
// 	constructor(id, name, marks) {
// 		this.lastname = 'Ford'
// 	}
// 	displayLastName() {
// 		console.log(`Our lastname is  ${this.lastname}`)
// 	}
// }
//
// class Child extends Parent {
//
// }
//
// const rob = new Child()
// rob.displayLastName()

/*124. Using Inheritance*/
/*class Member {
	constructor(id, name) {
		this.id = id
		this.name = name
	}
	display() {
		console.log(`Id is ${this.id}`)
		console.log(`Name is ${this.name}`)
	}
}

class Student extends Member {
	constructor(id, name, marks) {
		super(id, name)
		this.marks = marks
	}
	displayMarks() {
		console.log(`Marks ${this.marks}`)
	}
}

class Teacher extends Member {
	constructor(id, name, exp) {
		super(id, name)
		this.exp = exp
	}
	displayExp() {
		console.log(`Experience ${this.exp}`)
	}
}

let student = new Student(1, 'John', 98)
let teacher = new Teacher(1, 'Rachel', 5)

student.display()
student.displayMarks()
teacher.display()
teacher.displayExp()*/

/*125. Constructor Function*/
/*function Student(name, marks) {
	this.name = name
	this.marks = marks
	this.display = () => {
		console.log(`Name is ${this.name}`)
		console.log(`Marks are ${this.marks}`)
	}
}
const s = new Student('John', 99)
s.display()*/

/*126. Prototypes*/
function Student(name, marks) {
	this.name = name
	this.marks = marks
}
Student.prototype.display = () => {
	console.log(`Name is ${this.name}`)
	console.log(`Marks are ${this.marks}`)
}
const s = new Student('John', 99)
s.display()
console.log(s)
