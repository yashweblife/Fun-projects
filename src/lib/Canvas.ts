import { Vector } from "./Vector";
interface CircleInterface {
  pos: Vector;
  radius: number;
  fillColor?: string;
  strokeColor?: string;
  stroke?: Boolean;
  fill?: Boolean;
}
interface RectInterface {
  pos: Vector;
  size: Vector;
  fillColor?: string;
  strokeColor?: string;
  stroke?: Boolean;
  fill?: Boolean;
  angle?: number;
}
/**
 * @class
 * # Canvas
 * ### This is a library to simplify the use of HTMl canvas element
 */
export class Canvas {
  public dom: HTMLCanvasElement;
  public ctx: CanvasRenderingContext2D;
  public width: number;
  public height: number;
  constructor(
    canvas: HTMLCanvasElement = document.createElement("canvas"),
    width = 300,
    height = 300
  ) {
    this.dom = canvas;
    this.dom.width = width;
    this.dom.height = height;
    this.ctx = this.dom.getContext("2d")!;
    this.width = this.dom.width;
    this.height = this.dom.height;
  }
  public setSize = (w: number, h: number) => {
    this.dom.width = w;
    this.dom.height = h;
    this.width = w;
    this.height = h;
  };
  public circle = ({
    pos = new Vector(0, 0),
    radius = 5,
    fillColor = "red",
    strokeColor = "black",
    stroke = false,
    fill = true,
  }: CircleInterface) => {
    this.ctx.beginPath();
    this.ctx.fillStyle = fillColor;
    this.ctx.strokeStyle = strokeColor;
    this.ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2, false);
    this.ctx.closePath();
    if (fill) {
      this.ctx.fill();
    }
    if (stroke) {
      this.ctx.stroke();
    }
  };
  public rect = ({
    pos = new Vector(0, 0),
    size = new Vector(100, 100),
    fillColor = "red",
    strokeColor = "black",
    stroke = false,
    fill = true,
    angle = 0,
  }: RectInterface) => {
    this.ctx.beginPath();
    this.ctx.fillStyle = fillColor;
    this.ctx.strokeStyle = strokeColor;
    this.ctx.rect(pos.x, pos.y, size.x, size.y);
    this.ctx.closePath();
    if (fill === true) this.ctx.fill();
    if (stroke === true) this.ctx.stroke();
  };
  public line = (v1: Vector, v2: Vector) => {
    this.ctx.beginPath();
    this.ctx.moveTo(v1.x, v1.y);
    this.ctx.lineTo(v2.x, v2.y);
    this.ctx.closePath();
    this.ctx.stroke();
  };
  //public reverseRect = ({pos, size, fillColor, strokeColor, stroke, fill, angle})=>{}
  public drawPath = () => {};
  public clear = () => {
    this.ctx.clearRect(0, 0, this.width, this.height);
  };
  public fadeClear = () => {
    this.ctx.fillStyle = "rgba(255,255,255,0.01)";
    this.ctx.rect(0, 0, this.width, this.height);
    this.ctx.fill();
  };
}
