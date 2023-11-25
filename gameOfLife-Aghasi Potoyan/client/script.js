let socket = io()
let grassColor = "green"
let jurColor = "blue"
let killButton = document.getElementById("kill");
killButton.addEventListener("click", handleKillClick)

function handleKillClick() {
    socket.emit("killAll")
    grassColor = "black"
}
let ashunButton = document.getElementById("ashun");
ashunButton.addEventListener("click", handleAsunClick)

function handleAsunClick() {
    grassColor = "orange"
    jurColor = "lightblue"
}
let dzmerButton = document.getElementById("dzmer");
dzmerButton.addEventListener("click", handleDzmerClick)

function handleDzmerClick() {
    grassColor = "white"
    jurColor = "white"

}
let garunButton = document.getElementById("garun");
garunButton.addEventListener("click", handleGarunClick)

function handleGarunClick() {
    grassColor = "lightgreen"
    jurColor = "blue"
}
let amarButton = document.getElementById("amar");
amarButton.addEventListener("click", handleAmarClick)

function handleAmarClick() {
    grassColor = "green"
    jurColor = "darkBlue"
}

let side = 25


function setup() {
    frameRate(15)
    createCanvas(50 * side, 50 * side)


}


function changeColor(matrix) {

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            let toBot = side - side * 0.5
            if (matrix[y][x] == 1) {
                if (grassColor == "green") {
                fill(grassColor)
                rect(x * side, y * side, side, side)
                text('🍀', x * side, y * side + toBot)
                }else if (grassColor == "orange") {
                    fill(grassColor)
                    rect(x * side, y * side, side, side)
                    text('🍁', x * side, y * side + toBot)
                }else if (grassColor == "white") {
                    fill(grassColor)
                    rect(x * side, y * side, side, side)
                    text('❄️', x * side, y * side + toBot)
                }else if (grassColor == "lightgreen") {
                    fill(grassColor)
                    rect(x * side, y * side, side, side)
                    text('🍀', x * side, y * side + toBot)
                }else if (grassColor == "green") {
                    fill(grassColor)
                    rect(x * side, y * side, side, side)
                    text('🍀', x * side, y * side + toBot)
                }else if (grassColor == "black") {
                    fill(grassColor)
                    rect(x * side, y * side, side, side)
                    text('☠︎', x * side, y * side + toBot)
                }
            } else if (matrix[y][x] == 2) {
                fill("white")
                rect(x * side, y * side, side, side)
                text('🍾', x * side, y * side + toBot)
            }else if (matrix[y][x] == 3) {
                fill("red")
                rect(x * side, y * side, side, side)
                text('🐟', x * side, y * side + toBot)


            } else if (matrix[y][x] == 4) {
                if (jurColor == "white") {
                    fill(jurColor)
                    rect(x * side, y * side, side, side)
                    text('🌫', x * side, y * side + toBot)
                } else if (jurColor == "blue") {
                    fill(jurColor)
                    rect(x * side, y * side, side, side)
                    text('💦', x * side, y * side + toBot)
                } else if (jurColor == "darkBlue") {
                    fill(jurColor)
                    rect(x * side, y * side, side, side)
                    text('💧', x * side, y * side + toBot)
                } else if (jurColor == "lightblue") {
                    fill(jurColor)
                    rect(x * side, y * side, side, side)
                    text('🌧', x * side, y * side + toBot)
                }
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


}

socket.on("send matrix", changeColor)