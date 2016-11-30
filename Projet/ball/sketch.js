var x = [];
var y = [];
var xspd = [];
var yspd = [];
var xdir = [];
var ydir = [];
var radius = 15;
 
function setup() {
  createCanvas(500, 500);
 
  for (var i = 0; i < 10; i++) {
    x[i] = random(width);
    y[i] = random(height);
    xspd[i] = random(2, 5);
    yspd[i] = random(3, 5);
    xdir[i] = 1;
    ydir[i] = 1;
  }
 
}
 
function draw() {
  background(255);
 
  move();
  display();
}
 
function move() {
  for (var i = 0; i < 1; i++) {
    x[i] = x[i] + xspd[i] * xdir[i];
    y[i] = y[i] + yspd[i] * ydir[i];
 
    if (x[i] < radius) {
      x[i] = radius;
      xdir[i] *= -1;
    } else if (x[i] > width - radius) {
      x[i] = width - radius;
      xdir[i] *= -1;
    }
 
    if (y[i] < radius) {
      y[i] = radius;
      ydir[i] *= -1;
    } else if (y[i] > height - radius) {
      y[i] = height - radius;
      ydir[i] *= -1;
    }
  }
  function draw() {
 background(255);
 textSize(40);
 text("Rx: " + rotationX, 100, 100);
 text("Ry: " + rotationY, 100, 150);
 text("Rz: " + rotationZ, 100, 200);
}
 
}
 
function display() {
  for (var i = 0; i < 4; i++) {
    noStroke();
    fill(255, 255, 0);
    ellipse(x[i], y[i], radius * 2, radius * 2);
  }
}
