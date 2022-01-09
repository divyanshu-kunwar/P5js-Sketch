let greet = "Welcome to P5JS"
let textLength = 0

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0)
  fill(255,0,0)
  
  textSize(20)
  text(greet.slice(0,textLength) , 80 , height/2)
  textLength += 0.06
  
  if(textLength > greet.length+1){
    textLength = 0
  }

  
  
}
