function setup() {
  // put setup code here
  createCanvas(400, 400);
}


function draw() {
  // put drawing code here
  colorMode(RGB, 255, 255, 255, 1);
  background(220);

  for (let index = 0; index < 20; index++) {
    let c = circle(random(1, 400), random(1, 400), random(5, 100));
    c.fill(random(0, 255), random(0, 255) , random(0, 255), 0.5)
    c
  }
  noLoop();

}