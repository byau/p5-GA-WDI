var img;
function preload(){
  img = loadImage('/images/Emoji/Smiley/Emoji_Smiley-90.png');
}
// images are treated as rectangle.

function setup() {
  createCanvas(screen.availWidth, screen.availHeight);
// background(250, 250, 100);
}

function draw() {
  background(250, 250, 100);
  image(img, mouseX, mouseY);
}
