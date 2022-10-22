import {Ball}from "../lib/Ball"
import { Canvas } from "../lib/Canvas";
import { Vector } from "../lib/Vector";
class Rope{
    public links:Ball[] = []
    public linkSize:number = 100;
    constructor(canvas:Canvas){
        for(var i=0;i<5;i++){
            //this.links.push(new Ball(new Vector(canvas.width/2,canvas.height/2)));
            this.links.push(Ball.random(0, canvas.width));
        }
        this.links[0].color = "red"
        this.links[0].size= 10
    }
    public update = (canvas:Canvas)=>{
        // this.links[0].pos.x = canvas.width/2
        // this.links[0].pos.y = canvas.height/2
        for(var i =0;i<this.links.length;i++){
            for(var j=0;j<this.links.length;j++){
                if(i!=j){
                    var nVec = Vector.VecFromSub(this.links[i].pos, this.links[j].pos)
                    nVec.normalize();
                    nVec.scalar(1)
                    this.links[i].acc = nVec
                }
            }
        }
        this.links.forEach((ball:Ball)=>{
            ball.update()
            ball.bound(canvas,{x:false,y:false  })
            ball.draw(canvas)
        })
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