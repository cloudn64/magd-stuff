function setup() {
  createCanvas(400, 400);
}

// to make my life easier, I made it harder
function building(x, y, width, height, shade, outline, outlineWidth) { // a building that is centered on the x axis and not centered on the y axis
  rectMode(CENTER); // you asked, we answered! It's the changed rect mode!!!!!!!! This is the changed mode you requested, right?
  strokeWeight(outlineWidth); // reasons
  stroke(outline);
  fill(shade);

  y -= outlineWidth;

  rect(x, y - (height / 2), width, height);

  windowWidth = (width / 6);
  windowHeight = (height / 7);
  windowSpace = (height / 12);

  // extremely strangely written window routine (who let me do this)
  for (i = 1; i <= 3; i++) {
    // left window
    rect(x - (width / 3.35), (y - (height + windowSpace)) + ((windowHeight + windowSpace) * i), windowWidth, windowHeight); 

    // center window
    rect(x, (y - (height + windowSpace)) + ((windowHeight + windowSpace) * i), windowWidth, windowHeight); 

    // right window
    rect(x + (width / 3.35), (y - (height + windowSpace)) + ((windowHeight + windowSpace) * i), windowWidth, windowHeight); 
  }

  // door which is genius because it's the same size as the window, those are some pretty big windows (or is it a small door...?)
  // this isn't a mistake though, I've seen a few door sized windows, especially in office spaces.

  rect(x + (windowWidth / 2), y - (windowHeight / 2), windowWidth, windowHeight);
  rect(x - (windowWidth / 2), y - (windowHeight / 2), windowWidth, windowHeight);

  doorknobScale = sqrt(width * height) * 0.015;
  strokeWeight(doorknobScale);
  point(x - (windowWidth / 4), y - (windowHeight / 2) + (doorknobScale));
  point(x + (windowWidth / 4), y - (windowHeight / 2) + (doorknobScale));

}

function lamp(x, y, height) { // why must I do this
  // light
  strokeWeight(2);
  fill(255);
  stroke(180);
  ellipse(x - 14, y - height - 2, 13, 10);

  // pole
  strokeWeight(5);
  stroke(120);
  line(x, y, x, y - height);
  line(x, y - height, x - 20, (y - height) - 10);
}

function draw() {
  background(220);

  rectMode(CORNER); // reset the rect mode because it preserves the last one and it gets changed later (wow!)

  // fun use of no stroke and many rectangles, not necessarily optimal, detail is adjustable
  noStroke(); // <----------- HERE'S THE THING
  var detail = 100;
  for (i = 0, y = 0, f = 0; i < detail; i++, y += (400 / detail), f += (255 / detail)) {
    fill(f);
    rect(0, y, 400, (400 / detail));
  }

  // the moon? It could be the sun, but I think at first glance most would assume this is the moon because of the palette
  // though the outline makes it look like the sun... it's up to observer interpretation. Open ended design! How... intentional!
  // anyway it's an ellipse
  fill(255);
  stroke(200);
  strokeWeight(10);
  ellipse(200, 100, 160, 160);

  // many many many rectangles and... 18 points

  // buildings, very far back
  building(340, 400, 160, 340, 140, 255, 1);
  building(40, 400, 180, 360, 140, 255, 1);

  // buildings, far back
  building(120, 400, 160, 320, 120, 255, 1);
  building(240, 400, 160, 300, 99, 255, 1);
  
  // buildings, behind the main layer
  building(200, 400, 120, 240, 55, 255, 1);
  building(360, 400, 120, 260, 55, 255, 1);
  building(60, 400, 120, 260, 55, 255, 1);

  // buildings, main layer
  building(280, 400, 100, 200, 0, 255, 1);
  building(120, 400, 120, 220, 0, 255, 1);

  // street lamps because I need to use lines and circles (4 lines, 2 ellipses)
  lamp(300, 400, 80);
  lamp(80, 400, 100);

}
