// Function to roll a dice with a given number of sides
function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

// Ask the user for the number of sides on the dice
const sides = Number(prompt("Enter the number of sides on the dice:"));

if (!isNaN(sides) && sides > 0) {
  let result;
  const rollResults = [];

  // Main program: roll the dice until the maximum value is rolled
  do {
    result = rollDice(sides); // Roll the dice
    rollResults.push(result); // Store the result
  } while (result !== sides); // Continue until the max value is rolled

  // Display all roll results in an unordered list (<ul>) on the webpage
  const outputDiv = document.getElementById("output");
  const ul = document.createElement("ul");

  rollResults.forEach(roll => {
    const li = document.createElement("li");
    li.textContent = `Rolled: ${roll}`;
    ul.appendChild(li);
  });

  outputDiv.appendChild(ul);
} else {
  // Handle invalid input
  alert("Invalid number of sides. Please reload the page and try again.");
}
