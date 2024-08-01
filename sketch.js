// Define ball properties
let x, y;           // Position of the ball
let xSpeed, ySpeed; // Speed of the ball

function setup() {
  createCanvas(600, 400);  // Set canvas size
  x = width / 2;          // Start ball in the middle of the canvas
  y = height / 2;
  xSpeed = 5;             // Initial speed of the ball in x direction
  ySpeed = 3;             // Initial speed of the ball in y direction
}

function draw() {
  background("black");        // Set background color

  // Draw the ball
  fill("yellow");              // Ball color
  ellipse(x, y, 50, 50);  // Draw ball with diameter 50

  // Update ball position
  x += xSpeed;
  y += ySpeed;

  // Check for collision with walls
  if (x > width || x < 0) {
    xSpeed *= -1;         // Reverse x direction
  }
  if (y > height || y < 0) {
    ySpeed *= -1;         // Reverse y direction
  }
}