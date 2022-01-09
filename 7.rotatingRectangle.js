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
  fill(255,0,0 , 10)
  rotate(a)
  rect(10,10,100,100)
  pop()
  a += 0.1;
  
}
