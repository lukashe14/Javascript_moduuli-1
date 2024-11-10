const number1 = parseFloat(prompt('Give number!'))
const number2 = parseFloat(prompt('Give number!'))
const number3 = parseFloat(prompt('Give number!'))

const sum = number1 + number2 + number3
const product = number1 * number2 * number3
const average = sum / 3

document.getElementById("tuloste").textContent = `Numeroiden summa on ${sum}`
document.getElementById("tuloste1").textContent = `Numeroiden kerroin on ${product}`
document.getElementById("tuloste2").textContent = `Numeroiden keskiarvo on ${average}`