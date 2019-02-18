

let snowflake
let snow = [];





//Duh
function setup() {
  createCanvas(windowWidth,windowHeight);
//  image (img, 0, 0);
  for(i = 0; i < 500; i++){

snow.push(new Snowflake());

  }

}




//Runs each frame
function draw() {
  background(0);
    //image(img, 0, 0);
for (flake of snow)
{
flake.DrawSnow();
flake.Physics();
}




}
