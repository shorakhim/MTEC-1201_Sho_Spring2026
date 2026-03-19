function setup() 
{
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize(22);

}

function draw() 
{
  background (150);
  iceCream(120, 200, 65, 170, 230, 180, "MINT!");
  iceCream(350, 300, 80, 250, 170, 210, "BERRY!");
  iceCream(200, 300, 80, 250, 250, 210, "VANILLA!");
}

function iceCream(x, y, diameter, r, g, b, flavor)
{
  fill(170,120,35); //set color of cone
  triangle(x,y, x + 50, y, x + 25, y + 100); //draw cone
  fill(r , g, b); //set color of ice cream
  ellipse(x + 25, y, diameter, diameter); //draw ice cream 
  text(flavor, x + 25, y - 50);  //draw flavor text
}