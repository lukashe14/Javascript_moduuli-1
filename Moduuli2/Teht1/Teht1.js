
let numbers = [];


for (let i = 1; i <= 5; i++) {
    let userInput = prompt(`Enter number ${i}:`);

    if (userInput !== null && !isNaN(userInput)) {
        numbers.push(Number(userInput));
    } else {
        alert("Please enter a valid number!");
        i--;
    }
}

console.log("Numbers in reverse order:");
for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}
