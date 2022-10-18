import {Ball} from '../lib/Ball'
import { Canvas } from '../lib/Canvas'
import { Vector } from '../lib/Vector'
export class BrownianMotionDemo{
    public balls:Ball[] = []
    public canvas:Canvas
    private time:number = 0
    constructor(parent:HTMLElement){
        this.canvas = new Canvas()
        parent.append(this.canvas.dom)
        for(var i=0;i<10;i++){
            this.balls.push(new Ball(new Vector(this.canvas.width/2,this.canvas.height/2)))
        }
    }
    public animate = ()=>{
        this.canvas.clear()
        this.time+=1
        this.balls.forEach((ball:Ball)=>{
            ball.addForce(Vector.randSIgned(-5,5))
            ball.update()
            ball.bound(this.canvas, {x:false,y:false})
            ball.draw(this.canvas)
        })
        requestAnimationFrame(this.animate)
    }
    public app = ()=>{
        this.animate()
    }
}