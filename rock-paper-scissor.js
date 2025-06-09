//* I need to create the game rock paper scissors. I will
// need to randomly generate numbers in order for the computer
// to generate a choice between the three options. The user will
// make a choice and then I will place the computers choice up against
// the user. I will then need to output a victory or defeat message.

/* Create a function that retrieves a randomly generated number up to 15
// If that number is <= 5 pick rock
// Else if that number is >5 && <=10 pick paper
// Else if that number is >10 && <= 15 pick scissors

/* Create a function that allows the user to enter either rock, paper, or scissors
/* Create a function that places the computers choice against the users choice
// If the user chooses rock and the computer gets paper issues a message saying you lost!
// If the user chooses rock and the computer gets scissors issue a message "you win!"
/* If the user  chooses rock and the computer gets rock then issue a message "It's a draw!" */

console.log(getComputerChoice())

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
    
