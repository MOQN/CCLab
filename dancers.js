class PaceyDancer {
  constructor(startX, startY) {
    this.sX = startX;
    this.sY = startY;
    this.points = [];
    this.ang = 0;
    this.scl = random(1.2, 1.5);
    for (this.ang = 0; this.ang < PI; this.ang += radians(8)) {
      this.points.push(createVector(0, 0));
    }
    //this.amp = 50;
    this.amp = random(20, 70);
    this.direction = 1;
    this.t = 0;
    this.factor = 1;
    this.constant = 0;
    this.transX = width;
    this.v = 0.03;
  }
  update() {
    this.t += this.v * this.direction;

    if (this.ang >= PI && this.direction == 1) {
      this.direction *= -1;
      this.factor = -1;
      this.constant = PI;
    } else if (this.ang >= PI && this.direction == -1) {
      this.sX -= 2 * this.amp;
      this.direction *= -1;
      this.factor = 1;
      this.constant = 0 * PI;
    }
    if (this.sX < 0) {
      this.sX = width;
    } else if (this.sX > width) {
      this.sX = 0;
    }
  }
  display() {
    push();
    translate(this.sX, this.sY);
    scale(this.scl);
    rotate(-0.5 * PI);

    for (let i = 0; i < this.points.length; i++) {
      let pt = this.points[i];
      let ptNext = this.points[i + 1];
      stroke(255, 255, 0);
      strokeWeight(5);
      point(pt.x, pt.y);
      if (i != this.points.length - 1) {
        strokeWeight(1);
        line(pt.x, pt.y, ptNext.x, ptNext.y);
        stroke(255, 0, 255);
        line(pt.x * 0.7, pt.y * 0.7, pt.x * 1.3, pt.y * 1.3);
        line(pt.x * 0.7, pt.y * 0.7, ptNext.x * 1.3, ptNext.y * 1.3);
        stroke(255, 255, 0);
        line(pt.x * 0.6, pt.y * 0.6, pt.x * 1.4, pt.y * 1.4);
      }
      stroke(255, 0, 255);
      strokeWeight(1);
      line(pt.x * 0.7, pt.y * 0.7, pt.x * 1.3, pt.y * 1.3);
      stroke(255, 255, 0);
      strokeWeight(3);
      this.ang = this.constant + this.factor * (this.t / 10) * i;
      pt.x = sin(this.ang) * this.amp;
      pt.y = cos(this.ang) * this.amp;
    }

    if (this.direction == 1) {
      this.draweyes(sin(this.ang) * this.amp, cos(this.ang) * this.amp);
    } else if (this.direction == -1) {
      this.draweyes(sin(PI) * this.amp, cos(PI) * this.amp);
    }

    pop();
  }

  draweyes(X, Y) {
    push();
    fill(255);
    translate(X, Y);
    rotate(-0.5 * PI);
    stroke(255);
    circle(-5, 15, 12);
    circle(5, 15, 12);
    stroke(0);
    circle(-5, 15, 10);
    circle(5, 15, 10);
    circle(3, 15, 2);
    circle(-7, 15, 2);
    pop();
  }

  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}

class RickyDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.bodyColor = "Crimson";
    this.d = 0;
    this.d = 0;
    this.a = 0;
    this.r = 0;
    this.t = 2;
    this.scl = random(0.25, 0.4);
  }
  update() {
    if (this.d < 90 && this.t == 0) {
      this.d = this.d + 3;
    }
    if (this.a < 80 && this.d == 90 && this.t == 0) {
      this.a = this.a + 3;
    }
    if (this.a > 79 && this.d == 90 && this.t == 0) {
      this.t = 1;
    }
    if (this.d > 0 && this.a < 1 && this.t == 1) {
      this.d = this.d - 3;
    }
    if (this.a > 0 && this.t == 1) {
      this.a = this.a - 3;
    }
    if (this.a == 0 && this.d == 0 && this.t == 1) {
      this.t = 2;
    }
    if (this.t == 2) {
      this.r = this.r + 3;
    }
    if (this.t == 2 && this.r == 120) {
      this.t = 3;
    }
    if (this.t == 3) {
      this.r = this.r - 3;
    }
    if (this.t == 3 && this.r == 0) this.t = 0;
  }
  display() {
    push();
    angleMode(DEGREES);
    translate(this.x, this.y);

    scale(this.scl);
    this.drawhead(-25, -379 + this.d + (this.d * 10) / 3);
    this.drawarm(-215 + this.a, -300 + (this.d * 10) / 3, this.d, 0);
    this.drawarm(185 - this.a, -300 + (this.d * 10) / 3, this.d, -this.r);
    this.drawleg(-100, -20 + (this.d * 10) / 3, this.d);
    this.drawleg(60, -20 + (this.d * 10) / 3, this.d);
    this.drawbody(-225, -350 + (this.d * 10) / 3);
    this.drawwheel1(-55, -70 + (this.d * 10) / 3, this.d);
    this.drawwheel2(105, -70 + (this.d * 10) / 3, this.d);
    pop();
  }
  drawhead(x, y) {
    push();
    translate(x, y);
    fill(76, 84, 222);
    arc(50, 50, 80, 80, PI - QUARTER_PI, QUARTER_PI, OPEN);
    fill(200);
    rect(22, 45, 56, 33);
    strokeWeight(1);
    line(50, 45, 50, 78);
    strokeWeight(3);
    stroke(76, 84, 222);
    line(10, 50, 10, 0);
    line(90, 50, 90, 0);
    fill(194, 196, 81);
    stroke(0);
    strokeWeight(1);
    rect(26, 37, 20, 8);
    rect(54, 37, 20, 8);
    fill(255);
    rect(43, -1, 14, 24);

    pop();
  }
  drawbody(x, y) {
    push();
    translate(x, y);
    fill(this.bodyColor);
    rect(90, 50, 320, 150);
    rect(170, 150, 160, 130);
    fill(133, 209, 234);
    rect(125, 75, 100, 60);
    rect(275, 75, 100, 60);
    for (let i = 0; i <= 9; i++) {
      fill(176, 191, 196);
      rect(200, i * 13 + 150, 100, 13);
    }
    fill(200);
    rect(170, 280, 160, 50);

    pop();
  }

  drawwheel1(x, y, d) {
    push();
    translate(x, y);
    rotate(-d);
    fill(200);
    rect(-50, -80, 50, 80);
    fill(80);
    rect(-80 - d / 3, -80, 30 + d / 3, 50);

    pop();
  }
  drawwheel2(x, y, d) {
    push();
    translate(x, y);
    rotate(d);
    fill(200);
    rect(0, -80, 50, 80);
    fill(80);
    rect(50, -80, 30 + d / 3, 50);

    pop();
  }

  drawarm(x, y, d, r) {
    push();
    fill(this.bodyColor);
    translate(x, y);
    rotate(r);
    rect(0, 0, 80, 150);
    beginShape();
    vertex(0, 150);
    vertex(0, 300 - (d * 5) / 3);
    vertex(80, 300 - (d * 5) / 3);
    vertex(80, 150);
    endShape();

    beginShape();
    vertex(0, 300 - (d * 5) / 3);
    vertex(40 - (d * 4) / 9, 300 - (d * 7) / 9);
    vertex(40 + (d * 4) / 9, 300 - (d * 7) / 9);
    vertex(80, 300 - (d * 5) / 3);
    endShape();

    pop();
  }

  drawleg(x, y, d) {
    push();
    translate(x, y);
    fill(76, 84, 222);
    beginShape();
    vertex(0, 0);
    vertex(0 + d / 2, 300 - (d * 10) / 3);
    vertex(90 - d / 2, 300 - (d * 10) / 3);
    vertex(90, 0);
    endShape();
    pop();
  }
}

class AmberDancer {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.scl = random(0.7, 0.9);
  }
  update() {
    //
  }
  display() {
    let freq = frameCount * 0.05;
    let sinValue = map(sin(freq), -1, 1, -160, 150);

    push();
    translate(this.x, this.y + sinValue);
    scale(this.scl);

    //face
    push();
    fill(255, 0, 0);
    ellipse(0, -60, 30, 45);
    rotate(PI / 5);
    fill(255);
    strokeWeight(2);
    ellipse(-43, -45, 15, 10);
    rotate((3 * PI) / 5);
    ellipse(-43, 45, 15, 10);
    pop();

    //body
    push();
    noStroke();
    fill(255, 0, 0);
    rectMode(CENTER);
    rect(0, -7, 50, 60, 17);
    fill(0, 0, 255);
    rect(20, 3, 10, 35, 10);
    rect(-20, 3, 10, 35, 10);
    pop();

    //logo
    push();
    fill(0);
    ellipse(0, -20, 5, 5);
    ellipse(0, -12, 8, 11);
    line(0, -15, 10, -20);
    line(0, -15, -10, -20);
    line(0, -15, 10, -10);
    line(0, -15, -10, -10);
    pop();

    //legs
    push();
    noStroke();
    fill(0, 0, 255);
    rotate(PI / 10);
    let angle = sin(frameCount * 0.1) * 0.2;
    rotate(angle);
    ellipse(40, 20, 60, 15);
    pop();

    push();
    noStroke();
    fill(0, 0, 255);
    rotate(-PI / 10);
    ellipse(-40, 20, 60, 15);
    pop();

    push();
    noStroke();
    fill(0, 0, 255);
    rotate(-PI / 10);
    let angle1 = sin(frameCount * 0.1) * 0.2;
    rotate(angle1);
    ellipse(15, 60, 60, 10);
    pop();

    push();
    noStroke();
    fill(0, 0, 255);
    rotate(PI / 10);
    ellipse(-15, 60, 60, 10);
    pop();

    push();
    noStroke();
    fill(255, 0, 0);
    rotate(PI / 10);
    let angle3 = sin(frameCount * 0.1) * 0.2;
    rotate(angle3);
    ellipse(35, 60, 25, 7);
    pop();

    push();
    noStroke();
    fill(255, 0, 0);
    rotate(-PI / 10);
    ellipse(-35, 60, 25, 7);
    pop();

    //hands
    push();
    noStroke();
    fill(255, 0, 0);
    rotate(-PI / 10);
    ellipse(50, -10, 55, 10);
    fill(0, 0, 255);
    ellipse(50, -8, 55, 5);
    pop();

    push();
    noStroke();
    fill(255, 0, 0);
    let angle4 = sin(frameCount * 0.1) * 0.2;
    rotate(angle4);
    ellipse(-50, -10, 55, 10);
    pop();

    push();
    noStroke();
    fill(255, 0, 0);
    let angle5 = sin(frameCount * 0.1) * 0.2;
    rotate(angle5);
    fill(0, 0, 255);
    ellipse(-50, -8, 55, 5);
    pop();

    //cobweb
    push();
    noStroke();
    fill(255);
    ellipse(65, -height, 3, height * 2);
    pop();

    pop();
  }
}

class VickieDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.eye = 0;
    this.leg = 0;
    this.opacity = 20;
    this.opacityNumber = 1;
    this.scl = random(0.4, 0.6);
  }
  update() {
    if (frameCount % 255 == 0) {
      this.opacityNumber = -1;
    } else {
      this.opacity += this.opacityNumber;
    }
    if (this.opacity == 0) {
      this.opacityNumber = 1;
      this.opacity += this.opacityNumber;
    }
    this.x += sin(frameCount * 0.1) * 2;
  }
  display() {
    push();
    translate(this.x, this.y);

    scale(this.scl);

    noStroke();
    this.freq = frameCount * 0.3;
    this.amp = 1;
    this.sinValue = sin(this.freq) * this.amp;

    //ears
    fill(237, 166, 198);

    push();
    translate(-65, -50);
    rotate(radians(110));
    arc(0, 0, 70, 70, 0, PI + QUARTER_PI, OPEN);
    fill(240, 89, 152);
    arc(0, 0, 35, 35, 0, PI + QUARTER_PI, OPEN);
    pop();

    push();
    translate(65, -50);
    rotate(radians(210));
    arc(0, 0, 70, 70, 0, PI + QUARTER_PI, OPEN);
    fill(240, 89, 152);
    arc(0, 0, 35, 35, 0, PI + QUARTER_PI, OPEN);
    pop();

    //head
    ellipse(0, 0, 180, 150);

    //body
    this.leg = this.sinValue * 3;
    push();
    translate(0, 90);
    ellipse(0, 0, 60, 70);
    ellipse(20, 20 + this.leg, 20 + this.leg, 50);
    ellipse(-20, 20 - this.leg, 20 + this.leg, 50);
    pop();

    push();
    translate(0, 90);
    fill(240, 89, 152);
    ellipse(0, 0, 30, 35);
    pop();

    push();
    translate(0, 90);
    rotate(map(sin(frameCount * 0.1), -1, 1, -0.25, 0.25));
    ellipse(-40, -10, 50, 20);
    ellipse(40, -10, 50, 20);
    pop();

    //blush
    fill(240, 89, 152, this.opacity);
    ellipse(-50, 10, 40, 20);
    ellipse(50, 10, 40, 20);

    //nose
    fill(0);
    ellipse(0, 0, 20, 10);

    //eyes
    circle(-50, -10, 30);
    circle(50, -10, 30);

    //eye sparkles
    this.eye = -15 + this.sinValue;
    fill(255);
    circle(45, -10, 15);
    circle(-55, -10, 15);
    circle(55, this.eye, 8);
    circle(-45, this.eye, 8);

    //mouth
    noFill();
    stroke(0);
    strokeWeight(5);
    arc(0, 10, 10, 10, 2 * PI, PI);

    //hat
    fill(36, 191, 60);
    stroke(36, 191, 60);
    strokeWeight(5);
    line(0, -110, 0, -75);

    push();
    fill(25, 138, 42);
    stroke(25, 138, 42);
    translate(-25, -110);
    rotate(sin(frameCount * 0.1));
    ellipse(0, 0, 60, 20);
    pop();

    push();
    translate(0, -110);
    rotate(sin(frameCount * 0.1));
    ellipse(0, 0, 50, 20);
    pop();

    pop();
  }
}