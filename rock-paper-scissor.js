//* I need to create the game rock paper scissors. I will
// need to randomly generate numbers in order for the computer
// to generate a choice between the three options. The user will
// make a choice and then I will place the computers choice up against
// the user. I will then need to output a victory or defeat message.

/* Create a function that retrieves a randomly generated number up to 15
// If that number is < .33 pick rock
// Else if that number is > .33 < .66 pick paper
// Else pick scissors

/* Create a function that allows the user to enter either rock, paper, or scissors
/* Create a function that places the computers choice against the users choice
// If the user chooses rock and the computer gets paper issues a message saying you lost!
// If the user chooses rock and the computer gets scissors issue a message "you win!"
/* If the user  chooses rock and the computer gets rock then issue a message "It's a draw!" */



function getComputerChoice() {
    const random = Math.random();
    if (random < .33) {
        return "rock";
    }
    else if (random > .33 && random < .66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
    
function getHumanChoice() { 
    return prompt("enter rock, paper, or scissors:").toLowerCase();
    
}


let humanScore = 0;

let computerScore = 0;

function playGame() {

        function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return `it's a draw! you both chose ${humanChoice}!`;
        }
    
        else if (
            (humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'scissors' && computerChoice === 'paper') ||
            (humanChoice === 'paper' && computerChoice === 'rock')
        )
            {
                humanScore++; 
                return `You win! ${humanChoice} beats ${computerChoice}!`;
            }
        
        else if (
            (computerChoice === 'rock' && humanChoice === 'scissors') ||
            (computerChoice === 'paper' && humanChoice === 'rock') ||
            (computerChoice === 'scissors' && humanChoice === 'paper')
        )
            {
                computerScore++;
                return `You lose! ${computerChoice} beats ${humanChoice}!`;

            }
        
    }

      for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);
        console.log(`Round ${i+1}: ${result}`);
    }
    console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
}



console.log(playGame());