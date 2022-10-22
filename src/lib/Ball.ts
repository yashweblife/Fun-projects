import { Vector } from "./Vector";
import { Canvas } from "./Canvas";
/**
 * ## Ball
 * The Ball class represents a physics object with various properties.
 * It has a position, vel, acc, parameter to keep track of motion.
 * It also has other parameters that affect its appearance.
 */
export class Ball {
  pos: Vector;
  vel: Vector;
  acc: Vector;
  size: number;
  color: string;
  forces: Vector[];
  mass: number;
  constructor(pos: Vector) {
    this.pos = pos;
    this.vel = new Vector();
    this.acc = new Vector();
    this.size = Math.random() * 10 + 2;
    this.mass = this.size * 0.01;
    this.color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
      Math.random() * 255
    )},${Math.floor(Math.random() * 255)})`;
    this.forces = [];
  }
  public attract = (b: Ball) => {
    var nVec = Vector.VecFromSub(this.pos, b.pos);
    nVec.scalar(0.1);
    this.addForce(nVec);
  };
  public addForce1 = (vec: Vector) => {
    vec.scalar(this.mass);
    this.forces.push(vec);
  };
  public addForce = (vec: Vector) => {
    vec.scalar(this.mass);
    this.acc.add(vec);
  };
  public update = () => {
    if (this.forces.length > 0) {
      this.forces.forEach((v: Vector) => {
        this.acc.add(v);
      });
    }
    this.vel.add(this.acc);
    this.vel.scalar(0.9);
    this.pos.add(this.vel);
    this.acc.scalar(0);
  };
  public bound = (
    c: Canvas,
    type: { x: Boolean; y: Boolean } = { x: false, y: false }
  ) => {
    if (type.x == false) {
      if (this.pos.x < this.size) {
        this.pos.x = this.size;
        this.vel.x = -this.vel.x;
      }
      if (this.pos.x > c.width - this.size) {
        this.pos.x = c.width - this.size;
        this.vel.x = -this.vel.x;
      }
    } else {
      if (this.pos.x < this.size) {
        this.pos.x = c.width - this.size;
      }
      if (this.pos.x > c.width - this.size) {
        this.pos.x = this.size;
      }
    }
    if (type.y == false) {
      if (this.pos.y < this.size) {
        this.pos.y = this.size;
        this.vel.y = -this.vel.y;
      }
      if (this.pos.y > c.height - this.size) {
        this.pos.y = c.height - this.size;
        this.vel.y = -this.vel.y;
      }
    } else {
      if (this.pos.y < this.size) {
        this.pos.y = c.height - this.size;
      }
      if (this.pos.y > c.height - this.size) {
        this.pos.y = this.size;
      }
    }
  };
  public draw = (c: Canvas) => {
    c.circle({
      pos: this.pos,
      radius: this.size,
      fillColor: this.color,
    });
  };
  public dist = (b: Ball) => {
    return this.pos.dist(b.pos);
  };
  public static random = (min: number, max: number) => {
    return new Ball(Vector.rand(min, max));
  };
  public static generate = (num: number, min: number, max: number): Ball[] => {
    const balls: Ball[] = [];
    for (var i = 0; i < num; i++) {
      balls.push(Ball.random(min, max));
    }
    return balls;
  };
}
