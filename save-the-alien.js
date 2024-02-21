let speed = 1;
let x = width / 2;
let y = 100;
let buttonIsClicked = false;
let counter = 1;

function button(e, f, g, h) {
  noFill();
  strokeWeight(4);
  stroke(0, 255, 0);

  rect(e, f, g, h);
  fill(0, 255, 0);
  strokeWeight(0);
  textSize(20);
  text("Play", e + g / 2 - 20, f + h / 2 + 5);
}

function mousePressed() {
  if (
    mouseX > width / 3 &&
    mouseX < width / 3 + 200 &&
    mouseY > height - 225 &&
    mouseY < height - 225 + 50
  ) {
    buttonIsClicked = true;
    GameStatus = true;
  } else {
    buttonIsClicked = false;
    GameStatus = false;
  }
}

function addcounter() {
  counter = counter + 1;
}

//Alien Spaceship

function spaceship(x, y) {
  strokeWeight(1);
  stroke(0, 255, 0);
  fill(128, 128, 128);
  ellipse(x, y, 100, 70);
  ellipse(x, y + 20, 200, 70);
  fill(0, 255, 0);
  ellipse(x, y + 20, 50, 20);
  quad(x - 25, y + 20, x + 25, y + 20, x + 100, height, x - 100, height);
  strokeWeight(2);
  stroke(128, 128, 128);
  line(x - 25, y + 10, x - 40, y + 80);
  line(x - 50, y + 80, x - 30, y + 80);
  line(x + 25, y + 10, x + 40, y + 80);
  line(x + 30, y + 80, x + 50, y + 80);
}

// Alien :)
function alien(a, b, m) {
  strokeWeight(2);
  stroke(128, 128, 128);
  fill(0, 255, 0);
  ellipse(a, b, 20);
  ellipse(a - 3, b - 2, 1);
  ellipse(a + 3, b - 2, 1);
  ellipse(a, b + 5, m, m - 1);
  line(a, b + 10, a, b + 30);
  line(a, b + 10, a, b + 30);
  line(a, b + 20, a + 10, b + 10);
  line(a, b + 20, a - 10, b + 10);
  line(a - 10, b + 30, a + 10, b + 30);
}

//Background stars
let starC = [];
let starD = [];
let starAlpha = [];

for (i = 0; i < 100; i++) {
  const c = Math.floor(Math.random() * width);
  const d = Math.floor(Math.random() * height);
  const alpha = Math.random();

  starC.push(c);
  starD.push(d);
  starAlpha.push(alpha);
}

let GameStatus = false;

function draw() {
  background(0);
  strokeWeight(0);
  fill(255, 255, 255);
  rect(0, height - 100, width, 100);
  strokeWeight(0);

  for (let index in starC) {
    fill(255, 255, 255, starAlpha[index] * 255);
    ellipse(starC[index], starD[index], 2);
  }
  strokeWeight(0);

  fill(255, 255, 255);
  rect(0, height - 55, width, 55);
  strokeWeight(3);
  stroke(128, 128, 128);
  ellipse(0, height - 100, 150, 20);
  ellipse(150, height - 80, 70, 20);
  ellipse(60, height - 40, 100, 20);
  ellipse(width, height - 100, 100, 20);
  ellipse(width - 90, height - 75, 50, 15);
  ellipse(width - 150, height - 40, 100, 20);
  //taken from the night sky tutorial
  if (GameStatus === false) {
    fill(0, 255, 0);
    strokeWeight(0);
    textSize(30);
    text("Rescue the Alien", width / 3.3, height / 3, [10, 2]);
    button(width / 3, height - 225, 200, 50);
  } else {
    setInterval(addcounter, 1000);
    if (counter > 0 && y < height - 140) {
      speed = speed + 0.1;
    }

    if (keyIsDown(38) && y > 100) {
      speed = 1;
      y = y - (speed + 1);
      counter = 0;
    }
    if (y < height - 140) {
      y = y + speed;
    }
    console.log(speed * 10);
    spaceship(x, y);
    alien(width / 2, height - 100, 2, 1);

    if (y > height - 200) {
      alien(width / 2, height - 100, 5);
    }

    //Background over the spaceship

    push();
    fill(255, 255, 255);
    strokeWeight(0);
    rect(0, height - 55, width, 200);
    pop();
    fill(255, 255, 255);
    ellipse(0, height - 100, 150, 20);
    ellipse(150, height - 80, 70, 20);
    ellipse(60, height - 40, 100, 20);
    ellipse(width, height - 100, 100, 20);
    ellipse(width - 90, height - 75, 50, 15);
    ellipse(width - 150, height - 40, 100, 20);
  }
}
