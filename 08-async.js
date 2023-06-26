/*128. SetTimeout & SetInterval*/
/*const displayMessage = () => {
	console.log('Time up!')
}
setTimeout(displayMessage, 3000)*/

/*let idishnik = setInterval(() => {
	console.log('A second passed')
}, 1000)
clearInterval(idishnik)*/

/*129. Countdown Timer*/
/*const t = document.querySelector('h2')
let time = 30
const interval = setInterval(() => {
	console.log(time)
	t.innerText = time
	if (time > 0) {
		time = time - 1
	} else {
		clearInterval(interval)
		t.innerText = 'Time is up'
	}

}, 1000)*/

/*130. Promises In JavaScript*/
/*Just an explanation*/

/*131. Creating Promises*/
/*let p = new Promise((resolve, reject) => {
	let status = true //it might be false here
	if (status) {
		resolve('Success')
	} else {
		reject('Failed')
	}
})
//if promise fullfilled
p.then((message) => {
	console.log('Login ' + message)
})
	.catch((message) => {
		console.log('Login ' + message)
	})*/

/*132. Callbacks & Promises Part 1*/
/*const transact = (transactionID, time, callback) => {
	// callback function inside
	setTimeout(() => {
		console.log('Transaction: ' + transactionID + ' is complete')
		callback()
	}, time)
}

// const allTransactions = () => {
// 	transact(1, 3000)
// 	transact(2, 7000)
// 	transact(3, 1000)
// }
// instead change to callbacks
const allTransactions = () => {
	// nested one each other (callback hell)
	transact(1, 3000, () => {
		transact(2, 1000, () => {
			transact(3, 2000, () => {

			})
		})
	})
}

allTransactions()*/

/*133. Callbacks & Promises Part 2*/
/*const transact = (transactionID, time) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Transaction : ' + transactionID + ' is completed')
			resolve()
		}, time)
	})
}

const allTransactions = () => {
	transact(1, 3000)
		.then(() => transact(2, 1000))
		.then(() => transact(3, 4000))
}
allTransactions()*/

/*134. Bank Transaction Example Using Promises Part 1*/
/*const validate = () => {
	let username = 'a2dmin'
	let password = 'admin'
	let balance = 1000
	return new Promise((resolve, reject) => {
		if (username === 'admin' & password === 'admin') {
			resolve(balance)
		} else {
			reject('Invalid username and password, please re-enter')
		}
	})
}
validate()
	.then((balance) => console.log(balance))
	.catch(message=>console.log(message))*/

/*135. Bank Transaction Example Using Promises Part 2*/
//let's redo the previous
let balance = 1000
const validate = () => {
	let username = 'admin'
	let password = 'admin'
	return new Promise((resolve, reject) => {
		if (username === 'admin' & password === 'admin') {
			resolve(balance)
		} else {
			reject('Invalid username and password, please re-enter')
		}
	})
}

const withdraw = () => {
	let withdrawAmount = 800
	return new Promise((resolve, reject) => {
		if (balance > withdrawAmount) {
			balance -= withdrawAmount
			resolve(balance)
		} else {
			reject('Insufficient funds, cannot complete transaction')
		}
	})
}

validate()
	.then((balance) => {
		withdraw()
			.then(balance=>console.log('The new balance is: ' + balance))
			.catch(message => console.log(message))
	})
	.catch(message=>console.log(message))
