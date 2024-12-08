// Hae elementti, jonka id on "target"
const target = document.getElementById('target');

// Luo ja lisää ensimmäinen listaelementti
const firstItem = document.createElement('li');
firstItem.textContent = 'First item';
target.appendChild(firstItem);

// Luo ja lisää toinen listaelementti
const secondItem = document.createElement('li');
secondItem.textContent = 'Second item';
secondItem.classList.add('my-item'); // Lisää luokka 'my-item'
target.appendChild(secondItem);

// Luo ja lisää kolmas listaelementti
const thirdItem = document.createElement('li');
thirdItem.textContent = 'Third item';
target.appendChild(thirdItem);
