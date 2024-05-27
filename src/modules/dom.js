import { gameboard } from './gameboard.js'

//print player/ computer gameboard
export function printBoard (board, container, player){
    let gb = document.getElementById(container);
    gb.innerHTML = "";
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
                console.log(element);
            })
            gb.appendChild(element);
        }
    }
}





