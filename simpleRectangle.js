/*
Process of creating graphics on screen involves 
creating a canvas to draw shape ,
drawing the shape by providing coordinates.
*/

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // draw rectangle from center
  rectMode(CENTER)
  rect(200,200,100,100)
}
