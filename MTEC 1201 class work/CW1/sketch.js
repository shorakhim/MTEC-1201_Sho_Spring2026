/*
//////////////////////////////////////
//    "Getting to Know p5.js"      //
//    by: Shorakhim Shomansurov   //
///////////////////////////////////
*/

// this is a comment; use them to make your code more understandable
//comment 

//you must include set up function to run code.

function setup() 
{
  createCanvas(800, 600); //set size of canvas with Width and Height
  background (255, 0, 64 ); //set background color using RGB color mode

  strokeWeight(6) //set thickness of stroke to 6 pixels
  line(100, 100, 700, 500); //draw a line from point (100,100) to point (700,500)

  triangle(500, 300, 600, 600, 200, 400); //draw a triangle using 3 points (x1,y1), (x2,y2), (x3,y3)

  strokeWeight(5); //set thickness of stroke to 5 pixels
  stroke(0, 255, 0); //set stroke color using RGB color mode
  line(0, 0, 600, 400); //draw a line from point (0,0) to point (600,400)
  
  rect(100, 400, 400, 200) //draw a rectangle at point (100,400) with width 400 and height 200

  fill(255, 0, 255); //set fill color using RGB color mode
  quad(100, 100, 200, 100, 300, 300, 300, 400); //draw a quadrilateral using 4 points (x1,y1), (x2,y2), (x3,y3), (x4,y4)

  fill(0, 0, 255, 177); //set fill color using RGB color mode, 4th is opacity(hue)
  ellipse(400, 300, 200, 200); //draw an ellipse at point (400,300) with width 200 and height 200
}



