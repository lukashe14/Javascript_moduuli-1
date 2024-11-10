
window.onload = function() {

    let number = parseInt(prompt("Enter an integer:"));


    if (isNaN(number) || number <= 1) {
        alert("Please enter a valid integer greater than 1.");
        return;
    }


    function isPrime(n) {
        if (n === 2) {
            return true; // 2 is a prime number
        }
        if (n % 2 === 0 || n === 1) {
            return false; // Any even number or 1 is not prime
        }
        for (let i = 3; i <= Math.sqrt(n); i += 2) {
            if (n % i === 0) {
                return false; // Found a divisor, not prime
            }
        }
        return true; // No divisors found, prime number
    }


    let resultText = isPrime(number) ? "The number " + number + " is a prime number." : "The number " + number + " is not a prime number.";


    document.getElementById("result").innerText = resultText;
};
