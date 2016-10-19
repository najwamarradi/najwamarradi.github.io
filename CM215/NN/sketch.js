
document.ontouchmove = function(event){
  event.preventDefault();
}



function setup() {
  createCanvas(windowWidth,windowHeight);
  rectMode(CENTER);
  stroke(0);
  fill(red);
  strokeWeight(5);
}

function draw()
touches[(x,y),(x1,y1),(x2,y2)];
vertex(x,y);
vertex(x1,y1);
vertex(x2,y2);
fill(x)
{
  background(255);
    
    for(var i=0;i<touches.length;i++){
    if((i+1)<touches.length){
      line(touches[i].x,touches[i].y,touches[i+1].x,touches[i+1].y);
    }
    else{
    line(touches[i].x,touches[i].y,touches[0].x,touches[0].y);
    
    }
    
       rect(touches[i].x,touches[i].y,150,150);
      
    }
function touchStarted(){
    
    }
    
    
    
    
  
}