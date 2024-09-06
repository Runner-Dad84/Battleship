import { gameboard,  } from './modules/gameboard.js'
import { ship } from './modules/ship.js'
import { humanPlayer, compPlayer } from './modules/player.js'
import { printBoard, welcomeFormDOM, displayComputer, shipBtnHandler, removeShipBtns, printStats, printPlayerStats, printComStats, playerShipOverlay } from './modules/dom.js'
import { placeComputer, randomRow, randomCol, randomAttack, targetedAttack, lastHit, storedHit , targetCol, targetRow, savedRow, savedCol } from './modules/computer.js'
import { AudioEventFn } from './modules/audio.js'
import './styles/gameboard.style.css';
import './styles/shipform.style.css';
import './styles/startscreen.style.css';
import './styles/buttons.style.css';
import './styles/mainpage.style.css';
import missileFired from './audio/missileFired.wav';
import boathorn from './audio/boathorn.wav';
import explosion from './audio/explosion.wav';

export let player1;
export let computer;


document.addEventListener('AudioEvent', (e)=> {

    if (e.detail.type === 'Missile'){
        const missileSound = new Audio(missileFired);
        missileSound.play();
    }
    if (e.detail.type === 'horn'){
        const hornSound = new Audio(boathorn);
        hornSound.play();
    }
    if (e.detail.type === 'explosion'){
        const explosionSound = new Audio(explosion);
        setTimeout(() => {
            explosionSound.play();
        }, 3000)
    }
    
})

//welcome form
export let boardSize;
const level = document.getElementById('level');
(function welcomeForm (){
   // document.addEventListener('DOMContentLoaded', ()=> {
        const welcomeForm = document.getElementById('welcomeForm');
        
        welcomeForm.addEventListener ('submit', function (event) {
            event.preventDefault();
            boardSize = document.getElementById('size').value;

            //create players
            player1 = new humanPlayer('Andrew');
            computer = new compPlayer('computer', 'easy');
            printBoard(player1.gb.board, 'container-p1', player1.gb);
            welcomeFormDOM();
    })
})();

//player place all player ships randomly on button push
(function randomSetPlayer (){
    const randomBtn = document.getElementById('random');
    randomBtn.addEventListener('click', ()=>{
        placeComputer(player1);
        printBoard(player1.gb.board, 'container-p1', player1.gb);
        playerShipOverlay();
        //remove all buttons
        removeShipBtns ();
        //place and print computer board and ships
        document.getElementById('mainpage').classList.add('mainPage');
        displayComputer();
        placeComputer(computer);
        printBoard(computer.gb.board, 'container-p2', computer.gb);
        let hornSound = AudioEventFn ('horn');
        document.dispatchEvent(hornSound);
    })

})();

//player place ships on board manually
document.addEventListener('DOMContentLoaded', ()=> {
    const form = document.getElementById('placement')
    const randomBtn = document.getElementById('random');
    form.addEventListener ('submit', function (event) {
        event.preventDefault();
        //ship count prior to placement
        let startCount = player1.gb.ships.length;
        //store vales from input form
        const row = document.getElementById('shipRow').value;
        const col = document.getElementById('shipCol').value;
        let shipType = document.getElementById('formTitle').innerText;
        const direction = document.getElementById('direction').value;
        let shipID = shipType.slice(0, 1);
        //place ship
        player1.gb.placeNewShip(shipType, row, col, direction);
        //ship count after attemtped placement
        let newCount = player1.gb.ships.length;
        //print player board, overlay, ship stats
        printBoard(player1.gb.board, 'container-p1', player1.gb);
        playerShipOverlay();
        printStats(player1, shipType, shipID, 'p1');
        form.style.display = 'none';
        //remove all buttons if all five ships placed
        removeShipBtns();
        randomBtn.remove()
        //check if ship was placed
        let hornSound = AudioEventFn ('horn');
        if((newCount > startCount) && (newCount < 5)){
            document.dispatchEvent(hornSound);
            // if so add deployed class ship btn
            let targetBtn = document.getElementById(`btn-${shipType}`);
            targetBtn.classList.add('deployedShip')
        }
        //if all ships place display computer
        if(player1.gb.ships.length === 5){
            document.dispatchEvent(hornSound);
            displayComputer();
            placeComputer(computer);
            printBoard(computer.gb.board, 'container-p2', computer.gb);
        }
    })}
)

//listen for player turn
let playerContainer = document.getElementById('container-p1');
let compContainer = document.getElementById('container-p2');

//Listen for player click on computer board to log attack
document.addEventListener('DOMContentLoaded', ()=> {
    compContainer.addEventListener ('click', ()=> {
        console.log('player moves');
        //print board and stats after sec delay (no overlay on computer board)
        function printComBoardStats(){
            printComStats();
            printBoard(computer.gb.board, 'container-p2', computer.gb)
        };
        setTimeout(() => {printComBoardStats()
        }, 3000)
        }) 
    })

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
        
        //print player boad, ship overlays & ship stats with 3 sec delay from audio
        function printBoardandOverlays(){
            printBoard(player1.gb.board, 'container-p1', player1.gb);
            playerShipOverlay()
            printPlayerStats()
        };
        setTimeout(() => {printBoardandOverlays()}, 3000)

        shipBtnHandler('.p1', 'p1');
        console.log('computer moves');
    }, 5500);
});

shipBtnHandler();



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
