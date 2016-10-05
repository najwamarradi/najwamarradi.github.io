function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  
}
function touchStarted(){
    background(255);
    textSize(50);
    rect(touches[0].x,touches[0].y,150,150);
  
}