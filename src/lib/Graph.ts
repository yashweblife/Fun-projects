import { Canvas } from "./Canvas";
import { Vector } from "./Vector";
export class Graph {
  public canvas: Canvas;
  public data: any[] = [];
  public origin: Vector = new Vector(0, 0);
  public scale: number = 10;
  constructor(parent: HTMLElement) {
    this.canvas = new Canvas();
    this.setOrigin("center");
    parent.append(this.canvas.dom);
  }
  public setOrigin(val: Vector | string) {
    if (val == "center") {
      this.origin = new Vector(this.canvas.width / 2, this.canvas.height / 2);
    } else if (typeof val != "string") {
      this.origin = val;
    }
    if (this.data.length > 0) {
      this.data.forEach((v: Vector) => {
        v.add(this.origin);
      });
    }
  }
  public setScale(val: number) {
    if (val <= 2) return;
    this.scale = val;
    if (this.data.length > 0) {
      this.data.forEach((v: Vector) => {
        v.scalar(this.scale);
      });
    }
  }
  public addData = (data: Vector) => {
    var f = data.getNegative();
    var op = Vector.VecFromAdd(this.origin, data);
    op.scalar(this.scale);
    this.data.push(op);
  };
  private drawGrid = () => {
    this.canvas.line(this.origin, new Vector(this.canvas.width, this.origin.y));
    this.canvas.line(
      this.origin,
      new Vector(-this.canvas.width, this.origin.y)
    );
    this.canvas.line(
      this.origin,
      new Vector(this.origin.x, this.canvas.height)
    );
    this.canvas.line(
      this.origin,
      new Vector(this.origin.x, -this.canvas.height)
    );
    for (var i = 0; i < this.canvas.width / this.scale; i++) {
      this.canvas.line(
        new Vector(i * this.scale, 0),
        new Vector(i * this.scale, this.canvas.height),
        "rgba(0,0,0,0.1)"
      );
      this.canvas.line(
        new Vector(0, i * this.scale),
        new Vector(this.canvas.width, i * this.scale),
        "rgba(0,0,0,0.1)"
      );
    }

    for (var i = 0; i < this.data.length - 1; i++) {
      this.canvas.line(this.data[i], this.data[i + 1]);
    }
  };
  public draw = () => {
    this.drawGrid()
    this.data.forEach((d: Vector) => {
      this.canvas.circle({
        pos: d,
        radius: 1,
        fill: true,
        fillColor: "red",
      });
    });
  };
  public animate = () => {
    this.canvas.clear();
    this.draw();
    requestAnimationFrame(this.animate);
  };
}
