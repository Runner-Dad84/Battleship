import { gameboard } from './gameboard.js'

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

//Click handler for Carrier
document.getElementById('p1-C').addEventListener('click', () => {
    document.getElementById('placement').style.display = 'grid';
    const shipType = document.getElementById('formTitle').innerText = 'Carrier';
    const placeBtn = document.getElementById('placeBtn');
    if (shipsDOM.some(ship => ship.includes(shipType)) === true) {
        placeBtn.style.display = 'none';
    } else {placeBtn.style.display = 'block'}
})
//Click halder for Battleship
document.getElementById('p1-B').addEventListener('click', () => {
    document.getElementById('placement').style.display = 'grid';
    const shipType = document.getElementById('formTitle').innerText = 'Battleship';
    const placeBtn = document.getElementById('placeBtn');
    if (shipsDOM.some(ship => ship.includes(shipType)) === true) {
        placeBtn.style.display = 'none';
    } else {placeBtn.style.display = 'block'}
})
//Click handler for Destroyer
document.getElementById('p1-D').addEventListener('click', () => {
    document.getElementById('placement').style.display = 'grid';
    const shipType = document.getElementById('formTitle').innerText = 'Destroyer';
    const placeBtn = document.getElementById('placeBtn');
    if (shipsDOM.some(ship => ship.includes(shipType)) === true) {
        placeBtn.style.display = 'none';
    } else {placeBtn.style.display = 'block'}
})
//Click handler for Submarine
document.getElementById('p1-S').addEventListener('click', () => {
    document.getElementById('placement').style.display = 'grid';
    const shipType = document.getElementById('formTitle').innerText = 'Submarine';
    const placeBtn = document.getElementById('placeBtn');
    if (shipsDOM.some(ship => ship.includes(shipType)) === true) {
        placeBtn.style.display = 'none';
    } else {placeBtn.style.display = 'block'}
})
//Click handler for Patrol Boat
document.getElementById('p1-P').addEventListener('click', () => {
    document.getElementById('placement').style.display = 'grid';
    const shipType = document.getElementById('formTitle').innerText = 'Patrol Boat';
    const placeBtn = document.getElementById('placeBtn');
    if (shipsDOM.some(ship => ship.includes(shipType)) === true) {
        placeBtn.style.display = 'none';
    } else {placeBtn.style.display = 'block'}
})




