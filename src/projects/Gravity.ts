import {Canvas} from "../lib/Canvas"
import { Vector } from "../lib/Vector"
import {Ball} from "../lib/Ball"

class GeoCentric{}
class FreeFall{}


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
            b.bound(this.canvas,{x:true,y:false});
            b.draw(this.canvas);
        })
        requestAnimationFrame(this.animate)
    }
    public app = ()=>{
        this.animate();
    }
}