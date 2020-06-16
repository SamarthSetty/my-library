var fixedRect , object1;





function setup() {
  createCanvas(800,400);
fixedRect = createSprite(400, 200, 50, 100);
movingRect = createSprite(200,200,100,50);
fixedRect.shapeColor = "white";
fixedRect.debug=true;
movingRect.shapeColor = "blue";
movingRect.debug=true;

}

function draw() {
  background(0);
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  
  if (isTouching(movingRect,fixedRect)){
    fixedRect.shapeColor= "purple";
    movingRect.shapeColor= "red";
  }
  else {
    fixedRect.shapeColor="white";
    movingRect.shapeColor="blue";
  }
  drawSprites();
}
