let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3)
    if (choice == 0){
        return "rock";
    }
    if (choice == 1){
        return "paper";
    }
    if (choice == 2){
        return "scissors";
    }
}

function getHumanChoice(){
    let hchoice = prompt("Rock, Paper, or Scissors?");
    return hchoice.toLowerCase();
}

function playRound(computerSelection, playerSelection){
    if(    (computerSelection == "rock" && playerSelection == "scissors")
        || (computerSelection == "scissors" && playerSelection == "paper")
        || (computerSelection == "paper" && playerSelection == "rock")
    ){
        console.log("You lose! " + computerSelection + " beats " + playerSelection + ".");
        computerScore++;
    }

    else if(    (playerSelection == "rock" && computerSelection == "scissors")
        || (playerSelection == "scissors" && computerSelection == "paper")
        || (playerSelection == "paper" && computerSelection == "rock")
    ){
        console.log("You win! " + playerSelection + " beats " + computerSelection + ".");
        humanScore++;
    }

    else if(    (playerSelection == "rock" && computerSelection == "rock")
        || (playerSelection == "scissors" && computerSelection == "scissors")
        || (playerSelection == "paper" && computerSelection == "paper")
    ){
        console.log("It's a tie! You both selected " + playerSelection + ".");
    }
    
    else{
        console.log("invalid input");
    }

    
}

function playGame(){

    for (let index = 0; index < 5; index++) {
        let playerSelection = getHumanChoice()
        let computerSelection = getComputerChoice()
        playRound(computerSelection, playerSelection)
    }
    if(humanScore > computerScore){
        console.log("Congrats! You win!");
    }
    else if(computerScore > humanScore){
        console.log("Sorry! You Lose...")
    }
    else{
        console.log("Tie Game!")
    }
}

playGame();