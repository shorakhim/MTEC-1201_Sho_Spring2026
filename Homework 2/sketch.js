/*
//////////////////////////////////////
//          "Homework 2"           //
//    by: Shorakhim Shomansurov   //
///////////////////////////////////
*/

let a = 0;
let d = 0; 
xLocation = 0;

function setup() {
  createCanvas(1280, 725);
  background(173, 216, 230);

  //sun
  fill(255, 200, 0);
  circle(1000, 75, 75); 
  
  //ground
  fill(150, 200, 50);
  quad(20,700,200,480,1080,480,1260,700);

  //house
  fill(220, 150, 100);
  rect(350, 250, 350, 250);
  
  //roof
  fill(150, 50, 50);
  triangle(350, 250, 700, 250, 550, 50);

  //door
  fill(100, 50, 0);
  rect(500, 400, 75, 100);

  //window
  fill(0, 255, 255);
  rect(400, 300, 50, 50);
  rect(600, 300, 50, 50); 

  //bushes back
  fill(0, 255, 0);
  circle(300, 500, 75);  
  circle(375, 550, 75);  
  circle(400, 500, 75);
 
  //bushes front
  fill(50, 220, 50);
  circle(350, 500, 75);  
  circle(325, 550, 75);  
  circle(425, 550, 75); 

  //tree trunk
  fill(100, 50, 0);
  rect(200, 400, 50, 300);

  //tree leaves
  fill(0, 255, 0);
  circle(225, 350, 150);  
}

function draw() {
  //car 
  fill(255, 0, 0);
  rect(800 + xLocation, 500, 200, 100);
  rect(850 + xLocation, 450, 100, 50);

  //car wheels
  fill(0);
  circle(825 + xLocation, 600, 50);  
  circle(975 + xLocation, 600, 50); 
}

function keyPressed()
{
  if (key === 'a' || key === 'A') {
    xLocation -= 20;
  }
  if (key === 'd' || key === 'D') {
    xLocation += 20;
  }
}