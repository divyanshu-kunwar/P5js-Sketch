let a = 0

function setup() {
  createCanvas(400, 400);
  background(0)
}

function draw() {
  
  background(0 , 0 , 0, 15);
  translate(200+100*cos(a),200+20*sin(a));
  
  noStroke()
  push()
  fill(0,50,255 , 10)
  rotate(a)
  ellipse(10,10, 400, 30)
  pop()
  a += 0.05;
  
}
