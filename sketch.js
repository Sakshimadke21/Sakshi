let traveller = new Walker( 400,300,10,"yellow");
let traveller2=new Walker(300,250,10,"purple")
function setup() {
  createCanvas(400, 400);
  background(0);
  frameRate(30);
  traveller.showUp();
  traveller2.showUp();
}
function draw() {
  traveller.do1Step();
  traveller2.do1Step();
}