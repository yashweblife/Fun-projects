import { Vector, Canvas } from "./";

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
    this.select = !this.select;
  }
  public checkIntersection = (vec:Vector)=>{
    const check = (this.center.dist(vec)<this.size.x/2+3)
    if(!check) return
    const check1 = (vec.x>this.pos.x)
    const check2 = (vec.x<this.pos.x + this.size.x)
    const check3 = (vec.y>this.pos.y)
    const check4 = (vec.y<this.pos.y + this.size.y)
    if(check1 && check2 && check3 && check4){
        return(true)
    }

  }
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
      fill: false,
      stroke: true,
      strokeColor: "rgba(255,0,0,0.5)",
    });
  };
}

export class Grid {
  private size: Vector = new Vector(10, 10);
  private canvas: Canvas = new Canvas();
  private cells: Cell[] = [];
  constructor(parent: HTMLElement = document.body) {
    parent.append(this.canvas.dom);
    for (
      var i = 0;
      i <= this.canvas.width;
      i += this.canvas.width / this.size.x
    ) {
      for (
        var j = 0;
        j <= this.canvas.height;
        j += this.canvas.height / this.size.y
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
  }
  private draw = () => {
    this.cells.forEach((c: Cell) => {
      c.draw(this.canvas);
    });
  };
  public animate = () => {
    this.canvas.clear();
    this.draw();
    requestAnimationFrame(this.animate);
  };
}
