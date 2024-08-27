
let computerscore=0;
let humanscore=0;
let gameOver=false;
  
function compChoice(){
    let random_val = Math.random()
    let comp;
    if(random_val >=0 && random_val< 0.3 ){
        comp="ROCK"
    }
    else if (random_val>=0.3 && random_val<0.7){
        comp="PAPER"
    }
    else if (random_val >= 0.7 && random_val<1){
        comp="SCISSORS"
    }
    return comp}

function humanchoice() {
    let human = prompt("enter your choice (ROCK,PAPER OR SCISSORS)")
     human =human.toUpperCase();
     return human
}
function playgame(humanChoice) {
    if (gameOver) return;
    let comp = compChoice();
    let result = '';

    if (humanChoice === comp) {
        result = `Computer chose: ${comp}. It's a tie!`
    } else if (
        (humanChoice === "ROCK" && comp === "SCISSORS") ||
        (humanChoice === "PAPER" && comp === "ROCK") ||
        (humanChoice === "SCISSORS" && comp === "PAPER")
    ) {
        result = `Computer chose: ${comp}. You win this round!`;
        humanscore++;
    } else {
        result = `Computer chose: ${comp}. Computer wins this round!`;
        computerscore++;
    }
    document.getElementById('result').innerHTML= result;
    document.getElementById('score').innerHTML= `Score - Human: ${humanscore} | Computer: ${computerscore}`;

    if (humanscore === 5 || computerscore === 5) {
        gameOver = true;
        let winnerMessage = humanscore === 5 ? "YOU WON THE GAME :D" : "Computer WON THE GAME :(" ;
        document.getElementById('final-result').innerHTML = winnerMessage;
        document.getElementById('new-game').style.display = 'block'; // Show "Start New Game" button
        
        
        }
    }
  

function resetgame() {
    humanscore=0;
    computerscore=0;
    gameOver=false
    document.getElementById('score').innerHTML = 'Score - Human: 0 | Computer: 0';
    document.getElementById('result').innerHTML = '';
    document.getElementById('final-result').innerHTML = '';
    document.getElementById('new-game').style.display = 'none'; }
