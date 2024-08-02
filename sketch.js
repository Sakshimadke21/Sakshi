function setup() {
  createCanvas(700, 480);

   // R,G,B values.
   background(52,235,352);
  
  //take a big brush
  strokeWeight(10);
  //dip it in color purple
  stroke("navy");
  frameRate(10);
  

}

function draw() {
  //declare variables
  let posX=mouseX
  let posY=mouseY
   //place a dot on a screen
  square(30,20,55)
}