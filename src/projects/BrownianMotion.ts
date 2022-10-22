import {Ball} from '../lib/Ball'
import { Canvas } from '../lib/Canvas'
import { Vector } from '../lib/Vector'
/**
 * ## Brownian Motion 
 * This is a phenonemon that can be observerd on the microscopic scale.
 * It is where larger particels seem to follow a random motion when suspended in a fluid.
 * This happens when tinier particles with higher kinetic energy collide with larger particles.
 * The effect can be simulated by applying random forces to the Ball object.
 * @functions app()
 */
export class BrownianMotionDemo{
    public balls:Ball[] = []
    public canvas:Canvas
    private time:number = 0
    /**
     * 
     * @param parent A parent for the canvas object
     */
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
    /**
     * Call the app function to get the animation running
     */
    public app = ()=>{
        this.animate()
    }
}