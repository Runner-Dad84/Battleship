import { player1, computer, boardSize } from '../index.js'
import { gameboard } from './gameboard.js';

//DOM related functionality for submit on welcome form
export function welcomeFormDOM (){
    const welcomeForm = document.getElementById('welcomeForm');
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
            if (element.textContent === 'C-HIT'){
                element.classList.add('C-HIT');
                element.classList.add(container);
            }
            if (element.textContent === 'B-HIT'){
                element.classList.add('B-HIT');
                element.classList.add(container);
            }
            if (element.textContent === 'D-HIT'){
                element.classList.add('D-HIT');
                element.classList.add(container);
            }
            if (element.textContent === 'S-HIT'){
                element.classList.add('S-HIT');
                element.classList.add(container);
            }
            if(element.textContent === 'P-HIT'){
                element.classList.add('P-HIT');
                element.classList.add(container);
            }
            if (element.textContent === 'X') {
                element.classList.add('miss');
            };
            if (element.textContent === 'C' || 
            element.textContent === 'B' || 
            element.textContent === 'D' || 
            element.textContent === 'S' || 
            element.textContent === 'P'){
                element.classList.add('boat');
                element.classList.add(container);
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

//Creates overlay of ship onto board
export function printBoardShips (prefix, targetBoard){ 
    //call min/max outside the possibe range
    let minGridRow = 1000;
    let maxGridRow = -1000;

    let minGridCol = 1000;
    let maxGridCol = -1000;
    
    //return the max/min row/col for ship location
    const targets = document.querySelectorAll(`.${targetBoard}.${prefix}, .${targetBoard}.${prefix}-HIT`);
    const shipLength = targets.length;
    console.log(targets);
    //!!CHANGE class name- remove ! and change to 'Hit')
    targets.forEach(target => {
        
        let currentGridRow = target.dataset.row;
        if (currentGridRow < minGridRow) {
            minGridRow = parseInt(currentGridRow);
        }
        if (currentGridRow > maxGridRow) {
            maxGridRow = parseInt(currentGridRow);
        }
        let currentGridCol = target.dataset.col;
        if (currentGridCol < minGridCol) {
            minGridCol = parseInt(currentGridCol);
        }
        if (currentGridCol > maxGridCol) {
            maxGridCol = parseInt(currentGridCol);
        }
        
    }
)
let container = document.getElementById(targetBoard);
let shipOverlay = document.createElement('div');
shipOverlay.id = (`overlay-${prefix}`);

//if no values do not overlay - used for player placement
if (minGridRow === 1000){return};
//Add 1 to all for conversion from squares to grid lines
//Add 2 to any single length orientation
//vertical
if (minGridCol === maxGridCol){
    let rowEnd = minGridRow + shipLength + 1;
    shipOverlay.classList.add(`vert-overlay-${prefix}`);
    shipOverlay.style.gridColumnStart = minGridCol + 1;
    shipOverlay.style.gridColumnEnd = minGridCol + 2;
    shipOverlay.style.gridRowStart = minGridRow + 1;
    shipOverlay.style.gridRowEnd = rowEnd;
//horizontal
} else {
    let colEnd =  minGridCol + shipLength + 1;
    shipOverlay.classList.add(`horz-overlay-${prefix}`);
    shipOverlay.style.gridRowStart = minGridRow + 1;
    shipOverlay.style.gridRowEnd = minGridRow + 2;
    shipOverlay.style.gridColumnStart = minGridCol + 1;
    shipOverlay.style.gridColumnEnd = colEnd;
}
container.appendChild(shipOverlay);
};
//function to overlay all player ships
export function playerShipOverlay (){
    printBoardShips('P', 'container-p1');
    printBoardShips('B', 'container-p1');
    printBoardShips('D', 'container-p1');
    printBoardShips('S', 'container-p1');
    printBoardShips('C', 'container-p1');
}


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

export function displayComputer () {
    if (arrayShips.length === 5){
        let computerDisplay = document.getElementById('comConsole');
        computerDisplay.style.display = 'grid';
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
    if (length === damage){
        let thisID = document.getElementById(prefix + '-' + suffix);
        console.log(thisID);
        thisID.classList.add('sunk');
    }
};