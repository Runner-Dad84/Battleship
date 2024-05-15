import { gameboard } from './gameboard.js'


export class humanPlayer {
    constructor (name) {
        this.name = name;
        this.wins = 0;
        this.losses = 0;
        this.streak = 0;
        this.gb = new gameboard(7,7);
    }
}

export class compPlayer {
    constructor (name, level) {
        this.name = name;
        this.level = level;
        this.gb = new gameboard(7,7);
    }
}
/*
module.exports = humanPlayer
module.exports = compPlayer
*/