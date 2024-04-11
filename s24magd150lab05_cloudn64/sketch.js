let dvdX = 0;
let dvdY = 0;
let dvdDx = 1;
let dvdDy = 1;
let dvdSpeed = 2.0;

let borderSize = 50;

function setup() {
  createCanvas(600, 400);
  dvdX = width / 2;
  dvdY = height / 2;
}

function worldButtonHovered(posX, posY, bWidth, bHeight) {
  if (mouseX < (posX + (bWidth / 2)) && mouseX > (posX - (bWidth / 2)) && mouseY < (posY + (bHeight / 2)) && mouseY > (posY - (bHeight / 2))) {
    return true;
  }
  return false;
}

function squareButton(x, y, bWidth, bHeight, str) {
  let returnValue = false;
  if (worldButtonHovered(x, y, bWidth, bHeight)) {
    fill(200);
    if (mouseIsPressed) {
      returnValue = true;
      fill(120);
    }
  } else {
    fill(255);
  }
  rect(x, y, bWidth, bHeight);
  fill(0);
  textSize(18);
  text(str, x, y + 6);

  return returnValue;
}

/*

  NOTE: I am aware that you can hold down the button. There is no problem with that.
  In fact, I find it extremely funny and cool. See what happens when you make the logo go really fast.

*/
function circleButton(x, y, radius, str) {
  let returnValue = false;
  if (dist(x, y, mouseX, mouseY) < (radius / 2)) {
    fill(200);
    if (mouseIsPressed) {
      returnValue = true;
      fill(120);
    }
  } else {
    fill(255);
  }

  ellipse(x, y, radius, radius);
  fill(0);
  textSize(12); // todo: would be nice if this was automated, but that's not within the scope of this assignment
  text(str, x, y + 5);

  return returnValue;
}

function draw() {
  background(120);

  // tv border
  fill(0);
  rectMode(CENTER);
  ellipseMode(CENTER);
  rect(width / 2, height / 2, width - (borderSize * 2), height - (borderSize * 2));

  // vizio
  textSize(30);
  text("VIZIO", width / 2, (height - (borderSize / 2)) + 10);

  // dvd
  fill(255);
  textSize(42);
  textAlign(CENTER);
  text("dvd", dvdX, dvdY);

  /*
    Now I'm not entirely sure that the DVD logo bouncing around totally satisfies the criteria for movement
    But I think that if that is the case, this is a sufficient alternative
  */

  dvdX += (dvdDx * dvdSpeed);
  dvdY += (dvdDy * dvdSpeed);

  if (dvdY > height - borderSize || dvdY < (borderSize + 35)) {
    dvdDy = -dvdDy;
    dvdY = constrain(dvdY, (borderSize + 35), height - (borderSize));
  }

  if (dvdX > width - (borderSize + 35) || dvdX < (borderSize + 35)) {
    dvdDx = -dvdDx;
    dvdX = constrain(dvdX, (borderSize + 35), width - (borderSize + 35));
  }

  // button
  if (squareButton(width * 0.25, height - (borderSize / 2), 70, 30, "Stop")) {
    dvdSpeed = 0;
  }

  // button2
  if (circleButton(width * 0.75, height - (borderSize / 2), 40, "Faster")) {
    dvdSpeed += 0.2;
  }
  
}
