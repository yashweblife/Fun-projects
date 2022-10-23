import {Ball}from "../lib/Ball"
import { Canvas } from "../lib/Canvas";
import { Vector } from "../lib/Vector";
import {Mouse} from "../lib/Mouse";

var mouse = new Mouse();
window.addEventListener('mousemove',mouse.move)
class Rope{
    public links:Ball[] = []
    public linkSize:number = 1;
    private wind:Vector = new Vector(0.2,0);
    private gravity:Vector = new Vector(0,0.8);
    constructor(canvas:Canvas){
        for(var i=0;i<50;i++){
            this.links.push(new Ball(new Vector(canvas.width/2,canvas.height/2)));
            this.links[i].size= 5
        }
    }
    public update = (canvas:Canvas)=>{
        //  this.links[0].pos.x = canvas.width/2
        //  this.links[0].pos.y = canvas.height/2
        for(var i =0;i<this.links.length;i++){
            if(i!=this.links.length-1){
                if(this.links[i].pos.dist(this.links[i+1].pos)>this.linkSize+10){
                    this.links[i+1].attract(this.links[i],20)
                }else if(this.links[i].pos.dist(this.links[i+1].pos)<this.linkSize-10){
                    this.links[i+1].repel(this.links[i],5)
                }else{
                    this.links[i+1].acc.scalar(0)
                    this.links[i+1].vel.scalar(0)
                }
            }
            this.links[i].addForce(this.gravity)
            //this.links[i].addForce(this.wind)
            
        }
        this.attract(mouse)

        for(var i =0;i<this.links.length-1;i++){
            canvas.line(this.links[i].pos, this.links[i+1].pos)
        }
        
        this.links.forEach((ball:Ball)=>{
            ball.update()
            ball.bound(canvas,{x:false,y:false  })
            //ball.draw(canvas)
        })
    }
    public attract = (mouse:Mouse)=>{
        const b = this.links[0]
        b.attract(mouse,2)
    }
}
export class RopeDemo{
    public canvas:Canvas = new Canvas();
    public rope:Rope = new Rope(this.canvas);
    constructor(parent:HTMLElement){
        this.canvas.setSize(500,500)
        parent.append(this.canvas.dom)
    }
    private animate = ()=>{
        this.canvas.clear()
        this.rope.update(this.canvas)
        requestAnimationFrame(this.animate);
    }
    public app = ()=>{
        this.animate()
    }
}