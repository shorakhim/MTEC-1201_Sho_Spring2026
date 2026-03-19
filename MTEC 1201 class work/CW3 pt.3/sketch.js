///////////////////////////////////
///   key press and conditions  ///
///////////////////////////////////

// ellipse variables
let x = 0;
let y = 0;
let xMove = 1;
let yMove = 1;

// rectangle variables
let rectX = 0;
let rectY = 0;
let size = 100;

let r = 127;
let g = 127;
let b = 127;

//boolean to stop/start movement
let stop = false; //we could use zero here

function setup() 
{
  createCanvas(700, 700);
  rectMode(CENTER);

  //start both shapes in the middle of the canvas
  x = width / 2;
  y = height / 2;
  rectX = width / 2;
  rectY = height / 2;
}

function draw() 
{
  background(255);
  fill (r, g, b);
  
  ellipse(x, y, size, size);
  rect(rectX, rectY, size, size);

  x += xMove;
  y += yMove;
  
  if(stop == false) //if stop boolean is false, then move the shapes [can useif(!stop)]
  (
    x+=xMove;
    y+=yMove;
  )
  if (x>= width || x <= 0) // check if the shapes hit the edge of the canvas, if so, reverse direction
  {
    xMove = -xMove;
  }
  if (y>= height || y <= 0)
  {
    yMove = -yMove;
  }
}

function mousePressed()
{
  r = random(255);
  g = random(255);
  b = random(255);  
  xMove = random(-50, 50);
  yMove = random(-50, 50);

}

function keyPressed()
{
  if (key == 'a') //if the s key is pressed, stop the shapes from moving}
  {
  r = 255;
  g = 255;
  b = 255;
  }
  else if (key == 'a') //if the s key is pressed, stop the shapes from moving
  {
  r = 0;
  g = 0;
  b = 0;
  }
}