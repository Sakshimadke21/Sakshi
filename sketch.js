function setup() {
  createCanvas(400, 400); // Set the size of the canvas
  angleMode(DEGREES);    // Use degrees for angle measurements
}

function draw() {
  background(
  'black'); // Set the background color to white
  
  translate(width / 2, height / 2); // Move origin to center of canvas
  
  // Draw clock face
  strokeWeight(8);
  noFill();
  stroke(0);
  
  // Draw numbers on the clock face
  textSize(36);
  textAlign(CENTER, CENTER);
  fill("white");
  for (let i = 1; i <= 12; i++) {
    let angle = map(i, 0, 12, 0, 360) - 90;
    let x = cos(angle) * 120; // Radius for the numbers
    let y = sin(angle) * 120;
    text(i, x, y);
  }
  
  // Get the current time
  let h = hour();
  let m = minute();
  let s = second();
  
  // Draw hour hand
  push();
  rotate(map(h % 12, 0, 12, 0, 360) + map(m, 0, 60, 0, 30) - 90); // Rotate hour hand based on current time
  strokeWeight(8);
  stroke("gray");
  line(0, 0, 0, -50); // Draw hour hand
  pop();
  
  // Draw minute hand
  push();
  rotate(map(m, 0, 60, 0, 360) - 90); // Rotate minute hand based on current time
  strokeWeight(6);
  stroke("gray");
  line(0, 0, 0, -70); // Draw minute hand
  pop();
  
  // Draw second hand
  push();
  rotate(map(s, 0, 60, 0, 360) - 90); // Rotate second hand based on current time
  strokeWeight(4);
  stroke(255, 0, 0); // Red color for second hand
  line(0, 0, 0, -90); // Draw second hand
  pop();
  
  // Draw clock center
  strokeWeight(8);
  stroke(0);
  point(0, 0); // Draw center point of the clock
}