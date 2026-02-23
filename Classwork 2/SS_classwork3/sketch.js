/*
<><>><><<>><><><><>><><><><><><><><><><><><>
Using variables
Introducing...
-Data types
-Variables
-Constraints
-Operators
-MousePressed()
keyPressed()

Press Mouse to change background color
<><><><><><><><><><><><><><><><><><><><><><>
*/

//Declaring global variables:
//globally scoped variables declared outside of setup() and draw()can be used anywhere in the sketch.

let r = 0; //red value from 0 to 255
let g = 0; //green value, from 0 to 255
let b = 0; //blue value, from 0 to 255

let num = 100; //creates a variable called num, and assigns a value of 100, a Number data tyoe
let ellipseHeight = 50;
let grow = 0.5;
let xLocation = 0; //creates a variable called xLocation and assigns a value of 0

//Decalring global constraints
//unlike variables, constants cannnot be reassigned after declaration. 
//like variables,globally scoped constants declared outside of setup() and draw() can be used anywhere

const centerPosX = 400;
const centerPosY = 300;

let example;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(r, g, b);

  ellipse (mouseX / 2, mouseY - 200, num, ellipseHeight + 100)
  
  rectMode(CENTER);
  rect(mouseX * 0.5, mouseY, grow, grow);
  grow += 0.5;

  ellipse(xLocation, height / 2, width / 4, width / 4);

  xLocation ++;

}

function mousePressed() //runs once the mouse is pressed.
{
  r = random(255); //assigns random value from 0 to 255 to r
  /*
  r += 1; //add one to a value
  r++; //add one to a value
  */
  g = 20;
  b += 10;
}

function keyPressed() //runs once key is pressed
{
  r = 0;
  g = 0;
  b = 0;

  xLocation = 0;
  grow = 0.5;
}