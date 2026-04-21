///////////////////////////////
///       Dot Clicker       ///
///////////////////////////////

let circleX, circleY, circleRadius, circleMaximumRadius, circleColor;

let score = 0;
let highScore;

let pulse = 0;
let gameState = "start";

// FEATURES
let particles = [];
let slowMoFrames = 0;

let combo = 0;
let comboTimer = 0;

function setup() {
  createCanvas(1080, 600);
  noStroke();
  ellipseMode(RADIUS);
  cursor(CROSS);

  highScore = getItem("high score");
  if (highScore === null) highScore = 0;
}

function draw() {
  background(0);

  if (gameState === "start") startScreen();
  else if (gameState === "playing") runGame();
  else if (gameState === "end") endScreen();
  else if (gameState === "newHighScore") newHighScoreScreen();
}

//////////////////// SCREENS ////////////////////

function startScreen() {
  textAlign(CENTER, CENTER);

  fill(255);
  textSize(70);
  text("DOT CLICKER", width / 2, height / 2 - 120);

  textSize(28);
  fill(200);
  text("Click the disappearing dots\nbefore they get too small!", width / 2, height / 2);

  textSize(30);
  fill(255);
  text("Click to play", width / 2, height / 2 + 120);
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

  fill(255);
  textSize(40);
  text("Score: " + score, width / 2, height / 2);

  textSize(30);
  text("Click to restart", width / 2, height / 2 + 120);
}

//////////////////// GAME ////////////////////

function runGame() {
  pulse += 0.1;

  // Combo timer
  if (comboTimer > 0) comboTimer--;
  else combo = 0;

  if (circleRadius > 0) {

    let animatedRadius = circleRadius + sin(pulse) * 3;

    fill(circleColor);
    circle(circleX, circleY, animatedRadius);

    // Slow motion
    let shrinkSpeed = 2;
    if (slowMoFrames > 0) {
      shrinkSpeed = 0.5;
      slowMoFrames--;
    }

    circleRadius -= shrinkSpeed;

    // Score display
    textAlign(LEFT, TOP);
    fill(255);
    textSize(32);
    text("Score: " + score, 20, 20);

    textAlign(RIGHT, TOP);
    text("High: " + highScore, width - 20, 20);

    // Combo display
    if (combo > 1) {
      textAlign(CENTER, TOP);
      fill(255, 200, 0);
      textSize(28);
      text("Combo x" + (1 + floor(combo / 5)), width / 2, 20);
    }

    updateParticles();

  } else {

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
  combo = 0;

  circleMaximumRadius = min(height / 4, width / 4);
  resetCircle();

  gameState = "playing";
}

//////////////////// INTERACTIONS ////////////////////

function mousePressed() {

  if (gameState === "start") {
    startGame();
  }

  else if (gameState === "playing") {

    let d = dist(mouseX, mouseY, circleX, circleY);

    if (d < circleRadius) {

      // Firework effect
      createFirework(circleX, circleY);

      // Slow motion trigger
      if (circleRadius < 20) {
        slowMoFrames = 30;
      }

      // Combo system
      combo++;
      comboTimer = 60;

      let multiplier = 1 + floor(combo / 5);
      score += multiplier;

      circleMaximumRadius = max(circleMaximumRadius - 1, 15);
      resetCircle();
    }
  }

  else if (gameState === "end" || gameState === "newHighScore") {
    startGame();
  }
}

//////////////////// CIRCLE ////////////////////

function resetCircle() {
  circleRadius = circleMaximumRadius;

  circleX = random(circleRadius, width - circleRadius);
  circleY = random(circleRadius, height - circleRadius);

  circleColor = color(random(100,255), random(100,255), random(100,255));
}

//////////////////// FIREWORK ////////////////////

function createFirework(x, y) {
  for (let i = 0; i < 20; i++) {
    particles.push({
      x: x,
      y: y,
      vx: random(-3, 3),
      vy: random(-3, 3),
      life: 60,
      color: color(random(255), random(255), random(255))
    });
  }
}

function updateParticles() {
  for (let i = particles.length - 1; i >= 0; i--) {
    let p = particles[i];

    fill(p.color);
    circle(p.x, p.y, 3);

    p.x += p.vx;
    p.y += p.vy;
    p.life--;

    if (p.life <= 0) {
      particles.splice(i, 1);
    }
  }
}