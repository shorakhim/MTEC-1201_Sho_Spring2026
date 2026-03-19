////////////////////////////
/// Drawing with mouse  ///
//////////////////////////

function setup()  
{
  createCanvas(800, 600);

  background(127);
  
}

function draw()
{
  background (127);
  
  // a static line
  line(0,0, 400,300);

  //a dynamic line
  line(400,300, mouseX, mouseY);

  //elipse following mouse position
  ellipse(mouseX, mouseY, 50, 50);
}