function setup() {
  createCanvas(500, 500);
  background(209, 154, 245);
}

function draw() {
  // Check if the mouse is pressed
  if (mouseIsPressed) {
    // Draw a circle at the mouse position
    fill(126, 10, 201)
    noStroke(); // No outline
    ellipse(mouseX, mouseY, 10, 10); // Circle with diameter 20
  }
}