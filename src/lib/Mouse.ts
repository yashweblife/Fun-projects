import { PhysicsObject } from "./PhysicsObject";
import { Vector } from "./Vector";

export class Mouse extends PhysicsObject {
  public click: Boolean = false;
  public offset: Vector;
  public mass: 1;
  constructor() {
    super();
    this.pos = new Vector();
    this.offset = new Vector();
  }
  public handleMove = (e: MouseEvent) => {
    this.pos.x = e.x;
    this.pos.y = e.y;
  };
  public handleClick = (e: MouseEvent) => {
    this.click = true;
  };
  public handleDown = (e: MouseEvent) => {
    this.click = true;
  };
  public handleUp = (e: MouseEvent) => {
    this.click = false;
  };
  public move = (e: MouseEvent) => {
    this.pos.x = e.clientX - this.offset.x
    this.pos.y = e.clientY - this.offset.y
  };
  public setOffset = (val:DOMRect)=>{
    this.offset.x = val.left;
    this.offset.y = val.top;
  }
}
