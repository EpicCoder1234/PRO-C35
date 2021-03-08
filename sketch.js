var balloon;
var database;
var position;


function preload(){
}
function setup() {
  createCanvas(500,500);
  balloon = createSprite(250, 250, 50, 50);
  database = firebase.database();
  position = database.ref("balloon/position");
  position.on("value",readPosition,showError);
}

function draw() {
  background();  
  if(keyDown(LEFT_ARROW)){
    balloon.x=balloon.x-10
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x=balloon.x+10
  }
  else if(keyDown(UP_ARROW)){
    balloon.y=balloon.y-10
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y=balloon.y+10
  }
  drawSprites();
}
function readPosition(data){
  pos = data.val();
  balloon.x = pos.x;
  balloon.y = pos.y;
}
function showError(){
  console.log("Error in database");
}