function setup() {
  createCanvas(windowWidth,windowHeight);
  rectMode(CENTER);
  
}

function draw() {
  
}
function touchStarted(){
    background(255);
    fill(random(255),random(0),random(0));
    rect(touches[0].x,touches[0].y,150,150);
  
}