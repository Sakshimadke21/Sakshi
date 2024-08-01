function setup() {
  createCanvas(400, 400);
  background(11, 107, 27);
  let step=90;
 // 1. plant seed
  // 2. grow(step)
  line(200,400,200,400-step);
  // 2.1 find where are we coming from
  let whereAreWeComingFromX = 200;
  let whereAreWeComingFromY=400-step;
  
  // 3. split left
  // 3.1 find where to go left
  let whereToGoLeftX=200-step;
  let whereToGoLeftY=400-step-step;
  
  
  //3.2 draw Branch
line(whereAreWeComingFromX,whereAreWeComingFromY,whereToGoLeftX,whereToGoLeftY);
  
  
  // 4. split right
  // 4.1 find where to go right
  let whereToGoRightX = 200 + step;
  let whereToGoRightY = 400 - step - step;
  
  
  // 4.2 draw Branch
   line(whereAreWeComingFromX,whereAreWeComingFromY,whereToGoRightX,whereToGoRightY);
  







}

