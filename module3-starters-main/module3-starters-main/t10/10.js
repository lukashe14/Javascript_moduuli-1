'use strict';

const form = document.getElementById('source');
const target = document.getElementById('target');


form.addEventListener('submit', (event) => {

  event.preventDefault();


  const firstName = form.querySelector('input[name="firstname"]').value.trim();
  const lastName = form.querySelector('input[name="lastname"]').value.trim();


  if (firstName && lastName) {
    target.textContent = `Your name is ${firstName} ${lastName}`;
  } else {
    target.textContent = 'Please fill in both fields.';
  }
});
