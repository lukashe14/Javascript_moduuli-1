
window.onload = function() {
    let numDice = parseInt(prompt("Enter the number of dice:"));
    let targetSum = parseInt(prompt("Enter the target sum of the dice eyes:"));


    if (isNaN(numDice) || isNaN(targetSum) || numDice <= 0 || targetSum < numDice || targetSum > numDice * 6) {
        alert("Please enter valid numbers. The number of dice should be greater than 0, and the sum should be within the valid range.");
        return;
    }

    let totalRolls = 10000;
    let countMatchingSum = 0;


    for (let i = 0; i < totalRolls; i++) {
        let sum = 0;

        for (let j = 0; j < numDice; j++) {
            sum += Math.floor(Math.random() * 6) + 1;
        }

        if (sum === targetSum) {
            countMatchingSum++;
        }
    }


    let probability = (countMatchingSum / totalRolls) * 100;


    document.getElementById("result").innerText = `Probability to get sum ${targetSum} with ${numDice} dice is ${probability.toFixed(2)}%`;
};
