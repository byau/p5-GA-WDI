var x;
x = random(80,100);  // min,max
var r;
var g;
var b;
var a;

function setup() {
  createCanvas(screen.availWidth, screen.availHeight);
  background(250, 250, 100);
}

function draw() {
  if (mouseIsPressed) {
      fill(0);
    } else {
      fill(255);
    }
  ellipse(mouseX, mouseY, 80, 80); //center at mouse

}

// function mousePressed() {
//   background(0);
// }
//loop();
//noloop();
