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
interface BoundBox{
    top:Vector;
    right:Vector;
    bottom:Vector;
    left:Vector;
}
export class Geometry {
    private edges:Edge[]
    public vertices:Vector[]
    public bound:BoundBox;
    public center:Vector;
    constructor(vec:Vector[]){
        this.edges = []
        this.vertices = vec
        for(var i=0;i<vec.length-1;i++){
            this.edges.push(new Edge(vec[i],vec[i+1]))
        }
        var sum = new Vector()
        vec.forEach((v:Vector)=>{
            sum.add(v)
        })
        sum.scalar(1/vec.length);
        this.center = sum;
        this.edges.push(new Edge(vec[vec.length-1],vec[0]))
        this.findBound()
    }
    public findBound = ()=>{
        var top = new Vector();
        var left = new Vector();
        this.vertices.forEach((v:Vector)=>{
            if(v.y<top.y){
                top = v
            }
            if(v.x<left.x){
                left = v
            }
        })
        var bottom = top.clone();
        var right = left.clone();
        this.vertices.forEach((v:Vector)=>{
            if(v.y>bottom.y){
                bottom = v
            }
            if(v.x>right.x){
                right = v
            }
        })
        this.bound = {
            top:top,
            left:left,
            bottom:bottom,
            right:right
        }
        console.table(this.bound)
    }
    public draw = (c:Canvas)=>{
        c.fillPath(this.vertices)
        c.circle({pos:this.center,radius:10,fillColor:"green"})
    }
}
