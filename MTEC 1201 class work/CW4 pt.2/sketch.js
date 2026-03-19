let toggle = false;

function setup() 
{
  createCanvas(500, 500);
  rectMode(CENTER);
  textAlign(CENTER);
  textSize(22);

}

function draw() 
{
  background (150);
  iceCream(120, 200, 65, 170, 230, 180, "MINT!");
  iceCream(200, 150, 75, 250, 170, 210, "BERRY!");
  iceCream(350, 300, 80, 250, 250, 210, "VANILLA!");
  
  if(toggle)
  rectRayDisplay(25, 450, 50, "W");
  rectRayDisplay(width/2, 450, 50, "Q");
  rectRayDisplay(width - 25, 450, 50, "E");



}

function iceCream(x, y, diameter, r, g, b, flavor)
{
  fill(170,120,35); //set color of cone
  triangle(x,y, x + 50, y, x + 25, y + 100); //draw cone
  fill(r , g, b); //set color of ice cream
  ellipse(x + 25, y, diameter, diameter); //draw ice cream 
  text(flavor, x + 25, y - 50);  //draw flavor text
}

function rectRayDisplay(x, y, size, letter)
{
  fill(245, 245, 60);
  rect(x, y, size, size);
 

for(let i = 0; i < size; i+= 20)
{
  line(x, y, mouseX + 10, mouseY + 10);
}
  fill(0);
  text(letter, x, y);
}


  