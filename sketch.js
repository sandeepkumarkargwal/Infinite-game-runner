var towerImg, tower;
var doorImg, door, doorGroup;
var climberImg, climber, climberGroup;
var ghostImg, ghost;
var invisibleGroup, invisible;
var gameState="PLAY";
var sound;
 

function preload(){
  
  towerImg=loadImage("dark.png");
  
  doorImg=loadImage("Ghost.png");
  doorGroup=new Group ();
 
  
  ghostImg=loadImage("jungkook.png");
  
  sound=loadSound("BTS BLACK SWAN Lyrics (방탄소년단 BLACK SWAN 가사) [Color(MP3_160K)_1.mp3");
  
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);
  tower=createSprite(width/2,300);
  tower.addImage("unlimitedTower", towerImg);
  tower.velocityY=1;
  
  ghost=createSprite(width/2,height-20,20,20);
  ghost.scale=0.2;
  ghost.addImage("ghost",ghostImg);
  
  sound.loop();
  

}

function draw(){
  
   background(0);
  
  if (gameState==="PLAY"){
    
    
    
  
  
 
  
  if (tower.y>height-130){  
    
    tower.y=height/2;
    
  }
  
  if (keyDown("left_arrow")){
    
    ghost.x=ghost.x-3;
    
  }
  
   
  if (keyDown("right_arrow")){
    
    ghost.x=ghost.x+3;
    
  }
   
  if (keyDown("space")){
    
    ghost.velocityY=-5;
    
  }
     if (doorGroup.isTouching(ghost)||ghost.y>600){
    
    ghost.destroy();
       gameState="END";   
    
    
  }
  
  ghost.velocityY=ghost.velocityY+0.8 

  
  spawanDoors();
  drawSprites();
    
  }
  
  if (gameState==="END"){
    
    stroke("blue");
    fill("red");
    textSize(30);
    text("GAME OVER",230,250);
     
  }
 
  
}

function spawanDoors(){
  
  if (frameCount%240==0)
{
  door=createSprite(200,50);
  door.addImage("doorImage", doorImg);
  door.scale=0.2
 

  
  door.x=Math.round(random((50, width-50),40, 10, 10));
  door.velocityY=1;
  
  
 
  
  door.lifetime=800;
  doorGroup.add(door);
 
  
  ghost.depth=door.depth;
  ghost.depth=ghost.depth+1; 
  
}  
  
  
  
}