/*
Creating a random moving ball on the screen that collide with screen
*/

let x = 0
let y = 0
let speedX = 2
let speedY = 1.9

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(x,y,10)
  
  x +=speedX
  y +=speedY
  
  // change the value of speed whenever it's outside the boundry
  if(x>width || x < 0){
    speedX = -1.01 * speedX
  }
  if(y>height || y<0 ){
    speedY = -1.01 * speedY
  }
  
}
