const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const sonic = new Image();
sonic.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAPYQAAD2EBqD+naQAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFBUExURQAAAABSUlJeXl9fX2tra2xsbG9vb29wcHB0dHR1dXV3d3eHh4iIiIiJiYmMjIydnZ2enp6goKCoqKio6Ojv7+/xMTEycnJ5OTk6enp7e3t9fX1+fn5/////9kQdOsAAAAUdFJOU///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AFRSWZkAAAG4SURBVHja7J1LUsMwDEWtrEZCEix2//9fK1HgSJHPdudwCehDHs0JNp99Z4HOpRAgAAAAAAAAAAAAAAAAAAAAAAAAC8U0NZxWE9Zyz+Xxx3/I3+aDXnHbdN8y8meesT4T2ee2vk52u9HaJvR77uMVnnbXNiLm5T2vNNmv6c5F+cRno+cm6TlfPspLThxXlvp8/MXXgT3W8P/kSll67v6vtJz/1nTz+En/D77aV2bz7+K7ZPcz5n+f55t2D8+eeG/N8eoPbNzTf+rOR/9fPMs5W1PCV5v+T7ZNT0O3/l57VzfOtdpzj1/8jvTvtuXtWxOsVn7zNZV8qv3t2Wb1tM2HlW78Yxj4eK93HbWfrl/e90D4r/57+tZz/lzWh/ts+G5aH/AvtFf50D6v79PbXHg/+m7D/AwAAAAAAAAAAAAAAAAAAAAAAAPA/4xIAZx5HiO5DAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNC0wNi0yMFQxNDozNjo0MyswMDowMPcXW7sAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjQtMDYtMjBUMTQ6MzY6NDMrMDA6MDDU6m/IAAAAQHRFWHRTb2Z0d2FyZQBJbWFnZU1hZ2ljayA2LjMuOC04IE5vZGVKUyBodHRwczovL2ltYWdlbWFnaWNrLm9yZ5vuPzcAAAGXdEVYdFNvZnR3YXJlSW5zdGFuY2VJRAAAQ29tLmltYWdlbWFnaWNrLmZpbGUucG5nA7gfsQAAAABJRU5ErkJggg=='; // Placeholder base64 image

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

    // Draw Sonic
    ctx.drawImage(sonic, sonicX, sonicY, sonicWidth, sonicHeight);

    requestAnimationFrame(update);
}

sonic.onload = () => {
    update();
};
