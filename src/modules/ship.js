export class ship {
    constructor(type) {
        this.type = type;
        this.id = 0;
        this.length = 0;
        this.damage = 0;
        this.sunk = false;

        if (this.type === 'Carrier'){
            this.length = 5;
            this.id = 'C';
        };

        if (this.type === 'Battleship'){
            this.length = 4;
            this.id = 'B';
        };

        if (this.type === 'Destroyer'){
            this.length = 3;
            this.id = 'D';
        };

        if (this.type === 'Submarine'){
            this.length = 3;
            this.id = 'S';
        };

        if (this.type === 'Patrol Boat'){
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
        } else { return false }
    }
};

//export default ship
//module.exports = ship

