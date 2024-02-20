background(0, 0, 0);

//Alien Spaceship

let x = 150;
let y = 50;
strokeWeight(1);
stroke(0, 255, 0);
fill(128, 128, 128);
ellipse(x, y, 100, 70);
ellipse(x, y + 20, 200, 70);
fill(0, 255, 0);
ellipse(x, y + 20, 50, 20);
quad(x - 25, y + 20, x + 25, y + 20, x + 100, y + 150, x - 100, y + 150);
