const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const sonic = new Image();
sonic.src = 'https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2Fsw704v9qkgd51.jpg'; // Replace with the URL of your Sonic image

let sonicX = 50;
let sonicY = canvas.height - 150;
const sonicWidth = 50;
const sonicHeight = 50;
let speed = 10;
let gravity = 2;
let jump = -20;
let isJumping = false;
let velocityY = 0;

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
        if (sonicY >= canvas.height - 150) {
            sonicY = canvas.height - 150;
            isJumping = false;
        }
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(sonic, sonicX, sonicY, sonicWidth, sonicHeight);
    requestAnimationFrame(update);
}

sonic.onload = () => {
    update();
};
