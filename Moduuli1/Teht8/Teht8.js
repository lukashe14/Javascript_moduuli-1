
window.onload = function() {
    let startYear = parseInt(prompt("Enter the start year:"));
    let endYear = parseInt(prompt("Enter the end year:"));


    if (isNaN(startYear) || isNaN(endYear) || startYear > endYear) {
        alert("Please enter valid years. The start year should be less than or equal to the end year.");
        return;
    }


    function isLeapYear(year) {
        return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
    }


    let leapYearsList = document.getElementById("leap-years-list");
    

    for (let year = startYear; year <= endYear; year++) {
        if (isLeapYear(year)) {
            let listItem = document.createElement("li");
            listItem.textContent = year;
            leapYearsList.appendChild(listItem);
        }
    }
};
