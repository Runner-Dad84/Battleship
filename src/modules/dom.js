import { gameboard } from './gameboard.js'

export function printBoard (board, container, player){
    let gb = document.getElementById(container);
    for (let row of board){
        for(let cell of row){
            let element = document.createElement('div');
            element.classList.add('cell');
            element.textContent = cell.value;
            element.dataset.row = cell.r;
            element.dataset.col = cell.c;
            element.addEventListener('click', ()=> {
                let row = element.dataset.row;
                let col = element.dataset.col;
                
                player.receiveAttack(row, col);
                //console.log(element);
            })
            gb.appendChild(element);
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
