import { Ball } from "../lib/Ball";
import { Canvas } from "../lib/Canvas";
import { Vector } from "../lib/Vector";

class Agent extends Ball {
  public path: Vector[];
  public fit: number = 0;
  public personality: number = 2;
  public init = (path: Vector[] | null = null) => {
    this.path = [];
    if (path == null) {
      for (var i = 0; i < 10; i++) {
        this.path.push(Vector.randSIgned(-10, 10));
      }
    } else {
      this.path = path;
    }
  };
  public makeChild = (partner: Agent, c: Canvas): Agent => {
    const p1: Vector[] = [];
    for (var i = 0; i < this.path.length; i++) {
      if (i < this.path.length / 2) {
        p1.push(this.mutate(this.path[i]));
      } else {
        p1.push(this.mutate(partner.path[i]));
      }
    }
    const child = new Agent(new Vector(c.width / 2, c.height / 2));
    const color = Math.random() > 0.5 ? this.color : partner.color;
    const size = Math.random() > 0.5 ? this.size : partner.size;
    child.color = color;
    child.size = size;
    if (Math.random() > 0.5) child.personality = this.personality - 0.1;
    child.init(p1);
    return child;
  };
  private mutate = (v: Vector): Vector => {
    const output: Vector = Vector.VecFromAdd(
      Vector.randSIgned(0, this.personality),
      v
    );
    return output;
  };
  public updateAgent = (time: number) => {
    if (time >= this.path.length) return;
    this.addForce(this.path[time]);
  };
  public calculateFit = (target: Vector) => {
    this.fit = this.pos.dist(target);
  };
  public checkCollision = (target: Wall) => {};
}
class Wall {
  public pos: Vector;
  public size: Vector;
  constructor(pos: Vector, size: Vector) {
    this.pos = pos;
    this.size = size;
  }
  public draw = () => {};
}
export class GeneticAlgoDemo {
  public agents: Agent[] = [];
  public target: Ball;
  public canvas: Canvas;
  public clock: number = 0;
  public maxAge: number = 100;
  public populationSize: number = 100;
  constructor(parent: HTMLElement) {
    this.canvas = new Canvas();
    this.canvas.setSize(window.innerWidth, window.innerHeight);
    parent.append(this.canvas.dom);
    this.target = new Ball(
      new Vector(this.canvas.width, this.canvas.height / 2)
    );
    for (var i = 0; i < this.populationSize; i++) {
      const a = new Agent(
        new Vector(this.canvas.width / 2, this.canvas.height / 2)
      );
      a.init();
      this.agents.push(a);
    }
  }

  private findAverage = (): number => {
    var sum: number = 0;
    this.agents.forEach((agent: Agent) => {
      agent.calculateFit(this.target.pos);
      sum += agent.fit;
    });
    sum /= this.agents.length;
    return sum;
  };
  private highestFit = (): Agent => {
    var sum = 0;
    var a = null;
    this.agents.forEach((agent: Agent) => {
      if (agent.fit > sum) {
        sum = agent.fit;
        a = agent;
      }
    });
    console.log(sum);
    return a;
  };
  private selection = () => {
    const sum = this.findAverage();
    const king = this.highestFit();
    const output: Agent[] = [];
    this.agents.forEach((agent: Agent) => {
      if (agent.fit < sum) {
        output.push(agent);
      }
    });

    //console.log(output)
    return output;
  };
  private breeding = () => {
    const parents = this.selection();
    const children: Agent[] = [];
    for (var i = 0; i < this.populationSize; i++) {
      const father: Agent = parents[Math.floor(Math.random() * parents.length)];
      const mother: Agent = parents[Math.floor(Math.random() * parents.length)];
      const child = father.makeChild(mother, this.canvas);
      children.push(child);
    }
    this.agents = children;
  };
  private animate = () => {
    const step = 10;
    this.clock += 0.5;
    if (this.clock % step == 0) {
      this.agents.forEach((agent: Agent) => {
        agent.updateAgent(this.clock / step);
      });
    } else {
      this.canvas.clear();
      this.target.draw(this.canvas);
      // for(var i=0;i<this.agents.length;i++){
      //     for(var j=0;j<this.agents.length;j++){
      //         if(i!=j){
      //             const dist = this.agents[i].dist(this.agents[j])
      //             if(dist<this.agents[i].size + this.agents[j].size){
      //                 this.agents[i].repel(this.agents[j])
      //             }
      //         }
      //     }
      // }
      this.agents.forEach((agent: Agent) => {
        agent.update();
        agent.bound(this.canvas, { x: false, y: false });
        agent.draw(this.canvas);
      });
    }
    if (this.clock == 100) {
      this.clock = 0;
      this.breeding();
    }
    requestAnimationFrame(this.animate);
  };
  public app = () => {
    this.animate();
  };
}
