////////////////////////
/// SS6 - planets    ///
////////////////////////

let planets = [];

function setup() {

createCanvas(1280,720);


// starter planets
for(let i=0; i<5; i++){

planets.push({
x: random(100,1180),
y: random(100,620),
size: random(15,35),
color: color(
random(255),
random(255),
random(255)
)
});

}

}

function draw(){
background(0);

// stars
for(let i=0;i<80;i++){
fill(255);
circle(
random(width),
random(height),
2
);
}

// sun
fill("yellow");
circle(640,360,80);

// planets 
for(let i=0;i<planets.length;i++){

let p = planets[i];

fill(p.color);

circle(
p.x,
p.y,
p.size
);

}

fill(255);
textSize(20);
text(
"Press SPACE for new planets",
20,
30
);

}

// add new planets
function keyPressed(){

if(key==" "){

planets.push({
x: random(100,1180),
y: random(100,620),
size: random(15,35),
color: color(
random(255),
random(255),
random(255)
)
});

}

}