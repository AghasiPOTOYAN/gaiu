let socket = io()


// function matrixGenerator(matrixSize, grass, grassEater, predator, jur, shark, jellyfish) {
//     var matrix = []

//     for (let i = 0; i < matrixSize; i++) {
//         matrix.push([])
//         for (let j = 0; j < matrixSize; j++) {
//             matrix[i].push(0)

//         }
//     }


//     for (let i = 0; i < grass; i++) {

//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 1

//     }

//     for (let i = 0; i < grassEater; i++) {

//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 2

//     }



//     for (let i = 0; i < predator; i++) {

//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 3


//     }

//     for (let i = 0; i < jur; i++) {

//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 4


//     }
//     for (let i = 0; i < shark; i++) {

//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 5


//     }
//     for (let i = 0; i < jellyfish; i++) {

//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 6


//     }

//     return matrix
// }

// var matrix = matrixGenerator(30, 40, 15, 5, 50, 39, 20)
let side = 25
//


function setup() {
    frameRate(15)
    createCanvas(50 * side, 50 * side)

//     for (let y = 0; y < matrix.length; y++) {
//         for (let x = 0; x < matrix[y].length; x++) {

//             if (matrix[y][x] == 1) {
//                 var gr = new Grass(x, y)
//                 grassArr.push(gr)
//             } else if (matrix[y][x] == 2) {
//                 var grEat = new GrassEater(x, y)
//                 grassEaterArr.push(grEat)
//             } else if (matrix[y][x] == 3) {
//                 var pred = new Predator(x, y)
//                 predatorArr.push(pred)
//             } else if (matrix[y][x] == 4) {
//                 var jur = new Jur(x, y)
//                 jurArr.push(jur)
//             } else if (matrix[y][x] == 5) {
//                 var shark = new Shark(x, y)
//                 sharkArr.push(shark)
//             } else if (matrix[y][x] == 6) {
//                 var jellyfish = new Jellyfish(x, y)
//                 jellyfishArr.push(jellyfish)
//             }
//         }
//     }

}


function changeColor(matrix) {

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            var toBot = side - side * 0.5
            if (matrix[y][x] == 1) {
                fill("green")
                rect(x * side, y * side, side, side)
                text('🌿', x * side, y * side + toBot)
            } else if (matrix[y][x] == 2) {
                fill("white")
                rect(x * side, y * side, side, side)
                text('🍾', x * side, y * side + toBot)
            } else if (matrix[y][x] == 3) {
                fill("red")
                rect(x * side, y * side, side, side)
                text('🐟', x * side, y * side + toBot)
            } else if (matrix[y][x] == 4) {
                fill("blue")
                rect(x * side, y * side, side, side)
                text('💧', x * side, y * side + toBot)

            } else if (matrix[y][x] == 5) {
                fill("teal")

                rect(x * side, y * side, side, side)
                text('🦈', x * side, y * side + toBot)
            } else if (matrix[y][x] == 6) {
                fill("pink")
                rect(x * side, y * side, side, side)
                text('🐙', x * side, y * side + toBot)
            } else {
                fill("gray")
                rect(x * side, y * side, side, side)
            }
        }
    }

    // for (let i in grassArr) {
    //     grassArr[i].mul()
    // }

    // for (let i in grassEaterArr) {
    //     grassEaterArr[i].eat()

    // }
    // console.log(predatorArr.length);
    // for (let i in predatorArr) {
    //     predatorArr[i].eat()
    // }


    // for (let i in jurArr) {
    //     jurArr[i].eat()
    // }

    // for (let i in sharkArr) {
    //     sharkArr[i].eat()
    // }
    // for (let i in jellyfishArr) {
    //     jellyfishArr[i].eat()
    // }
}

socket.on("send matrix",changeColor)