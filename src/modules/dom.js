import { player1, computer, boardSize } from '../index.js'
import { gameboard } from './gameboard.js';

//DOM related functionality for submit on welcome form
export function welcomeFormDOM (){
    const welcomeForm = document.getElementById('welcome');
    const startScreen = document.getElementById('startscreen');
    const mainPage = document.getElementById('mainpage');    
    //print player name
    let name = document.getElementById('name').value;
    document.getElementById('playerName').textContent = name;

    //remove start screen and welcome form
    welcomeForm.style.display = 'none';
    startScreen.style.display = 'none';
    //reveal the main page
    mainPage.style.display = 'block';
    mainPage.style.backgroundColor = 'white';
    
};


export let arrayShips = [];

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
                element.classList.add(element.textContent);
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
}

export function printBoardShips (prefix){
    let minGridRow = 1000;
    let maxGridRow = -1000;

    let minGridCol = 1000;
    let maxGridCol = -1000;

    const targets = document.querySelectorAll(`.${prefix}`);
    targets.forEach(target => {
        
        let currentGridRow = target.dataset.row;
        if (currentGridRow < minGridRow) {
            minGridRow = currentGridRow;
        }
        if (currentGridRow > maxGridRow) {
            maxGridRow = currentGridRow;
        }

        let currentGridCol = target.dataset.col;
        if (currentGridCol < minGridCol) {
            minGridCol = currentGridCol;
        }
        if (currentGridCol > maxGridCol) {
            maxGridCol = currentGridCol;
        }

    }
)
console.log(minGridRow);
console.log(maxGridRow);
console.log(minGridCol);
console.log(maxGridCol);
};


//Ship buttons hander to display form with correct title
export function shipBtnHandler (){
    const shipButtons = document.querySelectorAll('.p1');
    const placement = document.getElementById('placement');
    const formTitle = document.getElementById('formTitle');
    
    shipButtons.forEach(btn => {
        btn.addEventListener('click', (event)=> {
            placement.style.display = 'grid';
            let dataShipType = event.target.getAttribute('data-ship-type');
            formTitle.innerText = dataShipType;

            //if ship has been placed
            if (arrayShips.some(ship => ship.type === dataShipType)){
            placement.style.display = 'none';
}})})}

//if all ships placed remove buttons
export function removeShipBtns () {
    if (arrayShips.length === 5){
        let shipBtns = document.getElementById('shipButtons');
        shipBtns.remove();
    }
}

export function printStats (player, ship, suffix, prefix) {
    //ship data
    const fleet = player.gb.ships;
    const thisShip = fleet.find(target => target.type === ship);
    console.log(fleet);
    const length = thisShip.length;
    const damage = thisShip.damage;
    //containers for life-damage
    const damDiv = document.createElement('div');
    const statsDiv = document.getElementById(prefix + '-stat-' + suffix);
    //prevent reprinting prior data
    statsDiv.innerHTML = "";
    //print damage and life
    for (let j = 0; j < damage; j++){
        let damaged = document.createElement('div');
        damaged.classList.add('damaged');
        statsDiv.appendChild(damaged);
    }    
    for (let i = 0; i < (length - damage); i++){
        let life = document.createElement('div');
        life.classList.add('life');
        statsDiv.appendChild(life);
    }
};