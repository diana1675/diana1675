const ball = document.getElementById('ball');
const game = document.getElementById('game');
const movingButton = document.getElementById('movingButton');

const height = game.offsetHeight;
const width = game.offsetWidth;

let x = 0;
let directionX = 1;
let y = 0;
let directionY = 1;
let move = 0;
setInterval(function() {
    x += directionX * move;
    ball.style.left = `${x}px`;
    //ball.style.top = `${i}px`;
    if (x >= game.offsetWidth - ball.offsetWidth) {
        directionX = -1;
    }
    if (x < 0) {
        directionX = 1;
    }
    y += directionY * move;
    ball.style.top = `${y}px`;
    if (y >= game.offsetHeight - ball.offsetHeight) {
        directionY = -1;
    }
    if (y < 0) {
        directionY = 1;
    }
}, 5)

movingButton.addEventListener("click", function(event) {
    move = 1;
})