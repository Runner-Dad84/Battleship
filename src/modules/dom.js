//import { gameboard } from './gameboard.js'
import { player1 } from '../index.js'

//print player/ computer gameboard
export function printBoard (board, container, player){
    let gb = document.getElementById(container);
    gb.innerHTML = "";
    for (let row of board){
        for(let cell of row){
            let element = document.createElement('div');
            element.textContent = cell.value;
            if (element.textContent === '0') {
                element.classList.add('cell');
            };
            if (element.textContent === '!') {
                element.classList.add('hit');
            };
            if (element.textContent === 'X') {
                element.classList.add('miss');
            };
            if (element.textContent === 'C' || 
            element.textContent === 'B' || 
            element.textContent === 'D' || 
            element.textContent === 'C' || 
            element.textContent === 'S' || 
            element.textContent === 'P'){
                element.classList.add('boat');
            }
            
            element.dataset.row = cell.r;
            element.dataset.col = cell.c;
            //hover to reveal space dataset
            element.addEventListener('mouseover', ()=> {
                let row = Number(element.dataset.row);
                let col = Number(element.dataset.col);
                element.textContent = `${row}, ${col}`;
            })
            //hover out
            element.addEventListener('mouseout', ()=> {
                let row = element.dataset.row;
                let col = element.dataset.col;
                element.textContent = cell.value;
            })
            //click board to attack
            element.addEventListener('click', ()=> {
                let row = element.dataset.row;
                let col = element.dataset.col;
                //record attack
                player.receiveAttack(row, col);
                //check if player wins game
                if (player.checkSunk() === true) {
                    return alert('Game Over!');
                };
            })
            gb.appendChild(element);
        }
    }
}

//Player placements of ships
export let shipsDOM = [];

(function shipBtnHander (){
    const placement = document.getElementById('placement');
    const shipType = document.getElementById('formTitle');
    const placeBtn = document.getElementById('placeBtn');
    const deployed = document.getElementById('deployed')
    const shipButtons = document.querySelectorAll('.p1');

shipButtons.forEach(btn => {
    btn.addEventListener('click', (event)=> {
        let dataShipType = event.target.getAttribute('data-ship-type');
        shipType.innerText = dataShipType;
        placement.style.display = 'grid';
        if (shipsDOM.some(ship => ship.includes(dataShipType )) === true) {
            document.getElementById('deployTitle').innerText = dataShipType;
            placement.style.display = 'none';
            deployed.style.display = 'grid';
        } else {placeBtn.style.display = 'block'}
        
    })
})
})();



