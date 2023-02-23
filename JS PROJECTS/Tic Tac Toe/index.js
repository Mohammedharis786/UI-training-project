// import { startGame } from "./game.js";

let game = document.querySelectorAll('.cell');
const result = document.querySelector(".result");
const restartgame = document.querySelector(".game--restart")
console.log(game);


var gameArray = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ];
    
const Playerone = 'X';
const Playertwo = '0';

let playerturn = 1;

game.forEach((cell,index) => {
    cell.addEventListener("click", function  startGame() {
        if(cell.innerHTML !=  "")return;
        if(playerturn == 1){
            cell.innerHTML=Playerone;
            playerturn =2
            gameArray[Math.floor(index / 3)][index % 3] = Playerone;
            console.log(gameArray);
        }
        else if(playerturn == 2){
            cell.innerHTML= Playertwo;
            playerturn= 1;
            gameArray[Math.floor(index / 3)][index % 3] = Playertwo;
            console.log(gameArray);
        }
        gameWinner();
         
       })})

       function gameWinner(){
        for (let i = 0; i < 3; i++) {
            if (gameArray[i][0] === gameArray[i][1] && gameArray[i][0] === gameArray[i][2] && gameArray[i][0] !== "") {
              showResult(gameArray[i][0]);
              return;
            }
          }
        for (let i = 0; i < 3; i++) {
            if (gameArray[0][i] === gameArray[1][i] && gameArray[0][i] === gameArray[2][i] && gameArray[0][i] !== "") {
              showResult(gameArray[0][i]);
              return;
            }
          }
          // check for diagonals
          if (gameArray[0][0] === gameArray[1][1] && gameArray[0][0] === gameArray[2][2] && gameArray[0][0] !== "") {
            showResult(gameArray[0][0]);
            return;
          }
          if (gameArray[0][2] === gameArray[1][1] && gameArray[0][2] === gameArray[2][0] && gameArray[0][2] !== "") {
            showResult(gameArray[0][2]);
            return;
          }
    
       }

       function showResult(symbol) {
        if (symbol === Playerone) {
          result.innerHTML = "Player 1 Win!";
        } else if (symbol === Playertwo) {
          result.innerHTML = "Player 2 Win!";
        } 

    }

    // }
   restartgame.addEventListener('click', resetGame)

    function resetGame(){
      location.reload();
      
    }
    console.log('asdfg');
  