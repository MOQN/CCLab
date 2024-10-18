function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
}

function draw() {
  background("orange");
  circle(random(width), random(height), 100);
}