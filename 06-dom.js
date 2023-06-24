/*
const h1 = document.getElementById('h1') //find element with id
const h2 = document.getElementsByTagName('h2')[0]
const h3 = document.getElementsByClassName('h3')[0]
if (h1) {
	console.log('Success!')
}
h1.innerHTML="New Webpage" //changed the text
h2.innerHTML="New Webpage 2"
if (h3) {
	h3.innerHTML="New Webpage 3"
}
*/

/*89. InnerText & TextContent*/
/*const ulElement = document.querySelectorAll('.ul')
ulElement[0].innerHTML = '<li>New list element</li>'*/
/*ulElement[0].classList.add('active')*/
/*ulElement[0].innerHTML('New list item')*/

/*90 QuerySelector*/
/*const h1 = document.querySelector('h1')
console.log(h1)
const banner = document.querySelector('.banner')
console.log(banner)

const para = document.querySelector('#para')
console.log(para)

const allH1 = document.querySelectorAll('h1')
console.log(allH1) // 2 elements
console.log(allH1[0]) // 1st of them*/

/*91. Parent and children nodes*/
/*const h1Parent = document.querySelector('h1').parentNode
console.log(h1Parent)
let child = document.querySelector('h1')*/

/*let list = document.querySelector('.item-list')
console.log(list) // whole list
console.log(list.firstElementChild) //li first
console.log(list.lastElementChild) // li last
console.log(list.childNodes) // [text, li, text, li, text, li, text, li, text]*/

/*92. Siblings*/
/*let first = document.querySelector('li')
console.log(first.innerHTML) //Item1
console.log(first.nextElementSibling.innerHTML) //Item2*/

/*let current = document.querySelector('li')
let nextSibling = current.nextElementSibling
while (current) {
	console.log(current.innerHTML) // Item1, Item2, Item3, Item4
	current = current.nextElementSibling
}*/

/*92. Create element*/
/*let element = document.createElement('div')
element.innerHTML = '<h1>This is header</h1>'
document.body.appendChild(element)

let subheading = document.createElement('h2')
subheading.textContent = 'This is a subheading'
document.body.appendChild(subheading)

let listItem = document.createElement('li')
listItem.textContent = 'item 1'
let list = document.querySelector('ul')
list.appendChild(listItem)
document.body.appendChild(list)*/

/*93. Document fragment - it is easier than add each element and children to the DOM step by step*/
/*let fragment = new DocumentFragment()

let heading = document.createElement('h1')
heading.textContent = 'Main heading'

let subheading = document.createElement('h2')
subheading.textContent = 'Sub heading'

fragment.appendChild(heading)
fragment.appendChild(subheading)

document.body.appendChild(fragment) //only here the fragment will be added to the DOM*/

/*95 - Insert Before*/
/*let parent = document.querySelector('ul')

// parentNode.insertBefore(newNode, existingNode)
let existingNode = document.querySelector('li')

let newNode = document.createElement('li')
newNode.textContent = 'SoftDrink'

parent.insertBefore(newNode, existingNode) //will be added before the first li
parent.insertBefore(newNode, existingNode.nextSibling) //will be added before the second li*/

/*96. Append & Prepend*/
/*let parent = document.querySelector('ul')
let item1 = document.createElement('li')
item1.textContent = 'Gamno'

let item2 = document.createElement('li')
item2.textContent = 'Mango'

parent.append(item1, item2)

let item3 = document.createElement('li')
item3.textContent = 'Pear'

let item4 = document.createElement('li')
item4.textContent = 'Pineallle'

parent.append(item3, item4)*/

/*97. Replace & Remove Child Node*/
/*let parent = document.querySelector('ul')
let newNode = document.createElement('li')
newNode.textContent = 'Green Tea'

let oldNode = document.querySelector('li')
console.log(parent.outerHTML)

parent.replaceChild(newNode, oldNode) //replace child
console.log(parent.outerHTML)
let oldNode2 = document.querySelector('li')
parent.removeChild(oldNode2)*/

/*98. Cloning A Node*/
/*let node = document.querySelector('ul')
let clonedNode = node.cloneNode(true) //cloned the whole structure of the element

document.body.appendChild(clonedNode) //added to the node*/

/*99. HTML Attributes & DOM Properties*/

/*100. Set Attribute*/
/*let heading = document.querySelector('h1')
heading.setAttribute('id', 'newId') //changed id attribute
heading.setAttribute('class', 'newClass') // added class to the element*/

/*101. Has Attribute & Get Attribute*/
/*let heading = document.querySelector('h1')
console.log(heading)
console.log(heading.id) //h1
console.log(heading.getAttribute('id')) //h1
if (heading.hasAttribute('class')) { // use in conditional expressions
	console.log('It has an ID')
} else {
	console.log('this attribute doesn\'t exist')
}*/

/*102. Remove Attribute*/
/*let heading = document.querySelector('h1')
heading.removeAttribute('id') // now tag is without id attribute*/

/*103. Style Attribute*/
/*let heading = document.querySelector('h1')
//heading.style.color = 'red' //color was changed to 'red'
heading.style.cssText='color:brown; background-color:purple' // You can also add the row of styles
heading.setAttribute('style', 'color:red; background-color:blue') // You can add the row of styles this way as well*/

/*104. Manipulating Classes*/
/*let heading = document.querySelector('h1')
heading.className = 'banner-class' //assigned class
heading.className += ' banned-class' //additional class
console.log(heading.className) //banner-class banned-class
console.log(heading.classList[1]) //shown the of classes
heading.classList.add('primary') //banner-class banned-class primary
heading.classList.remove('primary') //banner-class banned-class
heading.classList.replace('banned-class', 'accessed-class') //banner-class accessed-class
if (heading.classList.contains('classone')) {
	console.log('has class')
} else {
	console.log('has not  class')
}*/

/*105.Introduction to events*/
/*let heading = document.querySelector('h1')
function hello() {
	console.log('Hello!')
}*/

/*106. Another Way To Handle Events*/
/*let heading = document.querySelector('h1')

function hello() {
	console.log('Hello!')
}
heading.onclick = hello //onclick will be 'Hello!'*/

/*107. AddEventListener*/
/*let heading = document.querySelector('h1')
heading.addEventListener('click', function() {
	console.log('Heading element clicked')
})*/

/*108. AddEventListener*/
/*let element = document.querySelector('h1')
element.addEventListener('mouseover', function() {
	this.innerText = 'Heading element hovered'
})
element.addEventListener('mouseout', function() {
	this.innerText = 'Mouse removed from element'
})*/


/*109. Coding Challenge Part 10: DOM & DOM Events*/
/*Change the text of two buttons to + and - respectively.
	Change the color of the decrement button to red.
	Create an h1 element and attach it to the html body.
	Create a variable called count and attach it to the created h1 element.
	Add event listeners to + & - buttons such that when they are clicked the count increases and decreases respectively.*/
/*let incrementButton = document.querySelector('.button1')
let decrementButton = document.querySelector('.button2')
incrementButton.innerText = '+'
decrementButton.innerText = '-'

decrementButton.style.backgroundColor = 'red'

let countHolder = document.createElement('h1')
document.body.appendChild(countHolder)

let count = 0
function updateCounter() {
	countHolder.innerText = count
}

incrementButton.addEventListener('click', function() {
	if (count < 10) {
		count += 1
		updateCounter()
	}
})

decrementButton.addEventListener('click', function() {
	if (count > 0) {
		count -= 1
		updateCounter()
	}
})*/


/*Coding Challenge Part 11: Simple Interest Calculator*/
/*	Here is the challenge:
Step 1: Copy paste the code in your index.html file and run it in your browser before you begin the challenge
Currently as you can see the calculator is non functional.
	The challenge is to make it working in a way that it should display the simple interest amount on the HTML page.
	The html page accepts three values from the user.
	Principal amount borrowed.
	Time period in years for which the amount is borrowed.
	Rate of interest.
	Calculate the simple interest based on these amounts.
	The formula to calculate simple interest is:
	Simple interest = principal x number of years x rate of interest / 100
Hint steps:
	Capture the input from HTML input fields using the querySelector.
	Create a function to calculate interest and attach it to the click event of the calculate button.*/


/*111. Coding Challenge Part 11: Simple Interest Calculator*/
/*function calculate() {
	let pElement = +(document.querySelector('#principalAmount').value)
	let tElement = +(document.querySelector('#timePeriod').value)
	let iElement = +(document.querySelector('#interestRate').value)

	let SI = pElement*tElement*iElement/100

	document.querySelector('.interest').innerHTML += SI
}

document.querySelector('.btn').addEventListener('click', calculate)*/


/*112. Todo App*/
let taskInput = document.querySelector('.taskinput')
let addButton = document.querySelector('.addtask')

addButton.addEventListener('click', addButtonClicked)

function addButtonClicked() {
	let todoItem = taskInput.value
	let listItem = document.createElement('li')
	let listItemText = document.createElement('h5')
	listItemText.innerHTML = todoItem
	listItem.className = 'list-item d-flex justify-content-between align-items-center'
	listItem.appendChild(listItemText)

	let unorderedList = document.querySelector('.todo-list')

	let deleteButton = document.createElement('button')
	deleteButton.innerHTML='Done'
	deleteButton.className="btn btn-danger"

	deleteButton.addEventListener('click', () => {
		listItem.remove()
	})
	listItem.appendChild(deleteButton)

	unorderedList.appendChild(listItem)
	taskInput.value = ''
	console.log(todoItem)
}
