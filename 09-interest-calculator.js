/*136. Building A Slider Based Simple Interest Calculator Part 1*/
/*let slider = document.querySelector('.slider')

slider.addEventListener('input', () => {
	console.log(slider.value)
})*/

/*137. Building A Slider Based Simple Interest Calculator Part 2*/
let pSlider = document.querySelector('.pSlider')
let pValue = document.querySelector('.pValue')

pSlider.addEventListener('input', () => {
	pValue.innerHTML = '$' + pSlider.value
	calculate()
})

/*138. Building A Slider Based Simple Interest Calculator Part 3*/
let nSlider = document.querySelector('.nSlider')
let nValue = document.querySelector('.nValue')

let iSlider = document.querySelector('.iSlider')
let iValue = document.querySelector('.iValue')
nSlider.addEventListener('input', () => {
	nValue.innerHTML =  nSlider.value + ' years'
	calculate()
})
iSlider.addEventListener('input', () => {
	iValue.innerHTML =  iSlider.value + ' %'
	calculate()
})

/*139. Building A Slider Based Simple Interest Calculator Part 4*/
let Ivalue = document.querySelector('.Ivalue')
let PIvalue = document.querySelector('.PIvalue')
let EMIvalue = document.querySelector('.EMIvalue')

const calculate = () => {
	let simpleInterest = pSlider.value * nSlider.value * iSlider.value / 100
	Ivalue.innerHTML = '$ ' + simpleInterest

	let totalAmount = +pSlider.value + +simpleInterest
	PIvalue.innerHTML = '$ ' + Math.round(totalAmount)

	let months = +nSlider.value * 12
	let EMI = parseInt(totalAmount / months)
	EMIvalue.innerHTML = '$ ' + EMI
}
