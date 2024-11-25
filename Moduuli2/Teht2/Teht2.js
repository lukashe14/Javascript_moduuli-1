// Ask the user for the number of participants
const participantCount = Number(prompt("Enter the number of participants:"));

if (!isNaN(participantCount) && participantCount > 0) {
  const participants = [];

  // Ask for each participant's name
  for (let i = 0; i < participantCount; i++) {
    const name = prompt(`Enter the name of participant ${i + 1}:`);
    if (name) {
      participants.push(name.trim());
    } else {
      alert("Name cannot be empty!");
      i--; // Ask again if input is invalid
    }
  }

  // Sort participants alphabetically
  participants.sort();

  // Generate an ordered list and add it to the page
  const outputDiv = document.getElementById("output");
  const ol = document.createElement("ol");

  participants.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    ol.appendChild(li);
  });

  outputDiv.appendChild(ol);
} else {
  alert("Invalid number of participants. Please reload the page and try again.");
}
