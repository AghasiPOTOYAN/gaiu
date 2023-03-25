var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});

server.listen(3000);


io.on('connection', function (socket) {
    for (var i in messages) {
        socket.emit("display message", messages[i]);
    }
    socket.on("send message", function (data) {
        messages.push(data);
        io.sockets.emit("display message", data);
    });
});
function matrixGenerator(matrixSize, grass, grassEater, predator, jur, shark, jellyfish) {
    var matrix = []

    for (let i = 0; i < matrixSize; i++) {
        matrix.push([])
        for (let j = 0; j < matrixSize; j++) {
            matrix[i].push(0)

        }
    }


    for (let i = 0; i < grass; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 1

    }

    for (let i = 0; i < grassEater; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 2

    }



    for (let i = 0; i < predator; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 3


    }

    for (let i = 0; i < jur; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 4


    }
    for (let i = 0; i < shark; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 5


    }
    for (let i = 0; i < jellyfish; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 6


    }

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
const Jellyfish = require("./jellyfish")
function creatOBJ() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                var grEat = new GrassEater(x, y)
                grassEaterArr.push(grEat)
            } else if (matrix[y][x] == 3) {
                var pred = new Predator(x, y)
                predatorArr.push(pred)
            } else if (matrix[y][x] == 4) {
                var jur = new Jur(x, y)
                jurArr.push(jur)
            } else if (matrix[y][x] == 5) {
                var shark = new Shark(x, y)
                sharkArr.push(shark)
            } else if (matrix[y][x] == 6) {
                var jellyfish = new Jellyfish(x, y)
                jellyfishArr.push(jellyfish)
            }
        }
    }


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
}
setInterval(gameMove, 1000);


