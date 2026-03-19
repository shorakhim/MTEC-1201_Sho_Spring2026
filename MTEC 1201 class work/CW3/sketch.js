///////////////////////////////////
///          2026-02-26         ///
///  CW: conditional statement  ///
///////////////////////////////////

let r = 127;
let g = 127;
let b = 127;

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
}

function draw() 
{
  background(r, g, b);
  if (mouseX > width / 2) 
  {
   fill(255,0,0);
   ellipse(width/2, height/2, 100, 100);
   print("TEST 1 is TRUE");
   ellipse(width/4, height/2, 50 , 50);

  } 
  else if (mouseY > height / 2) 
  {
    fill(0);
    rect(width/2, height/2, 100, 100);
    print("TEST 2 is TRUE");
    rect(width/2, height/4, 50 , 50);
  }
  else
  {
    fill(255);
    rect(width/2, height/2, 100, 100);
    print("TEST 1 and 2 are both FALSE");
  }

}

function mousePressed() 
{
  r = random(255);
  g = random(255);
  b = random(255);
}