// This will run as soon as the page is loaded
window.onload = function() {
    // Ask the user for the number of dice rolls
    let numDice = parseInt(prompt("How many dice do you want to roll?"));

    // Check if the input is a valid number
    if (isNaN(numDice) || numDice <= 0) {
        alert("Please enter a valid number greater than 0.");
        return;
    }

    let sum = 0;

    // Roll the dice the number of times specified by the user
    for (let i = 0; i < numDice; i++) {
        // Generate a random number between 1 and 6 (inclusive)
        let roll = Math.floor(Math.random() * 6) + 1;
        sum += roll;
    }

    // Display the result in the HTML document
    document.getElementById("result").innerText = "The sum of the dice rolls is: " + sum;
};
