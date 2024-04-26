class ship {
    constructor(type) {
        this.type = type;
        this.length = 0;
        this.damage = 0;
        this.sunk = false;

        if (this.type === 'carrier'){
            this.length = 5;
        };

        if (this.type === 'battleship'){
            this.length = 4;
        };

        if (this.type === 'destroyer'){
            this.length = 3;
        };

        if (this.type === 'submarine'){
            this.length = 3;
        };

        if (this.type === 'patrol'){
            this.length = 2;
        };
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

