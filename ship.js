class ship {
    constructor(length, hits, sunk) {
        this.length = 1;
        this.damage = 0;
        this.sunk = false;
    }
    hit(){
        this.damage++;
    }
    isSunk(){
        if (this.damage === this.length){
            return this.sunk = true;
        }
    }
};

module.exports = ship

