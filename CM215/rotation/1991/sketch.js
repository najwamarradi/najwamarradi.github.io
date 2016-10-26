var ballSize;
var AX, VX, PX, F;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  ballSize = 20;

  PX = windowWidth / 2;
  VX = 0;
  F = 0.01;
}

function draw() {
  background(250);

AX = (rotationY*F);
VX += AX
PX += VX;


  drawBall();
  textSize(45);

  text("Rx: " + floor(rotationX), 100, 100);
  text("Ry: " + floor(rotationY), 100, 150);
  text("Rz: " + floor(rotationZ), 100, 200);
}

function drawBall() {
  fill(100);
  ellipse(PX, windowHeight / 2, ballSize, ballSize);
}