import { player1, computer, boardSize } from '../index.js'
import { gameboard } from './gameboard.js';

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





/*
export function shipBtnHander (btnClass, suffix){
    const placement = document.getElementById('placement');
    const shipType = document.getElementById('formTitle');
    const placeBtn = document.getElementById('placeBtn');
    const deployed = document.getElementById('deployed-' + suffix)
    const shipButtons = document.querySelectorAll(btnClass);
    const damageContainer = document.createElement('div');
    damageContainer.classList.add('damContain-suffix');
    deployed.appendChild(damageContainer);


shipButtons.forEach(btn => {
    btn.addEventListener('click', (event)=> {
        let dataShipType = event.target.getAttribute('data-ship-type');
        let dataShipLength = event.target.getAttribute('data-ship-length');
        console.log(arrayShips);
        
        placement.style.display = 'grid';
        //if ship has been placed
       
        if (arrayShips.some(ship => ship.type === dataShipType)){




        damageContainer.innerHTML = "";
        shipType.innerText = dataShipType;
        document.getElementById('deployTitle-' + suffix).innerText = dataShipType;
        placement.style.display = 'none';
        deployed.style.display = 'flex';

        const targetShip = arrayShips.find(ship => ship.type === dataShipType);
        let damage = targetShip.damage;
        
        
        for (let i = 0; i < (dataShipLength - damage); i++){
            let shipDiv = document.createElement('div');
            shipDiv.classList.add('shipDiv-' + suffix);
            damageContainer.appendChild(shipDiv);
        }
        for (let j = 0; j < damage; j++){
            let damaged = document.createElement('div');
            damaged.classList.add('damaged-' + suffix);
            damageContainer.appendChild(damaged);
            
        };
        }
    })
})
};

//Note: Need to move the ships array outside IEF otherwise the function is called without reference to the array
/*
(function (fn) {
    printBoard(player1.gb.board, 'container-p1', player1.gb);
    fn (player1, '.p1', 'p1');
})(shipBtnHander);

(function (fn) {
    printBoard(computer.gb.board, 'container-p1', computer.gb);
    fn (computer, '.com', 'com');
})(shipBtnHander);
*/