import { Canvas, Vector } from "../lib";

export class PowerRNGDemo {
  private canvas: Canvas = new Canvas();
  private circles: Vector[] = [];
  constructor(parent: HTMLElement = document.body) {
    parent.append(this.canvas.dom)
    this.canvas.setSize(255,255)
    for (var i = 0; i < 3; i++) {
      this.circles.push(Vector.rand(0, this.canvas.width));
    }
  }
  private draw = ()=>{
    var res = 2
    for(var i=0;i<this.canvas.width;i+=res){
      for(var j=0;j<this.canvas.height;j+=res){
        var color = new Vector()
        this.circles.forEach((c:Vector)=>{
          color.add(c)
        })
        color.scalar(this.circles.length)
        this.canvas.rect({
          pos:new Vector(i,j),
          size:new Vector(res,res),
          fill:true,
          fillColor:`rgb(${this.circles[0].dist(new Vector(i,j))},${this.circles[1].dist(new Vector(i,j))},${this.circles[2].dist(new Vector(i,j))})`
        })
      }
    }
  }
  private animate = () => {
    this.draw()
  };
  public app = () => {
    this.animate()
  };
}
