///////////////////////////////////
/// Sho - Space Race Game Final ///
///////////////////////////////////


let px = 150;
let cpu = 350;

let py = 650;
let cy = 650;

let life = 5;
let cpuLife = 5;

let playerShield = 0;
let cpuShield = 0;

let ox = [];
let oy = [];

let sx = [];
let sy = [];

let speed = 5;

let boom = 0;
let ex = 0;
let ey = 0;

let flash = 0;

let screen = "menu";
let difficulty = "easy";

let startTime = 0;
let timePlayed = 0;

function setup() {
  createCanvas(600, 800);

  for (let i = 0; i < 6; i++) {
    ox[i] = random(500);
    oy[i] = random(800);
  }

  for (let i = 0; i < 50; i++) {
    sx[i] = random(width);
    sy[i] = random(height);
  }
}

function draw() {
  background(0);

  // STARFIELD
  fill(255);
  noStroke();
  for (let i = 0; i < 50; i++) {
    rect(sx[i], sy[i], 2, 2);
    sy[i] += 2;

    if (sy[i] > height) {
      sy[i] = 0;
      sx[i] = random(width);
    }
  }

  // scan lines
  stroke(40);
  for (let i = 0; i < height; i += 4) {
    line(0, i, width, i);
  }

  // flash effect
  if (flash > 0) {
    noStroke();
    fill(255, 0, 0, 80);
    rect(0, 0, width, height);
    flash--;
  }

  // MENU
  if (screen == "menu") {

    fill(0, 255, 0);
    textSize(40);
    text("SPACE RACE", 150, 200);

    fill(80);
    rect(220, 300, 160, 50);
    fill(255);
    textSize(25);
    text("START", 255, 335);

    fill(80);
    rect(170, 400, 100, 50);
    fill(255);
    text("EASY", 190, 435);

    fill(80);
    rect(330, 400, 100, 50);
    fill(255);
    text("HARD", 350, 435);

    fill(255);
    textSize(18);
    text("Difficulty: " + difficulty, 220, 520);

    return;
  }

  // GAME OVER
  if (screen == "over") {

    fill(255);
    textSize(35);

    if (life > 0) text("YOU WIN!", 210, 320);
    else text("CPU WINS!", 190, 320);

    textSize(25);
    text("TIME: " + timePlayed + "s", 220, 380);

    fill(80);
    rect(220, 450, 160, 50);

    fill(255);
    textSize(20);
    text("RESTART", 250, 482);

    return;
  }

  // TIMER
  timePlayed = floor((millis() - startTime) / 1000);

  // SHIELDS
  if (playerShield > 0) playerShield--;
  if (cpuShield > 0) cpuShield--;

  // OBSTACLES
  fill(255);
  noStroke();

  for (let i = 0; i < 6; i++) {

    rect(ox[i], oy[i], 60, 10);
    oy[i] += speed;

    if (oy[i] > height) {
      oy[i] = 0;
      ox[i] = random(500);
    }

    // PLAYER HIT
    if (
      px + 20 > ox[i] &&
      px < ox[i] + 60 &&
      py + 30 > oy[i] &&
      py < oy[i] + 10 &&
      playerShield <= 0
    ) {
      life--;
      px = 150;
      flash = 10;

      ex = px;
      ey = py;
      boom = 20;

      playerShield = 180;
    }

    // CPU HIT
    if (
      cpu + 20 > ox[i] &&
      cpu < ox[i] + 60 &&
      cy + 30 > oy[i] &&
      cy < oy[i] + 10 &&
      cpuShield <= 0
    ) {
      cpuLife--;
      cpu = 350;
      cpuShield = 180;
    }
  }

  // EXPLOSION
  if (boom > 0) {
    fill(255, 255, 0);
    for (let i = 0; i < 20; i++) {
      rect(
        ex + random(-15, 15),
        ey + random(-15, 15),
        3,
        3
      );
    }
    boom--;
  }

  // PLAYER
  if (playerShield <= 0 || frameCount % 10 < 5) {
    fill("red");
    rect(px, py, 20, 30);
  }

  // CPU
  if (cpuShield <= 0 || frameCount % 10 < 5) {
    fill("cyan");
    rect(cpu, cy, 20, 30);
  }

  // MOVEMENT UPWARD
  py -= 1;

  if (difficulty == "easy")
    cy -= random(0.8, 1.3);
  else
    cy -= random(1.2, 2);

  cpu += random(-3, 3);
  cpu = constrain(cpu, 0, width - 20);

  // FINISH LINE
  stroke(0, 255, 0);
  line(0, 40, width, 40);

  // LIVES DISPLAY
  noStroke();
  fill(255);
  textSize(20);

  text("YOU: " + life, 20, 25);
  text("CPU: " + cpuLife, 460, 25);
  text("TIME: " + timePlayed, 250, 25);

  // LAPS / SPEED
  if (py < 40) {
    py = 650;
    speed++;
  }

  if (cy < 40) {
    cy = 650;
    speed++;
  }

  // GAME END
  if (life <= 0 || cpuLife <= 0) {
    screen = "over";
  }
}

// CONTROLS
function keyPressed() {
  if (screen != "play") return;

  if (keyCode == LEFT_ARROW) px -= 20;
  if (keyCode == RIGHT_ARROW) px += 20;

  px = constrain(px, 0, width - 20);
}

// MENU + BUTTONS
function mousePressed() {

  // START
  if (screen == "menu" &&
      mouseX > 220 && mouseX < 380 &&
      mouseY > 300 && mouseY < 350) {

    screen = "play";
    startTime = millis();
  }

  // EASY
  if (mouseX > 170 && mouseX < 270 &&
      mouseY > 400 && mouseY < 450) {
    difficulty = "easy";
    speed = 4;
  }

  // HARD
  if (mouseX > 330 && mouseX < 430 &&
      mouseY > 400 && mouseY < 450) {
    difficulty = "hard";
    speed = 8;
  }

  // RESTART
  if (screen == "over" &&
      mouseX > 220 && mouseX < 380 &&
      mouseY > 450 && mouseY < 500) {
    resetGame();
  }
}

// RESET GAME
function resetGame() {

  px = 150;
  cpu = 350;

  py = 650;
  cy = 650;

  life = 5;
  cpuLife = 5;

  playerShield = 0;
  cpuShield = 0;

  speed = (difficulty == "easy") ? 4 : 8;

  flash = 0;
  boom = 0;

  startTime = millis();
  screen = "play";
}