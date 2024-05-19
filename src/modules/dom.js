import { gameboard } from './gameboard.js'

export function printBoard (target){
    //row - loop through the rows
    let grid = [];
    for (let i = 0; i < target.length; i++){
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('row');

        for(let j = 0; j < i.length; j++){
            let cellDiv = document.createElement('div');
            cellDiv.classList.add('cell');
            cellDiv.innerHTML = target[i][j];
            rowDiv.appendChild(cellDiv);
        }
        grid.push(rowDiv);
    }
    return grid;
}
     //create a div called row
     //div class is row
      //column - for each row loop through the columns
       //create a div cell
       //div class is cell
    //content
      //cell contect = designation
      //add class
