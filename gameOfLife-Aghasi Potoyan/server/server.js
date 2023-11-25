let express = require('express');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io')(server);
let fs = require('fs');

app.use(express.static("../client"));
app.get('/', function (req, res) {
    res.redirect('index.html');
});

server.listen(3000);



function matrixGenerator(matrixSize, grass, grassEater, predator, jur, shark, jellyfish) {
    let matrix = []

    for (let i = 0; i < matrixSize; i++) {
        matrix.push([])
        for (let j = 0; j < matrixSize; j++) {
            matrix[i].push(0)

        }
    }


    for (let i = 0; i < grass; i++) {

        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 1

    }

    for (let i = 0; i < grassEater; i++) {

        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 2

    }



    for (let i = 0; i < predator; i++) {

        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 3


    }

    for (let i = 0; i < jur; i++) {

        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 4


    }
    for (let i = 0; i < shark; i++) {

        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 5


    }
    for (let i = 0; i < jellyfish; i++) {

        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 6


    }
io.emit("send matrix",matrix)
    return matrix
}


matrix = matrixGenerator(30, 40, 15, 5, 50, 39, 20)



grassArr = []
grassEaterArr = []
predatorArr = []
jurArr = []
sharkArr = []
jellyfishArr = []

const Grass = require("./grass")
const GrassEater = require("./grassEater")
const Predator = require("./predator")
const Jur = require("./jur")
const Shark = require("./shark")
const Jellyfish = require("./jellyfish");



function creatOBJ() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y)
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                let grEat = new GrassEater(x, y)
                grassEaterArr.push(grEat)
            } else if (matrix[y][x] == 3) {
                let pred = new Predator(x, y)
                predatorArr.push(pred)
            } else if (matrix[y][x] == 4) {
                let jur = new Jur(x, y)
                jurArr.push(jur)
            } else if (matrix[y][x] == 5) {
                let shark = new Shark(x, y)
                sharkArr.push(shark)
            } else if (matrix[y][x] == 6) {
                let jellyfish = new Jellyfish(x, y)
                jellyfishArr.push(jellyfish)
            }
        }
    }

    io.emit("send matrix",matrix)
}



creatOBJ()
function gameMove() {
    for (let i in grassArr) {
        grassArr[i].mul()
    }

    for (let i in grassEaterArr) {
        grassEaterArr[i].eat()

    }
    console.log(predatorArr.length);
    for (let i in predatorArr) {
        predatorArr[i].eat()
    }


    for (let i in jurArr) {
        jurArr[i].eat()
    }

    for (let i in sharkArr) {
        sharkArr[i].eat()
    }
    for (let i in jellyfishArr) {
        jellyfishArr[i].eat()
    }
    io.emit("send matrix",matrix)
}
setInterval(gameMove, 1000);


let statistics ={

}

setInterval(function(){
    statistics.grass = grassArr.length;
    statistics.grassEater = grassEaterArr.length
    statistics.predator = predatorArr.length;
    statistics.jur = jurArr.length;
    statistics.shark = sharkArr.length;
    statistics.jellyfish = jellyfishArr.length;
    fs.writeFile("./statistics.json",JSON.stringify(statistics), function(){
        console.log("Grec");
    })
    
}, 1000);

io.on('connection', function (socket) {
    createObject(matrix)

    socket.on("killAll", function(){
        
    })
})