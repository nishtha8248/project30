function setup() {
  createCanvas(800,480);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  
  ground = new Ground(200,height,100,20);
  drawSprites();
}