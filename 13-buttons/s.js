const elements = {
	counterCintainer: document.querySelector('.counter_cintainer'),
	buttonContainer: document.querySelector('.button_container'),
	button: document.querySelector('.button'),
}
function replaceTextButton(event) {
	for (let el of elements.buttonContainer.children) {
		if (el.dataset.id !== event.target.dataset.id) {
			el.innerText = 'Нажми меня'
			el.classList.remove('active')
		} 
	}
}
function clearCounter(event) {
	elements.counterCintainer.innerText = 0
	replaceTextButton(event)
}
function addCounter(event) {
	const activeElement = event.target
	if (activeElement === elements.buttonContainer) {
		return
	} 
	activeElement.innerText = 'Нажата'
	activeElement.classList.add('active')
	elements.counterCintainer.innerText = Number(elements.counterCintainer.innerText) + 1
	replaceTextButton(event)
}

