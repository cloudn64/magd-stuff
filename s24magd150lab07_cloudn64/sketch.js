// flower class for fun flowers falling from the top of the screen, like a screensaver
class Flower {
  constructor(x, y) { // x and y technically don't need to be arguments for this specific usage, but hey it's not hurting anybody
    this.rotation = 0.0;
    this.scale = random(22.0, 32.0); // random size
    this.x = x;
    this.y = y;
    this.shade = random(220, 355); // all flowers will be the same color, but a different shade, value over 255 is white
  }

  // flower update function, rotates a flower, moves it down, and sends it back up if it hits the bottom of the world
  update() {
    this.y += this.scale / 20.0;
    this.rotation += 0.2;

    if (this.y - this.scale > height) {
      this.x = random(10, width - 10);
      this.y = -this.scale; // using "this.scale * 2.5" may be more seamless, but I don't mind
    }
  }

  // flower draw function, draws a flower.
  draw() {
    push();

    // set the base matrix
    translate(this.x, this.y);
    rotate(this.rotation);

    // pedal color
    fill(constrain(this.shade, 0, 255), 
         constrain(this.shade - 255, 0, 255), // the value outside of 255 is white. another way to do this would have been a different color mode
         constrain(this.shade, 0, 255));

    // draw the flower pedals-- since the ellipse covers both sides, only half as many are necessary
    for (var i = 0; i < 4; i++) {
      ellipse(0, 0, this.scale, this.scale * 2.5);
      rotate(45.0); // rotate the matrix
    }

    // draw the yellow center
    fill(255, 255, 0);
    ellipse(0, 0, this.scale, this.scale); // the rotation matrix does not matter because this is a circle

    pop();
  }
}

let flowers = []; // flower array
let numFlowers = 120; // separated for convenience

function setup() {
  createCanvas(400, 400);

  // create flowers
  for (var i = 0; i < numFlowers; i++) {
    flowers.push(new Flower(random(10, width - 10), random(-10, height - 10)));
  }
}

function draw() {
  background(140, 140, 200);

  noStroke();
  angleMode(DEGREES); // this is easier, I am no longer forcing myself to use radians out of respect for trigonometry class

  // update and draw flowers
  for (var i = 0; i < numFlowers; i++) {
    flowers[i].update();
    flowers[i].draw();
  }

}

