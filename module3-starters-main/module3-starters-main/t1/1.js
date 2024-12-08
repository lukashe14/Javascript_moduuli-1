// Valitse <ul> elementti
const ulElement = document.getElementById('target');

// Valitse kaikki irralliset <li> elementit
const looseListItems = document.querySelectorAll('body > li');

// Siirrä irralliset <li> elementit <ul>-elementin sisälle
looseListItems.forEach(item => {
    ulElement.appendChild(item); // Siirretään <li> osaksi <ul>
});

// Lisätään uusi item listaan
const newListItem = document.createElement('li');
newListItem.textContent = 'Fourth item';
ulElement.appendChild(newListItem);
