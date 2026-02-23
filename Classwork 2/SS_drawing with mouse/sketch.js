function setup() {
  createCanvas(400, 400);
  background(127);
}

function draw() {
  stroke(200, 255,100);
  strokeWeight(10);
  line (pmouseX, mouseX, mouseY);
  circle(mouseX, mouseY, 10);
  
}
