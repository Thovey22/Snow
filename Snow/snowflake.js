class Snowflake
{

  constructor(){
    let x = random(width);
    let y = random(-windowHeight,-10);
    this.pos = createVector(x,y);
    this.accel = createVector (0, 0.01);
    this.vel = createVector(0, 0);
    this.size = (random (10) + 1)
    this.angle = random(1);
  }



  Physics()
  {

    let accelScaled = createVector( 0, pow (this.accel.y, 3) + this.size / 500);
    this.vel.add(accelScaled);
    this.pos.add(this.vel);
    this.pos.add (createVector(sin(this.angle), 0));

    this.angle += this.vel.y / 500;


    if(this.pos.y > windowHeight){
      this.pos.y = random(-windowHeight,-5);
     this.vel = createVector(0,0);
   }

   if(this.pos.x > windowWidth + this.size){
     this.pos.x = -this.size;
   }
   if(this.pos.x < -this.size){
     this.pos.x = windowWidth + this.size;
   }

  }

  DrawSnow()
  {
    stroke (255);
    strokeWeight(this.size);

    point(this.pos.x, this.pos.y)



  }
}
