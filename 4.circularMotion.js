let r1 = 100
let r2 = 80

let theta1 = 0
let theta2 = 0

function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  fill(255,0,0)
  
  circle(200 + r1 * sin(theta1) , 200 + r1 * cos(theta1) , 10)
  
  circle(200 + r2 * sin(theta2) , 200 + r2 * cos(theta2) , 10)
  
  theta1 += random(0,0.5)
  theta2 += random(0,0.3)
  
  
}
