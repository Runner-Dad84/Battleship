import { gameboard } from '../modules/gameboard.js'
import { ship } from '../modules/ship.js'


/*
let dirUp = 'Up';
let dirDn = 'Down';
let dirRt = 'Right';
let dirLt = 'Left'
*/

const randomNum = {
    get value (){
        return Math.floor(Math.random() * 7);
    }
};

export function placeComputerShip (ship, dir) {
    computer.gb.placeNewShip(ship, randomNum.value, randomNum.value, dir);
};

/*
(function placeBattleship () {
    computer.gb.placeNewShip('Battleship', randomNum.value, randomNum.value, 'Up');
})();

(function placeCarrier (){
    computer.gb.placeNewShip('Destroyer', randomNum.value, randomNum.value, 'Right');
})();
*/