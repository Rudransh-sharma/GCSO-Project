var speed , weight ;
var car1 , car2 , car3 ;
var wall1 , wall2 , wall3 , wall4 , wall5 , wall6;

function setup() {
  createCanvas(1000 , 550);


  

  car1 = createSprite(80 , 50, 50, 30);
  
  
  car2 = createSprite(80 , 250 , 50, 30);

  
  car3 = createSprite(80 , 450 , 50, 30);

  
  wall1 = createSprite(350 , 340, 1500 , height/2);
  

  wall2 = createSprite(550 , 140 , 1500, height/2);
  

  wall3 = createSprite(900 , 50 , 20, height/2);
  

  wall4 = createSprite(900 , 250 , 20, height/2);
  
  
  wall5 = createSprite(900 , 450 , 20, height/2);
  
  wall6 = createSprite(10 , 500 , 20 , 1600)
  car1.x = mouseY;
  car2.velocityX = speed;
  car3.velocityX = speed;

  speed=random(55,90)
  weight=random(400,1500)
}

function draw() {
  background('black'); 
rectMode(CENTER)
if(wall3.x-car1.x<(car1.width+wall3.width)/2){
car1.velocityX = 0;

var deformation = 0.5 * weight * speed * speed/22509;
if(deformation>180){
car1.shapeColor=color(255,0,0)

}
if(deformation<180 && deformation>100){
car1.shapeColor.color=(230,230,0)

}
if(deformation<100){
car1.shapeColor=color(0,255,0)
}
}
if(wall4.x-car2.x<(car2.width+wall4.width)/2){
  car2.velocityX = 0;
  
  var deformation = 0.5 * weight * speed * speed/22509;
  if(deformation>180){
  car2.shapeColor=color(255,0,0)
  
  }
  if(deformation<180 && deformation>100){
  car2.shapeColor.color=(230,230,0)
  
  }
  if(deformation<100){
  car2.shapeColor=color(0,255,0)
  
  }


}




if(wall5.x-car3.x<(car3.width+wall5.width)/2){
  car3.velocityX = 0;
  
  var deformation = 0.5 * weight * speed * speed/22509;
  if(deformation>180){
  car3.shapeColor=color(255,0,0)
  
  }
  if(deformation<180 && deformation>100){
  car3.shapeColor.color=(230,230,0)
  
  }
  if(deformation<100){
  car3.shapeColor=color(0,255,0)
  
  }


}
}