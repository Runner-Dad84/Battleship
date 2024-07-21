import { gameboard,  } from './modules/gameboard.js'
import { ship } from './modules/ship.js'
import { humanPlayer, compPlayer } from './modules/player.js'
import { welcomeForm, printBoard, welcomeFormDOM, shipBtnHandler, removeShipBtns, printShipStats , printStats } from './modules/dom.js'
import { placeShip, randomRow, randomCol, randomAttack, targetedAttack, lastHit, storedHit , targetCol, targetRow, savedRow, savedCol } from './modules/computer.js'
import './styles/gameboard.style.css';
import './styles/shipform.style.css';
import './styles/startscreen.style.css';
import './styles/buttons.style.css';


export let player1;
export let computer;

//welcome form
export let boardSize;
const level = document.getElementById('level');


(function welcomeForm (){
   // document.addEventListener('DOMContentLoaded', ()=> {
        const welcomeForm = document.getElementById('welcome');
        
        welcomeForm.addEventListener ('submit', function (event) {
            event.preventDefault();
            boardSize = document.getElementById('size').value;

            //create players
            player1 = new humanPlayer('Andrew');
            computer = new compPlayer('computer', 'easy');
            //place computer ships
            placeComputer(computer);
            //print boards
            printBoard(computer.gb.board, 'container-p2', computer.gb);
            printBoard(player1.gb.board, 'container-p1', player1.gb);
            welcomeFormDOM();
    })
})();

//place user ships randomly
function placeComputer (user) {
    placeShip ('Carrier', user);
    placeShip ('Battleship', user);
    placeShip ('Destroyer', user);
    placeShip ('Submarine', user);
    placeShip ('Patrol Boat', user);
};
//Place player ships randomly on button push
(function randomSetPlayer (){
    const randomBtn = document.getElementById('random');
    randomBtn.addEventListener('click', ()=>{
        placeComputer(player1);
        printBoard(computer.gb.board, 'container-p2', computer.gb);
        printBoard(player1.gb.board, 'container-p1', player1.gb);
        //remove all buttons
        randomBtn.remove();
        removeShipBtns ();
    })

})();

//player place ships on board
document.addEventListener('DOMContentLoaded', ()=> {
    const form = document.getElementById('placement')
    const randomBtn = document.getElementById('random');
    form.addEventListener ('submit', function (event) {
        event.preventDefault();
        const row = document.getElementById('shipRow').value;
        const col = document.getElementById('shipCol').value;
        let shipType = document.getElementById('formTitle').innerText;
        const direction = document.getElementById('direction').value;
        player1.gb.placeNewShip(shipType, row, col, direction);
        printBoard(player1.gb.board, 'container-p1', player1.gb);
        form.style.display = 'none';
        //remove all buttons if all five ships placed
        removeShipBtns();
        randomBtn.remove()
    })})


//listen for player turn
let playerContainer = document.getElementById('container-p1');
let compContainer = document.getElementById('container-p2');

//Listen for player click on computer board to log attack
document.addEventListener('DOMContentLoaded', ()=> {
    compContainer.addEventListener ('click', ()=> {
        console.log('player moves');
        printBoard(computer.gb.board, 'container-p2', computer.gb);
    })

}
);
//Listen for computer board click by player, handler is computer attack
compContainer.addEventListener ('click', function RandomMove () {
    setTimeout(function RandomMove (){
        
        //Level easy - computer always randomly attacks player 1
        if (level.value === 'easy'){
            randomAttack(player1);
            player1.gb.receiveAttack(randomRow, randomCol);
        };
        //Level medium - computer will check adjacent spaces
        if (level.value === 'medium'){
            console.log(`randomRow ${randomRow} randomCol ${randomCol}`)
            console.log(`savedRow ${savedRow} savedCol ${savedCol} `)
            console.log(`targetdRow ${targetRow} targetCol ${targetCol} `)
            
            targetedAttack(player1);
            lastHit(player1, randomRow, randomCol);
            player1.gb.receiveAttack(randomRow, randomCol);
        };
        //print player ship stats
        printStats(player1, 'Carrier', 'C', 'p1');
        printStats(player1, 'Battleship', 'B', 'p1');
        printStats(player1, 'Destroyer', 'D', 'p1');
        printStats(player1, 'Submarine', 'S', 'p1');
        printStats(player1, 'Patrol Boat', 'P', 'p1');
        //print player boad
        printBoard(player1.gb.board, 'container-p1', player1.gb);
        //Displays form pacement upon btn press
        shipBtnHandler('.p1', 'p1');
        
        console.log('computer moves');
    }, 1000);
});

shipBtnHandler();

//console.log(computer.gb.ships);

/*
console.log(boardTest[0][0].value);
console.log(boardTest[3][4].c);
console.log(boardTest[3][4].r);
*/
//attacks
/*
player1.gb.receiveAttack(0, 1);
player1.gb.receiveAttack(1, 0);

computer.gb.receiveAttack(0, 0);
computer.gb.receiveAttack(6, 4);

//how to print ships
console.log(boardTest);
console.log(player1.gb.ships);
console.log(player1.gb.ships[0]);
*/
