function setup() {
  createCanvas(400, 400);
  background(245, 93, 126);
  let step = 90;
  let seedX=200;
  let seedY=350;
  //call the function to grow tree 
  grow(seedX,seedY,step);
}

//function that takes a seed and grows Y-shape
function grow(seedX, seedY, step) {
  // 1. plant seed
  // 2. grow (step)
  line(seedX, seedY, seedX, seedY - step);
  // 2.1 find where are  we coming from
  let whereAreWeComingFromX = seedX;
  let whereAreWeComingFromY = seedY - step;

  // 3. split left
  // 3.1 find where to go left
  let whereToGoLeftX = seedX - step;
  let whereToGoLeftY = seedY - step - step;

  //3.2 draw Branch
  line(
    whereAreWeComingFromX,
    whereAreWeComingFromY,
    whereToGoLeftX,
    whereToGoLeftY
  );

  // 4. split right
  // 4.1 find where to go right
  let whereToGoRightX = seedX + step;
  let whereToGoRightY = seedY - step - step;

  //4.2 draw Branch
  line(
    whereAreWeComingFromX,
    whereAreWeComingFromY,
    whereToGoRightX,
    whereToGoRightY
  );
}