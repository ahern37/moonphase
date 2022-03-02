let movement = 0
let y = 0;
let x;
let radius = 100;
let clockwise = true

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(137, 173, 137);
  ellipse(width/2, height/2, 100, 100);
  orbit(20, 0);
  orbit(5, 20);

}


function orbit(phase, offset){
  push();
translate(width/2, height/2);
if (movement == 359){
  clockwise = false;
}
if (movement == -1){
  clockwise = true;
}

  if (clockwise){
    movement+= 1;
    //movement = movement % 360;
}else{
    movement-= 1;
    //movement = movement % 360;   
  }
  
  y = sin(radians(movement + offset))* radius;
  x = cos(radians(movement + offset))* radius;
  
  fill(137, 100, 137);
  ellipse(x, y, phase, phase);
  print(movement);
  pop();
}

