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
  /**
   * Create a new ball object by passing a position.
   * @param pos 
   */
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
  /**
   * ## Attraction Behaviour
   * Attracts the ball to another ball
   * @param b Ball to get attracted to
   */
  public attract = (b: Ball) => {
    var nVec = Vector.VecFromSub(this.pos, b.pos);
    nVec.scalar(0.1);
    this.addForce(nVec);
  };
  /**
   * Add a force to the list of forces acting on the ball
   * @param vec Vector
   */
  public addForce1 = (vec: Vector) => {
    vec.scalar(this.mass);
    this.forces.push(vec);
  };
  /**
   * Add a force directly to the balls current acceleration state
   * @param vec Vector
   */
  public addForce = (vec: Vector) => {
    vec.scalar(this.mass);
    this.acc = vec;
  };
  /**
   * ## General physics stuff
   * TODO: Make it time dependant
   */
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
  /**
   * ## Bounding box
   * Create a bounding box for the ball and define its behaviour
   */
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
  /**
   * Draw the ball
   * @param c Canvas
   */
  public draw = (c: Canvas) => {
    c.circle({
      pos: this.pos,
      radius: this.size,
      fillColor: this.color,
    });
  };
  /**
   * ## Find distance between 2 ball
   * @param b Ball s
   * @returns number(distance)
   */
  public dist = (b: Ball):number => {
    return this.pos.dist(b.pos);
  };
  /**
   * Returns a ball with random position
   * @param min 
   * @param max 
   * @returns 
   */
  public static random = (min: number, max: number):Ball => {
    return new Ball(Vector.rand(min, max));
  };
  /**
   * Generates a list of random balls
   * @param num 
   * @param min 
   * @param max 
   * @returns 
   */
  public static generate = (num: number, min: number, max: number): Ball[] => {
    const balls: Ball[] = [];
    for (var i = 0; i < num; i++) {
      balls.push(Ball.random(min, max));
    }
    return balls;
  };
}
