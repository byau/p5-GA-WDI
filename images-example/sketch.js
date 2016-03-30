var x = 100;
var y = 100;
var xsteps=1;
var ysteps=1;
var img;
function preload(){
  img = loadImage('/images/Emoji/Smiley/Emoji_Smiley-90.png');
}
// images are treated as rectangle.

function setup() {
  createCanvas(screen.availWidth, screen.availHeight);
}

function draw() {
  background(250, 250, 100);
  image(img, x, y);
  x += xsteps;
  y += ysteps;
  if(x > windowWidth - img.width){
    xsteps = -1;
  }
  if(x < 0){
    xsteps = +1;
  }
  if(y > windowHeight - img.height){
    ysteps = -1;
  }
  if(y < 0){
    ysteps = +1;
  }
}

// function mousePressed() {
//   noLoop();
// }
