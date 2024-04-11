/*

  "Bubbles that do not want to be popped"

  (You can't pop them, not because it's too hard, but because it's too easy and it'd ruin the cool effect)
  
  PLEASE set "enableConsoleOutput" to true to view the console
  I had to put the condition because the p5.js web editor is too slow

*/

var acceleration = 0.4;
var deceleration = 0.2;
var distToSpeed = 75;
var enableConsoleOutput = false;

var totalBubbles = 200;
var bubbleXs = [];
var bubbleYs = [];
var bubbleSizes = [];
var bubbleSpeeds = [];
var bubbleDirections = [];

function setup() {
  createCanvas(600, 600);
  direction = (HALF_PI + (QUARTER_PI));

  for (var i = 0; i < totalBubbles; i++) {
    bubbleSizes[i] = random(40, 120);
    bubbleXs[i] = random(bubbleSizes[i] / 2, width - (bubbleSizes[i] / 2));
    bubbleYs[i] = random(bubbleSizes[i] / 2, height - (bubbleSizes[i] / 2));
    bubbleSpeeds[i] = 0.0;
    bubbleDirections[i] = 0.0;
  }
}

function draw() {
  background(0);
  noStroke();

  /*
      Almost every line in this program adheres to this criteria:
      "Use at least three of the functions listed in the P5 Math ReferenceLinks to an external site. under Calculation or Trigonometry"
      "Use at least four of the following math operators"

      MouseX, MouseY, Width, and Height are used P5 keywords
  */

  for (var i = 0; i < totalBubbles; i++) {
    // draw bubble
    fill(0, 255, 255, 50);
    ellipse(bubbleXs[i], bubbleYs[i], bubbleSizes[i], bubbleSizes[i]);
    fill(230, 255, 255, 50);
    ellipse(bubbleXs[i], bubbleYs[i], bubbleSizes[i] * 0.9, bubbleSizes[i] * 0.9);
    fill(255, 255, 255, 50);
    ellipse(bubbleXs[i] + (bubbleSizes[i] / 8), bubbleYs[i] - (bubbleSizes[i] / 8), bubbleSizes[i] / 3, bubbleSizes[i] / 3);

    // movement
    bubbleXs[i] += cos(bubbleDirections[i]) * bubbleSpeeds[i];
    bubbleYs[i] += sin(bubbleDirections[i]) * bubbleSpeeds[i];

    // boundaries
    bubbleXs[i] = constrain(bubbleXs[i], (bubbleSizes[i] / 2) + 1, (width - (bubbleSizes[i] / 2)) - 1);
    bubbleYs[i] = constrain(bubbleYs[i], (bubbleSizes[i] / 2) + 1, (height - (bubbleSizes[i] / 2)) - 1);

    // angle away from the mouse
    bubbleDirections[i] = -atan2((mouseY - bubbleYs[i]), -(mouseX - bubbleXs[i]));

    // speed
    //var mouseDist = (sqrt(sq(mouseX - bubbleX) + sq(mouseY - bubbleY))); // removed so that I could use one of the three functions in the assignment
    var mouseDist = dist(bubbleXs[i], bubbleYs[i], mouseX, mouseY); // 1/3
    var speedTarget = (abs(distToSpeed - constrain(mouseDist, 0, distToSpeed)));

    // accelerate/decelerate
    if (speedTarget < bubbleSpeeds[i]) { // deceleration
      bubbleSpeeds[i] = constrain(bubbleSpeeds[i] - deceleration, speedTarget, bubbleSpeeds[i]); // 2/3
    } else  { // acceleration
      bubbleSpeeds[i] = constrain(bubbleSpeeds[i] + acceleration, bubbleSpeeds[i], speedTarget);
    }
    
    if (enableConsoleOutput) {
      print("Bubble " + i + " proc:");
      print("x: " + bubbleXs[i] + "y: " + bubbleYs[i]);
      print("direction: " + bubbleDirections[i]);
      print("speed target is: " + speedTarget);
    }

  }
}
