let LivingCreature = require("./LivingCreature")
module.exports = class Grass extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.multiply = 0
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }
random(ch){
    let found = this.chooseCell(ch)
    let result = Math.floor(Math.random()*found.length)
    return found(result)
}
   
    mul() {
        this.multiply++
        // var emptyCell = this.chooseCell(0)
        // var newCell = random(emptyCell)
        let nowCell = this.random

        if (this.multiply >= 1 && newCell) {
            var newX = newCell[0]
            var newY = newCell[1]

            matrix[newY][newX] = 1

            var gr = new Grass(newX, newY)
            grassArr.push(gr)
            this.multiply = 0
        }

    }

    move() {
        let emptyCell = this.chooseCell(0);
        let newCell = random(emptyCell)

        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;


            this.x = newX;
            this.y = newY;

            this.energy--

            if (this.energy < 0) {
                this.die()
            }
        }
    }
}