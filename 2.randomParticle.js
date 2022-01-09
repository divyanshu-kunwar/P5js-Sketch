/*
Creating a random moving particle
*/

let x = 200
let y = 200
let randomNum = 0

function setup() {
  createCanvas(400, 400);
  background(0)
}

function draw() {
  
  //set color to white
  stroke(255)
  
  point(x,y)
  
  x += random(-4,4)
  y +=  random(-5,5)
  
  
}
