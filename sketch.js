var car,wall,speed,weight;
var deformation

function setup() {
  createCanvas(1600,400);
 car = createSprite(50,200, 50, 50);
 wall = createSprite(1000,200,60,height/2);
  speed=random(55,90);
  weight=random(400,1500);
  car.velocityX = speed;
  deformation = (0.5*speed*speed*weight)/22500;
}

function draw() {
  background("blue"); 
  if(car.collide(wall)){
    if(deformation<100){
      car.shapeColor = "green";
    }
    if(deformation>100&&deformation<180){
      car.shapeColor = "yellow";
    }
    if(deformation>180){
      car.shapeColor = "red";
    }
  }
  drawSprites();
}