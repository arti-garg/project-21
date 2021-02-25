var wall;
var thickness, bullet, speed, weight, damage;

function setup() {
  
  createCanvas(1600,400);
  
  bullet = createSprite(400, 200, 10, 60);
  bullet.shapeColor = "white";

 thickness = random (22,83);

 wall = createSprite(1200, 200, thickness, 200);
 wall.shapeColor= color (80, 80, 80);

 speed= random(223, 321);
 weight = random(30, 52);

 bullet.velocityX= 10;

}

function draw() {
  background("black");  

  if (wall.x - bullet.x< wall.width/2 +bullet.width/2){
bullet.velocityX=0;

damage = (0.5* weight* speed * speed)/ (thickness * thickness * thickness);

if (damage>10){
  wall.shapeColor= "red";
}
else {
  wall.shapeColor= "green";
}

  }
  drawSprites();
}