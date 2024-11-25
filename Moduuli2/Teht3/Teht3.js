
const dogCount = 6;
const dogNames = [];


for (let i = 0; i < dogCount; i++) {
  const name = prompt(`Enter the name of dog ${i + 1}:`);
  if (name) {
    dogNames.push(name.trim());
  } else {
    alert("Name cannot be empty!");
    i--;
  }
}


dogNames.sort((a, b) => b.localeCompare(a));


const outputDiv = document.getElementById("output");
const ul = document.createElement("ul");

dogNames.forEach(name => {
  const li = document.createElement("li");
  li.textContent = name;
  ul.appendChild(li);
});

outputDiv.appendChild(ul);
