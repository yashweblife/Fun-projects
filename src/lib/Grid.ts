import { Vector, Canvas } from "./";
import { Mouse } from "./Mouse";

class Cell {
  private pos: Vector;
  private size: Vector;
  private center: Vector;
  private select: boolean;
  constructor(pos: Vector, size: Vector) {
    this.pos = pos;
    this.size = size;
    this.center = Vector.VecFromSub(Vector.VecFromSub(pos, size), pos);
    this.center.scalar(1 / 2);
  }
  public setSelect = () => {
    this.select = true;
  };
  public unsetSelect = () => {
    this.select = false;
  };
  public checkIntersection = (vec: Vector) => {
    const checkDistance = this.center.dist(vec) <= this.size.x * 2;
    if (!checkDistance) return;
    const checkLeft = vec.x > this.pos.x;
    const checkRight = vec.x < this.pos.x + this.size.x;
    const checkTop = vec.y > this.pos.y;
    const checkBottom = vec.y < this.pos.y + this.size.y;
    if (checkLeft && checkRight && checkTop && checkBottom) {
      return true;
    }
  };
  public draw = (c: Canvas) => {
    c.rect({
      pos: this.pos,
      size: this.size,
      stroke: true,
      fill: false,
      strokeColor: "rgb(100,100,100)",
    });
    c.circle({
      pos: this.center,
      radius: this.size.x / 4,
      fill: this.select,
      stroke: true,
      strokeColor: this.select ? "rgba(0,255,0,1)" : "rgb(255,0,0)",
    });
  };
}

export class Grid {
  private size: Vector = new Vector(5, 5);
  private canvas: Canvas = new Canvas();
  private cells: Cell[] = [];
  private mouse: Mouse = new Mouse();
  constructor(parent: HTMLElement = document.body) {
    parent.append(this.canvas.dom);
    for (
      var i = 0;
      i <= this.canvas.height;
      i += this.canvas.height / this.size.y
    ) {
      for (
        var j = 0;
        j <= this.canvas.width;
        j += this.canvas.width / this.size.x
      ) {
        this.cells.push(
          new Cell(
            new Vector(i, j),
            new Vector(
              this.canvas.width / this.size.x,
              this.canvas.height / this.size.y
            )
          )
        );
      }
    }
    this.mouse.setOffset(this.canvas.dom.getBoundingClientRect());
    this.canvas.dom.addEventListener("mousemove", (e: MouseEvent) => {
      this.mouse.move(e);
    });
  }
  private draw = () => {
    this.canvas.clear();
    this.canvas.circle({
      pos: this.mouse.pos,
      radius: 10,
      fillColor: "red",
      fill: true,
    });
    this.cells.forEach((cell: Cell) => {
      cell.checkIntersection(this.mouse.pos)
        ? cell.setSelect()
        : cell.unsetSelect();
    });
    this.cells.forEach((c: Cell) => {
      c.draw(this.canvas);
    });
  };
  public animate = () => {
    this.draw();
    requestAnimationFrame(this.animate);
  };
}
