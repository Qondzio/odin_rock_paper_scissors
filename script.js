let playerChoice 
let randomNumber
let computerChoice
let playerPoints=0;
let computerPoints=0;


function playRound() {
    alert("Welcome to the 'Rock, paper, scissors' game!")
    while(computerPoints<5 && playerPoints<5){
        playerChoice =  prompt("Choose 'rock', 'paper' or 'scissors'.");
        getComputerChoice();

        switch (playerChoice) {
            case "rock":
                if (computerChoice==="rock") 
                    {
                        draw();
                    }
                else if(computerChoice==="paper")
                    {
                        computerWins();
                    }
                else
                    {
                        playerWins();
                    }
            break;

            case "paper":
                if (computerChoice=="rock") 
                    {
                        playerWins();
                    }
                else if(computerChoice==="paper")
                    {
                        draw();
                    }
                else
                    {
                        computerWins();
                    }
            break;
            
            case "scissors":
                if (computerChoice==="rock") 
                    {
                        computerWins();
                    }
                else if(computerChoice==="paper")
                    {
                        playerWins();
                    }
                else
                    {
                        draw();
                    }
            break;
        }
    }
    gameOver()
}

function computerWins()
{
    computerPoints++;
    console.log("Computer wins.");
    console.log(playerPoints);
    console.log(computerPoints);
}

function playerWins()
{
    playerPoints++;
    console.log("You win.");
    console.log(playerPoints);
    console.log(computerPoints);
}

function draw()
{
    console.log("Draw.");
    console.log(playerPoints);
    console.log(computerPoints);
}

function getComputerChoice()
{
    randomNumber=Math.random();

    if(randomNumber<0.33)
    {
        computerChoice= "rock";
    }
    else if(randomNumber>=0.33 && randomNumber<0.66)
    {
        computerChoice= "paper";
    }
    else
    {
        computerChoice= "scissors";
    }
}


function gameOver()
{
    if(playerPoints===5)
    {
        console.log("YOU WON THE GAME!!!");
        return;
    }
    else
    {
        console.log("YOU JUST LOST THE GAME.");
        return;
    }
}