var fixedRect, movingRect;


function setup() {
  createCanvas(800,400);
 fixedRect = createSprite(400, 200, 50, 50);
 fixedRect.shapeColor = "Red"
 movingRect = createSprite(100,200,50,50);
 movingRect.shapeColor = "Purple"
}

function draw() {
  background(0,255,255);
movingRect.x = mouseX
movingRect.y = mouseY

if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
  &&fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
  &&movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
  &&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
movingRect.shapeColor = "Pink"
fixedRect.shapeColor = "Pink"
}
else{
  movingRect.shapeColor = "green"
  fixedRect.shapeColor = "green"
}
  drawSprites();
}