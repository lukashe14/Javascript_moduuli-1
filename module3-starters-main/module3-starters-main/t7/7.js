'use strict';

const trigger = document.getElementById('trigger');
const target = document.getElementById('target');


trigger.addEventListener('mouseover', () => {
    target.src = 'img/picB.jpg'; // Muuta tämä polku oikeaksi
});


trigger.addEventListener('mouseout', () => {
    target.src = 'img/picA.jpg';
});
