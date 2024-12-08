'use strict';

// Valitaan HTML-elementit
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operationSelect = document.getElementById('operation');
const calculateButton = document.getElementById('start');
const resultParagraph = document.getElementById('result');

// Tapahtumankuuntelija laskupainikkeelle
calculateButton.addEventListener('click', () => {
  // Haetaan syötearvot
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const operation = operationSelect.value;

  // Tarkistetaan, että numerot ovat kelvollisia
  if (isNaN(num1) || isNaN(num2)) {
    resultParagraph.textContent = 'Please enter valid numbers.';
    return;
  }

  // Suoritetaan laskutoimitus valitun operaation mukaan
  let result;
  switch (operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'sub':
      result = num1 - num2;
      break;
    case 'multi':
      result = num1 * num2;
      break;
    case 'div':
      if (num2 === 0) {
        resultParagraph.textContent = 'Division by zero is not allowed.';
        return;
      }
      result = num1 / num2;
      break;
    default:
      resultParagraph.textContent = 'Unknown operation.';
      return;
  }

  // Näytetään tulos
  resultParagraph.textContent = `Result: ${result}`;
});
