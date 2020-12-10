let textInput = document.getElementById('operationsInput')
let clearButton = document.getElementById('clear')
let backspaceButton = document.getElementById('backspace')
let resultButton = document.getElementById('equalSign')

clearButton.addEventListener('click', () => textInput.value = '')

backspaceButton.addEventListener('click', () => {
    let inputContent = textInput.value
    textInput.value = inputContent.substring(0, inputContent.length-1)
})

let digitButtons = document.getElementsByClassName('calculator__digits-button')
let operationButtons = 
    [...document.getElementsByClassName('calculator__operations-button')]
    .filter(button => !['clear', 'equalSign', 'backspace'].includes(button.id))

let buttonsToFillInput = [...digitButtons, ...operationButtons]

buttonsToFillInput.forEach(button => {
    button.addEventListener('click', () => textInput.value += button.innerText)
})

resultButton.addEventListener('click', () => {
    textInput.value = eval(textInput.value)
})

