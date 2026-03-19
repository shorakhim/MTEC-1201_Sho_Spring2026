//////////////////////////////////
////   Funw w/ conditionals   ////
////    and random            ////
//////////////////////////////////

let r = 0;
let g = 255;
let b = 0;

let x = 0;
let y = 0;
let xMove = 0;
let yMove = 0;

function setup() 
{
  createCanvas(700, 700);

  x = width / 2;
  y = height / 2;
}

function draw() {
  background(75);
  fill(r, g, b);
  ellipse(x, y, 100, 100);
  x += xMove;
  y += yMove;

  if (x >= width || x <= 0) {
    xMove = -xMove;
  }
  if (y >= height || y <= 0) {
    yMove = -yMove;
  }
}

function mousePressed() 
{
  xMove = random(-10, 10);
  yMove = random(-10, 10);
  
  r = random(0, 255);
}