class Ball {
    constructor(color) {
        this.element = document.createElement('div');
        this.element.className = 'ball';
        this.element.style.backgroundColor = color;
        
        // Random initial position
        this.x = Math.random() * 770;
        this.y = Math.random() * 370;
        
        // Random speed between -5 and 5
        this.speedX = (Math.random() - 0.5) * 10;
        this.speedY = (Math.random() - 0.5) * 10;
        
        // Ball radius (half of width)
        this.radius = 15;
        
        this.update();
    }

    update() {
        this.element.style.left = this.x + 'px';
        this.element.style.top = this.y + 'px';
    }

    move(otherBalls) {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off walls
        if (this.x <= 0 || this.x >= 770) this.speedX *= -1;
        if (this.y <= 0 || this.y >= 370) this.speedY *= -1;

        // Check collisions with other balls
        otherBalls.forEach(otherBall => {
            if (otherBall === this) return;

            const dx = this.x - otherBall.x;
            const dy = this.y - otherBall.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.radius + otherBall.radius) {
                // Collision detected - calculate new velocities
                const angle = Math.atan2(dy, dx);
                const sin = Math.sin(angle);
                const cos = Math.cos(angle);

                // Rotate velocities
                const vx1 = this.speedX * cos + this.speedY * sin;
                const vy1 = this.speedY * cos - this.speedX * sin;
                const vx2 = otherBall.speedX * cos + otherBall.speedY * sin;
                const vy2 = otherBall.speedY * cos - otherBall.speedX * sin;

                // Swap the velocities
                this.speedX = vx2 * cos - vy1 * sin;
                this.speedY = vy1 * cos + vx2 * sin;
                otherBall.speedX = vx1 * cos - vy2 * sin;
                otherBall.speedY = vy2 * cos + vx1 * sin;

                // Move balls apart to prevent sticking
                const overlap = (this.radius + otherBall.radius - distance) / 2;
                this.x += overlap * cos;
                this.y += overlap * sin;
                otherBall.x -= overlap * cos;
                otherBall.y -= overlap * sin;
            }
        });

        this.update();
    }
}

// Create container and balls
const container = document.getElementById('container');
const colors = [
    'red', 'blue', 'green', 'orange', 'white',
    'purple', 'yellow', 'pink', 'cyan'
];
const balls = colors.map(color => {
    const ball = new Ball(color);
    container.appendChild(ball.element);
    return ball;
});

// Animation loop
function animate() {
    balls.forEach(ball => ball.move(balls));
    requestAnimationFrame(animate);
}

animate(); 