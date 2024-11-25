
function votingProgram() {

    const numberOfCandidates = parseInt(prompt("Enter the number of candidates: "), 10);
    const candidates = [];


    for (let i = 0; i < numberOfCandidates; i++) {
        const name = prompt(`Name for candidate ${i + 1}:`);
        candidates.push({ name: name, votes: 0 });
    }


    const numberOfVoters = parseInt(prompt("Enter the number of voters: "), 10);


    for (let i = 0; i < numberOfVoters; i++) {
        const vote = prompt(`Voter ${i + 1}, enter the candidate's name (or leave empty for an empty vote):`);


        const candidate = candidates.find(c => c.name.toLowerCase() === vote.toLowerCase());
        if (candidate) {
            candidate.votes++;
        }
    }


    candidates.sort((a, b) => b.votes - a.votes);
    const winner = candidates[0];

    console.log(`The winner is ${winner.name} with ${winner.votes} votes.`);
    console.log("Results:");
    candidates.forEach(candidate => {
        console.log(`${candidate.name}: ${candidate.votes} votes`);
    });
}


votingProgram();
