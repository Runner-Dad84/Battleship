//import { gameboard } from './gameboard.js'
import { player1, boardSize } from '../index.js'

//DOM related functionality for submit on welcome form
export function welcomeFormDOM (){
    const welcomeForm = document.getElementById('welcome');
    const startScreen = document.getElementById('startscreen');
    
    //print player name
    let name = document.getElementById('name').value;
    document.getElementById('playerName').textContent = name;

    //remove start screen and welcome form
    welcomeForm.style.display = 'none';
    startScreen.style.display = 'none';
};


let arrayShips;

//print player/ computer gameboard
export function printBoard (board, container, player){
    let gb = document.getElementById(container);
    let shipRow = document.getElementById('shipRow');
    let shipCol = document.getElementById('shipCol');

    //dynamically set the max row/col size on placement form
    shipRow.max = boardSize;
    shipCol.max = boardSize;

    //dynamically set the grid size
    gb.style.gridTemplateRows = `repeat(${boardSize}, 1fr)`;
    gb.style.gridTemplateColumns = `repeat(${boardSize}, 1fr)`;

    //print each cell with values
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
    arrayShips = player.ships;
    //console.log(arrayShips);
}


(function shipBtnHander (){
    const placement = document.getElementById('placement');
    const shipType = document.getElementById('formTitle');
    const placeBtn = document.getElementById('placeBtn');
    const deployed = document.getElementById('deployed')
    const shipButtons = document.querySelectorAll('.p1');

shipButtons.forEach(btn => {
    btn.addEventListener('click', (event)=> {
        let dataShipType = event.target.getAttribute('data-ship-type');
        let dataShipLength = event.target.getAttribute('data-ship-length');
        shipType.innerText = dataShipType;
        placement.style.display = 'grid';
        deployed.style.display = 'none';
        //if ship has been placed already display ship stats
       if (arrayShips.some(ship => ship.type === dataShipType)){
        document.getElementById('deployTitle').innerText = dataShipType;
        placement.style.display = 'none';
        deployed.style.display = 'flex';

        const targetShip = arrayShips.find(ship => ship.type === dataShipType);
        let damage = targetShip.damage;
        shipDamage.innerHTML = '';

        for (let i = 0; i < (dataShipLength - damage); i++){
            let shipDiv = document.createElement('div');
            shipDiv.classList.add('shipDiv');
            shipDamage.appendChild(shipDiv);
        }
        for (let j = 0; j < damage; j++){
            let damaged = document.createElement('div');
            damaged.classList.add('damaged');
            shipDamage.appendChild(damaged);
            
        };
        }
    })
})
})();