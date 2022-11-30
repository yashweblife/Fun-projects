import { Vector } from "./Vector";
export class PhysicsObject {
  public pos: Vector;
  public vel: Vector;
  public acc: Vector;
  public mass: number;
  public size:number;
  public addForce = (v: Vector) => {};
  public dist = (b: PhysicsObject): number => {
    return this.pos.dist(b.pos);
  };

  public attract = (b: PhysicsObject, f: number = 0.9) => {
    var nVec = Vector.VecFromSub(this.pos, b.pos);
    nVec.normalize();
    nVec.scalar(f);
    this.addForce(nVec);
  };
  public repel = (b: PhysicsObject, f: number = 0.9) => {
    var nVec = Vector.VecFromSub(b.pos, this.pos);
    nVec.normalize();
    nVec.scalar(f);
    this.addForce(nVec);
  };
  /**
   * ## Attraction Behaviour
   * Attracts the ball to another ball
   * @param b Ball to get attracted to
   */
  public attractGravo = (b: PhysicsObject) => {
    var nVec = Vector.VecFromSub(this.pos, b.pos);
    var dist = this.pos.dist(b.pos);
    var f = 0.0001;
    if (dist < this.size) {
      dist = this.size;
    }
    nVec.normalize();
    nVec.scalar((f * this.mass * b.mass) / dist);
    this.addForce(nVec);
  };
  /**
   * ## Repulsion Behaviour
   * Repels a physics object
   */
  public repelGravo = (b: PhysicsObject) => {
    var nVec = Vector.VecFromAdd(this.pos, b.pos);
    var dist = this.pos.dist(b.pos);
    var f = 0.1;
    if (dist == 0) {
      dist = this.size;
    }
    nVec.normalize();
    nVec.scalar((f * this.mass) / dist ** 2);
    this.addForce(nVec);
  };
}
