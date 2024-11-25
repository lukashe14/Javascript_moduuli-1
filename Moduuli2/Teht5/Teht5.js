
const numbers = new Set();
let isDuplicate = false;

while (!isDuplicate) {
  const input = prompt("Enter a number:");

  if (input === null) {

    console.log("Input cancelled.");
    break;
  }

  const number = Number(input);

  if (numbers.has(number)) {
    console.log(`The number ${number} has already been given!`);
    isDuplicate = true;
  } else {
    numbers.add(number);
  }
}

if (numbers.size > 0) {
  // Sort and display numbers in the console
  const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
  console.log("Numbers you entered (in ascending order):");
  console.log(sortedNumbers);
}
