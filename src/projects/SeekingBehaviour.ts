import {Canvas, PhysicsObject, Vector} from "../lib"
import {Ball} from '../lib'

class Agent extends PhysicsObject{
    
}

export class SeekingBehaviourDemo{
    private food:Ball[]
    private agents:Ball[]
    private canvas:Canvas;
    constructor(parent:HTMLElement){
        this.canvas = new Canvas()
        parent.append(this.canvas.dom)
        this.food = Ball.generate(10,0,this.canvas.width)
    }

    private draw = ()=>{}
    private animate = ()=>{}
    public app = ()=>{}
}