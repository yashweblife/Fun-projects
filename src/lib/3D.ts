import { Canvas } from "./Canvas";
import { Vector } from "./Vector";
export class Face {
  private points: Vector[] = [];
  constructor(points: Vector[], center: Vector) {
    this.points = points;
  }
  public draw = (c: Canvas) => {
    c.ctx.beginPath();
    c.ctx.moveTo(this.points[0].x, this.points[0].y);
    for (var i = 1; i < this.points.length; i++) {
      c.ctx.lineTo(this.points[i].x, this.points[i].y);
    }
    c.ctx.closePath();
    c.ctx.stroke();
  };
}
export class Body {
  private points: Vector[][];
  private center: Vector;
  private rotationalPosition: Vector;
  private rotationalVelocity: Vector;
  private rotationalAcceleration: Vector;
  constructor(points: Vector[][], center: Vector) {
    this.points = points;
    this.center = center;
    this.rotationalVelocity = new Vector();
    this.rotationalPosition = new Vector();
    this.rotationalAcceleration = new Vector();
  }
  public rotateX = (angle: number) => {
    this.points.forEach((slice: Vector[]) => {
      slice.forEach((point: Vector) => {
        point.rotateAlongX(angle);
      });
    });
  };
  public addRotation = (val: Vector) => {
    this.rotationalAcceleration = val;
  };
  public rotateY = (angle: number) => {
    this.points.forEach((slice: Vector[]) => {
      slice.forEach((point: Vector) => {
        point.rotateAlongY(angle);
      });
    });
  };
  public rotateZ = (angle: number) => {
    this.points.forEach((slice: Vector[]) => {
      slice.forEach((point: Vector) => {
        point.rotateAlongZ(angle);
      });
    });
  };
  public rotate = (angle: Vector = new Vector(0, 0, 0)) => {
    this.points.forEach((slice: Vector[]) => {
      slice.forEach((point: Vector) => {
        point.rotateAlongX(angle.x);
        point.rotateAlongY(angle.y);
        point.rotateAlongZ(angle.z);
      });
    });
  };
  public project = (p:Vector,dist:number)=>{
    const d = dist;
    const r = d/p.x
    return(new Vector(r*p.z, r*p.y))
  }
  public draw = (c: Canvas, scale: number = 10, cam:Vector, dist:number) => {
    
    this.points.forEach((slice: Vector[]) => {
      c.ctx.beginPath();
      const start =this.project(Vector.VecFromAdd(slice[0], this.center),dist)
      c.ctx.moveTo(start.x+cam.x, -start.y+cam.y);
      for (let i = 1; i < slice.length; i++) {
        const point = this.project(Vector.VecFromAdd(slice[i],this.center),dist)
        c.ctx.lineTo(point.x+cam.x, -point.y+cam.y);
      }
      c.ctx.fillStyle = `rgba(${Math.floor(
        100 + (255 * slice[0].z) / slice[0].mag
      )},0,0,0.2)`;
      c.ctx.fill();
      c.ctx.closePath();
      c.ctx.stroke();
    });
  };
  public update = () => {
    this.rotationalVelocity.add(this.rotationalAcceleration);
    this.rotationalPosition.add(this.rotationalVelocity);
    this.rotate(this.rotationalPosition);
    this.rotationalAcceleration.scalar(0);
  };
}

export class World3D {
  private canvas: Canvas = new Canvas();
  private bodies: Body[] = [];
  private scale: number = 10;
  private camera: Vector = new Vector(this.canvas.width/2+200, this.canvas.height/2+200);
  private projection_distance: number = 50;
  constructor(parent: HTMLElement = document.body) {
    parent.appendChild(this.canvas.dom);
    this.canvas.setSize(700, 700);
  }
  public addSphere = (
    radius: number = 100,
    center: Vector = new Vector(50, 50, 0)
  ) => {
    const output: Vector[][] = [];
    for (let i = -radius; i <= radius; i += 1) {
      const circle: Vector[] = [];
      for (let j = -Math.PI; j <= Math.PI; j += 0.1) {
        circle.push(
          new Vector(
            i * Math.cos(j) + center.x,
            i * Math.sin(j) + center.y,
            i + center.z
          )
        );
      }
      output.push(circle);
    }
    this.bodies.push(new Body(output, center));
  };
  public makeSphere = (
    radius: number = 100,
    center: Vector = new Vector(50, 50, 0),
    res: number = 0.5
  ) => {
    const output: Vector[][] = [];
    for (let i = -radius; i <= radius; i += 1) {
      const circle: Vector[] = [];
      for (let j = -Math.PI; j <= Math.PI; j += res) {
        circle.push(
          new Vector(
            i * Math.cos(j) + center.x,
            i * Math.sin(j) + center.y,
            Math.cos(i) + Math.sin(i)
          )
        );
      }
      output.push(circle);
    }
    return new Body(output, center);
  };

  public addBody = (body: Body) => {
    this.bodies.push(body);
  };
  public update = () => {
    this.bodies.forEach((body: Body) => {
      body.update();
    });
  };
  public draw = () => {
    this.bodies.forEach((body: Body) => {
      body.draw(this.canvas, this.scale, this.camera, this.projection_distance);
    });
  };
  public animate = () => {
    this.canvas.clear();
    this.update();
    this.draw();
    requestAnimationFrame(this.animate);
  };
}
