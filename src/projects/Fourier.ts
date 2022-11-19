import { Vector, Canvas } from "../lib";

export class FourierDemo {
  private canvas: Canvas = new Canvas();
  private data: Vector[] = [];
  private amp: number = this.canvas.height / 4;
  private freq: number = 3;
  private waveLength: number = this.canvas.width / this.freq;
  private origin: Vector = new Vector(
    this.canvas.width / 2,
    this.canvas.height / 2
  );
  private scale: number = 1;
  constructor(parent: HTMLElement = document.body) {
    parent.append(this.canvas.dom);
    this.canvas.setSize(1000, 500);
    this.setOriginToCenter();
    this.recalib();
  }
  private recalib = () => {
    this.amp = this.canvas.height / 4;
    this.waveLength = this.canvas.width / this.freq;
  };
  public setOrigin = (val: Vector) => {
    this.origin = val;
  };
  public setOriginToCenter = () => {
    this.origin = new Vector(this.canvas.width / 2, this.canvas.height / 2);
  };
  public setFrequence = (a: number) => {
    this.freq = a;
    this.recalib();
  };
  public setScale = (val:number)=>{
    this.scale = val
  }
  public plot = (func: () => number[]) => {
    if (this.data.length == 0) {
      this.data = func().map(
        (val: number, index: number) => new Vector(index, -val)
      );
    } else {
      const test: number[] = func();
      this.data = test.map(
        (val: number, index: number) =>
          new Vector(this.data[index].x, val + this.data[index].y)
      );
    }
  };
  public plotVector = (func:()=>Vector[])=>{
    this.data = func()
  }
  public plotSquare = () => {
    for (var i = -Math.PI; i < Math.PI; i += 1 / this.canvas.width) {
      var sum = 0;
      for (var j = 0; j < 20; j += 1) {
        if (j % 2 !== 0) {
          sum += FourierDemo.makeSin(this.amp / j, this.freq * j, i);
        }
      }
      this.data.push(
        new Vector(i * this.waveLength, this.canvas.height / 2 + sum)
      );
    }
  };
  public static makeSin = (a: number, f: number, theta: number = 0) => {
    return -a * Math.sin(f * theta);
  };
  public static makeCos = (a: number, f: number, theta: number = 0) => {
    return a * Math.cos(f * theta);
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
        pos: new Vector(this.origin.x + (val.x*this.scale), this.origin.y + (val.y*this.scale)),
        radius: 1,
        fill: true,
        fillColor: "red",
      });
    });
    
  };
  private animate = () => {
    this.draw();
    requestAnimationFrame(this.animate);
  };
  public app = () => {
    this.animate();
  };
}
