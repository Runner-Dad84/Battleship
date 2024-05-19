import { gameboard } from './gameboard.js'

function printBoard (player){
    //row - loop through the rows
    for (let i = 0; i < board.length; i++){
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('row');

        for(let j = 0; j < board.length; j++){
            let cellDiv = document.createElement('div');
            cellDiv.classList.add('cell');
            cellDiv.innerHTML = player.gb.board[c][r];
            rowDiv.appendChild(cellDiv);
        }

        }
    }
     //create a div called row
     //div class is row
      //column - for each row loop through the columns
       //create a div cell
       //div class is cell
    //content
      //cell contect = designation
      //add class

}