let socket = io()
let grassColor = "green"

let ashunButton = document.getElementById("ashun");
ashunButton.addEventListener("click", handleAsunClick)

function handleAsunClick() {
    alert("ashuuunn")
    grassColor = "orange"
}
let dzmerButton = document.getElementById("dzmer");
ashunButton.addEventListener("click", handleDzmerClick)

function handleDzmerClick() {
    alert("dzmeeeerr")
    grassColor = "white"
}

let side = 25
//


function setup() {
    frameRate(15)
    createCanvas(50 * side, 50 * side)


}


function changeColor(matrix) {

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            var toBot = side - side * 0.5
            if (matrix[y][x] == 1 && grassColor == "green") {
                fill(grassColor)
                rect(x * side, y * side, side, side)
                text('🍀', x * side, y * side + toBot)
            } else if (matrix[y][x] == 1 && grassColor == "orange") {
                fill(grassColor)

                rect(x * side, y * side, side, side)
                text('🍁', x * side, y * side + toBot)

            }else if (matrix[y][x] == 2) {
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


}

socket.on("send matrix", changeColor)