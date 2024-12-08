'use strict';

// Valitaan HTML-elementit
const calculationInput = document.getElementById('calculation');
const calculateButton = document.getElementById('start');
const resultParagraph = document.getElementById('result');

// Tapahtumankuuntelija laskupainikkeelle
calculateButton.addEventListener('click', () => {
  const input = calculationInput.value;

  // Tarkistetaan, että syöte ei ole tyhjä
  if (!input) {
    resultParagraph.textContent = 'Please enter a calculation.';
    return;
  }

  let operator;
  let operands;

  // Tarkistetaan ja jaetaan syöte operaattorin perusteella
  if (input.includes('+')) {
    operator = '+';
    operands = input.split('+');
  } else if (input.includes('-')) {
    operator = '-';
    operands = input.split('-');
  } else if (input.includes('*')) {
    operator = '*';
    operands = input.split('*');
  } else if (input.includes('/')) {
    operator = '/';
    operands = input.split('/');
  } else {
    resultParagraph.textContent = 'Invalid calculation. Please use +, -, * or /.';
    return;
  }

  // Muunnetaan operandeiksi ja tarkistetaan kelvollisuus
  const num1 = parseInt(operands[0].trim(), 10);
  const num2 = parseInt(operands[1].trim(), 10);

  if (isNaN(num1) || isNaN(num2)) {
    resultParagraph.textContent = 'Invalid numbers. Please enter integers.';
    return;
  }


  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        resultParagraph.textContent = 'Division by zero is not allowed.';
        return;
      }
      result = Math.floor(num1 / num2);
      break;
    default:
      resultParagraph.textContent = 'Unknown error.';
      return;
  }


  resultParagraph.textContent = `Result: ${result}`;
});
