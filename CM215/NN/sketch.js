function setup() {
  createCanvas(windowWidth,windowHeight);
  rectMode(CENTER);
  stroke(0);
  strokeWeight(5);
}

function draw() {
  
}
function touchStarted(){
    background(255);
    
    for(var i=0<touches.lenght;i++){
       rect(touches[0].x,touches[0].y,150,150);
    }
    
    
    
    
  
}