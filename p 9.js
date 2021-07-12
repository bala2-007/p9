var box;
function setup() {
  createCanvas(400,400);
  box=createSprite(180,180,100,100);
box.shapeColor='green';
}

function draw() 
{
 
  background(30);

 

  if(keyIsDown(RIGHT_ARROW)){
    box.position .x=box.position.x+5; 
    background("red"); 
  
    
  }
  if(keyIsDown(DOWN_ARROW)) 

  

  {
    box.position .y=box.position.y+5;
    background("black"); 
  }
  if(keyIsDown(UP_ARROW)) 

  {
    box.position .y=box.position.y-5;
    background("blue"); 
  }
  if(keyIsDown(LEFT_ARROW)) 

  {
    box.position .x=box.position.x-5; 
    background("white");
  }


drawSprites();
}


