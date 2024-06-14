import { gameboard } from '../modules/gameboard.js'
import { boardSize } from '../index.js'


export class humanPlayer {
    constructor (name) {
        this.name = name;
        this.wins = 0;
        this.losses = 0;
        this.streak = 0;
        this.gb = new gameboard(boardSize,boardSize);
    }
}

export class compPlayer {
    constructor (name, level) {
        this.name = name;
        this.level = level;
        this.gb = new gameboard(boardSize, boardSize);
    }
}
/*
module.exports = humanPlayer
module.exports = compPlayer
*/