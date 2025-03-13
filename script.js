let playerChoiceDiv=document.getElementById("playerChoice");
let computerChoiceDiv=document.getElementById("computerChoice");
let playerPointsDiv=document.getElementById("playerPoints");
let computerPointsDiv=document.getElementById("computerPoints");
let resultDiv=document.getElementById("result");
let rock=document.getElementById("rock");
let paper=document.getElementById("paper");
let scissors=document.getElementById("scissors");
let gameResult=document.getElementById("gameResult");

let computerChoice;
let playerPoints=0;
let computerPoints=0;
let randomNumber

rock.addEventListener("click", function (){playRound("rock")});
paper.addEventListener("click", function (){playRound("paper")});
scissors.addEventListener("click", function (){playRound("scissors")});


function playRound(playerChoice) {
    if (playerPoints<5 && computerPoints<5)
    {
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
        updateStats(playerChoice);
        gameOver()
    }
}

function computerWins()
{
    computerPoints++;
    console.log("Computer wins.");
    console.log(playerPoints);
    console.log(computerPoints);
    resultDiv.textContent="Computer wins.";
}

function playerWins()
{
    playerPoints++;
    console.log("You win.");
    console.log(playerPoints);
    console.log(computerPoints);
    resultDiv.textContent="You win.";
}

function draw()
{
    console.log("Draw.");
    console.log(playerPoints);
    console.log(computerPoints);
    resultDiv.textContent="Draw.";
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


function updateStats(playerChoice){
    playerPointsDiv.textContent=playerPoints;
    computerPointsDiv.textContent=computerPoints;

    if (playerChoice==="rock")
    {
        playerChoiceDiv.textContent="✊";
    }
    else if (playerChoice==="paper")
    {
        playerChoiceDiv.textContent="✋";
    }
    else
    {
        playerChoiceDiv.textContent="✌️";
    }

    if (computerChoice==="rock")
    {
        computerChoiceDiv.textContent="✊";
    }
    else if (computerChoice==="paper")
    {
        computerChoiceDiv.textContent="✋";
    }
    else
    {
        computerChoiceDiv.textContent="✌️";
    }
}
function gameOver()
{
    if(playerPoints===5)
    {
        console.log("YOU WON THE GAME!!!");
        gameResult.textContent="YOU WON THE GAME!!!";
        return;
    }
    else if(computerPoints===5)
    {
        console.log("YOU JUST LOST THE GAME.");
        gameResult.textContent="YOU JUST LOST THE GAME.";
        return;
    }
}