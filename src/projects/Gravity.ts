import { Canvas } from "../lib/Canvas";
import { Vector } from "../lib/Vector";
import { Ball } from "../lib/Ball";
/**
 * ## Geocentric
 * This refers to the observed way of how gravity works, where things are attracted to
 * each other based on the distance between them and their masses.
 */
class GeoCentric {
  public canvas: Canvas;
  public balls: Ball[];
  public center: Ball;
  constructor(parent: HTMLElement) {
    this.canvas = new Canvas();
    this.canvas.setSize(window.innerWidth, window.innerWidth);
    this.center = new Ball(
      new Vector(this.canvas.width / 2, this.canvas.height / 2)
    );
    parent.append(this.canvas.dom);
    this.balls = [];
    for (var i = 0; i < 100; i++) {
      this.balls.push(Ball.random(0, this.canvas.width));
    }
  }
  private animate = () => {
    this.canvas.clear();
    for (var i = 0; i < this.balls.length; i++) {
      for (var j = 0; j < this.balls.length; j++) {
        if (i != j) {
          const nVec = new Vector(
            this.balls[j].pos.x - this.balls[i].pos.x,
            this.balls[j].pos.y - this.balls[i].pos.y
          );
          if (this.balls[i].dist(this.balls[j]) < this.canvas.width) {
            nVec.setMag(this.balls[i].mass + this.balls[j].mass);
            nVec.scalar(0.4);
            this.balls[i].addForce(nVec);
          }
        }
      }
    }
    for (var i = 0; i < this.balls.length; i++) {
      for (var j = 0; j < this.balls.length; j++) {
        if (i != j) {
          const b1 = this.balls[i];
          const b2 = this.balls[j];
          if (b1.dist(b2) < b1.size + b2.size) {
            const nVec = new Vector(b1.pos.x - b2.pos.x, b1.pos.y - b2.pos.y);
            const mVec = new Vector(b2.pos.x - b1.pos.x, b2.pos.y - b1.pos.y);
            nVec.scalar(b2.mass);
            mVec.scalar(b1.mass);
            b1.acc = nVec;
            b2.acc = mVec;
          }
        }
      }
    }
    this.balls.forEach((b: Ball) => {
      b.update();
      b.bound(this.canvas, { x: true, y: true });
      b.draw(this.canvas);
    });
    requestAnimationFrame(this.animate);
  };
  public app = () => {
    this.animate();
  };
}
/**
 * Free fall is what we observe in video games, especially 2D.
 * This is where things fall onto the ground.
 */
class FreeFall {
  private canvas: Canvas;
  private balls: Ball[];
  private gravity: Vector;
  constructor(parent: HTMLElement) {
    this.canvas = new Canvas();
    parent.append(this.canvas.dom);
    this.gravity = new Vector(0, 0.1);
    this.balls = [];
    for (var i = 0; i < 10; i++) {
      const b = Ball.random(0, this.canvas.width);
      b.addForce(this.gravity);
      this.balls.push(b);
    }
  }
  private animate = () => {
    this.canvas.clear();
    this.balls.forEach((b: Ball) => {
      b.update();
      b.bound(this.canvas, { x: true, y: false });
      b.draw(this.canvas);
    });
    requestAnimationFrame(this.animate);
  };
  public app = () => {
    this.animate();
  };
}

export class GravityDemo {
  public GeoCentric: GeoCentric;
  public FreeFall: FreeFall;
  constructor(parent: HTMLElement) {
    this.GeoCentric = new GeoCentric(parent);
  }
  public app = () => {
    this.GeoCentric.app();
  };
}
