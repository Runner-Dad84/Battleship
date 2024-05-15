export class ship {
    constructor(type) {
        this.type = type;
        this.id = 0;
        this.length = 0;
        this.damage = 0;
        this.sunk = false;

        if (this.type === 'carrier'){
            this.length = 5;
            this.id = 'C';
        };

        if (this.type === 'battleship'){
            this.length = 4;
            this.id = 'B';
        };

        if (this.type === 'destroyer'){
            this.length = 3;
            this.id = 'D';
        };

        if (this.type === 'submarine'){
            this.length = 3;
            this.id = 'S';
        };

        if (this.type === 'patrol'){
            this.length = 2;
            this.id = 'P';
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

//export default ship
//module.exports = ship

