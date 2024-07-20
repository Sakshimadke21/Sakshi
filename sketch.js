function setup() {
  createCanvas(700, 480);

  
  //R,G,B values
  background(225,204,0);
  
  //takea big brush
  strokeWeight(10);
  


}


function draw() {
  
  let posY=mouseY
  let posX=mouseX
  point(posX,posY)
  fill(posX,20,30,20,28)
  stroke(10,12,50,20,60)
  triangle(mouseX,mouseY,55,80,20)
fill(mouseX,mouseY,30,80,20)
}