document.ontouchmove = function(event) {
  event.preventDefault();
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  stroke(0);
  noFill();
  strokeWeight(5);
}

function draw() {
  background(255);

  for (var i = 0; i < touches.length; i++) {
    ellipse();

  }
  fill(255, 245);

  for (var i = 0; i < touches.length; i++) {
    beginShape();
    vertex();

  }
  endShape();

}