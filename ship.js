class ship {
    constructor(type, length) {
        this.type = type;
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

