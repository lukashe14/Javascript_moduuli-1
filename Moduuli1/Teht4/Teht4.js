const name = prompt('Enter your name')
let house ="";

const max = 4
const min = 1

let luokka = Math.floor(Math.random() * (max - min + 1)) + min;

if (luokka==1) {
    house="gryffindor"
}

if (luokka==2) {
    house="slytherin"
}

if (luokka==3) {
    house="hufflepuff"
}

if (luokka==4) {
    house="ravenclaw"
}

document.getElementById("teht4").textContent = `${name} you are a ${house}`