var yourname = prompt('What is your name ?');
var computerchoice= 0;
var computerscore = 0;
var playerscore = 0;
var playerchoice =0;

function definePlayerName(txt){
    document.getElementById('message').innerHTML= 
        `Welcome ${txt} are you ready to play ? Press one of the options above.`;
    document.getElementById('playername').innerHTML= txt;
}
function writeMessage(txt){
    document.getElementById('message').innerHTML= txt;
}
function randomNumber(min,max){
    return Math.floor(Math.random() * (max - min +1)) + min;
}
function calculateChoice(player, computer){
    //1>3, 1<2, 3>2. 1-ROCK 2-PAPER 3-SCISSORS
    if(player == computer){
        return 0;
    } else if (player == 1 && computer == 2){
        return 2;
    } else if (player == 1 && computer == 3){
        return 1;
    } else if (player == 2 && computer == 1){
        return 1;
    } else if (player == 2 && computer == 3){
        return 2;
    } else if (player == 3 && computer == 2){
        return 1;
    } else if (player == 3 && computer == 1){
        return 2;
    }
}
function sumPlayerScoreAndShow(){
    playerscore++;
    document.getElementById('playerscore').innerHTML= playerscore;
}
function sumComputerScoreAndShow(){
    computerscore++
    document.getElementById('computerscore').innerHTML= computerscore;
}
function selectedChoice(type, choice){
        document.getElementById(choice + type).classList.add('selected');
}
function unselectChoice(type, choice){
        document.getElementById(choice + type).classList.remove('selected');
}
function playRound(choice){
    playerchoice = choice;
    selectedChoice('player',playerchoice);
    computerchoice = randomNumber(1, 3);
    selectedChoice('computer', computerchoice);
    var winner = calculateChoice(playerchoice, computerchoice);
    
    if(winner == 0){
        writeMessage('Draw')
    }else if(winner == 1){
        writeMessage('You won!!')
        sumPlayerScoreAndShow();
    }else if(winner ==2){
        writeMessage('You lost. :(')
        sumComputerScoreAndShow();
    }
    
    setTimeout(function(){
        unselectChoice('player', playerchoice);
        unselectChoice('computer', computerchoice);

        document.getElementById('message').innerHTML= 
        `Welcome ${yourname} are you ready to play ? Press one of the options above.`;
    }, 1000);
}

document.getElementById('1player').onclick = function() {playRound(1);};
document.getElementById('2player').onclick = function() {playRound(2);};
document.getElementById('3player').onclick = function() {playRound(3);};
 
definePlayerName(yourname);