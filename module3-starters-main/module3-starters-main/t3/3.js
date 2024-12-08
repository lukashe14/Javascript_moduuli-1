'use strict';
const names = ['John', 'Paul', 'Jones']; // Taulukko on valmiina


const target = document.getElementById('target');


let htmlContent = '';


for (let i = 0; i < names.length; i++) {
    htmlContent += `<li>${names[i]}</li>`;
}


target.innerHTML = htmlContent;
