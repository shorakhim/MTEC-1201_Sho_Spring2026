///////////////////////////////
///       Dot Clicker       ///
///  Shorakhim Shomansurov  ///
///////////////////////////////

let circleX;
let circleY;
let circleRadius;
let circleMaximumRadius;
let circleColor;

let score = 0;
let highScore;

let pulse = 0;

let gameState = "start"; // start, playing, end, newHighScore

function setup() {
  createCanvas(1080, 600);
  colorMode(RGB);
  noStroke();
  ellipseMode(RADIUS);

  highScore = getItem("high score");

  if (highScore === null) {
    highScore = 0;
  }
}

function draw() {
  background(0);

  if (gameState === "start") {
    startScreen();
  }

  else if (gameState === "playing") {
    runGame();
  }

  else if (gameState === "end") {
    endScreen();
  }

  else if (gameState === "newHighScore") {
    newHighScoreScreen();
  }
}

function startScreen() {

  textAlign(CENTER, CENTER);

  fill(255);
  textSize(70);
  text("DOT CLICKER", width / 2, height / 2 - 120);

  textSize(28);
  fill(200);

  text(
    "Click the disappearing dots\nbefore they get too small!",
    width / 2,
    height / 2
  );

  textSize(30);
  fill(255);

  text("Click anywhere to play", width / 2, height / 2 + 120);
}

function runGame() {

  pulse += 0.1;

  if (circleRadius > 0) {

    fill(circleColor);

    let animatedRadius = circleRadius + sin(pulse) * 3;

    circle(circleX, circleY, animatedRadius);

    circleRadius -= 2;

    textAlign(LEFT, TOP);
    textSize(32);
    fill(255);
    text("Score: " + score, 20, 20);

    textAlign(RIGHT, TOP);
    text("High Score: " + highScore, width - 20, 20);

  } 
  else {

    // Check if player got a new high score
    if (score > highScore) {

      highScore = score;
      storeItem("high score", highScore);

      gameState = "newHighScore";

    } else {

      gameState = "end";
    }
  }
}

function startGame() {

  score = 0;

  circleMaximumRadius = min(height / 4, width / 4);

  resetCircle();

  gameState = "playing";
}

function endScreen() {

  textAlign(CENTER, CENTER);

  fill(255);
  textSize(70);
  text("GAME OVER", width / 2, height / 2 - 120);

  textSize(40);
  text("Score: " + score, width / 2, height / 2 - 20);

  text("High Score: " + highScore, width / 2, height / 2 + 40);

  textSize(30);
  text("Click to play again", width / 2, height / 2 + 140);
}

function newHighScoreScreen() {

  textAlign(CENTER, CENTER);

  fill(255, 215, 0);
  textSize(70);
  text("NEW HIGH SCORE!", width / 2, height / 2 - 100);

  textSize(40);
  fill(255);
  text("Score: " + score, width / 2, height / 2);

  textSize(30);
  text("Click to restart", width / 2, height / 2 + 120);
}

function resetCircle() {

  circleRadius = circleMaximumRadius;

  circleX = random(circleRadius, width - circleRadius);
  circleY = random(circleRadius, height - circleRadius);

  circleColor = color(
    random(100, 255),
    random(100, 255),
    random(100, 255)
  );
}

function mousePressed() {

  if (gameState === "start") {

    startGame();
  }

  else if (gameState === "playing") {

    let distanceToCircle = dist(mouseX, mouseY, circleX, circleY);

    if (distanceToCircle < circleRadius) {

      circleMaximumRadius = max(circleMaximumRadius - 1, 15);

      resetCircle();

      score += 1;
    }
  }

  else if (gameState === "end" || gameState === "newHighScore") {

    startGame();
  }
}