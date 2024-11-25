
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}


let result;
const rollResults = [];

do {
  result = rollDice();
  rollResults.push(result);
} while (result !== 6);


const outputDiv = document.getElementById("output");
const ul = document.createElement("ul");

rollResults.forEach(roll => {
  const li = document.createElement("li");
  li.textContent = `Rolled: ${roll}`;
  ul.appendChild(li);
});

outputDiv.appendChild(ul);
