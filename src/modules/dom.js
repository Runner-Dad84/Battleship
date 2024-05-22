import { gameboard } from './gameboard.js'

export function printBoard (board, container){
    let gb = document.getElementById(container);
    for (let row of board){
        for(let cell of row){
            let cellEl = document.createElement('div');
            cellEl.classList.add('cell');
            cellEl.textContent = cell;
            cellEl.addEventListener('click', ()=> {
                console.log(cellEl.innerText);
            })
            gb.appendChild(cellEl);
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
