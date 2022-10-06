import { Vector } from "../lib/Vector.js";
import { Bound } from "./Bound.js"
export class Body{
    verties;
    bounds;
    pos;
    vel;
    color="red"
    constructor(v){
        this.pos=new Vector(0,0)
        this.verties = v;
        this.bounds = new Bound(v)
    }
    move = ()=>{

    }
    draw = (c)=>{
        c.beginPath();
        c.fillStyle = this.color;
        c.moveTo(this.verties[0].x + this.pos.x, this.verties[0].y + this.pos.y)
        for(var i=0;i<this.verties.length;i++){
            var v1 = this.verties[i]
            c.lineTo(v1.pos.x+this.pos.x, v1.pos.y + this.pos.y);
        }
        c.closePath();
        c.stroke();
        c.fill();
    }
    update = ()=>{}
}