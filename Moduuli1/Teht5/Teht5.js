function karkausvuosi() {
    const year = parseInt(prompt("Anna vuosi:"));
    let result;

    if (isNaN(year)) {
        result = "Anna kelvollinen vuosi.";
    } else if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        result = `${year} on karkausvuosi.`;
    } else {
        result = `${year} ei ole karkausvuosi.`;
    }

    document.getElementById("tulos").textContent = result;
}
window.onload = karkausvuosi;
