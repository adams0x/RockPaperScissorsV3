
var computersChosenResult;
var userIsWinner;
var guesses = [];
var userAttempts = 0;
const maxAttempts = 5;


function rockClicked(){
    calcWinner(0, computerSelection());
    gameResultUpdate(userIsWinner);
}


function paperClicked(){
    calcWinner(1, computerSelection());
    gameResultUpdate(userIsWinner);
}


function scissorsClicked(){
    calcWinner(2, computerSelection());
    gameResultUpdate(userIsWinner);
}

function gameResultUpdate(isWinner){
    if(isWinner==1){
        document.getElementById("idPlayResult").innerHTML="Attempt #" + userAttempts +" (of "+maxAttempts+"): Well done, you win ! Computer chose " + computersChosenResult;
        document.getElementById("idPlayResult").style.backgroundColor = "chartreuse";
    }
    else if(isWinner==0){
        document.getElementById("idPlayResult").innerHTML="Attempt #" + userAttempts +" (of "+maxAttempts+"): Its a draw, computer chose " + computersChosenResult;
        document.getElementById("idPlayResult").style.backgroundColor = "orange";
    }
    else{
        document.getElementById("idPlayResult").innerHTML="Attempt #" + userAttempts +" (of "+maxAttempts+"): Sorry, you lost, computer chose " + computersChosenResult;
        document.getElementById("idPlayResult").style.backgroundColor = "crimson";
    }

    if(userAttempts>=maxAttempts || userIsWinner==1){
        document.getElementById("idPlayResult").innerHTML+="<br><br>";
        document.getElementById("idPlayResult").innerHTML+="Your choices were:" + guesses.toString();
    }

}


function computerSelection(){
    return Math.floor(Math.random() * 3);
}



function calcWinner(userSelection, computerSelection){

    userAttempts++;

    if(computerSelection == 0){
        computersChosenResult="rock";
    }
    else if(computerSelection == 1){
        computersChosenResult="paper";
    }
    else if(computerSelection == 2){
        computersChosenResult="scissors";
    }
    else{
        computersChosenResult="some invalid choice!";
    }

    if(userSelection == 0){
        guesses.push(" Rock");
    }
    else if(userSelection == 1){
        guesses.push(" Paper");
    }
    else if(userSelection == 2){
        guesses.push(" Scissors");
    }
    else{
        guesses.push(" Invalid!");
    }


    if(userSelection == computerSelection){
        userIsWinner = 0;
    }
    else{
        if(userSelection==0 && computerSelection==2){
            userIsWinner = 1;
        }
        else if(userSelection==1 && computerSelection==0){
            userIsWinner = 1;
        }
        else if(userSelection==2 && computerSelection==1){
            userIsWinner = 1;
        }
        else
        userIsWinner = 2;
    }

    if(userAttempts>=maxAttempts || userIsWinner==1){
        document.getElementById("idRockButton").disabled=true;
        document.getElementById("idPaperButton").disabled=true;
        document.getElementById("idScissorsButton").disabled=true;
    }

}