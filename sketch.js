let r = 96;
let g = 81;
let b = 196;

function setup() {
  //put setup code here
  createCanvas(800, 800)
  //background(123, 34, 58);
}

function draw() {
  newColor = color(96, 81, 196);
  //ellipse(mouseX, mouseY, 20, 20);
  background(255, 0, 0);
  shapeGroup(0, 0, 0, 255, 0);
  shapeGroup(100, 100, r, g, b);
  shapeGroup(200, 200, random (255), random(255), random(255));
}

function shapeGroup(x, y, red, green, blue){
  fill(red, green, blue);
	ellipse(x+200, y+200, 200, 200);
	ellipse(x+400, y+400, 400, 400);
	rect(x+400, y+400, 100, 100);
	//print("myCoolFunction is running");
}