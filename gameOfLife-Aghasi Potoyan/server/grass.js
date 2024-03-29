let LivingCreature = require('./LivingCreature')
module.exports = class Grass extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index)
    }
    random(ch) {
        let found = this.chooseCell(ch)
        let result = Math.floor(Math.random() * found.length)
        return found[result]
    }

    mul() {
        this.multiply++
        let newCell = this.random(0)

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
        this.multiply++
        let newCell = this.random(0)
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