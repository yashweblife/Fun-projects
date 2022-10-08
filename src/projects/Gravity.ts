import {Canvas} from "../lib/Canvas"
import { Vector } from "../lib/Vector"

class Ball{
    pos:Vector;
    vel:Vector;
    acc:Vector;
    size:number;
    color:string;
    forces:Vector[];
    mass:number;
    constructor(pos:Vector){
        this.pos = pos
        this.vel = new Vector()
        this.acc = new Vector()
        this.mass = Math.random()*2
        this.size = (Math.random()*10)+2;
        this.forces = [];
    }
    public addForce = (vec:Vector)=>{
        vec.scalar(this.mass)
        this.forces.push(vec)
    }
    public update = ()=>{
        if(this.forces.length>0){
            this.forces.forEach((v:Vector)=>{
                this.acc.add(v)
            })
        }
        this.vel.add(this.acc)
        this.pos.add(this.vel)
        this.acc.scalar(0)
    }
    public bound = (c:Canvas)=>{
        if(this.pos.x<this.size){
            this.pos.x = this.size;
            this.vel.x = -this.vel.x
        }
        if(this.pos.y<this.size){
            this.pos.y = this.size;
            this.vel.y = -this.vel.y
        }
        if(this.pos.x>c.width-this.size){
            this.pos.x=c.width-this.size
            this.vel.x = -this.vel.x
        }
        if(this.pos.y>c.height-this.size){
            this.pos.y = c.height-this.size
            this.vel.y = -this.vel.y
        }
    }
    public draw = (c:Canvas)=>{
        c.circle({
            pos:this.pos,
            radius: this.size,
            fillColor: "red"
        })
    }

    public static random = (min:number,max:number)=>{
        return(new Ball(Vector.rand(min,max)))
    }
}

export class GravityDemo{
    private canvas:Canvas
    private balls:Ball[]
    private gravity:Vector
    constructor(parent:HTMLElement){
        this.canvas = new Canvas();
        parent.append(this.canvas.dom);
        this.gravity = new Vector(0,0.1)
        this.balls = [];
        for(var i = 0; i<10; i++){
            const b = Ball.random(0, this.canvas.width)
            b.addForce(this.gravity);
            this.balls.push(b)
        }
    }

    private animate = ()=>{
        this.canvas.clear()
        this.balls.forEach((b:Ball)=>{
            b.update()
            b.bound(this.canvas);
            b.draw(this.canvas);
        })
        requestAnimationFrame(this.animate)
    }
    public app = ()=>{
        this.animate();
    }
}