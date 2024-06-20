const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let sonicX = 50;
let sonicY = canvas.height - 150;
const sonicWidth = 50;
const sonicHeight = 50;
let speed = 10;
let gravity = 2;
let jump = -20;
let isJumping = false;
let velocityY = 0;

const groundHeight = 100;

document.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowRight') {
        sonicX += speed;
    } else if (e.code === 'ArrowLeft') {
        sonicX -= speed;
    } else if (e.code === 'Space' && !isJumping) {
        velocityY = jump;
        isJumping = true;
    }
});

function update() {
    if (isJumping) {
        sonicY += velocityY;
        velocityY += gravity;
        if (sonicY >= canvas.height - groundHeight - sonicHeight) {
            sonicY = canvas.height - groundHeight - sonicHeight;
            isJumping = false;
        }
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw ground
    ctx.fillStyle = '#654321';
    ctx.fillRect(0, canvas.height - groundHeight, canvas.width, groundHeight);

    // Draw Sonic (as a blue rectangle)
    ctx.fillStyle = '#0000FF'; // Blue color
    ctx.fillRect(sonicX, sonicY, sonicWidth, sonicHeight);

    requestAnimationFrame(update);
}

update();
