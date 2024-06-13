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
/*
//Click handler for Carrier
document.getElementById('p1-C').addEventListener('click', () => {
    const placement = document.getElementById('placement');
    const shipType = document.getElementById('formTitle').innerText = 'Carrier';
    const placeBtn = document.getElementById('placeBtn');
    const deployed = document.getElementById('deployed')
    let shipDisplay = document.getElementById('shipDisplay');
    placement.style.display = 'grid';
    if (shipsDOM.some(ship => ship.includes(shipType)) === true) {
        document.getElementById('deployTitle').innerText = 'Carrier';
        placement.style.display = 'none';
        deployed.style.display = 'grid';
    } else {placeBtn.style.display = 'block'}
})
//Click halder for Battleship
document.getElementById('p1-B').addEventListener('click', () => {
    const placement = document.getElementById('placement');
    const shipType = document.getElementById('formTitle').innerText = 'Battleship';
    const placeBtn = document.getElementById('placeBtn');
    const deployed = document.getElementById('deployed')
    placement.style.display = 'grid';
    if (shipsDOM.some(ship => ship.includes(shipType)) === true) {
        document.getElementById('deployTitle').innerText = 'Battleship';
        placement.style.display = 'none';
        deployed.style.display = 'grid';
    } else {placeBtn.style.display = 'block'}
})
//Click handler for Destroyer
document.getElementById('p1-D').addEventListener('click', () => {
    const placement = document.getElementById('placement');
    const shipType = document.getElementById('formTitle').innerText = 'Destroyer';
    const placeBtn = document.getElementById('placeBtn');
    const deployed = document.getElementById('deployed')
    placement.style.display = 'grid';
    if (shipsDOM.some(ship => ship.includes(shipType)) === true) {
        document.getElementById('deployTitle').innerText = 'Destroyer';
        placement.style.display = 'none';
        deployed.style.display = 'grid';
    } else {placeBtn.style.display = 'block'}
})
//Click handler for Submarine
document.getElementById('p1-S').addEventListener('click', () => {
    const placement = document.getElementById('placement');
    const shipType = document.getElementById('formTitle').innerText = 'Submarine';
    const placeBtn = document.getElementById('placeBtn');
    const deployed = document.getElementById('deployed')
    placement.style.display = 'grid';
    if (shipsDOM.some(ship => ship.includes(shipType)) === true) {
        document.getElementById('deployTitle').innerText = 'Submarine';
        placement.style.display = 'none';
        deployed.style.display = 'grid';
    } else {placeBtn.style.display = 'block'}
})
//Click handler for Patrol Boat
document.getElementById('p1-P').addEventListener('click', () => {
    const placement = document.getElementById('placement');
    const shipType = document.getElementById('formTitle').innerText = 'Patrol Boat';
    const placeBtn = document.getElementById('placeBtn');
    const deployed = document.getElementById('deployed')
    placement.style.display = 'grid';
    if (shipsDOM.some(ship => ship.includes(shipType)) === true) {
        document.getElementById('deployTitle').innerText = 'Patrol Boat';
        placement.style.display = 'none';
        deployed.style.display = 'grid';
    } else {placeBtn.style.display = 'block'}
});
*/

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



