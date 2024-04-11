function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  var detail = 100;
  var hHeight = 120;
  var hTop = 400;

  ellipseMode(RADIUS);

    // idk what I was on when I wrote this but it uses HSB
  noStroke();
  colorMode(HSB);
  for (i = 0, y = (height - hTop), f = 0; i < detail; i++, y += ((hTop + hHeight) / detail), f += (100 / detail)) {
    fill(240, 80, f);
    arc(width / 2, y, width / 2, hHeight, PI, 0);
  }


  fill('#7F7F7F');
  // rocket head
  triangle(150, 200, 200, 100, 250, 200);
  colorMode(RGB);
  fill(205, 205, 205);
  // rocket base
  quad(150, 200, 150 - 10, 200 + 150, 250 + 10, 200 + 150, 250, 200);

  fill('#FFC700');
  // rocket foot
  triangle(140 - 20, 350 + 50, 140, 350, 140 + 20, 350);
  // rocket foot II
  triangle(260 + 20, 350 + 50, 260, 350, 260 - 20, 350);

}
