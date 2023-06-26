/*141. Building A Mini Shopping Cart Using Local Storage Part 1*/
let productInput = document.querySelector('.productInput')
let addButton = document.querySelector('.addButton')

let priceInput = document.querySelector('.priceInput')

let quantityInput = document.querySelector('.quantityInput')

let cart = []
if (localStorage.cart) {
	cart = JSON.parse(localStorage.cart)
}
addButton.addEventListener('click', () => {
	for (let i in cart) {
		if (productInput.value === cart[i].product) {
			cart[i].quantity = +cart[i].quantity + +quantityInput.value
			localStorage.cart = JSON.stringify(cart)
			location.reload()
			return
		}
	}
	let item = {
		product: productInput.value,
		price: priceInput.value,
		quantity: quantityInput.value
	}
	cart.push(item)
	localStorage.cart = JSON.stringify(cart)
	location.reload()
	console.log(localStorage)
})

/*142. Building A Mini Shopping Cart Using Local Storage Part 2*/
const displayCart = () => {
	const productList = document.querySelector('.productList')
	for (let i in cart) {
		let item = cart[i]
		let listItem = document.createElement('li')
		listItem.innerHTML = 'Product name: ' + item.product + '; ' + 'Product price: ' + item.price + '; ' + 'Product quantity: ' + item.quantity
		productList.appendChild(listItem)
	}
}

displayCart()
