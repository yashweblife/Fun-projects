import { Canvas } from "./Canvas";
import { Vector } from "./Vector";
/**
 * ### Graph
 * This is the graph library
 * Name | Info
 * -------|-------
 * setOrigin | Sets the origin of the canvas
 * plot | vals:()=>number[] plots a number array on linear x axis
 * plotVector | func:()=>Vector[] plots vectors
 * 
 */
export class Graph {
  private canvas: Canvas = new Canvas();
  private data: any[] = [];
  private origin: Vector = new Vector(
    this.canvas.width / 2,
    this.canvas.height / 2
  );
  private scale: number = 1;
  constructor(parent: HTMLElement = document.body) {
    this.canvas = new Canvas();
    this.canvas.setSize(500, 500);
    parent.append(this.canvas.dom);
  }
  private recalib = () => {};
  public setScale = (num: number) => {
    this.scale = num;
  };
  public setOrigin = (val: Vector) => {
    this.origin = val;
  };
  public setOriginToCenter = () => {
    this.origin = new Vector(this.canvas.width / 2, this.canvas.height / 2);
  };
  public plot = (vals: () => number[]) => {
    this.data = vals().map((v: number, index: number) => new Vector(index, -v));
  };
  public plotVector = (func: () => Vector[]) => {
    this.data = func();
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
        new Vector(i * this.scale * 10, 0),
        new Vector(i * this.scale * 10, this.canvas.height),
        "rgba(0,0,0,0.1)"
      );
      this.canvas.line(
        new Vector(0, i * this.scale * 10),
        new Vector(this.canvas.width, i * this.scale * 10),
        "rgba(0,0,0,0.1)"
      );
    }
  };
  private draw = () => {
    this.canvas.clear();
    this.drawGrid();
    this.data.forEach((val: Vector) => {
      this.canvas.circle({
        pos: new Vector(
          this.origin.x + val.x * this.scale,
          this.origin.y + val.y * this.scale
        ),
        radius: 1,
        fill: true,
        fillColor: "red",
      });
    });
    for (var i = 0; i < this.data.length - 1; i++) {
      var val = this.data[i];
      var val1 = this.data[i + 1];
      this.canvas.line(
        new Vector(
          this.origin.x + val.x * this.scale,
          this.origin.y + val.y * this.scale
        ),
        new Vector(
          this.origin.x + val1.x * this.scale,
          this.origin.y + val1.y * this.scale
        )
      );
    }
  };
  public animate = () => {
    this.canvas.clear();
    this.drawGrid();
    this.draw();
    requestAnimationFrame(this.animate);
  };
}
