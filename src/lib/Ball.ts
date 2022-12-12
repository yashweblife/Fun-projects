import { Canvas } from "./Canvas";
import { PhysicsObject } from "./PhysicsObject";
import { Vector } from "./Vector";
/**
 * ## Ball
 * The Ball class represents a physics object with various properties.
 * It has a position, vel, acc, parameter to keep track of motion.
 * It also has other parameters that affect its appearance.
 */
export class Ball extends PhysicsObject {
  //size: number;
  color: string;
  forces: Vector[];
  //mass: number;
  foe: number;
  /**
   * Create a new ball object by passing a position.
   * @param pos
   */
  constructor(pos: Vector) {
    super();
    this.pos = pos;
    this.vel = new Vector();
    this.acc = new Vector();
    this.size = Math.random() * 10 + 2;
    this.mass = this.size * 100;
    this.foe = this.size*10
    this.color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
      Math.random() * 255
    )},${Math.floor(Math.random() * 255)})`;
    this.forces = [];
  }


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
    //vec.scalar(this.mass);
    this.acc.add(vec);
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
    //this.drawVel(c);
  };
  public drawVel = (c: Canvas) => {
    const vel: Vector = Vector.VecFromAdd(this.pos, this.vel);
    vel.scalar(1.1);
    c.line(this.pos, vel);
  };
  public drawExposureBubble = ()=>{}

  public setColor = (val:string)=>{
    this.color = val
  }
  public setSize = (val:number)=>{
    this.size = val
  }
  /**
   * ## Find distance between 2 ball
   * @param b Ball s
   * @returns number(distance)
   */
  
  /**
   * Returns a ball with random position
   * @param min
   * @param max
   * @returns
   */
  public static random = (min: number, max: number): Ball => {
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
