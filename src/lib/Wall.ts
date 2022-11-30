import {Vector} from './Vector'
import {PhysicsObject} from './PhysicsObject'
import { Canvas } from './Canvas'
import { Geometry } from './Geometry';
export class Wall extends PhysicsObject{
    private angle:number;
    private geometry:Geometry;
    constructor(){
        super();
        
    }
    public draw = (c:Canvas)=>{
        // c.rect({
        //     pos:this.pos,
        //     size:this.size,
        //     angle:this.angle
        // })
    }
}