let x = 300;
let r1 = 0;
let g1 = 0;
let b1 = 0;

function setup() {
  createCanvas(600, 600);
  frameRate(30);
  let x = width / 2;
  textFont("Kode Mono");
  textStyle(BOLD);

  // the following 7 lines of code have been taken from the night sky tutorial
  for (i = 0; i < 100; i++) {
    const c = Math.floor(Math.random() * width);
    const d = Math.floor(Math.random() * height);
    const alpha = Math.random();

    starC.push(c);
    starD.push(d);
    starAlpha.push(alpha);
  }
}

let speed = 1;
let counter = 1;
let y = 100;
let buttonIsClicked = false;
let GameStatus = false;
let gameIsOver = false;
let titleSize = 0.06;
let subSize = 0.025;
let buttonSize = 0.04;

function button(e, f, g, h) {
  noFill();
  strokeWeight(4);
  stroke(0, 255, 0);
  rect(e, f, g, h);
  fill(0, 255, 0);
  textAlign(CENTER, CENTER);
  strokeWeight(0);
  textSize(width * buttonSize);
  text("Play", e + g / 2, f + h / 2);
}
// used some lines from the button tutorial

function tryagain(j, k, l, p) {
  noFill();
  strokeWeight(4);
  stroke(0, 255, 0);
  rect(j, k, l, p);
  textAlign(CENTER, CENTER);
  fill(0, 255, 0);
  strokeWeight(0);
  textSize(width * buttonSize);
  text("Retry", j + l / 2, k + p / 2);
}

function MainMenu(j, k, l, p) {
  noFill();
  strokeWeight(4);
  stroke(0, 255, 0);
  rect(j, k, l, p);
  fill(0, 255, 0);
  strokeWeight(0);
  textAlign(CENTER, CENTER);
  textSize(width * buttonSize);
  text("Main Menu", j + l / 2, k + p / 2);
}

function mousePressed() {
  if (!GameStatus) {
    if (
      mouseX > width / 2.8 &&
      mouseX < width / 2.8 + 200 &&
      mouseY > height - 300 &&
      mouseY < height - 300 + 50
    ) {
      buttonIsClicked = true;
      GameStatus = true;
      counter = 1;
      gameIsOver = false;
      speed = 1;
      y = 100;
    } else {
      buttonIsClicked = false;
      GameStatus = false;
    }
  } else {
    if (gameIsOver === true) {
      mousePressedRetry();
      mousePressedMainMenu();
    }
  }
}
// used some lines from the button tutorial

function mousePressedRetry() {
  if (
    mouseX > width / 4 &&
    mouseX < width / 4 + 90 &&
    mouseY > height / 1.8 &&
    mouseY < height / 1.8 + 60
  ) {
    if (gameIsOver) {
      buttonIsClicked = false;
      GameStatus = true;
      counter = 1;
      gameIsOver = false;
      speed = 1;
      y = 100;
    } else {
      buttonIsClicked = false;
      GameStatus = false;
    }
  }
}

function mousePressedMainMenu() {
  if (
    mouseX > width / 2 &&
    mouseX < width / 2 + 170 &&
    mouseY > height / 1.8 &&
    mouseY < height / 1.8 + 60
  ) {
    if (gameIsOver) {
      buttonIsClicked = false;
      GameStatus = false;
      counter = 1;
      gameIsOver = false;
      speed = 1;
      y = 100;
    }
  }
}

function addcounter() {
  counter = counter + 1;
}

//Alien Spaceship

function spaceship(x, y, r1, g1, b1) {
  strokeWeight(1);
  stroke(r1, g1, b1);
  fill(128, 128, 128);
  ellipse(x, y, 100, 70);
  ellipse(x, y + 20, 200, 70);
  stroke(r1, g1, b1);
  fill(r1, g1, b1);
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
function alien(a, b, m, r1, g1, b1) {
  strokeWeight(2);
  stroke(128, 128, 128);
  fill(r1, g1, b1);
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

function draw() {
  background(0);
  strokeWeight(0);
  fill(246, 241, 213);
  rect(0, height - 100, width, 100);
  strokeWeight(0);

  // the following for has been taken from the night sky tutorial
  for (let index in starC) {
    fill(255, 255, 255, starAlpha[index] * 255);
    ellipse(starC[index], starD[index], 2);
  }
  strokeWeight(0);

  fill(246, 241, 213);
  rect(0, height - 55, width, 55);
  strokeWeight(3);
  stroke(128, 128, 128);
  ellipse(0, height - 100, 150, 20);
  ellipse(150, height - 80, 70, 20);
  ellipse(60, height - 30, 100, 20);
  ellipse(width, height - 100, 100, 20);
  ellipse(width - 90, height - 75, 50, 15);
  ellipse(width - 150, height - 40, 100, 20);
  //taken from the night sky tutorial
  if (GameStatus === false) {
    gameIsOver = false;
    textAlign(CENTER, CENTER);
    fill(0, 255, 0);
    strokeWeight(0);
    textSize(width * titleSize);
    text("Capture the Alien", width / 2, height / 2.5);
    button(width / 2.8, height - 300, 200, 50);
  } else {
    GameStatus = true;
    setInterval(addcounter, 1000);
    if (counter > 0 && y < height - 140) {
      speed = speed + 0.1;
    }

    if (keyIsDown(38) && y > 100 && y < height - 140) {
      speed = 1;
      y = y - (speed + 1);
      counter = 0;
    }
    if (y < height - 140) {
      y = y + speed;
    }
    spaceship(x, y, 0, 255, 0);
    alien(width / 2, height - 100, 2, 0, 255, 0);

    if (y > height - 200) {
      alien(width / 2, height - 100, 5);
    }

    if (y >= height - 140) {
      gameIsOver = true;
    }
    //Background over the spaceship

    push();
    fill(246, 241, 213);
    strokeWeight(0);
    rect(0, height - 55, width, 200);
    pop();
    strokeWeight(3);
    fill(246, 241, 213);
    ellipse(60, height - 30, 100, 20);
    ellipse(width, height - 100, 100, 20);
    ellipse(width - 150, height - 40, 100, 20);
  }

  if (gameIsOver === true && GameStatus === true) {
    textAlign(CENTER, CENTER);
    tryagain(width / 4, height / 1.8, 90, 60);
    MainMenu(width / 2, height / 1.8, 170, 60);
    if (speed < 3) {
      fill(0, 255, 0);
      strokeWeight(0);
      textSize(width * titleSize);
      text("You saved the alien!", width / 2, height / 2.5);
      textSize(width * subSize);
      text(
        "But did it want to be saved? Maybe it ran away for a reason...",
        width / 2,
        height / 2
      );
    } else {
      fill(255, 0, 0);
      strokeWeight(0);
      textSize(width * titleSize);
      text("You've squashed the alien!", width / 2, height / 2.5);
      textSize(width * subSize);
      text(
        "Maybe it's for the best, it ran away for a reason...",
        width / 2,
        height / 2
      );
      spaceship(x, y, 255, 0, 0);
      alien(width / 2, height - 100, 2, 255, 0, 0);
    }
  }
}
