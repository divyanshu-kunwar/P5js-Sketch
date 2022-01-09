let a = 0
function setup() {
  createCanvas(400, 400);
  background(0)
}

function draw() {
  
  background(0 , 0 , 0, 5);
  translate(200,200);
  
  noStroke()
  push()
  fill(0,50,255 , 10)
  rotate(a)
  ellipse(10,10, 250, 20)
  pop()
  a += 0.05;
  
}
