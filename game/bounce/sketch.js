  var obstacles = []; /* Aray */
  var ballSize, vY, vX, accX, accY, Posx, Posy, bounce, f, colision, bonus, malus, block, score, typeObstacle;

  function setup() {
    createCanvas(windowWidth, windowHeight);
    ellipseMode(CENTER);
    var typeObstacle = 0;

    for (var i = 0; i < 3; i++) {
      obstacles[0] = new Obstacle("bonus");
      obstacles[1] = new Obstacle("malus");
      obstacles[2] = new Obstacle("block");
    }
    vX = 0;
    vY = 0;
    score = 0;
    ballSize = 30;
    bounce = 0.8;
    Posx = windowWidth / 2;
    Posy = windowHeight / 2;
  }

  function draw() {

    background(255);
    fill(0);
    textSize(40)
    drawBall();
    for (i = 0; i < 3; i++) {
      obstacles[i].drawObstacles();
    }

    // si f la friction
    f = 0.1;
    //accélération
    accX = rotationY * f;
    accY = rotationX * f;
    //vitesse
    vX += accX;
    vY += accY;
    //position
    Posx += vX;
  Posy  += vY;

    

    text("score:" + score ,15,35);
   

    if ((Posx + ballSize / 2) >= windowWidth) {
      vX = -vX * bounce;
      Posx = windowWidth - ballSize / 2;
    } else if ((Posx - ballSize / 2) <= 0) {
      vX = -vX * bounce;
      Posx = ballSize / 2;
    }
   

    if ((Posy + ballSize / 2) >= windowHeight) {
      vY = -vY * bounce;
      Posy = windowHeight - ballSize / 2;
    } else if ((Posy - ballSize / 2) <= 0) {
      vY = -vY * bounce;
      Posy = ballSize / 2;
    }
    

    for (i = 0; i < 3; i++) {
      if (dist(Posx, Posy, obstacles[i].Posx, obstacles[i].Posy) <= ballSize / 2 + obstacles[i].size / 2) {

        if (obstacles[i].type == "block") {
          vX = -vX * bounce;
          vY = -vY * bounce;
          
        } else if (obstacles[i].type == "bonus") {
          if (obstacles[i].colision === false) {
            obstacles[i].colision = true;
            score += 10;
          }
        } else if (obstacles[i].type == "malus") {
          if (obstacles[i].colision === false) {
            obstacles[i].colision = true;
            score -= 5;
          }
        }
      } else {
        obstacles[i].colision = false;
      }
    }
  }
  /******************************************** fin fonction draw ******************************************/

  function drawBall() {
    fill(200, 10, 0);
    ellipse(Posx, Posy, ballSize, ballSize);
  }

  function Obstacle(obstacles) {
    this.type = obstacles;
    this.Posx = random(0, windowWidth);
    this.Posy = random(0, windowHeight);
    this.size = random(25, 50);
    this.color = color(random(0, 255), random(0, 255), random(0, 255));
    this.colision = false;

    this.drawObstacles = function() {
      fill(this.color);
      ellipse(this.Posx, this.Posy, this.size, this.size);
    }
  }