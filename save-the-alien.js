const speed = 5;
let x = width / 2;
let y = 100;

//Alien Spaceship

function spaceship(x, y) {
  strokeWeight(1);
  stroke(0, 255, 0);
  fill(128, 128, 128);
  ellipse(x, y, 100, 70);
  ellipse(x, y + 20, 200, 70);
  fill(0, 255, 0);
  ellipse(x, y + 20, 50, 20);
  //   quad(x - 25, y + 20, x + 25, y + 20, x + 100, y + 150, x - 100, y + 150);
  quad(x - 25, y + 20, x + 25, y + 20, x + 100, height, x - 100, height);
  strokeWeight(2);
  stroke(128, 128, 128);
  line(x - 25, y + 10, x - 40, y + 80);
  line(x - 50, y + 80, x - 30, y + 80);
  line(x + 25, y + 10, x + 40, y + 80);
  line(x + 30, y + 80, x + 50, y + 80);
}

// Alien :)
let a = 100;
let b = 200;

function alien(a, b) {
  strokeWeight(2);
  stroke(128, 128, 128);
  fill(0, 255, 0);
  ellipse(a, b, 20);
  ellipse(a - 3, b - 2, 1);
  ellipse(a + 3, b - 2, 1);
  ellipse(a, b + 5, 2, 1);
  line(a, b + 10, a, b + 30);
  line(a, b + 10, a, b + 30);
  line(a, b + 20, a + 10, b + 10);
  line(a, b + 20, a - 10, b + 10);
  line(a - 10, b + 30, a + 10, b + 30);
}

function draw() {
  if (keyIsDown(38)) {
    y = y - speed;
  } else if (keyIsDown(40)) {
    y = y + speed;
  }
  background(0, 0, 0);
  spaceship(x, y);
  alien(width / 2, height - 100);
}
