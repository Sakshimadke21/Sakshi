

  class Walker{
     //an idea of a dot that can move UP,DOWN,LEFT, RIGHT
    constructor(x = 200,y = 200,step = 30,c="#3F51B5"){
       console.log("Hello,the idea was created");
        this.x =x;
        this.y =y;
        this.step = step;
      this.c=c;
}
  showUp(){
    //style the next points
    stroke(this.c);
    strokeWeight(10);
    //draw dot on screen at the x,y position
    point(this.x,this.y);
  }
    
    do1Step(){
    //change direction X
      let doIWantToGoX=random([-1,+1]);
      let doIWantToGoY=random([-1,+1]);
      
      //change position
      this.x+=this.step*doIWantToGoX
      this.y+=this.step*doIWantToGoY
      this.showUp();
    }
  }
  