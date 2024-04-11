// I started using let instead of var, but I still like var.
let manX = 200;
let manY = 200;
let manDirection = 0.0;
let manSpeed = 2.0;
let manEscape = 0;
let manMouth = 0;
let pizzaDirection = 0.0;
let pizzaSpeed = 0.0;

function setup() {
  createCanvas(400, 400);
  pizzaDirection = QUARTER_PI / 2;
}

function draw() {
  background(0);

  // gradient background is BACK, so that I have a for loop in the project hahaha
  noStroke();
  let detail = 100;
  for (i = 0, y = 0, f = 0; i < detail; i++, y += (400 / detail), f += (255 / detail)) {
    fill(f);
    rect(0, y, 400, (400 / detail));
  }

  fill(255, 255, 255);
  text("Yellow-Man wants to eat your pizza! Move the mouse-pizza away!", 6, 20);
  text("Press a key to make him love or HATE pizza...? (why?)", 6, 40);
  text("Hold down mouse to arbitrarily rotate your pizza visibly to the end user.", 6, 60);
  text("If he gets your pizza... nothing will happen!", 6, 80);


  // draw the pizza
  fill('#FFA500');
  ellipse(mouseX, mouseY, 40, 40);
  fill('#FFD300');
  ellipse(mouseX, mouseY, 35, 35);

  // draw pepperonis
  fill('#FF0000');
  ellipse(mouseX, mouseY, 7, 7);
  // another for loop
  for (i = 0; i < TWO_PI; i += QUARTER_PI) {
    ellipse(mouseX + sin(pizzaDirection + i) * 11, mouseY + cos(pizzaDirection + i) * 11, 7, 7);
  }

  pizzaDirection += pizzaSpeed;

  let nowManMouth = (sin(manMouth) * (QUARTER_PI / 2)) + (QUARTER_PI / 2);
  manMouth += 0.3;
  // draw the man who wants to eat (pac-man)
  fill(255, 255, 0);
  // if statement ahoy
  if (manEscape == 1) {
    arc(manX, manY, 40, 40, (manDirection + PI) + nowManMouth, (manDirection + PI) - nowManMouth);
  } else {
    arc(manX, manY, 40, 40, manDirection + nowManMouth, manDirection - nowManMouth);
  }

  // control the man who wants to eat (pac-man)
  manDirection = atan2((mouseY - manY), (mouseX - manX));

  // gotta have those if statements man
  if (manEscape == 1) {
    manX += cos(manDirection) * -manSpeed;
    manY += sin(manDirection) * -manSpeed;
  } else {
    manX += cos(manDirection) * manSpeed;
    manY += sin(manDirection) * manSpeed;
  }
}

function keyPressed() {
  //manEscape ^= 1;

  // do things this way to make more if statements in the assignment lol
  if (manEscape == 0) {
    manEscape = 1;
  } else {
    manEscape = 0;
  }
}

function mousePressed() {
  pizzaSpeed = 0.12;
}

function mouseReleased() {
  pizzaSpeed = 0.0;
}