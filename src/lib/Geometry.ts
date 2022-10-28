import {Vector} from './Vector'
import { PhysicsObject } from './PhysicsObject'
import { Canvas } from './Canvas';
class Vertex extends Vector {
    public pos:Vector;
    constructor(vec:Vector){
        super();
        this.pos = vec;
    }
}
class Edge {
    private start:Vector;
    private end:Vector;
    constructor(vec1:Vector, vec2:Vector){
        this.start = new Vertex(vec1);
        this.end = new Vertex(vec2);
    }
    public draw = (c:Canvas)=>{
        c.line(this.start, this.end)
    }
}

export class Geometry {
    private edges:Edge[]
    public vertices:Vector[]
    constructor(vec:Vector[]){
        this.edges = []
        this.vertices = vec
        for(var i=0;i<vec.length-1;i++){
            this.edges.push(new Edge(vec[i],vec[i+1]))
        }
        this.edges.push(new Edge(vec[vec.length-1],vec[0]))
    }
    public draw = (c:Canvas)=>{
        c.drawPath(this.vertices)
    }
}
