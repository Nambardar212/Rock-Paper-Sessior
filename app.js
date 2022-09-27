let playerScore = 0;
let computerScore = 0;
let moves = 0;

    

    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');

        rockBtn.disabled = false;
        paperBtn.disabled = false;
        scissorBtn.disabled = false;

        const playerOptions = [rockBtn, paperBtn, scissorBtn];
        const computerOptions = ['ROCK', 'PAPER', 'SCISSORS'];
        
        const numberOfMoves = document.querySelector('#gamenumber');
        if(numberOfMoves.value == '') {
            alert('Please Enter Moves');
            return;
        }
        document.querySelector('.movesLeft').innerHTML = 'Moves Left : ' + numberOfMoves.value;

        playerOptions.forEach(option => {
            option.addEventListener('click', () => {
                 const nm = numberOfMoves.value;
                 const movesLeft = document.querySelector('.movesLeft');
                 moves++;
                 if(nm - moves < 3) {
                    movesLeft.innerHTML = `Moves Left : ${nm - moves}`;
                    movesLeft.style.color = 'red';
                 }
                 else if(nm - moves >= 3) {
                    movesLeft.innerHTML = `Moves Left : ${nm - moves}`;
                 }
                 
                 const choiceNumber = Math.floor(Math.random()*3);
                 const comouterChoice = computerOptions[choiceNumber];

                 winner(option.innerText, comouterChoice);
                 
                 if(moves == nm) {
                    gameOver(playerOptions, movesLeft);
                 }
            })
        })
    }

    const winner = (player, computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        
        if(player === computer) {
            result.textContent = 'TIE'
        }

        else if(player == 'rock') {
            if(computer == 'paper') {
                result.textContent = 'LOSE';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'WON';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }

        else if (player == 'scissors') {
            if(computer == 'rock') {
                result.textContent = 'LOSE';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'WON';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }

        else if (player == 'paper') {
            if(computer == 'scissors') {
                result.textContent = 'LOSE';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'WON';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }

    const gameOver = (playerOptions, movesLeft) => {
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result1');
        const reloadBtn = document.querySelector('.reload');
        const result1 = document.querySelector('.result');

        result1.style.display = 'none';

        playerOptions.forEach(option => {
            option.style.display = 'none';
        })

        chooseMove.innerText = 'Game Over!!'
        chooseMove.style.color = 'rgb(206, 53, 99)'
        movesLeft.style.display = 'none';

        if(playerScore > computerScore) {
            result.style.fontSize = '4rem';
            result.innerHTML = 'WON'
            result.style.color = '#308D46'
        }
        else if (playerScore < computerScore) {
            result.style.fontSize = '4rem';
            result.innerHTML = 'LOSE';
            result.style.color = 'red';
        }
        else {
            result.style.fontSize = '4rem';
            result.innerHTML = 'TIE';
            result.style.color = 'grey';
        }

        reloadBtn.innerHTML = 'Restart';
        reloadBtn.style.display = 'flex';
        reloadBtn.addEventListener('click', () => {
            window.location.reload();
        })
    }



    

