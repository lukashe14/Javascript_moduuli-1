window.onload = function() {
    // Display confirmation box asking if the square root should be calculated
    let userResponse = confirm("Should I calculate the square root?");
    
    // If the user selects OK (true)
    if (userResponse) {
        // Ask for a number using prompt
        let number = prompt("Please enter a number:");
        
        // If a valid number is provided
        if (number !== null && !isNaN(number) && number !== "") {
            let squareRoot = Math.sqrt(number);
            // Display the square root result
            document.getElementById("result").innerHTML = `The square root of ${number} is ${squareRoot}.`;
        } else {
            document.getElementById("result").innerHTML = "Please enter a valid number.";
        }
    } else {
        // If the user selects Cancel
        document.getElementById("result").innerHTML = "The square root is not calculated.";
    }
};
