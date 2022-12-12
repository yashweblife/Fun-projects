import { Canvas } from "./Canvas";
import { Vector } from "./Vector";
class Vertex extends Vector {
  public pos: Vector;
  constructor(vec: Vector) {
    super();
    this.pos = vec;
  }
}
class Edge {
  private start: Vector;
  private end: Vector;
  constructor(vec1: Vector, vec2: Vector) {
    this.start = new Vertex(vec1);
    this.end = new Vertex(vec2);
  }
  public draw = (c: Canvas) => {
    c.line(this.start, this.end);
  };
}
interface BoundBox {
  top: Vector;
  right: Vector;
  bottom: Vector;
  left: Vector;
}
export class Geometry {
  private edges: Edge[];
  public vertices: Vector[];
  public bound: BoundBox;
  public center: Vector;
  constructor(vec: Vector[]) {
    this.edges = [];
    this.vertices = vec;
    for (var i = 0; i < vec.length - 1; i++) {
      this.edges.push(new Edge(vec[i], vec[i + 1]));
    }
    var sum = new Vector();
    vec.forEach((v: Vector) => {
      sum.add(v);
    });
    sum.scalar(1 / vec.length);
    this.center = sum;
    this.edges.push(new Edge(vec[vec.length - 1], vec[0]));
    this.findBound();
  }
  public findBound = () => {
    var top = new Vector();
    var left = new Vector();
    this.vertices.forEach((v: Vector) => {
      if (v.y < top.y) {
        top = v;
      }
      if (v.x < left.x) {
        left = v;
      }
    });
    var bottom = top.clone();
    var right = left.clone();
    this.vertices.forEach((v: Vector) => {
      if (v.y > bottom.y) {
        bottom = v;
      }
      if (v.x > right.x) {
        right = v;
      }
    });
    this.bound = {
      top: top,
      left: left,
      bottom: bottom,
      right: right,
    };
    console.table(this.bound);
  };
  public draw = (c: Canvas) => {
    c.fillPath(this.vertices);
    c.circle({ pos: this.center, radius: 10, fillColor: "green" });
  };
}
export class Body{
    path:Vector[] = []
    center:Vector = new Vector()
    private scale:number = 1;
    constructor(path:Vector[],center:Vector){
        this.path = path;
        this.center = center
    }
    public setScale = (val:number)=>{
        this.scale = val;
    }
    public rotateX = (r:number)=>{
        const newPath:Vector[] = []
        this.path.forEach((point:Vector)=>{
            const rx = new Vector(
                point.x, point.y*Math.cos(r)-point.z*Math.sin(r),point.y*Math.sin(r) + point.z*Math.cos(r)
            )
            newPath.push(rx)
        })
        this.path = newPath
    }
    public draw = (c:Canvas)=>{
        const path:Vector[] = [];
        this.path.forEach((p:Vector)=>{
            const val = new Vector(p.x, p.y)
            val.scalar(this.scale)
            val.add(this.center)
            path.push(val)
        })
        c.fillPath(path,"red")
    }
}
export class World {
  private scale: number = 1;
  private bodies: Body[] = [];
  private canvas: Canvas = new Canvas();
  constructor() {
    document.body.append(this.canvas.dom);
  }
  public addBody = (r: number = 10, center:Vector) => {
    const t:Vector[] = []
    for (let i = -Math.PI; i < Math.PI; i+=0.1) {
      t.push(new Vector(r * Math.cos(i), r * Math.sin(i)));
    }
    this.bodies.push(new Body(t,center))
  };
  public rotate = (val:number)=>{
    this.bodies.forEach((b:Body)=>{
        b.rotateX(val)
    })
  }
  public draw = () => {
    this.bodies.forEach((b:Body)=>{
        b.setScale(this.scale)
        b.draw(this.canvas)
    })
  };
  
}
